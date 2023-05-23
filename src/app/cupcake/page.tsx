'use client';
import Image from 'next/image';
import { MagnifyingGlass, ShoppingCart, X } from 'phosphor-react';
import cupcake1 from '../../../public/imgs/cupcake1.jpg';
import React from 'react';
import Link from 'next/link';

export default function cupacake() {
  return (
    <main className="w-72 mx-auto my-7">
      <header className="flex justify-between mb-7">
        <div>
          <X className="text-3xl text-violet-500 " />
        </div>
        <div className="flex gap-4">
          <MagnifyingGlass className="text-3xl text-violet-500 " />
          <ShoppingCart className="text-3xl text-violet-500 " />
        </div>
      </header>
      <div>
        <Image
          alt="cupcake"
          src={cupcake1}
          className="h-56 rounded-xl object-cover object-top mb-7"
        />
        <h1 className="font-semibold text-3xl">Cupcake</h1>
        <div className="border-2 h-40 mb-7">
          ***Detahes Comentarios e Avaliacoes***
        </div>
        <button className="w-full bg-violet-500 text-white px-5 py-3 text-xl rounded-md hover:brightness-50">
          <Link href="/payPage">Adicionar ao Carrinho</Link>
        </button>
      </div>
    </main>
  );
}
