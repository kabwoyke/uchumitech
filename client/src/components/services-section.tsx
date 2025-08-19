import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Settings, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Minimal, fast-loading websites and web applications built with modern frameworks. Clean design meets powerful functionality.",
      features: ["Modern Frameworks", "Performance Optimized", "Responsive Design", "SEO Ready"],
      color: "bg-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Cross-platform mobile apps with intuitive interfaces. Built for performance and user engagement across all devices.",
      features: ["Cross-Platform", "Native Performance", "Clean UI/UX", "App Store Ready"],
      color: "bg-gray-800",
    },
    {
      icon: Settings,
      title: "Custom Software",
      description: "Tailored business solutions that streamline workflows and enhance productivity. Scalable architecture for growing businesses.",
      features: ["Business Logic", "API Development", "Database Design", "Cloud Solutions"],
      color: "bg-purple-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our <span className="text-blue-600 font-medium">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Professional digital solutions designed to elevate your business with clean, efficient technology.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          animate={isInView ? "animate" : "initial"}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={cardHover}
              className="service-card"
            >
              <Card className="h-full border-0 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
