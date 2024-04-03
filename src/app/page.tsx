'use client'

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import API from '../api';
import File from "@/components/File";
import Button from "@/components/Button";
import DashboardLayout from "./dashboardLayout";
import FileUploader from "@/components/FileUploader";

export default function Home() {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    setLoading(true);

    // Make API call after the delay
    setTimeout(() => {
      API.post('/users/3/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((resp): void => {
        setLoading(false);
        setFiles([]);
        toast.success("Files uploaded successfully", {
          duration: 5000
        });
      }).catch((err): void => {
        setLoading(false);
        toast.error(`Error uploading files: ${err.response.data.message}`, {
          duration: 5000
        });
      });
    }, 6000); // Execute API call after 6 seconds delay
  }



  return (
    <DashboardLayout>
      <section className="max-w-3xl mx-auto py-16 px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-left mb-2">Upload your sources</h1>
          {loading && <p className="text-red-500">Uploading...</p>}
          <p className="text-gray-500">
            Select your transcripts, notes and emails.
          </p>
        </div>
        <FileUploader className="mb-10" setFiles={setFiles} files={files} />
        <div className="flex gap-2 flex-col max-h-[300px] overflow-y-scroll">
          {files.map((file, index) => (
            <File key={index} fileName={file.name} loading={loading} />
          ))}
        </div>
        <div className="mt-10">
          <Button label="Upload" className="w-full" onClick={handleUpload} />
        </div>
      </section>
    </DashboardLayout>
  );
}
