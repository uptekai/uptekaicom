import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="UpTek AI" className="h-10 w-10 rounded-lg" />
              <span className="font-display text-xl font-bold text-gradient">UPTEK AI</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI automation solutions that save time and make money.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <a href="mailto:hello@uptekai.com" className="text-sm text-primary hover:opacity-80 transition-opacity">
              hello@uptekai.com
            </a>
            <p className="text-muted-foreground text-sm mt-3">
              <a
                href="https://calendly.com/alex-uptekai/free-consultation-uptek-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                Book a Free Consultation →
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UpTek AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
