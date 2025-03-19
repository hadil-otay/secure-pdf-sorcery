
import React from 'react';
import { Shield, Lock, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyFocus = () => {
  const privacyFeatures = [
    {
      icon: Shield,
      title: 'Complete Privacy',
      description: 'Your files never leave your device. All processing happens locally in your browser, ensuring that your sensitive documents remain private.',
    },
    {
      icon: Lock,
      title: 'Military-Grade Encryption',
      description: 'When using password protection, we implement AES-256 encryption, the same standard used by governments and military to secure sensitive data.',
    },
    {
      icon: Cpu,
      title: 'Local Processing',
      description: 'We use WebAssembly technology to process PDFs directly in your browser, eliminating the need to transfer files to external servers.',
    },
    {
      icon: Globe,
      title: 'Zero Data Collection',
      description: 'We don't track you, we don't store your files, and we don't collect any personal information. Your data belongs only to you.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="privacy">
      {/* Background decoration */}
      <div className="absolute w-full h-full inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pdf-50 via-transparent to-transparent opacity-70" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h6 className="text-pdf-600 font-medium mb-3">Privacy By Design</h6>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Your Documents Stay On Your Device
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                In a world where data privacy is increasingly compromised, we've built a solution that fundamentally respects your right to privacy. Our tools process your files locally, without ever sending them to our servers.
              </p>
              
              <div className="space-y-6">
                {privacyFeatures.map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="p-2 rounded-lg bg-pdf-50">
                        <feature.icon className="h-5 w-5 text-pdf-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:ml-10"
          >
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-soft-lg">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pdf-400 to-blue-400" />
                <div className="p-6 pt-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-medium text-slate-900 mb-1">Local Processing in Action</h3>
                      <p className="text-sm text-slate-600">Watch how your files never leave your device</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pdf-100 text-pdf-700">
                      <Shield className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden border border-slate-100 aspect-video bg-slate-50 flex items-center justify-center mb-4">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-slate-100 mb-4">
                        <Lock className="h-6 w-6 text-slate-500" />
                      </div>
                      <p className="text-sm text-slate-600">
                        Interactive demo animation would be here
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <div className="text-xs text-slate-600">
                        Network activity monitor: No upload detected
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-100 rounded-full opacity-70 blur-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-pdf-100 rounded-full opacity-70 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyFocus;
