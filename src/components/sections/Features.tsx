
import React from 'react';
import { FilePlus2, FileMinus2, FileDown, ShieldCheck, Fingerprint } from 'lucide-react';
import FeatureCard from '../ui-custom/FeatureCard';
import { motion } from 'framer-motion';

interface FeaturesProps {
  onFeatureClick: (featureId: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onFeatureClick }) => {
  const features = [
    {
      id: 'merge',
      icon: FilePlus2,
      title: 'Merge PDFs',
      description: 'Combine multiple PDF files into a single document seamlessly and quickly.',
    },
    {
      id: 'split',
      icon: FileMinus2,
      title: 'Split PDF',
      description: 'Extract pages or split large PDF documents into smaller files with precision.',
    },
    {
      id: 'compress',
      icon: FileDown,
      title: 'Compress PDF',
      description: 'Reduce file size while maintaining quality for easier sharing and storage.',
    },
    {
      id: 'protect',
      icon: ShieldCheck,
      title: 'Protect PDF',
      description: 'Secure your documents with password protection and encryption.',
    },
    {
      id: 'sign',
      icon: Fingerprint,
      title: 'Sign PDF',
      description: 'Add digital signatures to documents without compromising security.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-slate-50" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Powerful PDF Tools
          </h2>
          <p className="text-slate-600">
            Process your PDFs with powerful features, all working locally in your browser for complete privacy and security.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={() => onFeatureClick(feature.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
