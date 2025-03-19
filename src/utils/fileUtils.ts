
/**
 * Utility functions for handling PDF files in the browser
 */

// Check if a file is a PDF
export const isPdfFile = (file: File): boolean => {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
};

// Format file size in human-readable format
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Generate a thumbnail preview URL for a PDF file
export const generatePdfThumbnail = async (file: File): Promise<string> => {
  // In a real implementation, this would use PDF.js to render a thumbnail
  // For now, we'll return a placeholder
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('/placeholder.svg');
    }, 500);
  });
};

// Mock function to simulate PDF merging
export const mergePdfs = async (files: File[]): Promise<Blob> => {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // In a real app, we'd use a library like PDF-LIB to merge the PDFs
      // For demonstration, we'll just return the first file
      resolve(files[0]);
    }, 2000);
  });
};

// Mock function to simulate PDF compression
export const compressPdf = async (file: File, quality: 'low' | 'medium' | 'high' = 'medium'): Promise<Blob> => {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // In a real app, we'd use a PDF compression library
      resolve(file);
    }, 2000);
  });
};

// Mock function to simulate PDF splitting
export const splitPdf = async (file: File, pages: number[]): Promise<Blob[]> => {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // In a real app, we'd use a library like PDF-LIB to split the PDF
      resolve([file, file]);
    }, 2000);
  });
};

// Download a blob as a file
export const downloadBlob = (blob: Blob, filename: string): void => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
};
