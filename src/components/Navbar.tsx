import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="UpTek AI" className="h-10 w-10 rounded-lg" />
          <span className="font-display text-xl font-bold text-gradient">UPTEK AI</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <a
            href="https://calendly.com/alex-uptekai/free-consultation-uptek-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">Contact</a>
          <a
            href="https://calendly.com/alex-uptekai/free-consultation-uptek-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
