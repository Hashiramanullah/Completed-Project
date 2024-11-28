import './App.css'
import { useTheme } from './components/Context/ThemeContext'
import { TaskContext } from "../src/components/Context/TaskContext";

import Home from './pages/Home'
function App() {
 const {theme}  = useTheme(TaskContext)
  return (
    <>
        <div className={`w-full h-full ${theme == 'light' ? "bg-gray-300" : "bg-gray-500"}`}>
           <Home/>
             
        </div>
    </>
  )
}

export default App
