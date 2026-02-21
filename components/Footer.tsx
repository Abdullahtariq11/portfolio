export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Abdullah Tariq. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/abdullah-tariq-499629171/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-orange-400 text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abdullahtariq11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-orange-400 text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="mailto:abdullahtariq096@gmail.com"
            className="text-slate-500 hover:text-orange-400 text-sm transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
