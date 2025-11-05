import React, { useState } from 'react';
import { Folder, File, ChevronRight, ChevronDown, Plus, Edit2, Trash2, Eye } from 'lucide-react';
import { useFileSystem } from '../context/FileSystemContext.jsx';
import { isValidName } from '../utils/helpers';

const TreeNode = ({ item, depth = 0 }) => {
  const {
    expanded,
    selected,
    editing,
    toggleExpand,
    setSelected,
    setViewing,
    setEditing,
    createItem,
    deleteItem,
    renameItem,
    setError
  } = useFileSystem();

  const [newName, setNewName] = useState(item.name);

  const isExpanded = expanded[item.id];
  const isSelected = selected === item.id;
  const isEditing = editing === item.id;

  // Handle click on tree node
  const handleClick = () => {
    setSelected(item.id);
    if (item.type === 'folder') {
      toggleExpand(item.id);
    } else {
      setViewing(item);
    }
  };

  // Handle create new item
  const handleCreate = (e, type) => {
    e.stopPropagation();
    const name = prompt(`Enter ${type} name:`);
    if (!name) return;

    if (!isValidName(name)) {
      setError('Invalid name. Use only letters, numbers, spaces, dots, and hyphens.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    createItem(item.id, type, name);
  };

  // Handle delete item
  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(item.id);
    }
  };

  // Start rename process
  const handleRename = (e) => {
    e.stopPropagation();
    setEditing(item.id);
    setNewName(item.name);
  };

  // Confirm rename
  const confirmRename = () => {
    if (!newName.trim()) {
      setError('Name cannot be empty.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    if (!isValidName(newName)) {
      setError('Invalid name. Use only letters, numbers, spaces, dots, and hyphens.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    renameItem(item.id, newName);
  };

  // Handle view file
  const handleView = (e) => {
    e.stopPropagation();
    setViewing(item);
  };

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1.5 px-2 cursor-pointer hover:bg-gray-100 rounded transition-colors ${
          isSelected ? 'bg-blue-100' : ''
        }`}
        style={{ paddingLeft: `${depth * 20 + 8}px` }}
        onClick={handleClick}
      >
        {/* Expand/Collapse icon for folders */}
        {item.type === 'folder' && (
          <span className="text-gray-500">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}

        {/* Folder or File icon */}
        {item.type === 'folder' ? (
          <Folder size={16} className="text-blue-500" />
        ) : (
          <File size={16} className="text-gray-500" />
        )}

        {/* Name or Edit input */}
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={confirmRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') confirmRename();
              if (e.key === 'Escape') setEditing(null);
            }}
            className="flex-1 px-1 py-0.5 border border-blue-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <span className="flex-1 text-sm">{item.name}</span>
        )}

        {/* Action buttons */}
        {isSelected && !isEditing && (
          <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
            {/* Folder actions */}
            {item.type === 'folder' && (
              <>
                <button
                  onClick={(e) => handleCreate(e, 'folder')}
                  className="p-1 hover:bg-blue-200 rounded transition-colors"
                  title="New folder"
                >
                  <Plus size={14} />
                </button>
                <button
                  onClick={(e) => handleCreate(e, 'file')}
                  className="p-1 hover:bg-blue-200 rounded transition-colors"
                  title="New file"
                >
                  <File size={14} />
                </button>
              </>
            )}

            {/* File view action */}
            {item.type === 'file' && (
              <button
                onClick={handleView}
                className="p-1 hover:bg-green-200 rounded transition-colors"
                title="View file"
              >
                <Eye size={14} />
              </button>
            )}

            {/* Rename and Delete (not for root) */}
            {item.id !== 'root' && (
              <>
                <button
                  onClick={handleRename}
                  className="p-1 hover:bg-yellow-200 rounded transition-colors"
                  title="Rename"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  onClick={handleDelete}
                  className="p-1 hover:bg-red-200 rounded transition-colors"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Render children if folder is expanded */}
      {item.type === 'folder' && isExpanded && item.children && (
        <div>
          {item.children.map((child) => (
            <TreeNode key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;