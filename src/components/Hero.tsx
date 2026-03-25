import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">
            AI Automation Agency
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8">
            Save Time.
            <br />
            <span className="text-gradient">Make Money.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            We build intelligent AI systems that automate your workflows,
            eliminate busywork, and unlock new revenue — so you can focus on growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://calendly.com/alex-uptekai/free-consultation-uptek-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-glow"
          >
            Book a Free Consultation <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="border border-border text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-muted transition-colors inline-flex items-center justify-center"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
