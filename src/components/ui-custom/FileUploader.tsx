
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';
import { FileText, Upload, X, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/sonner';

interface FileUploaderProps {
  onFilesAdded: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number; // in bytes
  acceptedFileTypes?: string[];
  className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFilesAdded,
  maxFiles = 10,
  maxSize = 10 * 1024 * 1024, // 10MB default
  acceptedFileTypes = ['.pdf'],
  className,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    // Handle rejected files
    if (rejectedFiles.length > 0) {
      rejectedFiles.forEach((rejected) => {
        if (rejected.errors[0]?.code === 'file-too-large') {
          toast.error(`File too large: ${rejected.file.name}`);
        } else if (rejected.errors[0]?.code === 'file-invalid-type') {
          toast.error(`Invalid file type: ${rejected.file.name}`);
        } else {
          toast.error(`Error uploading: ${rejected.file.name}`);
        }
      });
    }

    // Limit the number of files
    if (files.length + acceptedFiles.length > maxFiles) {
      toast.error(`You can only upload up to ${maxFiles} files`);
      acceptedFiles = acceptedFiles.slice(0, maxFiles - files.length);
    }

    if (acceptedFiles.length > 0) {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      onFilesAdded(newFiles);
    }
  }, [files, maxFiles, onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    maxSize,
    accept: {
      'application/pdf': acceptedFileTypes,
    },
  });

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onFilesAdded(newFiles);
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "file-drop-zone w-full border-2 border-dashed rounded-xl p-8 transition-all cursor-pointer text-center",
          isDragActive 
            ? "border-pdf-400 bg-pdf-50" 
            : "border-slate-200 hover:border-pdf-300 hover:bg-slate-50",
          className
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-pdf-50 flex items-center justify-center">
            <Upload className="h-6 w-6 text-pdf-500" />
          </div>
          <div className="text-center">
            <p className="text-slate-700 font-medium mb-1">
              {isDragActive ? "Drop your files here" : "Drag & drop your PDF files"}
            </p>
            <p className="text-slate-500 text-sm mb-3">
              or click to browse
            </p>
            <p className="text-xs text-slate-400">
              Maximum {maxFiles} files, up to {maxSize / (1024 * 1024)}MB each
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-slate-700">{files.length} file(s) selected</p>
          <ul className="space-y-2 mt-3">
            {files.map((file, index) => (
              <li key={`${file.name}-${index}`} className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-pdf-400" />
                  <div>
                    <p className="text-sm font-medium text-slate-700 truncate max-w-[200px] md:max-w-lg">{file.name}</p>
                    <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="text-slate-400 hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
