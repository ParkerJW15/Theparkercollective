import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-sm tracking-widest text-brand-accent">404</p>
      <h1 className="text-4xl font-bold uppercase">Page not found</h1>
      <Link href="/" className="rounded-full bg-brand-accent px-6 py-3 font-bold text-black">Back to home</Link>
    </main>
  );
}
