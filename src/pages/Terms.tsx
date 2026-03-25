import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Effective Date: March 2026 | Last Updated: March 2026</p>

        <div className="prose-custom space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            Please read these Terms of Service carefully before using the services provided by UpTek AI. By accessing our website or engaging our services, you agree to be bound by these terms.
          </p>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing uptekai.com or engaging UpTek AI for services, you confirm that you are at least 18 years of age, have the legal authority to enter into this agreement, and agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">2. Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              UpTek AI provides customized AI automation services to businesses. Services may include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Business process automation design and implementation</li>
              <li>AI-powered workflow systems</li>
              <li>Lead generation and CRM automation</li>
              <li>Customer communication automation</li>
              <li>Data reporting and analytics automation</li>
              <li>Custom AI tool development and integration</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              All services are provided on a project-by-project basis as outlined in a separately agreed upon proposal or contract between UpTek AI and the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">3. Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">As a client of UpTek AI, you agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Provide accurate and complete information necessary to perform the services</li>
              <li>Respond to communications in a timely manner to avoid project delays</li>
              <li>Ensure you have legal rights to any data, content, or systems you provide to UpTek AI</li>
              <li>Use all delivered automation systems in compliance with applicable laws and regulations</li>
              <li>Not use UpTek AI services for any unlawful, harmful, or unethical purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">4. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Payment terms will be outlined in each individual proposal or service agreement. General terms include:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>All pricing is custom and agreed upon prior to project commencement</li>
              <li>A deposit may be required before work begins</li>
              <li>Final payment is due upon project completion unless otherwise agreed</li>
              <li>Late payments may result in project suspension or additional fees</li>
              <li>All payments are non-refundable unless otherwise stated in writing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Upon receipt of full payment, the client receives ownership of all custom-built automation systems and deliverables created specifically for them. UpTek AI retains the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Use general methodologies, frameworks, and knowledge gained during projects</li>
              <li>Showcase project results as case studies (without disclosing confidential information)</li>
              <li>Retain ownership of any proprietary tools, templates, or pre-existing systems used in delivery</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">6. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              UpTek AI agrees to keep all client business information, data, processes, and materials confidential. We will not share, sell, or disclose client information to third parties without express written consent, except as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              UpTek AI shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of revenue, loss of data, or business interruption. Our total liability in any matter shall not exceed the total fees paid by the client for the specific service in question.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">8. No Guarantee of Results</h2>
            <p className="text-muted-foreground leading-relaxed">
              While UpTek AI strives to deliver high-quality automation solutions, we do not guarantee specific business outcomes, revenue increases, or performance results. Results may vary based on factors outside our control, including market conditions, business operations, and implementation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Either party may terminate a service agreement with written notice. In the event of termination:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>The client is responsible for payment of all work completed up to the termination date</li>
              <li>UpTek AI will deliver all completed work to the client upon final payment</li>
              <li>Any deposits paid are non-refundable unless otherwise agreed in writing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be resolved through good-faith negotiation, and if necessary, binding arbitration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              UpTek AI reserves the right to update or modify these Terms of Service at any time. Changes will be posted on our website at uptekai.com. Continued use of our services following any changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display font-semibold mb-3">12. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              UpTek AI<br />
              Founder & CEO: Alex Hacker<br />
              Email: <a href="mailto:hello@uptekai.com" className="text-primary hover:opacity-80">hello@uptekai.com</a><br />
              Website: <a href="https://uptekai.com" className="text-primary hover:opacity-80">uptekai.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
