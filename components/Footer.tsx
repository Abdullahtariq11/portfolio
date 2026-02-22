export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-[var(--muted)]">
        <p>Abdullah Tariq</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
