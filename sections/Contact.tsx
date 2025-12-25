import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
       setIsSuccess(true);
       setFormState({ name: '', email: '', message: '' });

    } catch (error) {
        console.error("Error sending message", error);
    } finally {
        setIsSubmitting(false);
        setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <>
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <p className="text-primary font-mono text-sm tracking-widest mb-2 uppercase">Get In Touch</p>
        <h2 className="text-4xl font-bold text-text mb-6">Contact Me.</h2>
        <p className="text-muted">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="w-full"
        >
            <form onSubmit={handleSubmit} className="bg-card/30 backdrop-blur-sm border border-border/10 p-8 rounded-2xl relative shadow-lg dark:shadow-none">
                
                {isSuccess ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-card/95 backdrop-blur-xl rounded-2xl p-6 text-center"
                    >
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                            <Send className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-text mb-2">Message Sent!</h3>
                        <p className="text-muted">Thanks for reaching out. I'll get back to you soon.</p>
                        <button 
                            type="button" 
                            onClick={() => setIsSuccess(false)}
                            className="mt-6 px-6 py-2 bg-surface border border-border/20 rounded text-sm hover:border-primary/50 transition-colors"
                        >
                            Send Another
                        </button>
                    </motion.div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-mono text-muted">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="bg-black/5 dark:bg-white/5 border border-border/20 rounded-lg p-3 text-text placeholder:text-muted/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-mono text-muted">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="bg-black/5 dark:bg-white/5 border border-border/20 rounded-lg p-3 text-text placeholder:text-muted/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                    <label htmlFor="message" className="text-sm font-mono text-muted">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="What's on your mind?"
                        className="bg-black/5 dark:bg-white/5 border border-border/20 rounded-lg p-3 text-text placeholder:text-muted/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-primary text-black font-bold rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] mx-auto"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');