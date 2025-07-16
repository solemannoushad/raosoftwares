'use client'
import Hero from '@/components/Hero';
import React, { useEffect } from 'react'

function page() {

  

  useEffect(() => {
    document.title = "Privacy Policy - Devstella";
  }, []);

  return (
    <>
      <Hero title="Privacy " heighlight="Policy" />
      <div className="px-6 py-10 max-w-4xl mx-auto text-white bg-background mt-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-5">
          At <strong>Devstella</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
        </p>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, company details, and project description you voluntarily submit via our contact forms or newsletter subscription.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type, device information, and pages visited—collected automatically through analytics tools or cookies (if enabled).
            </li>
            <li>
              <strong>Service Data:</strong> Information related to your inquiries, project requests, or communications with our team.
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Respond to your inquiries or service requests</li>
            <li>Provide and manage our software development and consulting services</li>
            <li>Improve website functionality and user experience</li>
            <li>Send updates, newsletters, or service-related communications (only with your consent)</li>
            <li>Comply with legal obligations and regulatory requirements</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">3. Contact & Newsletter Forms</h2>
          <p>
            When you use our contact or newsletter forms, the information you provide (such as name, email, company, and project details) is sent securely using <strong>EmailJS</strong> and is used solely to respond to your request or manage your subscription. We do not use this information for unsolicited marketing.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">4. Cookies & Tracking Technologies</h2>
          <p>
            Our website may use cookies or similar technologies to enhance your browsing experience and analyze site traffic. You may choose to disable cookies through your browser settings, though this may affect site functionality.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">5. Data Sharing & Disclosure</h2>
          <p className="mb-2">We do not sell, rent, or trade your personal information. We may share your data only:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>With trusted service providers (such as EmailJS) assisting us in operating the website or delivering services (under strict confidentiality agreements)</li>
            <li>When required by law or legal proceedings</li>
            <li>To protect our legal rights, users, or the public</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
          <p>
            We take appropriate technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure. However, no method of internet transmission is 100% secure.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access, update, or delete your personal information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request details on how your data is used</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at <a className=" underline" href="mailto:info@devstella.com">info@devstella.com</a>.</p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">8. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>
            Devstella reserves the right to update this policy at any time. Any changes will be posted on this page with a revised "Effective Date." We encourage users to review this policy periodically.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
          <ul className="mt-2 ml-6">
            <li>📧 <a className=" underline" href="mailto:info@devstella.com">info@devstella.com</a></li>
            <li>📞 <a
                  href="https://wa.me/447459170475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-normal hover:text-foreground transition-colors"
                >
                  +447459170475
                </a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default page
