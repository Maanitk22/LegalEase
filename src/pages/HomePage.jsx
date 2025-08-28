import { useNavigate } from 'react-router-dom'
import { FileText, AlertTriangle, BarChart3, ArrowRight } from 'lucide-react'

const HomePage = () => {
  const navigate = useNavigate()
  
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-title">
            Legal<span style={{color: '#fbbf24'}}>Ease</span>
          </div>
          <p className="hero-subtitle">
            Transform complex legal documents into clear, actionable insights with AI-powered analysis
          </p>
          <div className="hero-cta">
            <button
              onClick={() => navigate('/upload')}
              className="btn btn-primary"
              style={{fontSize: '1.2rem', padding: '16px 32px'}}
            >
              <span>Analyze Your Document</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="container" style={{marginTop: '60px'}}>
        <div className="feature-grid">
          <div className="feature-card">
            <FileText className="feature-icon" size={48} />
            <h3 className="feature-title">Smart Summaries</h3>
            <p className="feature-description">Get plain English explanations of complex legal terms</p>
          </div>
          <div className="feature-card">
            <AlertTriangle className="feature-icon" size={48} />
            <h3 className="feature-title">Risk Detection</h3>
            <p className="feature-description">Identify potential risks and obligations automatically</p>
          </div>
          <div className="feature-card">
            <BarChart3 className="feature-icon" size={48} />
            <h3 className="feature-title">AI Confidence</h3>
            <p className="feature-description">Know where to get professional legal advice</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage