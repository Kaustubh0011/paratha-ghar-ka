"use client";

import { Home, Truck, Leaf, Heart, ChefHat, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Homemade",
    text: "Freshly prepared like home."
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    text: "Only quality ingredients."
  },
  {
    icon: ChefHat,
    title: "Made Daily",
    text: "Prepared fresh every day."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Quick service near college."
  },
  {
    icon: Heart,
    title: "Made With Love",
    text: "Every meal is handmade."
  },
  {
    icon: BadgeCheck,
    title: "100% Veg",
    text: "Pure vegetarian kitchen."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#fff3df]">

      <div className="container">

        <h2 className="text-5xl font-bold text-center">

          Why Choose Us

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="card p-8 text-center"
              >

                <Icon
                  size={50}
                  className="mx-auto text-orange-600"
                />

                <h3 className="text-2xl font-bold mt-6">

                  {item.title}

                </h3>

                <p className="mt-3 text-gray-600">

                  {item.text}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}