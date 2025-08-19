import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MapPin, Clock, Check, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again or contact us directly at edwardkabwoy@gmail.com",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "edwardkabwoy@gmail.com",
      bgColor: "bg-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Nairobi, Kenya",
      bgColor: "bg-kenya-green",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Within 24 hours",
      bgColor: "bg-kenya-orange",
    },
  ];

  const whyChooseUs = [
    "Local expertise with global standards",
    "Affordable pricing for Kenyan businesses",
    "Ongoing support and maintenance",
    "Fast turnaround times",
  ];

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12" ref={ref}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-gray-300 focus:ring-2 focus:ring-tech-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-gray-300 focus:ring-2 focus:ring-tech-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 border-gray-300 focus:ring-2 focus:ring-tech-primary focus:border-transparent"
                    placeholder="Tell us about your project or how we can help you"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-tech-primary hover:bg-tech-secondary text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-3" size={16} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        className="flex items-start"
                      >
                        <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                          <info.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-gray-600">{info.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-8 pt-8 border-t border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Why Choose UchumiTechSolution?</h4>
                    <ul className="space-y-2">
                      {whyChooseUs.map((reason, index) => (
                        <motion.li
                          key={reason}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                          className="flex items-center text-gray-600"
                        >
                          <Check className="text-kenya-green mr-3 flex-shrink-0" size={16} />
                          {reason}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
