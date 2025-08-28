import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { 
  Search, 
  Star, 
  Eye, 
  Download, 
  Trash2, 
  FileText,
  Calendar,
  Filter
} from 'lucide-react'

const HistoryPage = () => {
  const { documents, toggleFavorite, deleteDocument } = useApp()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBy, setFilterBy] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const filteredDocuments = documents
    .filter(doc => {
      const matchesSearch = doc.fileName.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filterBy === 'all' || 
        (filterBy === 'favorites' && doc.favorite) ||
        (filterBy === 'recent' && new Date() - new Date(doc.uploadDate) < 7 * 24 * 60 * 60 * 1000)
      return matchesSearch && matchesFilter
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.fileName.localeCompare(b.fileName)
        case 'size':
          return b.fileSize - a.fileSize
        case 'date':
        default:
          return new Date(b.uploadDate) - new Date(a.uploadDate)
      }
    })

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const downloadDocument = (document) => {
    const reportData = {
      document: document.fileName,
      analysis: document.analysis,
      generated: new Date().toISOString()
    }
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${document.fileName}_analysis.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="page">
      <div className="container">
        <div style={{marginBottom: '40px'}}>
          <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px'}}>
            Document History
          </h1>
          <p style={{fontSize: '1.1rem', color: '#6b7280'}}>
            View and manage your analyzed documents
          </p>
        </div>

        <div className="search-filters">
          <div className="search-box">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Filter size={16} style={{color: '#9ca3af'}} />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Documents</option>
              <option value="favorites">Favorites</option>
              <option value="recent">Recent (7 days)</option>
            </select>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
            <option value="size">Sort by Size</option>
          </select>
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="empty-state">
            <FileText className="empty-icon" size={64} />
            <h3 className="empty-title">
              {documents.length === 0 ? 'No documents yet' : 'No documents match your search'}
            </h3>
            <p className="empty-description">
              {documents.length === 0 
                ? 'Upload your first legal document to get started'
                : 'Try adjusting your search or filter criteria'
              }
            </p>
            {documents.length === 0 && (
              <Link to="/upload" className="btn btn-primary">
                Upload Document
              </Link>
            )}
          </div>
        ) : (
          <div className="document-grid">
            {filteredDocuments.map(document => (
              <div key={document.id} className="document-card">
                <div className="document-header">
                  <div style={{flex: 1}}>
                    <h3 className="document-title">{document.fileName}</h3>
                    <div className="document-meta">
                      <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px'}}>
                        <Calendar size={12} />
                        {new Date(document.uploadDate).toLocaleDateString()}
                      </div>
                      <div>{formatFileSize(document.fileSize)}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(document.id)}
                    className="favorite-btn"
                  >
                    {document.favorite ? '⭐' : '☆'}
                  </button>
                </div>

                <div className="document-actions">
                  <div className="action-buttons">
                    <Link
                      to={`/results/${document.id}`}
                      className="action-btn view"
                    >
                      <Eye size={14} />
                      <span>View</span>
                    </Link>
                    <button
                      onClick={() => downloadDocument(document)}
                      className="action-btn download"
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </button>
                  </div>
                  <button
                    onClick={() => deleteDocument(document.id)}
                    className="action-btn delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HistoryPage