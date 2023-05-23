import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-3">
        <button className="bg-violet-500 text-white px-14 py-3 text-2xl rounded-md hover:brightness-50">
          <Link href="/loginForm">Sign In</Link>
        </button>
        <button className="text-violet-500 px-14 py-3 text-2xl  hover:brightness-50">
          <Link href="/loginForm">Criar Conta</Link>
        </button>
      </div>
    </main>
  );
}
