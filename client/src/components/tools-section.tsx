import { motion } from "framer-motion";
import { Download, Brain, GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

const ToolsSection = () => {
  const tools = [
    {
      name: "Protrixx YouTube Downloader",
      description: "Download YouTube videos in high quality with a clean, minimal interface. Fast, reliable, and completely free.",
      icon: Download,
      features: ["HD Quality Downloads", "Multiple Formats", "Batch Processing", "No Watermarks"],
      color: "bg-red-500",
      href: "#"
    },
    {
      name: "ProtrixxAI",
      description: "Advanced AI assistant powered by cutting-edge language models. Streamline your workflow with intelligent automation.",
      icon: Brain,
      features: ["Natural Language Processing", "Smart Automation", "Custom Workflows", "API Integration"],
      color: "bg-purple-500",
      href: "#"
    },
    {
      name: "ProtrixxLearn",
      description: "Interactive learning platform with personalized courses and hands-on projects. Master new skills efficiently.",
      icon: GraduationCap,
      features: ["Interactive Courses", "Progress Tracking", "Hands-on Projects", "Certification"],
      color: "bg-green-500",
      href: "#"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Protrixx <span className="text-blue-600 font-medium">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Discover our suite of professional tools designed to enhance productivity and simplify your digital workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {tool.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {tool.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-600 font-medium py-3 rounded-xl transition-all duration-300 cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 font-light">
              More innovative tools coming soon. Stay tuned for updates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;