import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex justify-center">
      <Image
        src="/nike-4-logo-svgrepo-com.svg"
        alt="logo"
        width={78}
        height={78}
      />
    </main>
  );
}
