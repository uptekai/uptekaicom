import { motion } from "framer-motion";

const stats = [
  {
    value: "80%",
    label: "Less Time on Manual Tasks",
    description:
      "Our clients reclaim hours every week by automating repetitive processes that used to eat their day.",
  },
  {
    value: "3x",
    label: "Faster Lead Response",
    description:
      "Automated follow-up systems mean leads are contacted instantly — before they go cold or find a competitor.",
  },
  {
    value: "100%",
    label: "Custom Built For You",
    description:
      "Every system we build is designed specifically for your business. No templates. No shortcuts.",
  },
];

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Real Results
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The Numbers <span className="text-gradient">Speak</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center bg-card border border-border rounded-xl p-10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <span className="text-5xl md:text-6xl font-display font-bold text-gradient">
                {stat.value}
              </span>
              <h3 className="font-display text-xl font-semibold mt-4 mb-3">
                {stat.label}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
