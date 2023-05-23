'use client';
import React from 'react';
import { X } from 'phosphor-react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <main className="m-7">
      <div>
        <X className="text-violet-500 text-4xl font-bold mb-4 " />
      </div>
      <form>
        <h1 className="text-4xl mb-6">Sign in</h1>
        <input
          type="text"
          placeholder="Email"
          className="text-3xl border-gray-400 border-4 rounded-md w-full px-3 py-2 mb-6"
        />
        <input
          type="text"
          placeholder="Senha"
          className="text-3xl border-gray-400 border-4 rounded-md w-full px-3 py-2 mb-8"
        />
        <div className="text-3xl flex gap-3 items-center mb-14">
          <label htmlFor="rememberMe">Lembre de mim</label>
          <input className="w-7 h-7" id="rememberMe" type="checkbox" />
        </div>

        <button className="w-full bg-violet-500 text-white px-14 py-3 text-3xl rounded-md hover:brightness-50">
          <Link href="/shopPage">Sign In</Link>
        </button>
        <button className="w-full text-violet-500 px-14 py-3 text-3xl  hover:brightness-50">
          <Link href="/shopPage">Criar Conta</Link>
        </button>
      </form>
    </main>
  );
}
