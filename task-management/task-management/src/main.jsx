import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from './components/Context/TaskContext.jsx'
import { ThemeProvider } from './components/Context/ThemeContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <TaskProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
 </TaskProvider>
  </StrictMode>,
)
