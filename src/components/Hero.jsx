
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const yOffset = -80; // Navbar height offset
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="section-container text-center">
        <h1 className="heading-xl animate-fade-in">
          <span className="text-primary">Hello, I'm </span>
          <span className="font-bold">Developer Name</span>
        </h1>
        <p className="subtitle max-w-2xl mx-auto animate-fade-in">
          A passionate full-stack developer building elegant solutions with modern technology.
          Specializing in creating impactful digital experiences.
        </p>
        <div className="mt-10 animate-fade-in">
          <Button 
            size="lg" 
            className="rounded-full mr-4"
            onClick={() => window.open('#contact', '_self')}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full"
            onClick={() => window.open('#projects', '_self')}
          >
            View Projects
          </Button>
        </div>
        <div className="absolute bottom-10 inset-x-0 flex justify-center animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-background hover:text-primary"
            onClick={scrollToAbout}
            aria-label="Scroll to About"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
