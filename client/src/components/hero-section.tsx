import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/90 via-tech-primary/80 to-tech-purple/75"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-tech-accent rounded-full opacity-25"
      />
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-full opacity-30"
      />
      <motion.div 
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-20 w-12 h-12 bg-tech-secondary rounded-full opacity-30"
      />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.h1 
          {...fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Empowering <span className="text-blue-400">Digital</span> Innovation
        </motion.h1>
        
        <motion.h2 
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-light mb-8"
        >
          with Cutting-Edge <span className="text-blue-300 font-semibold">Technology Solutions</span>
        </motion.h2>
        
        <motion.p 
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-10"
        >
          From stunning websites to powerful mobile apps and custom software - we transform your vision into digital reality
        </motion.p>
        
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="ml-3" size={20} />
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
