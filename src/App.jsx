import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
import ResultsPage from './pages/ResultsPage'
import HistoryPage from './pages/HistoryPage'
import HelpPage from './pages/HelpPage'
import DocumentGuidePage from './pages/DocumentGuidePage'

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/results/:id" element={<ResultsPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/guide" element={<DocumentGuidePage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App