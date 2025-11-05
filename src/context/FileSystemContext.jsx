import { createContext, useContext, useState } from 'react';
import { initialData } from '../data/initialData';
import { findItem } from '../utils/helpers';

// Create the context
const FileSystemContext = createContext(null);

// Custom hook to use the FileSystem context
export const useFileSystem = () => {
  const context = useContext(FileSystemContext);
  if (!context) {
    throw new Error('useFileSystem must be used within FileSystemProvider');
  }
  return context;
};

// FileSystem Provider Component
export const FileSystemProvider = ({ children }) => {
  const [fileSystem, setFileSystem] = useState(initialData);
  const [expanded, setExpanded] = useState({ root: true });
  const [selected, setSelected] = useState(null);
  const [viewing, setViewing] = useState(null);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');

  // Toggle folder expand/collapse
  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Create new item (file or folder)
  const createItem = (parentId, type, name) => {
    const newItem = {
      id: Date.now().toString(),
      name,
      type,
      ...(type === 'folder' ? { children: [] } : { content: '' })
    };

    setFileSystem(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const result = findItem(copy, parentId);
      if (result && result.item.type === 'folder') {
        result.item.children.push(newItem);
      }
      return copy;
    });

    // Auto-expand parent folder
    setExpanded(prev => ({ ...prev, [parentId]: true }));
  };

  // Delete item
  const deleteItem = (id) => {
    setFileSystem(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const result = findItem(copy, id);
      if (result && result.parent) {
        result.parent.children = result.parent.children.filter(c => c.id !== id);
      }
      return copy;
    });

    // Clear viewing if deleted item was being viewed
    if (viewing?.id === id) setViewing(null);
    setSelected(null);
  };

  // Rename item
  const renameItem = (id, newName) => {
    setFileSystem(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const result = findItem(copy, id);
      if (result) {
        result.item.name = newName;
      }
      return copy;
    });

    setEditing(null);
  };

  const value = {
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
  };

  return (
    <FileSystemContext.Provider value={value}>
      {children}
    </FileSystemContext.Provider>
  );
};