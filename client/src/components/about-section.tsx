import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                About <span className="text-blue-600 font-medium">Protrixx Tech Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                We craft minimal, professional digital experiences that prioritize functionality and elegance. Our approach combines clean design principles with cutting-edge technology to deliver solutions that are both beautiful and powerful.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                From innovative web applications to intelligent AI tools, we focus on creating products that enhance productivity and simplify complex workflows.
              </p>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index === 0 ? 'tech-primary' : 
                      index === 1 ? 'tech-secondary' : 'text-blue-600'
                    }`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Protrixx Tech Solutions - Modern workspace" 
                className="rounded-3xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
