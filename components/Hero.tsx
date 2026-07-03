"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-40">

      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

        <div>

          <span className="text-yellow-700 font-semibold">
            🥞 Fresh Homemade Food
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
            Taste Like
            <span className="text-amber-700">{" "}Home</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">

            Homemade parathas, Maggi, and snacks prepared
            with fresh ingredients and lots of love.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button className="primary-btn w-full sm:w-auto">
              Order Now
            </button>

            <button className="secondary-btn w-full sm:w-auto">
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
            className="w-full h-auto rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}