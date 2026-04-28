import { motion } from "framer-motion";
import { Zap, Bot, BarChart3, MessageSquare, Workflow, Cog } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Custom AI-powered systems that handle repetitive tasks, freeing your team to focus on what matters.",
  },
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description: "Streamline your business processes with intelligent workflows that run 24/7 without manual input.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description: "Automated follow-ups, lead nurturing, and client communication that never misses a beat.",
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "AI-driven lead capture and CRM automation to keep your pipeline full and organized.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Automated reporting and analytics dashboards that give you real-time business intelligence.",
  },
  {
    icon: Cog,
    title: "Custom AI Tools",
    description: "With 50+ AI systems in our toolkit, it's not a question of capability — it's about finding the right combination that fits your business best.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">What We Deliver</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Outcomes, Not <span className="text-gradient">Just Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't sell AI for the sake of it. Every solution is built around a clear business outcome — saving time, cutting costs, and driving revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-glow flex items-center justify-center mb-5">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
