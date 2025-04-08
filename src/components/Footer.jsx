
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary">Portfolio</h3>
            <p className="text-muted-foreground mt-2">
              Building exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-muted-foreground hover:text-primary">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-primary">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">Twitter</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">contact@example.com</li>
                <li className="text-muted-foreground">+1 (123) 456-7890</li>
                <li className="text-muted-foreground">San Francisco, CA</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
