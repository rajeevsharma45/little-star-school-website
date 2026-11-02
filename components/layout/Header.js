import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <>
      <div className="bg-[#493a35] text-white text-xs">
        <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between">
          <span>Welcome to Little Star Public School</span>
          <span>Jharsuguda, Odisha</span>
        </div>
      </div>

      <header className="bg-white sticky top-0 z-50 border-b border-[#eee5d8]">
        <div className="max-w-7xl mx-auto px-5 min-h-[82px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#f8f5ef] border border-[#e8ddc9] flex items-center justify-center text-[#c24d4a] font-bold text-xl">
              LS
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

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#493a35] hover:text-[#c24d4a] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/admissions"
            className="hidden sm:inline-flex bg-[#c24d4a] text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#7a3032] transition-colors"
          >
            Enquire Now
          </Link>

          <div className="lg:hidden text-xs text-[#7a3032] font-semibold">
            MENU
          </div>
        </div>
      </header>
    </>
  );
}