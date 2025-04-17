import React from 'react';
import Link from 'next/link';

export default function footer2() {
  return (
    <footer className="bg-[hsl(240,5.9%,10%)] text-[hsl(0,0%,98%)] py-6 border-t border-[hsl(0,0%,14.9%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-[hsl(0,0%,63.9%)]">© 2025 ResQAlert. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <Link href="/privacy" className="text-[hsl(0,0%,63.9%)] hover:text-[hsl(0,0%,98%)] transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[hsl(0,0%,63.9%)] hover:text-[hsl(0,0%,98%)] transition">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-[hsl(0,0%,63.9%)] hover:text-[hsl(0,0%,98%)] transition">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
