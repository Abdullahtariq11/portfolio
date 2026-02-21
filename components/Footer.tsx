export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center font-black text-white text-xs">
              AT
            </div>
            <span className="text-white font-bold">Abdullah Tariq</span>
          </div>
          <p className="text-slate-500 text-xs">
            Software Developer · MCS @ Northeastern · Vancouver, BC
          </p>
          <p className="text-slate-600 text-xs mt-1">
            🔴 Glory Glory Man United · Open to Co-op &amp; Full-time
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/abdullah-tariq-499629171/" },
            { label: "GitHub", href: "https://github.com/Abdullahtariq11" },
            { label: "Email", href: "mailto:abdullahtariq096@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-orange-400 text-sm font-medium transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Abdullah Tariq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
