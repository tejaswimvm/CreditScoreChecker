import { FaFacebookF, FaTwitter, FaYoutube, FaSpotify } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  site: [
    { name: "About Us", url: "/aboutus" },

    { name: "Contact Us", url: "/contactus" },
    { name: "Terms of Use", url: "/termsofuse" },

    { name: "Privacy Policy", url: "/privacypolicy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0  text-white">
           <span>Livet.in</span>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          {footerLinks.site.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/mint.live"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-gray-400 hover:text-white text-xl transition-colors" />
          </a>
          <a
            href="https://twitter.com/livemint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-400 hover:text-white text-xl transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCUI9vm69ZbAqRK3q3vKLWCQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-gray-400 hover:text-white text-xl transition-colors" />
          </a>
          <a
            href="https://spotify.link/ugizqq4SZDb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify className="text-gray-400 hover:text-white text-xl transition-colors" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-4 border-t border-gray-800 pt-3">
        © 2025 HT Digital Streams Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
