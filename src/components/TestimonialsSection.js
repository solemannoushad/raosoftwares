// TestimonialsSection.js
import React from 'react';
import Heading from './Heading';

function TestimonialsSection() {
  return (
    <section className="py-16 bg-background-100">
      <Heading title={"Client"} heighlight={"Testinomials"} />
      <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <p className="text-lg text-gray-700 mb-4">
            "This company provided outstanding service. The team was professional, responsive, and delivered results beyond expectations!"
          </p>
          <h3 className="font-semibold text-white">John Doe</h3>
          <p className="text-foreground">CEO, ExampleCorp</p>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <p className="text-lg text-gray-700 mb-4">
            "Amazing experience! Their expertise in our industry helped us achieve incredible growth in just a few months."
          </p>
          <h3 className="font-semibold text-white">Jane Smith</h3>
          <p className="text-foreground">Founder, InnovateTech</p>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <p className="text-lg text-gray-700 mb-4">
            "A wonderful team to work with. They understood our vision and turned it into reality, making the process smooth and enjoyable."
          </p>
          <h3 className="font-semibold text-white">Michael Brown</h3>
          <p className="text-foreground">Managing Director, GreenFields</p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
