"use client";

import Image from "next/image";
import { menu } from "@/data/menu";
import { motion } from "framer-motion";
import { Flame, Leaf } from "lucide-react";

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#fff8ef]">

      <div className="container">

        <div className="text-center">

          <p className="text-orange-600 font-semibold uppercase tracking-widest">
            Our Menu
          </p>

          <h2 className="text-5xl font-black mt-4">
            Freshly Prepared Everyday
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Every paratha is freshly prepared using premium ingredients,
            homemade dough and lots of love.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {menu.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08
              }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >

              <div className="relative">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm">

                  <Leaf size={16} />

                  Pure Veg

                </div>

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <div className="flex items-center text-red-500">

                    <Flame size={18} />

                  </div>

                </div>

                <p className="text-gray-600 mt-4 text-sm leading-7">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <h4 className="text-3xl font-extrabold text-orange-600">
                    ₹{item.price}
                  </h4>

                  <button
                    className="bg-orange-600 text-white px-5 py-3 rounded-full hover:bg-orange-700 transition"
                  >
                    Order
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}