import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import logo from 'figma:asset/ebec491d079977f057b38d282934f6ca9969a7d5.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918886229339', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Arka Property Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold">Arka Property</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in finding the perfect property. We bring dreams to life with premium real estate solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
                { name: 'Enquiry', path: '/enquiry' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <a href="tel:8886229339" className="text-gray-300 hover:text-orange-400 transition-colors">
                  8886229339
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:Amazonerealty@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors break-all">
                  Amazonerealty@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  HRT Plaza, 2nd Floor, Benz Circle, Vijayawada, AP
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Monday - Saturday</p>
                  <p>10:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Sunday</p>
                  <p>10:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
            <button
              onClick={handleWhatsApp}
              className="mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105 text-sm"
            >
              Connect on WhatsApp
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Arka Property. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm group"
            >
              <span>Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
