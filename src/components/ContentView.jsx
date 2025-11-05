import React from 'react';
import { File, Folder } from 'lucide-react';
import { useFileSystem } from '../context/FileSystemContext';

const ContentView = () => {
  const { viewing } = useFileSystem();

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
      {viewing ? (
        <div className="max-w-4xl mx-auto">
          {/* File Header */}
          <div className="flex items-center gap-3 mb-4">
            <File size={28} className="text-gray-500" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {viewing.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {viewing.type.toUpperCase()} • {viewing.content.length} characters
              </p>
            </div>
          </div>

          {/* File Content */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2">
              <span className="text-xs font-semibold text-gray-600 uppercase">
                Content Preview
              </span>
            </div>
            <div className="p-6">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                {viewing.content}
              </pre>
            </div>
          </div>

          {/* File Info */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">
              File Information
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Name:</span>
                <span className="ml-2 font-medium text-gray-800">
                  {viewing.name}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Type:</span>
                <span className="ml-2 font-medium text-gray-800">
                  {viewing.type}
                </span>
              </div>
              <div>
                <span className="text-gray-600">ID:</span>
                <span className="ml-2 font-medium text-gray-800">
                  {viewing.id}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Size:</span>
                <span className="ml-2 font-medium text-gray-800">
                  {viewing.content.length} chars
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty State
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Folder size={80} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No File Selected
            </h3>
            <p className="text-gray-500">
              Select a file from the sidebar to view its contents
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentView;