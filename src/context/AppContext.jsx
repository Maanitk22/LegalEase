import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('legalease-dark-mode')
    return saved ? JSON.parse(saved) : false
  })
  
  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem('legalease-documents')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('legalease-dark-mode', JSON.stringify(darkMode))
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('legalease-documents', JSON.stringify(documents))
  }, [documents])

  const addDocument = (doc) => {
    const newDoc = {
      id: Date.now().toString(),
      ...doc,
      uploadDate: new Date().toISOString(),
      status: 'processed',
      favorite: false
    }
    setDocuments(prev => [newDoc, ...prev])
    return newDoc.id
  }

  const toggleFavorite = (id) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, favorite: !doc.favorite } : doc
    ))
  }

  const deleteDocument = (id) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id))
  }

  const getDocument = (id) => {
    return documents.find(doc => doc.id === id)
  }

  const value = {
    darkMode,
    setDarkMode,
    documents,
    addDocument,
    toggleFavorite,
    deleteDocument,
    getDocument
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}