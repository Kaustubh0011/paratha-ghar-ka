"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="about" className="py-24 bg-white">

      <div className="container grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{opacity:0,x:-60}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:.7}}
        >

          <span className="text-orange-600 uppercase font-bold tracking-widest">
            Our Story
          </span>

          <h2 className="text-5xl font-black mt-4">
            Homemade Food,
            Student Dream
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Hi, I'm <strong>Jyoti</strong>, a student at
            KES College.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Every order you place supports my education and
            helps me grow my small homemade food business.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Thank you for supporting a student entrepreneur ❤️
          </p>

        </motion.div>

        <motion.div
          initial={{opacity:0,x:60}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:.7}}
        >

          <img
            src="/hero.jpg"
            alt="Founder"
            className="rounded-3xl shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  );
}