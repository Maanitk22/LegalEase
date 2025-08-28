import { 
  FileText, 
  Home, 
  Briefcase, 
  Users, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Scale,
  Eye,
  BookOpen
} from 'lucide-react'

const DocumentGuidePage = () => {
  const documentTypes = [
    {
      id: 'employment',
      title: 'Employment Agreements',
      icon: '👤',
      description: 'Contracts between employers and employees defining work terms, compensation, and responsibilities.',
      checklist: [
        'Job title and detailed job description',
        'Salary or hourly wage clearly stated',
        'Work schedule and location requirements',
        'Benefits package (health insurance, vacation, etc.)',
        'Probation period terms',
        'Termination conditions and notice periods',
        'Non-compete and confidentiality clauses',
        'Intellectual property ownership',
        'Dispute resolution procedures'
      ],
      warnings: [
        'Overly broad non-compete clauses that restrict future employment',
        'Unpaid overtime expectations disguised as "salary" positions',
        'Vague job descriptions that allow unlimited scope creep',
        'Missing details about benefits eligibility',
        'Automatic contract renewals without negotiation opportunities'
      ]
    },
    {
      id: 'lease',
      title: 'Lease Agreements',
      icon: '🏠',
      description: 'Contracts for renting residential or commercial property, outlining tenant and landlord obligations.',
      checklist: [
        'Property address and exact unit/space details',
        'Lease term (start and end dates)',
        'Monthly rent amount and due date',
        'Security deposit amount and return conditions',
        'Utilities responsibility (who pays what)',
        'Pet policy and associated fees',
        'Maintenance and repair responsibilities',
        'Guest and subletting policies',
        'Early termination conditions',
        'Property condition documentation'
      ],
      warnings: [
        'Excessive security deposits or non-refundable fees',
        'Automatic rent increase clauses without limits',
        'Broad landlord entry rights without proper notice',
        'Tenant responsibility for structural repairs',
        'Hidden fees for normal wear and tear'
      ]
    },
    {
      id: 'service',
      title: 'Service Agreements',
      icon: '🤝',
      description: 'Contracts for professional services, consulting, or business-to-business arrangements.',
      checklist: [
        'Detailed scope of work and deliverables',
        'Project timeline with key milestones',
        'Payment terms and schedule',
        'Cancellation and termination rights',
        'Intellectual property ownership',
        'Confidentiality provisions',
        'Performance standards and metrics',
        'Change order procedures',
        'Liability and insurance requirements',
        'Dispute resolution mechanisms'
      ],
      warnings: [
        'Unlimited scope without change order protections',
        'Payment terms heavily favoring one party',
        'Excessive liability or indemnification clauses',
        'Missing intellectual property protections',
        'Unclear performance standards leading to disputes'
      ]
    },
    {
      id: 'nda',
      title: 'Non-Disclosure Agreements',
      icon: '🔒',
      description: 'Confidentiality contracts protecting sensitive business information and trade secrets.',
      checklist: [
        'Clear definition of confidential information',
        'Specific exclusions from confidentiality',
        'Duration of confidentiality obligations',
        'Permitted uses of confidential information',
        'Return or destruction of materials',
        'Consequences for breach',
        'Jurisdiction for legal proceedings',
        'Mutual vs. one-way confidentiality',
        'Employee and third-party obligations'
      ],
      warnings: [
        'Overly broad definitions of confidential information',
        'Indefinite confidentiality periods',
        'Restrictions on using general knowledge and skills',
        'Excessive penalties for minor breaches',
        'One-sided obligations in supposed "mutual" NDAs'
      ]
    },
    {
      id: 'purchase',
      title: 'Purchase Agreements',
      icon: '💰',
      description: 'Contracts for buying goods, services, or property, including terms and conditions of sale.',
      checklist: [
        'Detailed description of items/property being sold',
        'Purchase price and payment terms',
        'Delivery or closing date',
        'Inspection and acceptance procedures',
        'Warranties and guarantees',
        'Risk of loss provisions',
        'Default and remedy clauses',
        'Title and ownership transfer details',
        'Contingencies and conditions precedent'
      ],
      warnings: [
        '"As-is" sales without adequate inspection periods',
        'Excessive penalties for buyer default',
        'Missing or limited warranties',
        'Unclear title transfer procedures',
        'Hidden costs or fees not disclosed upfront'
      ]
    },
    {
      id: 'partnership',
      title: 'Partnership Agreements',
      icon: '🤝',
      description: 'Legal documents establishing business partnerships and defining partner roles and responsibilities.',
      checklist: [
        'Partner names and ownership percentages',
        'Capital contributions from each partner',
        'Profit and loss distribution',
        'Management responsibilities and decision-making',
        'Partner compensation and draws',
        'Partnership dissolution procedures',
        'Buy-sell agreement provisions',
        'Non-compete and confidentiality terms',
        'Dispute resolution mechanisms',
        'Tax elections and responsibilities'
      ],
      warnings: [
        'Unequal partnership terms disguised as equal partnerships',
        'Missing exit strategies or dissolution procedures',
        'Unlimited personal liability exposure',
        'Unclear decision-making authority',
        'Inadequate buy-sell provisions for partner departure'
      ]
    }
  ]

  const generalTips = [
    {
      title: 'Read Everything Carefully',
      description: 'Never sign a document without reading every clause. Pay special attention to fine print and attachments.',
      icon: <Eye size={24} />
    },
    {
      title: 'Understand Key Terms',
      description: 'Make sure you understand all legal terminology. Ask for clarification or look up unfamiliar terms.',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Check Dates and Deadlines',
      description: 'Verify all dates, deadlines, and time periods. Mark important dates in your calendar.',
      icon: <Clock size={24} />
    },
    {
      title: 'Review Payment Terms',
      description: 'Understand all payment obligations, due dates, and penalties for late payments.',
      icon: <DollarSign size={24} />
    },
    {
      title: 'Know Your Rights',
      description: 'Identify your rights, protections, and available remedies if something goes wrong.',
      icon: <Scale size={24} />
    },
    {
      title: 'Get Professional Advice',
      description: 'For important contracts, consult with a qualified attorney before signing.',
      icon: <Shield size={24} />
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <div className="guide-section">
          <h1 className="guide-title">Legal Document Guide</h1>
          <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#6b7280', marginBottom: '50px'}}>
            Ensure your legal documents are complete and protect your interests
          </p>
        </div>

        {/* General Tips Section */}
        <div className="card" style={{marginBottom: '50px'}}>
          <h2 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center'}}>
            Essential Document Review Tips
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            {generalTips.map((tip, index) => (
              <div key={index} style={{
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '15px',
                padding: '20px',
                background: '#f9fafb',
                borderRadius: '8px'
              }}>
                <div style={{color: '#4f46e5', flexShrink: 0}}>
                  {tip.icon}
                </div>
                <div>
                  <h3 style={{fontWeight: '600', marginBottom: '8px'}}>{tip.title}</h3>
                  <p style={{color: '#6b7280', lineHeight: '1.5'}}>{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Types */}
        <div className="document-types">
          {documentTypes.map((docType) => (
            <div key={docType.id} className="document-type">
              <div className="document-type-header">
                <span className="document-type-icon">{docType.icon}</span>
                <div>
                  <h2 className="document-type-title">{docType.title}</h2>
                  <p className="document-type-description">{docType.description}</p>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px'}}>
                <div>
                  <h3 style={{
                    fontWeight: 'bold', 
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#059669'
                  }}>
                    <CheckCircle size={20} />
                    Essential Elements Checklist
                  </h3>
                  <ul className="checklist">
                    {docType.checklist.map((item, index) => (
                      <li key={index} className="checklist-item">
                        <CheckCircle className="checklist-icon" size={16} />
                        <span className="checklist-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="warning-items">
                  <h3 className="warning-title">
                    <AlertTriangle size={20} />
                    Common Red Flags to Watch For
                  </h3>
                  <ul className="warning-list">
                    {docType.warnings.map((warning, index) => (
                      <li key={index} className="warning-item">
                        <AlertTriangle className="warning-icon" size={16} />
                        <span className="warning-text">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="alert alert-warning" style={{marginTop: '50px'}}>
          <div className="alert-title">
            <Shield size={20} />
            Important Legal Disclaimer
          </div>
          <p>
            This guide provides general information for educational purposes only and does not constitute legal advice. 
            Legal requirements vary by jurisdiction and situation. Always consult with a qualified attorney for 
            specific legal guidance, especially for high-value transactions or complex agreements.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DocumentGuidePage
