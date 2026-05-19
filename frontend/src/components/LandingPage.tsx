"use client";

import Image from "next/image";
import { LogIn, MessageCircle, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#1f2932] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[#3f5678] blur-[140px] opacity-30" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#b392a3] blur-[140px] opacity-20" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={55}
              height={55}
              className="rounded-full border border-[#b392a3]"
            />

            <div>
              <h1 className="text-2xl font-black md:text-3xl">
                eKhayaToons
              </h1>
              <p className="text-xs text-[#b392a3]">
                Mzansi is Home
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <button className="flex items-center gap-2 rounded-full bg-[#3f5678] px-5 py-3 font-semibold shadow-lg transition hover:scale-105">
            <LogIn size={18} />
            <span className="hidden sm:block">Sign In</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:py-24">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Welcome to{" "}
            <span className="text-[#b392a3]">eKhayaToons</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Discover, Read, and Create African Digital Comics.
            Stories born from the homeland — for a global audience.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:w-[300px]">
            <button className="rounded-2xl bg-[#3f5678] py-4 text-lg font-bold transition hover:scale-105">
              Start Reading
            </button>

            <button className="rounded-2xl border border-[#b392a3] py-4 text-lg font-bold text-[#b392a3] transition hover:bg-[#b392a3] hover:text-black">
              Become a Creator
            </button>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-[#3f5678] blur-[120px] opacity-30" />

          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&auto=format&fit=crop"
            alt="hero"
            className="relative rounded-[40px] border border-white/10 shadow-2xl"
          />
        </motion.div>
      </section>

      {/* TRENDING */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-black md:text-5xl">
            Trending Comics
          </h2>

          <button className="hidden items-center gap-1 text-[#b392a3] md:flex">
            View All <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "Shadow Warrior",
              creator: "Neo Mokoena",
              genre: "Action",
              rating: "4.9",
              image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1200&auto=format&fit=crop"
            },
            {
              title: "Cyber Kasi",
              creator: "Amahle Dube",
              genre: "Sci-Fi",
              rating: "4.8",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            },
            {
              title: "The Last Sangoma",
              creator: "Lebo Sithole",
              genre: "Fantasy",
              rating: "5.0",
              image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1200&auto=format&fit=crop"
            },
            {
              title: "Zulu Force",
              creator: "Thando Nxumalo",
              genre: "Superhero",
              rating: "4.7",
              image: "https://images.unsplash.com/photo-1520975922284-9c4f2a7c8e0b?q=80&w=1200&auto=format&fit=crop"
            },
          ].map((comic, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#484b50]/40 transition hover:scale-105"
            >
              <img
                src={comic.image}
                alt={comic.title}
                className="h-[320px] w-full object-cover transition group-hover:scale-110"
              />

              <div className="p-5">
                <div className="mb-2 inline-block rounded-full bg-[#3f5678]/40 px-3 py-1 text-xs">
                  {comic.genre}
                </div>

                <h3 className="text-xl font-black">
                  {comic.title}
                </h3>

                <p className="text-sm text-gray-300">
                  by {comic.creator}
                </p>

                <div className="mt-3 flex items-center gap-2 text-yellow-400">
                  <Star size={16} fill="yellow" />
                  <span>{comic.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GENRES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        <h2 className="mb-8 text-3xl font-black md:text-5xl">
          Genres
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {[
            "Action",
            "Romance",
            "Fantasy",
            "Horror",
            "Comedy",
            "Sci-Fi",
            "Mythology",
            "Superheroes",
          ].map((g) => (
            <div
              key={g}
              className="rounded-2xl bg-gradient-to-br from-[#484b50] to-[#3f5678] p-6 text-center font-bold transition hover:scale-105"
            >
              {g}
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING CHATBOT */}
      <button className="fixed bottom-6 right-6 rounded-full bg-gradient-to-r from-[#3f5678] to-[#b392a3] p-5 shadow-2xl transition hover:scale-110">
        <MessageCircle size={30} />
      </button>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-white/10 px-6 py-10 text-center md:px-10">

        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="mx-auto rounded-full"
        />

        <h3 className="mt-4 text-3xl font-black">
          eKhayaToons
        </h3>

        <p className="mt-2 text-gray-400">
          Mzansi is Home
        </p>

        <p className="mt-6 text-xs text-gray-500">
          © 2026 eKhayaToons. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}