import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="bg-[#0f172a] text-gray-200 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Us Column */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-sans font-bold text-[#ffc107] mb-2 tracking-wide">Contact Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-lg">
                <MapPin className="h-6 w-6 text-[#ffc107] flex-shrink-0 mt-1" />
                <p className="font-sans leading-relaxed">
                  Gaur Nitai Home Bhakti Center, Padmasri<br />
                  Hills, Bandlaguda Jagir, Hyderabad
                </p>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Phone className="h-6 w-6 text-[#ffc107] flex-shrink-0" />
                <a href="tel:+919840286639" className="hover:text-white transition-colors">
                  +91 98402 86639
                </a>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Mail className="h-6 w-6 text-[#ffc107] flex-shrink-0" />
                <a href="mailto:GaurNitaiHome@gmail.com" className="hover:text-white transition-colors">
                  GaurNitaiHome@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <Clock className="h-6 w-6 text-[#ffc107] flex-shrink-0" />
                <span>Mon-Sat, 9 AM - 7 PM</span>
              </div>
            </div>
          </div>

          {/* Find Us Column */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-sans font-bold text-[#ffc107] mb-8 tracking-wide">Find Us</h2>
            <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg border-2 border-transparent">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.204558509015!2d78.38421861487588!3d17.354181888068772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95cfbc50d27b%3A0x6b7ce68260a9505c!2sGaur%20Nitai%20Home%20Bhakti%20Center!5e0!3m2!1sen!2sin!4v1689531557000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gaur Nitai Home Bhakti Center Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between relative">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full justify-center sm:justify-start">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1e293b] hover:bg-[#334155] flex items-center justify-center transition-colors">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1e293b] hover:bg-[#334155] flex items-center justify-center transition-colors">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1e293b] hover:bg-[#334155] flex items-center justify-center transition-colors">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-16 right-4 sm:right-8 w-12 h-12 bg-[#ffc107] hover:bg-[#e0a800] text-black rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 font-bold" />
      </button>
    </footer>
  );
}
