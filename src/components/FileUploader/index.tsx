'use client'

import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';

interface IFileUploader {
  className?: string;
  setFiles: any;
  files: any[];
}

const FileUploader = ({ className, setFiles, files }: IFileUploader) => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles: File[] = Array.from(e.dataTransfer.files);
    validateAndSetFiles(droppedFiles);
  };

  const handleFileInputChange = (e: any) => {
    const selectedFiles: File[] = Array.from(e.target.files);
    validateAndSetFiles(selectedFiles);
  };

  const validateAndSetFiles = (selectedFiles: File[]) => {
    const allowedTypes = ['application/pdf', 'text/plain'];
    const invalidFiles = selectedFiles.filter(file => !allowedTypes.includes(file.type));
    if (invalidFiles.length > 0) {
      toast.error('Only .pdf and .txt files are allowed');
      return;
    }
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div className={clsx("w-full h-full flex flex-col justify-center items-center p-1 shadow-sm rounded", className)}>
      <label
        htmlFor="file-input"
        className={clsx("w-full h-40 border-2 border-dashed rounded flex flex-col items-center justify-center cursor-pointer border-gray-300 ", { dragging: dragging })}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div>
          <div className='flex justify-center mb-1'><MdOutlineFileUpload className='h-8 w-8' /></div>
          <p>Click to upload or drag and drop</p>
          <p className='text-gray-500'>Only .pdf and .txt files are allowed</p>
        </div>
      </label>
      <input
        id="file-input"
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept="application/pdf,.txt"
        multiple
      />
    </div >
  );
};

export default FileUploader;
