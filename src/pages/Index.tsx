
import React, { useState, useRef } from 'react';
import { toast } from "sonner";
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import PrivacyFocus from '@/components/sections/PrivacyFocus';
import FileUploader from '@/components/ui-custom/FileUploader';
import ProcessingAnimation from '@/components/ui-custom/ProcessingAnimation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileDown } from 'lucide-react';
import { mergePdfs, downloadBlob } from '@/utils/fileUtils';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'upload' | 'feature'>('home');
  const [selectedFeature, setSelectedFeature] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setCurrentView('upload');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(featureId);
    setCurrentView('feature');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilesAdded = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
  };

  const handleBackClick = () => {
    if (currentView === 'feature') {
      setCurrentView('home');
      // Scroll to features section
      if (featuresRef.current) {
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProcessFiles = async () => {
    if (files.length === 0) {
      toast.error("Please add at least one file");
      return;
    }

    setIsProcessing(true);

    try {
      let result;
      // Process files based on selected feature
      switch (selectedFeature) {
        case 'merge':
          result = await mergePdfs(files);
          downloadBlob(result, 'merged.pdf');
          toast.success("Files successfully merged!");
          break;
        // Handle other features
        default:
          result = await mergePdfs(files);
          downloadBlob(result, 'processed.pdf');
          toast.success("Files successfully processed!");
      }
    } catch (error) {
      console.error("Error processing files:", error);
      toast.error("An error occurred while processing your files");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onGetStarted={handleGetStarted} />
              <div ref={featuresRef}>
                <Features onFeatureClick={handleFeatureClick} />
              </div>
              <PrivacyFocus />
            </motion.div>
          )}

          {currentView === 'upload' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-28 pb-16 md:pt-36 md:pb-24 container mx-auto px-6"
            >
              <div className="max-w-3xl mx-auto">
                <Button
                  variant="ghost"
                  onClick={handleBackClick}
                  className="mb-8 text-slate-600 hover:text-pdf-500"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  Upload Your PDF Files
                </h1>
                <p className="text-slate-600 mb-8">
                  Select the PDF files you want to process. Your files stay on your device and are never uploaded to any server.
                </p>
                
                <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
                  <FileUploader
                    onFilesAdded={handleFilesAdded}
                    maxFiles={10}
                    maxSize={100 * 1024 * 1024} // 100MB
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    size="lg"
                    className="bg-pdf-500 hover:bg-pdf-600 text-white"
                    disabled={files.length === 0}
                    onClick={() => {
                      setSelectedFeature('merge'); // Default to merge
                      handleProcessFiles();
                    }}
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    Process Files
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'feature' && (
            <motion.div
              key="feature"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-28 pb-16 md:pt-36 md:pb-24 container mx-auto px-6"
            >
              <div className="max-w-3xl mx-auto">
                <Button
                  variant="ghost"
                  onClick={handleBackClick}
                  className="mb-8 text-slate-600 hover:text-pdf-500"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Features
                </Button>
                
                <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  {selectedFeature === 'merge' && "Merge PDF Files"}
                  {selectedFeature === 'split' && "Split PDF Files"}
                  {selectedFeature === 'compress' && "Compress PDF Files"}
                  {selectedFeature === 'protect' && "Protect PDF Files"}
                  {selectedFeature === 'sign' && "Sign PDF Files"}
                </h1>
                
                <p className="text-slate-600 mb-8">
                  {selectedFeature === 'merge' && "Combine multiple PDF files into a single document. Simply upload the files you want to merge and arrange them in the desired order."}
                  {selectedFeature === 'split' && "Extract pages or split a PDF into multiple documents. Upload your PDF and select which pages to extract."}
                  {selectedFeature === 'compress' && "Reduce the file size of your PDF while maintaining quality. Great for email attachments and saving storage space."}
                  {selectedFeature === 'protect' && "Add password protection and encryption to your sensitive PDF documents. Keep your information secure."}
                  {selectedFeature === 'sign' && "Add digital signatures to your PDF documents without compromising security or privacy."}
                </p>
                
                <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
                  <FileUploader
                    onFilesAdded={handleFilesAdded}
                    maxFiles={selectedFeature === 'merge' ? 10 : 1}
                    maxSize={100 * 1024 * 1024} // 100MB
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    size="lg"
                    className="bg-pdf-500 hover:bg-pdf-600 text-white"
                    disabled={files.length === 0}
                    onClick={handleProcessFiles}
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    {selectedFeature === 'merge' && "Merge Files"}
                    {selectedFeature === 'split' && "Split PDF"}
                    {selectedFeature === 'compress' && "Compress PDF"}
                    {selectedFeature === 'protect' && "Protect PDF"}
                    {selectedFeature === 'sign' && "Sign PDF"}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
      
      <ProcessingAnimation 
        visible={isProcessing} 
        message={
          selectedFeature === 'merge' ? "Merging your PDF files..." :
          selectedFeature === 'split' ? "Splitting your PDF file..." :
          selectedFeature === 'compress' ? "Compressing your PDF file..." :
          selectedFeature === 'protect' ? "Encrypting your PDF file..." :
          selectedFeature === 'sign' ? "Adding signature to your PDF file..." :
          "Processing your files..."
        }
      />
    </div>
  );
};

export default Index;
