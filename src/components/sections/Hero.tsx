
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-pdf-50 rounded-full opacity-60 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-50 rounded-full opacity-60 blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pdf-50 text-pdf-700 text-sm font-medium mb-8 animate-pulse-soft">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pdf-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pdf-500"></span>
            </span>
            Local PDF processing for maximum security
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6">
            Secure PDF Tools
            <span className="text-pdf-500"> Without Compromising</span> Your Privacy
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Your files never leave your device. Process, modify, and manage PDFs with powerful tools that respect your privacy through local, browser-based processing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pdf-500 hover:bg-pdf-600 text-white shadow-md hover:shadow-lg transition-all"
              onClick={onGetStarted}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-200 hover:bg-slate-50"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
