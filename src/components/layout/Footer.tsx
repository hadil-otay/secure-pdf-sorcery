
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 text-pdf-500 mb-4">
              <FileText className="h-6 w-6" />
              <span className="text-xl font-display font-medium">SecurePDF</span>
            </Link>
            <p className="text-slate-600 mb-6 max-w-md">
              Privacy-focused PDF tools that process your files locally for maximum security. No server uploads, no data collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-pdf-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-pdf-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-pdf-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Security", "Privacy", "Roadmap"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-600 hover:text-pdf-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium text-slate-900 mb-4">PDF Tools</h3>
            <ul className="space-y-3">
              {["Merge PDF", "Split PDF", "Compress PDF", "Convert PDF", "Protect PDF"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-600 hover:text-pdf-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Help Center", "Documentation", "API", "Blog"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-600 hover:text-pdf-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-medium text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Contact", "Careers", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-600 hover:text-pdf-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} SecurePDF. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-pdf-500 transition-colors">Terms</Link>
              <Link to="#" className="hover:text-pdf-500 transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-pdf-500 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
