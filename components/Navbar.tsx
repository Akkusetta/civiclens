import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass-navbar">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-3xl font-black text-green-700">
          CivicLens
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/feed">Community</Link>
          <Link href="/map">Map</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}