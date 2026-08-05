import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App.jsx'

console.log(
  `%c AW // ANDY WARNER %c\n\nThanks for taking an interest in my site! If you are a prospective employer wondering if I used AI to make this, I'll save you the trouble, I did. But I didnt do it blindly. I used AI to generate this site from a pallete of my choosing, prompted it on how to scaffold the site so that I could quickly and easily update the site with my own words and thoughts, then spent time going through all the code and interactions to fine tune what needed to be chagned to make a site that both reflected my ability and views on software development.`,
  'background: #10b981; color: #000; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 4px;',
  'color: #10b981; font-size: 12px; font-family: monospace; line-height: 1.5;'
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
