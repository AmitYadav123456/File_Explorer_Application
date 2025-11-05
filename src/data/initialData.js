// Initial mock file system data
export const initialData = {
  id: 'root',
  name: 'Root',
  type: 'folder',
  children: [
    {
      id: '1',
      name: 'Documents',
      type: 'folder',
      children: [
        {
          id: '1-1',
          name: 'Resume.pdf',
          type: 'file',
          content: 'Amit Yadav\nSoftware Engineer\n\nExperience:\n- 2 years in React development\n- Expert in JavaScript and TypeScript\n\nContact:\nEmail: amit@example.com\nPhone: (+91) 123-4567'
        },
        {
          id: '1-2',
          name: 'Cover Letter.docx',
          type: 'file',
          content: 'Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Engineer position at your company.\n\nWith over 2 years of experience in full-stack development, I have developed expertise in React, Node.js, and modern web technologies.\n\nThank you for considering my application.\n\nSincerely,\AMit'
        },
        {
          id: '1-3',
          name: 'Portfolio.pdf',
          type: 'file',
          content: 'PORTFOLIO\n\nProjects:\n1. E-commerce Platform\n2. Task Management App\n3. Weather Dashboard\n4. Social Media Clone'
        }
      ]
    },
    {
      id: '2',
      name: 'Projects',
      type: 'folder',
      children: [
        {
          id: '2-1',
          name: 'React App',
          type: 'folder',
          children: [
            {
              id: '2-1-1',
              name: 'index.js',
              type: 'file',
              content: 'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport "./index.css";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);'
            },
            {
              id: '2-1-2',
              name: 'App.js',
              type: 'file',
              content: 'import React from "react";\nimport "./App.css";\n\nfunction App() {\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Hello World</h1>\n        <p>Welcome to React!</p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;'
            },
            {
              id: '2-1-3',
              name: 'App.css',
              type: 'file',
              content: '.App {\n  text-align: center;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}'
            }
          ]
        },
        {
          id: '2-2',
          name: 'Node Backend',
          type: 'folder',
          children: [
            {
              id: '2-2-1',
              name: 'server.js',
              type: 'file',
              content: 'const express = require("express");\nconst app = express();\nconst port = 3000;\n\napp.get("/", (req, res) => {\n  res.send("Hello World!");\n});\n\napp.listen(port, () => {\n  console.log(`Server running at http://localhost:${port}`);\n});'
            }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'Images',
      type: 'folder',
      children: [
        {
          id: '3-1',
          name: 'profile.png',
          type: 'file',
          content: '[Binary Image Data - PNG format]'
        },
        {
          id: '3-2',
          name: 'logo.svg',
          type: 'file',
          content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n  <circle cx="50" cy="50" r="40" fill="#0066cc" />\n</svg>'
        }
      ]
    },
    {
      id: '4',
      name: 'README.md',
      type: 'file',
      content: '# My Project\n\nThis is a sample project with file explorer.\n\n## Features\n- File management\n- Search functionality\n- Tree navigation\n\n## Tech Stack\n- React\n- Tailwind CSS\n- Context API'
    }
  ]
};