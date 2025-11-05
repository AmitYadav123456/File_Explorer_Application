import React, { useState } from 'react';
import { Search, Folder, File } from 'lucide-react';
import { useFileSystem } from '../context/FileSystemContext';
import { searchItems } from '../utils/helpers';
import TreeNode from './TreeNode.jsx';

const Sidebar = () => {
  const { fileSystem, setViewing, setSelected } = useFileSystem();
  const [searchTerm, setSearchTerm] = useState('');

  // Get search results
  const results = searchTerm ? searchItems(fileSystem, searchTerm) : [];

  // Handle search result click
  const handleResultClick = (item) => {
    if (item.type === 'file') {
      setViewing(item);
    }
    setSelected(item.id);
    setSearchTerm(''); // Clear search after selection
  };

  return (
    <div className="w-full md:w-80 bg-white border-r border-gray-200 overflow-y-auto shadow-sm">
      <div className="p-3">
        {/* Search Input */}
        <div className="relative mb-3">
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search files and folders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Search Results or File Tree */}
        {searchTerm ? (
          <div>
            {results.length > 0 ? (
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
                  Search Results ({results.length})
                </div>
                <div className="space-y-1">
                  {results.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:bg-gray-100 rounded transition-colors"
                      onClick={() => handleResultClick(item)}
                    >
                      {item.type === 'folder' ? (
                        <Folder size={16} className="text-blue-500 flex-shrink-0" />
                      ) : (
                        <File size={16} className="text-gray-500 flex-shrink-0" />
                      )}
                      <span className="text-sm truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500 text-center py-8">
                No results found for "{searchTerm}"
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
              File Explorer
            </div>
            <TreeNode item={fileSystem} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;