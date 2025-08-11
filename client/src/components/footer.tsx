import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "services", label: "Services" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Custom Software",
    "UI/UX Design",
    "Digital Marketing",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const contactDetails = [
    { icon: Mail, text: "edwardkabwoy@gmail.com" },
    { icon: MapPin, text: "Nairobi, Kenya" },
    { icon: Clock, text: "Mon - Fri: 9AM - 6PM" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div {...fadeInUp}>
            <div className="text-2xl font-bold mb-4">
              <span className="tech-primary">UchumiTech</span>
              <span className="tech-purple">Solution</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses worldwide with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-tech-primary rounded-full flex items-center justify-center hover:bg-tech-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              {contactDetails.map((detail, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <detail.icon className="mr-3 tech-accent flex-shrink-0" size={16} />
                  <span className="text-sm">{detail.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; 2024 UchumiTechSolution. All rights reserved. Made with{" "}
            <span className="text-red-500">❤️</span> for innovation.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
