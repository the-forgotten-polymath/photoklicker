import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-20 pb-8 px-4 md:px-6 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="col-span-1">
          <Link href="/" className="font-display text-white lowercase text-3xl tracking-wide mb-4 inline-block hover:opacity-90">
            photoklicker
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
            Where your moments become timeless masterpieces! Capturing the magic of pre-weddings and weddings across Uttarakhand and beyond.
          </p>
          <div className="flex gap-4">
            {['Fb', 'Tw', 'Ig', 'In'].map((social, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-primary hover:border-primary transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'].map((link, i) => (
              <li key={i}>
                <Link href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wide">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h4 className="font-semibold text-lg mb-6">Connect Us</h4>
          <ul className="space-y-4 text-sm text-white/60 leading-relaxed">
            <li>
              <strong className="text-white">Address:</strong><br />
              Shop No. 35, Chandra Nagar Rd, East Rest Camp, Race Course, Dehradun, Uttarakhand 248001
            </li>
            <li>
              <strong className="text-white">Phone:</strong><br />
              +91 9359995662
            </li>
            <li>
              <strong className="text-white">Email:</strong><br />
              photoklicker9@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-1">
          <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
          <p className="text-white/60 text-sm mb-4">
            Subscribe to get the latest portfolios, deals, and photography guides.
          </p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary text-white"
            />
            <button 
              type="button" 
              className="bg-primary text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-primary-dark transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Photoklicker Photography. All rights reserved.</p>
        <p>Designed & Developed by Nano Computing</p>
      </div>
    </footer>
  );
}
