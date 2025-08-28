import { 
  HelpCircle, 
  FileText, 
  Upload, 
  BarChart3, 
  Shield,
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  Lightbulb
} from 'lucide-react'

const HelpPage = () => {
  const faqs = [
    {
      question: "How does LegalEase analyze documents?",
      answer: "LegalEase uses advanced AI algorithms to parse legal documents and extract key information including risks, benefits, obligations, and important dates. Our AI is trained on a vast corpus of legal documents to provide accurate insights."
    },
    {
      question: "What file formats are supported?",
      answer: "Currently, LegalEase supports PDF (.pdf), Microsoft Word (.docx), and plain text (.txt) files. We recommend using PDF or DOCX for best results as they preserve formatting."
    },
    {
      question: "Is my document data secure?",
      answer: "Yes, your privacy is our priority. Documents are processed securely and are not stored permanently on our servers. All analysis is performed in real-time and results are only saved locally in your browser."
    },
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI provides a confidence score with each analysis. While highly accurate for most common legal documents, we always recommend consulting with a qualified attorney for important legal decisions."
    },
    {
      question: "Can I use LegalEase for any type of legal document?",
      answer: "LegalEase works best with common business documents like contracts, agreements, leases, and employment documents. Complex specialized documents may require professional legal review."
    },
    {
      question: "What should I do with uncertain areas?",
      answer: "Areas marked as uncertain by our AI should be reviewed by a qualified attorney. These typically involve complex legal language or jurisdiction-specific requirements."
    },
    {
      question: "How do I know if my document is complete?",
      answer: "Check our Document Guide section for comprehensive checklists of essential elements for different types of legal documents. This will help ensure your documents contain all necessary information."
    },
    {
      question: "Can I compare multiple versions of a document?",
      answer: "Currently, LegalEase analyzes documents individually. However, you can upload different versions and compare the analysis results manually through your document history."
    }
  ]

  const features = [
    {
      icon: FileText,
      title: "Smart Summaries",
      description: "Get plain English explanations of complex legal terms and clauses."
    },
    {
      icon: AlertTriangle,
      title: "Risk Detection",
      description: "Automatically identify potential risks, penalties, and unfavorable terms."
    },
    {
      icon: CheckCircle,
      title: "Benefits Analysis",
      description: "Discover your rights, protections, and beneficial clauses."
    },
    {
      icon: BarChart3,
      title: "Confidence Scoring",
      description: "Know where our AI is confident and where you should seek professional advice."
    }
  ]

  const tips = [
    {
      icon: Upload,
      title: "Upload Quality Files",
      description: "Use clear, high-quality PDF or DOCX files for best analysis results. Avoid scanned images when possible."
    },
    {
      icon: MessageCircle,
      title: "Review All Sections",
      description: "Check each tab in the results - Summary, Risks, Benefits, and Confidence - for a complete understanding."
    },
    {
      icon: Lightbulb,
      title: "Use the Document Guide",
      description: "Check our Document Guide before signing to ensure your contracts contain all essential elements."
    },
    {
      icon: Shield,
      title: "Consult Professionals",
      description: "For high-value contracts or uncertain areas, always consult with a qualified attorney."
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
          <HelpCircle size={64} style={{color: '#4f46e5', marginBottom: '20px'}} />
          <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px'}}>
            Help & FAQ
          </h1>
          <p style={{fontSize: '1.2rem', color: '#6b7280'}}>
            Everything you need to know about using LegalEase
          </p>
        </div>

        {/* How it Works */}
        <div className="card" style={{marginBottom: '40px'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px'}}>
            How LegalEase Works
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} style={{display: 'flex', alignItems: 'flex-start', gap: '15px'}}>
                  <div style={{flexShrink: 0}}>
                    <IconComponent size={32} style={{color: '#4f46e5'}} />
                  </div>
                  <div>
                    <h3 style={{fontWeight: '600', marginBottom: '8px'}}>
                      {feature.title}
                    </h3>
                    <p style={{color: '#6b7280', lineHeight: '1.5'}}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tips for Best Results */}
        <div className="card" style={{marginBottom: '40px'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px'}}>
            Tips for Best Results
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            {tips.map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <div key={index} style={{display: 'flex', alignItems: 'flex-start', gap: '15px'}}>
                  <div style={{flexShrink: 0}}>
                    <IconComponent size={32} style={{color: '#059669'}} />
                  </div>
                  <div>
                    <h3 style={{fontWeight: '600', marginBottom: '8px'}}>
                      {tip.title}
                    </h3>
                    <p style={{color: '#6b7280', lineHeight: '1.5'}}>
                      {tip.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="card" style={{marginBottom: '40px'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px'}}>
            Frequently Asked Questions
          </h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 style={{fontWeight: '600', marginBottom: '10px', fontSize: '1.1rem'}}>
                  {faq.question}
                </h3>
                <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="alert alert-warning">
          <div className="alert-title">
            <Shield size={20} />
            Important Legal Disclaimer
          </div>
          <p>
            LegalEase is an AI-powered tool designed for educational and informational purposes only. 
            It does not constitute legal advice and should not be used as a substitute for professional 
            legal consultation. Always consult with a qualified attorney for important legal decisions 
            and before signing any legal documents.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HelpPage