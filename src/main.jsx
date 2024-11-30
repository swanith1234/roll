import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"roll","emailId":"pidugubunny534@gmail.com","phoneNo":"123457876543","projects":[{"title":"chilli","description":"chilli","technologies":["Python"],"repoLink":"chilli","_id":"674b1ddaa50f957ec3d904bb"}],"resume":"","experiences":[{"companyName":"chilli","role":"chilli","description":"chilli","technologiesUsed":[],"duration":"chilli","_id":"674b1ddaa50f957ec3d904bc"}],"techStacks":[],"contactDetails":[],"codingProfiles":[],"certifications":[],"achievements":[{"title":"chilli","description":"chilli","_id":"674b1ddaa50f957ec3d904bd"}],"about":"chilli","profilePhoto":"","_id":"674b1ddaa50f957ec3d904ba","createdAt":"2024-11-30T14:14:50.306Z","updatedAt":"2024-11-30T14:14:50.306Z","__v":0}} />
  </StrictMode>,
)
