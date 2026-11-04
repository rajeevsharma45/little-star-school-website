
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Campus Life",
    children: [
      { label: "Our Team", href: "/our-team" },
      { label: "Facilities", href: "/facilities" },
    ],
  },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setCampusOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      
{/* Top Contact Bar */}
<div className="bg-[#493a35] text-white text-xs">
  <div className="max-w-7xl mx-auto px-5 py-2 flex flex-wrap items-center justify-between gap-3">

    <div className="flex flex-wrap items-center gap-5">

      {/* Email */}
      <a
        href="mailto:lsps.jsg@gmail.com"
        className="flex items-center gap-2 hover:text-[#E8DDC9] transition-colors"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6l9 7 9-7M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
          />
        </svg>
        <span>lsps.jsg@gmail.com</span>
      </a>

      {/* Phone */}
      <a
        href="tel:+918763220914"
        className="flex items-center gap-2 hover:text-[#E8DDC9] transition-colors"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 0 1 2-2h3l2 5-2 2a15 15 0 0 0 6 6l2-2 5 2v3a2 2 0 0 1-2 2C10 21 3 14 3 5Z"
          />
        </svg>
        <span>+91 8763220914</span>
      </a>

    </div>

    {/* Location */}
    <span className="flex items-center gap-2">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
      Power House Road, Sarbahal, Jharsuguda, Odisha
    </span>

  </div>
</div>


      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-[#eee5d8]">
        <div className="max-w-7xl mx-auto px-5 min-h-[82px] flex items-center justify-between gap-4">

          {/* School Logo and Name */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/logo/logo.png"
                alt="Little Star Public School Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-[#493a35]">
                LITTLE STAR
              </h1>
              <p className="text-[10px] tracking-[2px] text-[#c24d4a] font-semibold">
                PUBLIC SCHOOL
              </p>
              <p className="text-[10px] text-gray-500">
                Nursery to Class X
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">

                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm font-medium text-[#493a35] hover:text-[#c24d4a] transition-colors"
                      aria-haspopup="true"
                    >
                      {item.label}

                      <svg
                        className="h-4 w-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                    </button>

                    {/* Desktop Dropdown */}
                    <div className="invisible absolute left-0 top-full z-50 w-52 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-[#eee5d8] bg-white p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-4 py-3 text-sm font-medium text-[#493a35] transition hover:bg-[#F8F5EF] hover:text-[#c24d4a]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[#493a35] hover:text-[#c24d4a] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

              </div>
            ))}
          </nav>

          {/* Desktop Enquiry Button */}
          <Link
            href="/admissions"
            className="hidden lg:inline-flex bg-[#c24d4a] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#7a3032] transition-colors"
          >
            Enquire Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-[#eee5d8] text-[#493a35] hover:bg-[#f8f5ef] transition"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-[#eee5d8] shadow-xl"
          >
            <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col">

              {navigation.map((item) => (
                <div key={item.label}>

                  {item.children ? (
                    <>
                      {/* Mobile Campus Life Toggle */}
                      <button
                        type="button"
                        onClick={() => setCampusOpen(!campusOpen)}
                        className="flex w-full items-center justify-between py-3 border-b border-[#eee5d8] text-sm font-semibold text-[#493a35] hover:text-[#c24d4a]"
                        aria-expanded={campusOpen}
                      >
                        {item.label}

                        <svg
                          className={`h-4 w-4 transition-transform ${
                            campusOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                          />
                        </svg>
                      </button>

                      {/* Mobile Campus Life Submenu */}
                      {campusOpen && (
                        <div className="bg-[#F8F5EF] rounded-xl my-2 p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMenu}
                              className="block rounded-lg px-5 py-3 text-sm font-medium text-[#493a35] hover:bg-white hover:text-[#c24d4a]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-3 border-b border-[#eee5d8] text-sm font-semibold text-[#493a35] hover:text-[#c24d4a] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                </div>
              ))}

              {/* Mobile Enquiry Button */}
              <Link
                href="/admissions"
                onClick={closeMenu}
                className="mt-4 rounded-full bg-[#c24d4a] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#7a3032] transition-colors"
              >
                Enquire Now
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
