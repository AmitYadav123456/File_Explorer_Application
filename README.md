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
        500: '#your-color', 
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
    
  ]
};
```

### Update File Name Validation

Edit `src/utils/helpers.js`:
```javascript
export const isValidName = (name) => {
  
  return /^[a-zA-Z0-9._\s-]+$/.test(name);
};
```

### Style Components

Each component uses Tailwind utility classes. Example:
```javascript

className="bg-blue-100" 
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
  toggleExpand,    
  setSelected,     
  setViewing,      
  setEditing,      
  setError,        
  createItem,      
  deleteItem,      
  renameItem       
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

import { memo } from 'react';
const TreeNode = memo(({ item, depth }) => {
  
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

