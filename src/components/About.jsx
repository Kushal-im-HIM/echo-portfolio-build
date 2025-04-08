
import React from 'react';
import { Code, Server, Layout, Database, Globe, Cpu } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout className="h-8 w-8 mb-2 text-primary" />, items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux'] },
    { name: 'Backend', icon: <Server className="h-8 w-8 mb-2 text-primary" />, items: ['Node.js', 'Express', 'RESTful APIs', 'Authentication', 'Security'] },
    { name: 'Database', icon: <Database className="h-8 w-8 mb-2 text-primary" />, items: ['MongoDB', 'Mongoose', 'Data Modeling', 'Aggregation', 'Indexing'] },
    { name: 'DevOps', icon: <Cpu className="h-8 w-8 mb-2 text-primary" />, items: ['Git/GitHub', 'CI/CD', 'Docker', 'AWS', 'Vercel'] },
    { name: 'Languages', icon: <Code className="h-8 w-8 mb-2 text-primary" />, items: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL'] },
    { name: 'Other', icon: <Globe className="h-8 w-8 mb-2 text-primary" />, items: ['Responsive Design', 'UX/UI', 'Performance', 'Testing', 'SEO'] },
  ];

  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="heading-lg">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              I'm a passionate full-stack developer with a focus on creating elegant, efficient, and user-friendly 
              web applications. With over 5 years of experience, I've worked on a variety of projects ranging 
              from small business websites to complex enterprise applications.
            </p>
            <p className="mt-4 text-muted-foreground">
              My approach combines technical expertise with creative problem-solving to deliver solutions that 
              not only meet but exceed client expectations. I'm committed to writing clean, maintainable code 
              and staying up-to-date with the latest industry trends and best practices.
            </p>
            <p className="mt-4 text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical articles and mentoring.
            </p>
          </div>
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                alt="Developer" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="heading-md text-center mb-12">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {skill.icon}
                    <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {skill.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
