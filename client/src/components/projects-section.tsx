import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Plus, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Auto Automotive World",
      description: "Comprehensive automotive platform featuring car listings, dealership management, and customer portal.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      url: "https://www.autoautomotiveworld.co.ke",
      tags: ["E-commerce", "Responsive"],
      status: "live"
    },
    {
      title: "Kadesh Enterprise",
      description: "Corporate business website with service portfolio, client management system, and contact integration.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      url: "https://kadeshenterprise.co.ke",
      tags: ["Corporate", "CMS"],
      status: "live"
    },
    {
      title: "ConnectLink",
      description: "Networking solutions platform with service booking, technical support, and client dashboard.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      url: "https://connectlink.co.ke",
      tags: ["Tech", "Dashboard"],
      status: "live"
    },
    {
      title: "NutrieFish",
      description: "Aquaculture and fish nutrition platform with product catalog, ordering system, and farm management tools.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      url: "https://nutrieefish.co.ke",
      tags: ["Agriculture", "E-commerce"],
      status: "live"
    },
    {
      title: "YOLO Tickets",
      description: "Event ticketing platform with booking system, payment integration, and event management dashboard.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      url: "https://www.yolotickets.co.ke",
      tags: ["Events", "Payment"],
      status: "development"
    },
  ];

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      "E-commerce": "bg-tech-primary/10 text-tech-primary",
      "Responsive": "bg-tech-accent/10 text-tech-accent",
      "Corporate": "bg-tech-primary/10 text-tech-primary",
      "CMS": "bg-tech-secondary/10 text-tech-secondary",
      "Tech": "bg-tech-accent/10 text-tech-accent",
      "Dashboard": "bg-tech-secondary/10 text-tech-secondary",
      "Agriculture": "bg-tech-accent/10 text-tech-accent",
      "Events": "bg-tech-primary/10 text-tech-primary",
      "Payment": "bg-tech-secondary/10 text-tech-secondary",
    };
    return colors[tag] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Projects</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover some of our recent work and see how we've helped businesses across Kenya achieve their digital transformation goals.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          animate={isInView ? "animate" : "initial"}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={cardHover}
              className="project-card"
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={`${project.title} website`} 
                    className="w-full h-48 object-cover"
                  />
                  {project.status === "development" && (
                    <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-medium">
                      In Development
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className={`px-3 py-1 text-xs rounded-full ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.status === "live" ? (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="tech-primary hover:bg-tech-primary/10"
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={18} />
                        </a>
                      </Button>
                    ) : (
                      <Clock className="text-gray-400" size={18} />
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={cardHover}
            className="project-card"
          >
            <Card className="h-full bg-gradient-to-br from-tech-primary to-tech-secondary text-white flex items-center justify-center">
              <CardContent className="p-8 text-center">
                <Plus className="text-4xl mb-4 opacity-80 mx-auto" size={48} />
                <h3 className="text-xl font-bold mb-3">Your Project Next?</h3>
                <p className="opacity-90 mb-4">Ready to bring your vision to life?</p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-white text-tech-primary hover:bg-gray-100 font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
