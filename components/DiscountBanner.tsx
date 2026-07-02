"use client";

import { motion } from "framer-motion";

export default function DiscountBanner() {
  return (
    <section className="py-10">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          className="rounded-[30px] bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 p-10 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-6"
        >

          <div>

            <h2 className="text-5xl font-black">

              🎉 35% OFF

            </h2>

            <p className="text-xl mt-4">

              First Order Special Offer

            </p>

            <p className="mt-2 opacity-90">

              Use Coupon Code

            </p>

            <div className="inline-block mt-5 bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-2xl">

              FIRST35

            </div>

          </div>

          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition">

            Order Now →

          </button>

        </motion.div>

      </div>
    </section>
  );
}