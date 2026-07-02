"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container flex items-center justify-between py-4">

        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />

          <div>

            <h2 className="text-xl font-bold">
              Paratha Ghar Ka
            </h2>

            <p className="text-sm text-gray-500">
              Homemade With Love ❤️
            </p>

          </div>

        </div>

        <div className="hidden md:flex gap-8 font-medium">

          <a href="#">Home</a>

          <a href="#menu">Menu</a>

          <a href="#about">About</a>

          <a href="#reviews">Reviews</a>

          <a href="#contact">Contact</a>

        </div>

        <button className="primary-btn">
          Order Now
        </button>

      </div>
    </nav>
  );
}