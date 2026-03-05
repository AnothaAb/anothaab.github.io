export function Footer() {
  return (
    <footer className="border-t border-line py-8 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-mute text-xs font-mono">
          © {new Date().getFullYear()} Abdulelah &quot;Ab&quot; Almasri
        </p>
        <p className="text-mute text-xs font-mono">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
