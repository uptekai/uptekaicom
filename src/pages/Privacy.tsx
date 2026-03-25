import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Effective Date: March 2026 | Last Updated: March 2026</p>

        <div className="prose-custom space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            UpTek AI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit uptekai.com or engage our services.
          </p>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">Personal Information You Provide:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Full name and business name</li>
              <li>Email address and phone number</li>
              <li>Business information shared during consultations</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-3 font-semibold">Information Collected Automatically:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Device type and operating system</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">UpTek AI uses your information to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Provide, deliver, and improve our services</li>
              <li>Communicate with you regarding your project or inquiry</li>
              <li>Send scheduling confirmations and appointment reminders</li>
              <li>Send relevant business updates or service information (with your consent)</li>
              <li>Process payments and maintain financial records</li>
              <li>Comply with legal obligations</li>
              <li>Improve our website and user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">3. How We Share Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              UpTek AI does not sell, rent, or trade your personal information. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>With trusted third-party service providers who assist in our operations (e.g., Calendly, Google, payment processors)</li>
              <li>When required by law, regulation, or legal process</li>
              <li>To protect the rights, safety, or property of UpTek AI or others</li>
              <li>With your explicit written consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">4. Data Storage & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take the security of your information seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. Your data may be stored and processed in the United States or other countries where our service providers operate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">5. Cookies & Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You may choose to disable cookies through your browser settings, though this may affect some functionality of our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">6. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our website and services may contain links to or integrations with third-party platforms including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Calendly — for appointment scheduling</li>
              <li>Google — for calendar and meet services</li>
              <li>Instagram — for social media</li>
              <li>Fathom AI — for call recording and transcription</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              These third parties have their own privacy policies, and UpTek AI is not responsible for their practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, please contact us at <a href="mailto:hello@uptekai.com" className="text-primary hover:opacity-80">hello@uptekai.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">8. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. Client project data is typically retained for a minimum of 3 years for record-keeping purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              UpTek AI services are intended for businesses and individuals aged 18 and older. We do not knowingly collect personal information from children under the age of 13.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              UpTek AI may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
            </p>
            <p className="text-muted-foreground mt-2">
              UpTek AI<br />
              Founder & CEO: Alex Hacker<br />
              Email: <a href="mailto:hello@uptekai.com" className="text-primary hover:opacity-80">hello@uptekai.com</a><br />
              Website: <a href="https://uptekai.com" className="text-primary hover:opacity-80">uptekai.com</a>
            </p>
            <p className="text-muted-foreground mt-3">We will respond to all privacy-related inquiries within 5 business days.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
