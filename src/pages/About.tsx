import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-jewel to-gold text-white py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold mb-4">About Jewellery Elegance</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Celebrating luxury, craftsmanship, and timeless elegance since 2010
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        {/* Our Story */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-jewel mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2010, Jewellery Elegance began with a simple vision: to bring world-class,
              authentic luxury jewellery to discerning customers around the globe. What started as
              a small boutique has grown into a trusted destination for premium jewellery.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Each piece in our collection is carefully curated and sourced from master craftsmen
              who share our commitment to excellence. We believe that jewellery is more than just
              an accessory—it's a statement of elegance, a celebration of precious moments, and an
              investment in timeless beauty.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to serve thousands of satisfied customers worldwide, providing
              them with authentic, certified jewellery and exceptional service.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden h-96 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=500&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold text-jewel mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '✨',
                title: 'Excellence',
                desc: 'We maintain the highest standards in quality and craftsmanship',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                desc: 'Authentic products backed by certified authenticity guarantees',
              },
              {
                icon: '❤️',
                title: 'Customer First',
                desc: 'Your satisfaction is our top priority in everything we do',
              },
              {
                icon: '🌍',
                title: 'Sustainability',
                desc: 'Ethical sourcing and responsible business practices',
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center card p-8">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-xl text-jewel mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-lightBg rounded-lg py-16 px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years in Business' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '1000+', label: 'Products' },
              { number: '50+', label: 'Master Craftsmen' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-display font-bold text-gold mb-2">{stat.number}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Highlights */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold text-jewel mb-12 text-center">
            Our Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Led by industry experts with decades of combined experience in luxury
            jewellery, our team is dedicated to bringing you the finest pieces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Maria Rossi', role: 'Founder & CEO', icon: '👩‍💼' },
              { name: 'James Williams', role: 'Chief Jeweller', icon: '👨‍🎨' },
              { name: 'Sarah Chen', role: 'Design Director', icon: '👩‍🔬' },
            ].map((member, idx) => (
              <div key={idx} className="card p-8 text-center hover:shadow-lg transition">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="font-display font-bold text-xl text-jewel mb-1">{member.name}</h3>
                <p className="text-gold font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">
                  With years of expertise in the luxury jewellery industry
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold text-jewel mb-12 text-center">
            Certifications & Awards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ISO Certified', icon: '🏆' },
              { name: 'GIA Member', icon: '💎' },
              { name: 'Fair Trade', icon: '✓' },
              { name: 'Luxury Brand', icon: '⭐' },
            ].map((cert, idx) => (
              <div key={idx} className="card p-6 text-center">
                <div className="text-5xl mb-3">{cert.icon}</div>
                <p className="font-semibold text-jewel">{cert.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-jewel to-gold text-white rounded-lg py-16 px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Explore our exquisite collection and discover the jewellery of your dreams.
          </p>
          <Link to="/products" className="btn bg-white text-gold hover:bg-gray-100 font-bold py-3 px-8 text-lg inline-block">
            Shop Now
          </Link>
        </section>
      </div>

      {/* Timeline */}
      <section className="bg-lightBg py-20 px-4 md:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-jewel mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {[
              { year: '2010', event: 'Founded in New York as a boutique jewellery store' },
              { year: '2013', event: 'Expanded to 3 physical locations' },
              { year: '2016', event: 'Launched online store, reached global customers' },
              { year: '2019', event: 'Became ISO certified and joined luxury brands network' },
              { year: '2024', event: 'Serving 50,000+ happy customers worldwide' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                  {idx < 4 && <div className="w-1 h-16 bg-gold mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-bold text-xl text-jewel mb-1">{item.year}</h3>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
