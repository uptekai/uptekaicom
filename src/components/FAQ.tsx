import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can we see results?",
    answer:
      "Most clients see measurable improvements within the first 2–4 weeks of implementation. We prioritize quick wins that deliver immediate ROI while building toward long-term systems that compound results over time.",
  },
  {
    question: "Do we need to change our existing tools or systems?",
    answer:
      "No. We work with what you already have. Our solutions integrate with your existing tools — CRMs, email platforms, scheduling software, and more. No rip-and-replace, just smarter systems layered on top.",
  },
  {
    question: "What kind of ROI can we expect?",
    answer:
      "Results vary by business, but our clients typically recover 15–30+ hours per week in manual work and see measurable revenue increases from faster lead response, fewer missed opportunities, and streamlined operations. We focus on outcomes you can measure, not features you won't use.",
  },
  {
    question: "Is this only for large companies?",
    answer:
      "Not at all. We work with businesses of all sizes — from solo founders to growing teams. If you're losing time to manual processes or leaving money on the table, we can help. In fact, smaller businesses often see the fastest impact.",
  },
  {
    question: "What if we're not tech-savvy?",
    answer:
      "That's exactly who we're built for. You don't need to understand AI — you just need to know what results you want. We handle the technical side completely. You'll get systems that are simple to use and easy to maintain.",
  },
  {
    question: "How much does this cost?",
    answer:
      "Every project is scoped and priced based on your specific needs and goals. We offer a free consultation where we'll assess your situation and give you a clear picture of what's involved — no pressure, no hidden fees. The question isn't whether you can afford it — it's how much you're already losing without it.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Questions You <span className="text-gradient">May Have</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Clear answers to common concerns — no jargon, just straight talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
