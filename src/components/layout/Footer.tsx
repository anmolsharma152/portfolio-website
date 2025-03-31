export default function Footer() {
  return (
    <footer className="py-8 px-8 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" className="hover:text-gray-300" aria-label="GitHub">GitHub</a>
          <a href="#" className="hover:text-gray-300" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
} 