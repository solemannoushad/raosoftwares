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
    document.title = "Human Rights Policy - Devstella";
  }, []);

  return (
    <>
    {loading && <Loading />}
      <Hero title="Human Rights " heighlight="Policy" />
      <div className="px-6 py-10 max-w-4xl mx-auto text-white bg-background mt-8">
        <h1 className="text-3xl font-bold mb-6">Human Rights Policy</h1>
        <p className="mb-5">
          At <strong>Devstella</strong>, we are committed to upholding and promoting human rights in all aspects of our business operations. This Human Rights Policy outlines our principles and practices to ensure respect, dignity, and equality for all individuals affected by our activities.
        </p>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">1. Commitment to Human Rights</h2>
          <p>
            We support and respect internationally recognized human rights as set out in the Universal Declaration of Human Rights and the International Labour Organization's core conventions. We are committed to conducting our business in a manner that upholds these rights for our employees, clients, partners, and communities.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">2. Non-Discrimination & Equal Opportunity</h2>
          <p>
            We provide a workplace free from discrimination, harassment, and retaliation. Employment decisions are based on merit, qualifications, and business needs, regardless of race, color, gender, age, religion, national origin, disability, sexual orientation, or any other protected status.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">3. Fair Labor Practices</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Prohibition of child labor and forced labor in any form</li>
            <li>Compliance with applicable wage, hour, and benefits laws</li>
            <li>Respect for employees' rights to freedom of association and collective bargaining</li>
            <li>Safe and healthy working conditions for all staff</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">4. Health, Safety & Wellbeing</h2>
          <p>
            We are dedicated to providing a safe, healthy, and supportive work environment. We take proactive measures to prevent workplace injuries and promote the physical and mental wellbeing of our employees.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">5. Diversity & Inclusion</h2>
          <p>
            We value diversity and strive to create an inclusive culture where everyone feels respected and empowered to contribute. We encourage diverse perspectives and foster an environment of mutual respect.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">6. Community & Stakeholder Engagement</h2>
          <p>
            We engage with our stakeholders—including employees, clients, suppliers, and communities—to promote human rights awareness and best practices throughout our value chain.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">7. Reporting & Addressing Concerns</h2>
          <p>
            We encourage employees and stakeholders to report any concerns related to human rights violations or unethical conduct. Reports can be made confidentially and without fear of retaliation. We investigate all concerns promptly and take appropriate corrective action.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">8. Continuous Improvement</h2>
          <p>
            We regularly review and update our human rights practices to ensure ongoing compliance with laws and alignment with international standards. We are committed to continuous improvement and transparency in our human rights performance.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>If you have any questions or concerns about our Human Rights Policy, please contact:</p>
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
