import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, FileText, X } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { generateMockAnalysis } from '../utils/mockData'

const UploadPage = () => {
  const [file, setFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)
  const navigate = useNavigate()
  const { addDocument } = useApp()

  const handleFileChange = (selectedFile) => {
    if (selectedFile && (selectedFile.type === 'application/pdf' || 
        selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        selectedFile.type === 'text/plain' ||
        selectedFile.name.toLowerCase().endsWith('.txt'))) {
      setFile(selectedFile)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    handleFileChange(droppedFile)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)

    setTimeout(() => {
      const analysis = generateMockAnalysis(file.name, "")
      const docId = addDocument({
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        analysis
      })
      
      setIsUploading(false)
      navigate(`/results/${docId}`)
    }, 3000)
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="page">
      <div className="container">
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px'}}>
              Upload Your Legal Document
            </h1>
            <p style={{fontSize: '1.1rem', color: '#6b7280'}}>
              Upload a PDF, DOCX, or TXT file to get AI-powered legal analysis
            </p>
          </div>

          {isUploading ? (
            <div className="card processing-animation">
              <div className="processing-icon">🤖</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '10px'}}>
                AI is analyzing your document...
              </h3>
              <p style={{color: '#6b7280', marginBottom: '30px'}}>
                This may take a few moments
              </p>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>
          ) : (
            <div className="card">
              <div
                className={`upload-area ${dragOver ? 'dragover' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="upload-icon" size={64} />
                <h3 className="upload-title">Drag & drop your file here</h3>
                <p className="upload-subtitle">or click to browse files</p>
                <p style={{fontSize: '0.9rem', color: '#9ca3af'}}>
                  Supports PDF, DOCX, TXT files up to 10MB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.txt"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  style={{display: 'none'}}
                />
              </div>

              {file && (
                <div className="file-preview">
                  <FileText className="file-icon" size={32} />
                  <div className="file-info">
                    <div className="file-name">{file.name}</div>
                    <div className="file-details">
                      {formatFileSize(file.size)} • {file.type || 'Text file'}
                    </div>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="file-remove"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {file && (
                <div style={{marginTop: '30px'}}>
                  <button
                    onClick={handleUpload}
                    className="btn btn-primary"
                    style={{width: '100%', fontSize: '1.1rem'}}
                  >
                    🤖 Analyze Document
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UploadPage