import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resume from './Resume.jsx'
import resumeData from './resumeData.json' // ✅ JSON import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Resume data={resumeData} />  {/* ✅ passing JSON data as prop */}
  </StrictMode>
)
