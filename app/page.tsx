'use client';

import { useState } from 'react';
import { Menu, X, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const navItems = ['Home', 'About Us', 'Our Services', 'Our Portfolio', 'Our Team', 'Contact'];

  const stats = [
    { value: '500+', label: 'CLIENTS' },
    { value: '1,800+', label: 'PROJECTS' },
    { value: '15k+', label: 'DIGITAL CAMPAIGN' },
    { value: '14+', label: 'YEARS EXPERIENCE' }
  ];

  const services = [
    { name: 'Creative Service', icon: '🎨' },
    { name: 'Media Buying & Selling Service', icon: '📺' },
    { name: 'Digital Marketing Service', icon: '📱' },
    { name: 'Social Media Marketing', icon: '💬' },
    { name: 'Website Design & Development', icon: '💻' },
    { name: 'SEO Service', icon: '🔍' },
    { name: 'Google AdWords / Performance', icon: '📊' },
    { name: 'Content Marketing & Management', icon: '✍️' },
    { name: 'Influencer Marketing Service', icon: '⭐' }
  ];

  const features = [
    'All in One Service',
    'Clear and Simple Work',
    'Team Value Your Ideas',
    'Open and Honest',
    'Friendly and Quick Team',
    'Best Digital Marketing Agency in Gurgaon'
  ];

  const testimonials = [
    { name: 'Client 1', text: 'Excellent service and professional team. Highly recommended!', company: 'Tech Corp' },
    { name: 'Client 2', text: 'Outstanding results in digital marketing. Our ROI increased significantly.', company: 'Retail Plus' },
    { name: 'Client 3', text: 'Creative solutions and timely delivery. Great experience!', company: 'Fashion Brand' },
    { name: 'Client 4', text: 'Best agency we have worked with. Professional and dedicated.', company: 'Startup Inc' },
    { name: 'Client 5', text: 'Transformed our online presence completely. Amazing work!', company: 'Food Chain' },
    { name: 'Client 6', text: 'Expert team with deep knowledge in SEO and digital marketing.', company: 'Auto Dealer' },
    { name: 'Client 7', text: 'Responsive team and excellent customer service throughout.', company: 'Education Hub' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              design<span className="text-red-600">pundit</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block py-2 hover:text-red-600 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              WE DON'T TELL YOUR
              <br />
              BRAND'S FUTURE
              <br />
              <span className="block mt-2">
                WE DESIGN IT<span className="text-red-600 text-8xl">.</span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="our-services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-800"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              We Build Brands That People <span className="text-red-600">Remember</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 14 years of experience and 1,800+ successful projects, we are a leading digital
              marketing and design agency specializing in creating memorable brand experiences. Our team
              of experts combines creativity with data-driven strategies to deliver exceptional results
              for 500+ satisfied clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300"
              >
                <div className="text-red-600 text-3xl mb-4">✓</div>
                <h3 className="text-xl font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let's Meet & Build Something
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Wonderfully Exceptional <span className="text-red-600">TOGETHER</span>
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Client <span className="text-red-600">Testimonials</span>
          </h2>

          <div className="relative bg-gray-900 p-8 md:p-12 rounded-lg border border-gray-800">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="font-semibold text-xl mb-1">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-red-600">
                {testimonials[currentTestimonial].company}
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-red-600' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-gray-900 py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                design<span className="text-red-600">pundit</span>
              </h3>
              <p className="text-gray-400">
                Leading Digital Marketing & Design Agency
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-gray-400 hover:text-red-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Design Pundit. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
