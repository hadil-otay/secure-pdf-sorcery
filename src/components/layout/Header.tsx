
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { FileText, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-3 md:py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-soft" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-pdf-500 font-semibold">
          <FileText className="h-6 w-6" />
          <span className="text-lg font-display font-medium">SecurePDF</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-slate-700 hover:text-pdf-500 transition-colors">
              <span>Features</span>
              <ChevronDown className="h-4 w-4 opacity-60 group-hover:opacity-100" />
            </button>
            <div className="absolute left-0 top-full opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 bg-white rounded-xl shadow-soft-lg w-56 p-3 mt-2">
              <div className="grid gap-1.5">
                {['Merge PDF', 'Split PDF', 'Compress PDF', 'Convert PDF', 'Protect PDF'].map((item) => (
                  <Link 
                    key={item} 
                    to="#" 
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-pdf-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="#privacy" className="text-slate-700 hover:text-pdf-500 transition-colors">
            Privacy
          </Link>
          <Link to="#about" className="text-slate-700 hover:text-pdf-500 transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 flex flex-col md:hidden pt-20 px-6",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-4">
            <div className="border-b border-slate-100 pb-2">
              <p className="text-sm font-medium text-slate-500 mb-1">Features</p>
              <div className="grid gap-1">
                {['Merge PDF', 'Split PDF', 'Compress PDF', 'Convert PDF', 'Protect PDF'].map((item) => (
                  <Link 
                    key={item} 
                    to="#" 
                    className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-pdf-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="#privacy" 
              className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-pdf-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link 
              to="#about" 
              className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-pdf-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
