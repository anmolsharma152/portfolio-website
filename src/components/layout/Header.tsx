import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16">
      <div className="font-bold text-xl">Your Name</div>
      <div className="hidden md:flex gap-8">
        <Link href="/" className="hover:text-gray-500">Home</Link>
        <Link href="#about" className="hover:text-gray-500">About</Link>
        <Link href="#portfolio" className="hover:text-gray-500">Portfolio</Link>
        <Link href="#services" className="hover:text-gray-500">Services</Link>
        <Link href="#contact" className="hover:text-gray-500">Contact</Link>
      </div>
      {/* Mobile menu button - you can implement a mobile menu later */}
      <div className="md:hidden">
        <button className="p-2" aria-label="Toggle mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 