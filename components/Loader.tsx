"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#fff8ef] flex items-center justify-center z-[9999]">

      <motion.div
        animate={{
          rotate:360
        }}
        transition={{
          repeat:Infinity,
          duration:1,
          ease:"linear"
        }}
        className="w-20 h-20 border-[8px] border-orange-200 border-t-orange-600 rounded-full"
      />

    </div>
  );
}