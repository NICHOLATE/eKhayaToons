"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import {
  LogIn,
  MessageCircle,
  Flame,
  Star,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1f2932] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-150px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[#3f5678] blur-[140px] opacity-30" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[450px] w-[450px] rounded-full bg-[#b392a3] blur-[140px] opacity-20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <Image
              src="/images/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="rounded-full border-2 border-[#b392a3]"
            />

            <div>
              <h1 className="text-2xl font-black tracking-wide md:text-3xl">
                eKhayaToons
              </h1>

              <p className="text-xs text-[#b392a3]">
                Mzansi is Home
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <button className="flex items-center gap-2 rounded-full bg-[#3f5678] px-5 py-3 font-semibold shadow-lg shadow-[#3f5678]/50 transition hover:scale-105">

            <LogIn size={18} />

            <span className="hidden sm:block">
              Sign In
            </span>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3f5678] bg-[#3f5678]/20 px-5 py-2">

            <Flame className="text-orange-400" size={18} />

            <span className="text-sm font-medium">
              Africa’s Digital Comic Universe
            </span>
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-8xl">

            Stories
            <br />

            From The
            <br />

            <span className="text-[#b392a3]">
              Homeland.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-2xl">

            Welcome to eKhayaToons.
            Discover, read, and create African digital comics inspired by mythology,
            superheroes, anime, romance, fantasy, and South African storytelling.

          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">

            <button className="rounded-2xl bg-[#3f5678] px-8 py-5 text-lg font-bold shadow-xl shadow-[#3f5678]/40 transition hover:scale-105">

              Start Reading

            </button>

            <button className="rounded-2xl border-2 border-[#b392a3] px-8 py-5 text-lg font-bold text-[#b392a3] transition hover:bg-[#b392a3] hover:text-black">

              Become A Creator

            </button>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-[40px] bg-[#3f5678] blur-[120px] opacity-30" />

          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0822045d26?q=80&w=1200&auto=format&fit=crop"
            alt="hero"
            className="relative rounded-[40px] border border-white/10 shadow-2xl"
          />
        </motion.div>
      </section>

      {/* TRENDING MARQUEE */}
      <section className="py-8">

        <Marquee speed={50} gradient={false}>

          {[
            "Shadow Warrior",
            "The Last Sangoma",
            "Cyber Kasi",
            "Zulu Force",
            "Ink Of Destiny",
            "Spirit Hunters",
          ].map((comic, index) => (

            <div
              key={index}
              className="mx-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#484b50]/70 px-8 py-4 backdrop-blur-xl"
            >

              <Flame className="text-orange-400" />

              <span className="font-bold">
                {comic}
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* TRENDING SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">

        <div className="mb-12 flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-black md:text-5xl">
              Trending This Week
            </h2>

            <p className="mt-3 text-gray-400">
              Comics readers can’t stop reading right now.
            </p>
          </div>

          <button className="hidden items-center gap-2 text-[#b392a3] md:flex">

            View All

            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4].map((comic) => (

            <div
              key={comic}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#484b50]/50 backdrop-blur-xl transition duration-500 hover:scale-105"
            >

              <div className="overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1200&auto=format&fit=crop"
                  alt="comic"
                  className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <div className="mb-3 inline-flex rounded-full bg-[#3f5678]/30 px-3 py-1 text-sm">
                  Action
                </div>

                <h3 className="text-2xl font-bold">
                  Shadow Warrior
                </h3>

                <p className="mt-2 text-gray-300">
                  by Neo Mokoena
                </p>

                <div className="mt-4 flex items-center gap-2 text-yellow-400">

                  <Star fill="yellow" size={18} />

                  <span>4.9</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GENRES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">

        <h2 className="mb-12 text-4xl font-black md:text-5xl">
          Popular Genres
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {[
            "Action",
            "Romance",
            "Fantasy",
            "Horror",
            "Comedy",
            "Sci-Fi",
            "SA Mythology",
            "Superheroes",
          ].map((genre) => (

            <div
              key={genre}
              className="rounded-[30px] bg-gradient-to-br from-[#484b50] to-[#3f5678] p-10 text-center transition hover:scale-105 hover:shadow-2xl hover:shadow-[#3f5678]/30"
            >

              <h3 className="text-2xl font-bold">
                {genre}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY EKHAYATOONS */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10">

        <h2 className="text-4xl font-black md:text-6xl">

          Why eKhayaToons?

        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-gray-300">

          eKhayaToons is building the future of African storytelling through
          immersive digital comics, creators, and readers from across the continent.
          Discover heroes inspired by African culture, mythology, fantasy, anime,
          and modern township stories.

        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">

        <h2 className="mb-12 text-4xl font-black md:text-5xl">
          Community Reviews
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {[
            "This feels like the Netflix of African comics.",
            "Finally a platform focused on African creators.",
            "Beautiful UI and incredible storytelling.",
          ].map((review, index) => (

            <div
              key={index}
              className="rounded-[30px] border border-white/10 bg-[#484b50]/40 p-8 backdrop-blur-xl"
            >

              <p className="text-lg leading-relaxed text-gray-300">

                "{review}"

              </p>

              <div className="mt-6 flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">

        <div className="rounded-[40px] bg-gradient-to-r from-[#3f5678] to-[#b392a3] p-12 text-center shadow-2xl">

          <h2 className="text-4xl font-black md:text-5xl">

            Start Your Comic Journey Today

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">

            Join readers and creators shaping the next generation
            of African digital storytelling.

          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <button className="rounded-2xl bg-white px-8 py-5 font-bold text-black transition hover:scale-105">

              Create Account

            </button>

            <button className="rounded-2xl border border-white px-8 py-5 font-bold transition hover:bg-white hover:text-black">

              Browse Comics

            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-16 text-center md:px-10">

        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mx-auto rounded-full"
        />

        <h3 className="mt-6 text-4xl font-black">
          eKhayaToons
        </h3>

        <p className="mt-4 text-gray-400">
          Mzansi is Home
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-gray-500">
          Empowering African creators through digital storytelling,
          comics, fantasy, anime-inspired adventures, and mythology.
        </p>

        <p className="mt-8 text-gray-600">
          © 2026 eKhayaToons. All Rights Reserved.
        </p>
      </footer>

      {/* FLOATING CHATBOT */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-[#3f5678] to-[#b392a3] p-5 shadow-2xl"
      >

        <MessageCircle size={32} />

      </motion.button>
    </main>
  );
}