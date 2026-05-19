"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-[#1f2932]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/logo.png"
          alt="eKhayaToons Logo"
          width={250}
          height={250}
          className="rounded-full"
        />
      </motion.div>

      <h1 className="mt-6 text-5xl font-bold text-white">
        eKhayaToons
      </h1>

      <p className="mt-3 text-[#b392a3] text-xl">
        Mzansi is Home
      </p>
    </motion.div>
  );
}