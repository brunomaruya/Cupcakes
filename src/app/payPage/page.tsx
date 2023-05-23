'use client';
import Link from 'next/link';
import { Trash } from 'phosphor-react';
import React from 'react';

export default function payPage() {
  return (
    <main className="w-72 mx-auto mt-20">
      <h1 className="text-3xl font-semibold text-center mb-7">
        Cupcakes Selecionados
      </h1>
      <div className="text-3xl flex justify-between bg-gray-100 rounded-lg py-2 px-4 items-center mb-5">
        <p>Cupcake</p> <Trash className="text-violet-500" />
      </div>
      <div className="text-3xl flex justify-between bg-gray-100 rounded-lg py-2 px-4 items-center mb-24">
        <p>Cupcake</p> <Trash className="text-violet-500" />
      </div>
      <div className="flex justify-between text-3xl mb-20">
        <p>Total</p>
        <span>$99.99</span>
      </div>
      <button className="w-full bg-violet-500 text-white px-14 py-3 text-3xl rounded-md hover:brightness-50">
        <Link href="">Pagar</Link>
      </button>
    </main>
  );
}
