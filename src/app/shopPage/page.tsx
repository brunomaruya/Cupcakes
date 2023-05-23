'use client';
import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import cupcake1 from '../../../public/imgs/cupcake1.jpg';
import cupcake2 from '../../../public/imgs/cupcake2.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <main className="w-72 mx-auto my-5">
      <div className="flex justify-end mb-7">
        <ShoppingCart className=" text-5xl text-violet-500" />
      </div>
      <h1 className="text-3xl mb-6">Shop</h1>
      <input
        type="text"
        placeholder="Procurar"
        className="text-3xl border-gray-400 border-4 rounded-3xl w-full px-3 py-2 mb-6"
      />
      <div className="w-full">
        <Link href="/cupcake">
          <Image
            alt="cupcake"
            className="h-64 object-cover object-bottom rounded-lg mb-7"
            src={cupcake2}
          />
        </Link>

        <div className="flex max-w-full justify-between  gap-2">
          <Link href="/cupcake" className="w-0 flex-1">
            <Image alt="cupcake" className="rounded-3xl" src={cupcake1} />
          </Link>
          <Link href="/cupcake" className="w-0 flex-1">
            <Image alt="cupcake" className="rounded-3xl" src={cupcake1} />
          </Link>
        </div>
      </div>
    </main>
  );
}
