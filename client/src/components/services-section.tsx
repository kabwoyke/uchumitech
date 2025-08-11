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
      description: "Custom websites and web applications built with modern technologies. From simple business sites to complex e-commerce platforms, we create digital experiences that convert.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"],
      gradient: "from-tech-primary to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth. From concept to app store deployment, we handle it all.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
      gradient: "from-tech-accent to-cyan-500",
    },
    {
      icon: Settings,
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed specifically for your business needs. From automation tools to enterprise systems, we build software that scales.",
      features: ["Business Automation", "Database Solutions", "API Development", "Cloud Integration"],
      gradient: "from-tech-secondary to-blue-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            We offer comprehensive digital solutions tailored to transform your business and accelerate your growth in the digital landscape.
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
              <Card className="h-full border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="text-white text-2xl" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <Check className="text-tech-accent mr-3" size={16} />
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
