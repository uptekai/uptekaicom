import { motion } from "framer-motion";
import { Shield, Clock, Brain, Users } from "lucide-react";

const values = [
  { icon: Brain, label: "Strategic Expertise", desc: "Deep knowledge of AI and automation applied to real business problems." },
  { icon: Clock, label: "Fast Execution", desc: "We move quickly from strategy to deployment — no fluff, just results." },
  { icon: Shield, label: "Reliable Systems", desc: "Production-grade automations built to run reliably at scale." },
  { icon: Users, label: "Dedicated Partnership", desc: "You work directly with us. Clear communication, full transparency." },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Why UpTek AI</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              A Team Built for <span className="text-gradient">Results</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At UpTek AI, we don't just implement technology — we architect solutions that transform
              the way you do business. Our team combines strategic thinking with hands-on technical
              execution to deliver AI systems that actually move the needle.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When you work with us, you get a dedicated point of contact who understands your
              business inside and out — backed by a team of specialists who bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <div key={v.label} className="bg-card border border-border rounded-xl p-6">
                <v.icon className="text-primary mb-3" size={28} />
                <h4 className="font-display font-semibold mb-2">{v.label}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
