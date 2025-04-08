
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  // Placeholder projects data (in a real application, this would come from an API call)
  const placeholderProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and secure checkout integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80',
      githubUrl: '#',
      demoUrl: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with team collaboration features and real-time updates.',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80',
      githubUrl: '#',
      demoUrl: '#',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations and a dark mode toggle.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80',
      githubUrl: '#',
      demoUrl: '#',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'RESTful API Service',
      description: 'A robust API service with authentication, rate limiting, and comprehensive documentation.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
      githubUrl: '#',
      demoUrl: '#',
      category: 'backend'
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'A chat application with private messaging, group chats, and file sharing capabilities.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80',
      githubUrl: '#',
      demoUrl: '#',
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A feature-rich blog platform with Markdown support, comments, and social sharing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      githubUrl: '#',
      demoUrl: '#',
      category: 'fullstack'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      try {
        // In a real application, you would fetch from your API
        // const response = await fetch('/api/projects');
        // const data = await response.json();
        
        // Using placeholder data for now
        setTimeout(() => {
          setProjects(placeholderProjects);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch projects');
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="heading-lg text-center">My Projects</h2>
        <p className="subtitle text-center max-w-2xl mx-auto">
          Discover a selection of my recent work spanning various technologies and domains.
          Each project represents my commitment to quality and attention to detail.
        </p>

        <div className="flex justify-center mt-8 space-x-2">
          {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-[440px] animate-pulse">
                <div className="w-full h-48 bg-muted rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-muted rounded mb-2 w-full"></div>
                  <div className="h-4 bg-muted rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-muted rounded w-4/6"></div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-6 bg-muted rounded-full w-16"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center mt-12 p-8 bg-destructive/10 rounded-lg">
            <p className="text-destructive font-medium">{error}</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden card-hover">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4 flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex items-center gap-1"
                  >
                    <span>Demo</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
