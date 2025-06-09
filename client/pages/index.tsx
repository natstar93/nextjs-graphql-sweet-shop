import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mx-auto h-screen">
        <figure>
          <img
            src="/logo.svg"
            alt="Logo"
            width={350}
          />
        </figure>
        <p className="my-6 text-primary-main">
          <Link href="product" className="text-primary-main text-3xl underline">Buy sweets</Link>
        </p>
      </div>
    </main>
  );
}
