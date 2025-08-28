import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { 
  Download, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  Clock,
  User,
  Users,
  Search
} from 'lucide-react'

const ResultsPage = () => {
  const { id } = useParams()
  const { getDocument } = useApp()
  const [activeTab, setActiveTab] = useState('summary')
  const document = getDocument(id)

  if (!document) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty-state">
            <Search className="empty-icon" size={64} />
            <h1 className="empty-title">Document Not Found</h1>
            <p className="empty-description">
              The document you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/upload" className="btn btn-primary">
              Upload a New Document
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const { analysis } = document

  const tabs = [
    { id: 'summary', label: 'Summary', icon: FileText },
    { id: 'risks', label: 'Risks & Obligations', icon: AlertTriangle },
    { id: 'benefits', label: 'Rights & Benefits', icon: CheckCircle },
    { id: 'confidence', label: 'AI Confidence', icon: BarChart3 }
  ]

  const downloadReport = () => {
    const reportData = {
      document: document.fileName,
      analysis: analysis,
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'summary':
        return (
          <div>
            <div className="alert alert-info">
              <div className="alert-title">
                <FileText size={20} />
                Document Summary
              </div>
              <p>{analysis.summary}</p>
            </div>
            
            <div className="card">
              <h3 style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
                <Clock size={20} />
                Key Dates & Timeline
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {analysis.keyDates.map((date, index) => (
                  <div key={index} style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '15px',
                    background: '#f9fafb',
                    borderRadius: '8px'
                  }}>
                    <span style={{fontWeight: '600'}}>{date.event}</span>
                    <span style={{color: '#6b7280'}}>{date.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'risks':
        return (
          <div>
            <div className="alert alert-danger">
              <div className="alert-title">
                <AlertTriangle size={20} />
                Identified Risks
              </div>
              <p>Review these potential risks and obligations carefully.</p>
            </div>
            
            <ul className="risk-list">
              {analysis.risks.map((risk, index) => (
                <li key={index} className="risk-item">
                  <div className="item-content">{risk.text}</div>
                  <div className="item-meta">
                    <span>{risk.clause}</span>
                    <span className={`severity-badge severity-${risk.severity}`}>
                      {risk.severity.toUpperCase()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="card">
              <h3 style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
                <Users size={20} />
                Your Obligations
              </h3>
              <ul className="obligation-list">
                {analysis.obligations.map((obligation, index) => (
                  <li key={index} className="obligation-item">
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '15px'}}>
                      <div style={{flexShrink: 0}}>
                        {obligation.party === 'You' ? (
                          <User size={20} style={{color: '#4f46e5'}} />
                        ) : (
                          <Users size={20} style={{color: '#059669'}} />
                        )}
                      </div>
                      <div style={{flex: 1}}>
                        <div className="item-content">
                          <strong>{obligation.party}:</strong> {obligation.obligation}
                        </div>
                        <div className="item-meta">
                          <span>Deadline: {obligation.deadline}</span>
                          <span className={`status-badge status-${obligation.status}`}>
                            {obligation.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'benefits':
        return (
          <div>
            <div className="alert alert-success">
              <div className="alert-title">
                <CheckCircle size={20} />
                Your Rights & Benefits
              </div>
              <p>These are the positive aspects and protections in your document.</p>
            </div>
            
            <ul className="benefit-list">
              {analysis.benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <div className="item-content">{benefit.text}</div>
                  <div className="item-meta">
                    <span>{benefit.clause}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )

      case 'confidence':
        return (
          <div>
            <div className="card confidence-score">
              <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px'}}>
                <BarChart3 size={24} />
                AI Confidence Score
              </h3>
              <div className="confidence-number">{analysis.confidence}%</div>
              <div className="confidence-bar">
                <div 
                  className="confidence-fill"
                  style={{ width: `${analysis.confidence}%` }}
                ></div>
              </div>
              <p style={{color: '#6b7280', marginTop: '15px'}}>
                Overall confidence in the analysis results
              </p>
            </div>
            
            <div className="alert alert-warning">
              <div className="alert-title">
                <AlertTriangle size={20} />
                Areas Requiring Professional Review
              </div>
              <ul style={{marginTop: '15px', listStyle: 'none'}}>
                {analysis.uncertainAreas.map((area, index) => (
                  <li key={index} style={{marginBottom: '10px'}}>
                    <span style={{color: '#d97706', marginRight: '8px'}}>•</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="alert alert-info">
              <p>
                <strong>💡 Recommendation:</strong> While our AI provides helpful insights, 
                consider consulting with a qualified attorney for important legal decisions, 
                especially in areas marked as uncertain.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="results-header">
          <div>
            <h1 className="results-title">Document Analysis Results</h1>
            <p className="results-subtitle">
              {document.fileName} • Uploaded {new Date(document.uploadDate).toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={downloadReport}
            className="btn btn-primary"
          >
            <Download size={16} />
            <span>Download Report</span>
          </button>
        </div>

        <div className="tabs">
          <nav className="tab-nav">
            {tabs.map(tab => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <IconComponent size={16} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage