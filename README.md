# File Explorer Application

A modern, feature-rich file explorer built with React.js, Context API, and Tailwind CSS. Navigate through directories, manage files, and perform CRUD operations with an intuitive interface.

## 🚀 Features

- **Tree Navigation**: Expandable/collapsible folder structure
- **File Management**: Create, rename, and delete files/folders
- **File Viewing**: Click to view file contents with detailed information
- **Search Functionality**: Quick file/folder search with instant results
- **Context API State Management**: Clean state management without external libraries
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Error Handling**: Input validation and user-friendly error messages
- **Icon System**: Visual file type indicators using Lucide icons
- **Modern UI**: Clean, professional interface with smooth transitions

## 📁 Project Structure

```
file-explorer/
├── src/
│   ├── components/
│   │   ├── TreeNode.js          # Recursive tree node component
│   │   ├── Sidebar.js           # Left sidebar with search and tree
│   │   └── ContentView.js       # Right panel for file viewing
│   ├── context/
│   │   └── FileSystemContext.js # Context provider for state
│   ├── utils/
│   │   └── helpers.js           # Utility functions (findItem, search)
│   ├── data/
│   │   └── initialData.js       # Mock file system data
│   ├── App.js                   # Main application component
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles with Tailwind
├── public/
│   └── index.html               # HTML template
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step-by-Step Setup

1. **Create the project**
```bash
npx create-react-app file-explorer
cd file-explorer
```

2. **Install dependencies**
```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. **Initialize Tailwind CSS**
```bash
npx tailwindcss init -p
```

4. **Copy all the provided files into your project**
   - Create the folder structure as shown above
   - Copy each file content into the corresponding location
   - Make sure all imports match the file locations

5. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📦 Dependencies

### Main Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "lucide-react": "^0.263.1"
}
```

### Dev Dependencies
```json
{
  "tailwindcss": "^3.3.0",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24"
}
```

## 🎯 Usage Guide

### Basic Operations

#### 1. Navigate Folders
- Click on any folder to expand/collapse it
- Use the chevron icons (▶/▼) to see folder state
- Navigate through nested folder structures

#### 2. Create New Items
- **Select a folder** by clicking on it
- Click the **+ (Plus)** icon for a new folder
- Click the **File** icon for a new file
- Enter the name in the prompt dialog
- Item appears immediately in the selected folder

#### 3. Rename Items
- Select any file or folder
- Click the **✏️ (Edit/Pencil)** icon
- Type the new name in the inline input
- Press **Enter** to save or **Escape** to cancel
- Click outside the input to confirm

#### 4. Delete Items
- Select the item you want to delete
- Click the **🗑️ (Trash)** icon
- Confirm the deletion in the dialog
- Item is removed immediately
- Note: Root folder cannot be deleted

#### 5. View Files
- Click on any file name in the tree
- OR select a file and click the **👁️ (Eye)** icon
- File content displays in the right panel
- View file details including size and type

#### 6. Search Files
- Type in the search box at the top of sidebar
- Results appear instantly as you type
- Shows count of matching items
- Click any result to navigate to that item
- Search clears automatically after selection

## 🔧 File Descriptions

### Core Files

**src/data/initialData.js**
- Contains the mock file system structure
- Defines initial folders and files
- Easy to modify for different starting data

**src/utils/helpers.js**
- `findItem()`: Recursively finds items by ID
- `searchItems()`: Searches tree by name
- `isValidName()`: Validates file/folder names

**src/context/FileSystemContext.js**
- Provides global state management
- Exports `useFileSystem()` hook
- Manages all file operations (CRUD)
- Handles expand/collapse, selection, viewing

### Component Files

**src/components/TreeNode.js**
- Recursive component for tree structure
- Renders folders and files with proper indentation
- Handles inline editing for rename
- Shows action buttons on selection
- Manages expand/collapse for folders

**src/components/Sidebar.js**
- Contains search functionality
- Displays file tree or search results
- Handles search result navigation
- Auto-clears search on selection

**src/components/ContentView.js**
- Displays selected file content
- Shows file metadata (name, type, size, ID)
- Empty state when no file selected
- Formatted code display with monospace font

**src/App.js**
- Main application layout
- Wraps app with FileSystemProvider
- Shows header with title
- Displays error messages
- Contains footer

**src/index.js**
- Application entry point
- Renders App component
- Wraps with React.StrictMode

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color', // Change primary color
      }
    }
  }
}
```

### Modify Initial Data

Edit `src/data/initialData.js`:
```javascript
export const initialData = {
  id: 'root',
  name: 'My Files',
  type: 'folder',
  children: [
    // Add your custom structure
  ]
};
```

### Update File Name Validation

Edit `src/utils/helpers.js`:
```javascript
export const isValidName = (name) => {
  // Customize validation regex
  return /^[a-zA-Z0-9._\s-]+$/.test(name);
};
```

### Style Components

Each component uses Tailwind utility classes. Example:
```javascript
// Change selection color in TreeNode.js
className="bg-blue-100" // Change to bg-green-100, bg-purple-100, etc.
```

## 🔍 State Management

### Context Structure
```javascript
{
  fileSystem: { /* file tree */ },
  expanded: { folderId: true/false },
  selected: 'itemId' | null,
  viewing: { file object } | null,
  editing: 'itemId' | null,
  error: 'error message' | ''
}
```

### Available Methods
```javascript
const {
  fileSystem,
  expanded,
  selected,
  viewing,
  editing,
  error,
  toggleExpand,    // Toggle folder expand/collapse
  setSelected,     // Set selected item
  setViewing,      // Set file being viewed
  setEditing,      // Set item being edited
  setError,        // Set error message
  createItem,      // Create new file/folder
  deleteItem,      // Delete item
  renameItem       // Rename item
} = useFileSystem();
```

## 📱 Responsive Design

### Breakpoints
- **Mobile** (< 768px): Full-width sidebar, stacked layout
- **Desktop** (≥ 768px): Fixed sidebar (320px), two-column layout

### Mobile Features
- Touch-optimized buttons
- Collapsible sidebar
- Full-screen file view
- Swipe-friendly navigation

### Desktop Features
- Side-by-side layout
- Hover effects on buttons
- Larger click targets
- Keyboard shortcuts support

## 🐛 Error Handling

### Validation Rules
- **File names**: Only letters, numbers, spaces, dots, hyphens
- **Empty names**: Cannot create items with empty names
- **Deletion**: Confirmation required for destructive actions
- **Root protection**: Root folder cannot be deleted or renamed

### Error Display
- Shows at top of application
- Red background with clear message
- Auto-dismisses after 3 seconds
- Doesn't block user interaction

## ⚡ Performance Tips

### For Large File Systems (1000+ items)
1. Implement virtual scrolling in TreeNode
2. Add pagination to search results
3. Use React.memo for TreeNode component
4. Consider using useReducer instead of multiple useState
5. Implement debouncing for search input

### Code Optimization
```javascript
// Memoize TreeNode for better performance
import { memo } from 'react';
const TreeNode = memo(({ item, depth }) => {
  // component code
});
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Create folder in root
- [ ] Create nested folders (3+ levels)
- [ ] Create files in different folders
- [ ] Rename files and folders
- [ ] Delete items and verify state updates
- [ ] Search with various terms
- [ ] Click search results
- [ ] Expand/collapse folders
- [ ] View different file types
- [ ] Test on mobile viewport
- [ ] Try invalid file names
- [ ] Cancel rename with Escape
- [ ] Confirm rename with Enter
- [ ] Delete root folder (should fail)

### Test Cases for Development
```javascript
// Example test structure (using Jest/React Testing Library)
describe('FileExplorer', () => {
  test('creates new folder', () => {});
  test('renames item', () => {});
  test('deletes item', () => {});
  test('searches files', () => {});
  test('views file content', () => {});
});
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/file-explorer",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Then deploy:
```bash
npm run deploy
```

## 🎓 Learning Resources

### React Concepts Used
- Functional Components
- Hooks (useState, useContext, createContext)
- Context API for state management
- Component composition
- Conditional rendering
- Event handling

### Tailwind CSS Features
- Utility-first styling
- Responsive design with breakpoints
- Custom colors and themes
- Hover and focus states
- Transitions and animations

## 🛣️ Roadmap / Future Enhancements

- [ ] Drag-and-drop file reorganization
- [ ] File upload from computer
- [ ] Download files functionality
- [ ] Multiple file selection (Ctrl+Click)
- [ ] Context menu (right-click options)
- [ ] Keyboard navigation (arrow keys)
- [ ] File type icons (PDF, JS, CSS, etc.)
- [ ] Copy/paste functionality
- [ ] Breadcrumb navigation
- [ ] Dark mode toggle
- [ ] Folder size calculation
- [ ] Sort options (name, date, size, type)
- [ ] Grid view option
- [ ] Recent files section
- [ ] Favorites/bookmarks
- [ ] Undo/Redo operations
- [ ] File preview for images
- [ ] Code syntax highlighting
- [ ] Export/Import file structure

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Use functional components
- Follow the existing file structure
- Add comments for complex logic
- Test thoroughly before submitting
- Update README for new features
- Use meaningful commit messages

## 📄 License

MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind Labs** - For Tailwind CSS
- **Lucide** - For beautiful icons
- **Create React App** - For project setup

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/file-explorer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/file-explorer/discussions)
- **Email**: support@example.com

## 📊 Project Stats

- **Language**: JavaScript (React)
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Lucide React
- **Build Tool**: Create React App

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ using React and Tailwind CSS