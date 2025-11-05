import React from 'react';
import { FileSystemProvider, useFileSystem } from './context/FileSystemContext';
import Sidebar from './components/Sidebar';
import ContentView from './components/ContentView';

// Main App Layout Component
const AppLayout = () => {
  const { error } = useFileSystem();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">
            📁 File Explorer
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Navigate, create, and manage your files
          </p>
        </div>
      </header>

      {/* Error Message */}
      {error && (
        <div className="mx-4 mt-3">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
            <span className="text-sm font-medium">⚠️ {error}</span>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ContentView />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Built with React & Tailwind CSS</span>
          <span>Context API • Responsive Design</span>
        </div>
      </footer>
    </div>
  );
};

// App Component with Provider
const App = () => {
  return (
    <FileSystemProvider>
      <AppLayout />
    </FileSystemProvider>
  );
};

export default App;