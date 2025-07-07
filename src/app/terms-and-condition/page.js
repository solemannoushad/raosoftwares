'use client'
import Hero from '@/components/Hero';
import Loading from '@/components/Loading';
import React, { useEffect, useState } from 'react'

function page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  

  useEffect(() => {
    document.title = "Terms and Condition - Devstella";
  }, []);

  return (
    <>
    {loading && <Loading />}
      <Hero title="terms and " heighlight="condition" />
      <div className="px-6 py-10 max-w-4xl mx-auto text-white bg-background mt-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-5">
          Welcome to <strong>Devstella</strong>. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully. If you do not agree with any part of these terms, you must not use our website or services.
        </p>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By using our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy and any other policies referenced herein.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">2. Use of Website</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</li>
            <li>You must not misuse our website by knowingly introducing viruses, trojans, or other malicious material.</li>
            <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on this website are the property of Devstella or its licensors. You may not reproduce, distribute, or use any content from this site without our prior written consent.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">4. Service Terms</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>All project proposals, quotes, and agreements are subject to separate written contracts.</li>
            <li>We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion.</li>
            <li>Delivery timelines and project outcomes are subject to mutual agreement and may vary based on requirements.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            Devstella is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services. We do not guarantee that the website will be error-free or uninterrupted.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of use of those external sites.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website constitutes acceptance of the revised terms.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, please contact:</p>
          <ul className="mt-2 ml-6">
            <li>📧 <a className=" underline" href="mailto:info@devstella.com">info@devstella.com</a></li>
            <li>📞<a
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
