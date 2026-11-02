import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#493a35] text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-3">LITTLE STAR</h2>
          <p className="text-sm text-white/70 leading-7">
            Little Star Public School is committed to nurturing young minds
            through quality education, values and meaningful learning.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/admissions">Admissions</Link></li>
            <li><Link href="/campus-life">Campus Life</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link href="/media">Photo Gallery</Link></li>
            <li><Link href="/resources">Notices & Downloads</Link></li>
            <li><Link href="/mandatory-disclosure">Mandatory Disclosure</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-white/70 leading-6">
            <p>Little Star Public School</p>
            <p>Jharsuguda, Odisha, India</p>
            <p>Phone: Add official school number</p>
            <p>Email: Add official school email</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
        <p>© {new Date().getFullYear()} Little Star Public School. All rights reserved.</p>
        <p>Designed with care for young learners.</p>
      </div>
    </footer>
  );
}