import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { 
  Home, 
  Upload, 
  History, 
  HelpCircle, 
  Moon, 
  Sun, 
  Menu, 
  X,
  Scale,
  BookOpen
} from 'lucide-react'

const Navigation = () => {
  const { darkMode, setDarkMode } = useApp()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/upload', label: 'Upload', icon: Upload },
    { path: '/history', label: 'History', icon: History },
    { path: '/guide', label: 'Document Guide', icon: BookOpen },
    { path: '/help', label: 'Help', icon: HelpCircle }
  ]

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <Scale className="logo-icon" />
          <span className="logo-text">LegalEase</span>
        </Link>

        <div className="nav-links">
          {navItems.map(item => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <IconComponent size={16} />
                <span>{item.label}</span>
              </Link>
            )
          })}
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map(item => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <IconComponent size={16} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}

export default Navigation