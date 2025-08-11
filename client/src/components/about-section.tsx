import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
            <motion.div
              {...slideInLeft}
              animate={isInView ? "animate" : "initial"}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="kenya-blue">UchumiTech</span>
                <span className="kenya-orange">Solution</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Born in the heart of Kenya's thriving tech ecosystem, UchumiTechSolution is on a mission to bridge the digital gap for businesses across East Africa. We believe that every business, regardless of size, deserves access to world-class technology solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team of passionate developers, designers, and digital strategists combines local market knowledge with global best practices to deliver solutions that don't just meet expectations - they exceed them.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={`text-3xl font-bold mb-2 ${
                      index === 0 ? 'kenya-blue' : 
                      index === 1 ? 'kenya-green' : 'kenya-orange'
                    }`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              {...slideInRight}
              animate={isInView ? "animate" : "initial"}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="UchumiTechSolution team working together" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
