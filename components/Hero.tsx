"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-40">

      <div className="container grid lg:grid-cols-2 items-center gap-16">

        <div>

          <span className="text-yellow-700 font-semibold">
            🥞 Fresh Homemade Food
          </span>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">

            Taste Like

            <span className="text-amber-700">
              {" "}Home
            </span>

          </h1>

          <p className="text-gray-600 mt-6 text-lg">

            Homemade Parathas, Maggi & Snacks prepared
            with fresh ingredients and lots of love.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="primary-btn">

              Order Now

            </button>

            <button className="secondary-btn">

              View Menu

            </button>

          </div>

        </div>

        <div>

          <Image
            src="/hero.jpg"
            alt="Hero"
            width={700}
            height={700}
            priority
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}