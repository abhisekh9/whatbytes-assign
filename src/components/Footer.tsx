import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003d7a] text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="space-y-2">
              <Link href="/?category=All" className="block hover:underline text-white">
                All
              </Link>
              <Link href="/?category=Electronics" className="block hover:underline text-white">
                Electronics
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <div className="space-y-2">
              <Link href="/about" className="block hover:underline text-white">
                About Us
              </Link>
              <Link href="/contact" className="block hover:underline text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0a4d8a] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0a4d8a] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0a4d8a] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm">© 2024 American</p>
        </div>
      </div>
    </footer>
  );
}
