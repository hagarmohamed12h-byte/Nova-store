import { FC } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

const HeroSection: FC = () => (
  <section className="hero-shell">
    <div className="container mx-auto grid items-center gap-10 px-4 py-12 md:grid-cols-[1.05fr_.95fr] md:py-20">
      <div className="max-w-2xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-700 shadow-sm dark:border-fuchsia-400/20 dark:bg-white/10 dark:text-fuchsia-200">
          <FiStar /> new season / 2026
        </div>
        <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
          Everyday pieces,{" "}
          <span className="text-fuchsia-500">made to stand out.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
          Discover a carefully selected collection of modern essentials, tech,
          and lifestyle favorites. Simple shopping, fast browsing, zero clutter.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/products" className="primary-btn">
            Explore collection <FiArrowUpRight />
          </Link>
          <Link to="/categories" className="secondary-btn">
            Browse categories
          </Link>
        </div>
        <div className="mt-9 flex gap-8 text-sm text-slate-500 dark:text-slate-300">
          <div>
            <strong className="block text-lg text-slate-950 dark:text-white">
              24+
            </strong>
            featured products
          </div>
          <div>
            <strong className="block text-lg text-slate-950 dark:text-white">
              4.8/5
            </strong>
            average rating
          </div>
          <div>
            <strong className="block text-lg text-slate-950 dark:text-white">
              24/7
            </strong>
            support
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="hero-orb" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 p-3 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <img
            src="/hero.png"
            alt="Featured collection"
            className="h-[330px] w-full rounded-[1.5rem] object-cover object-center md:h-[450px]"
          />
          <div className="absolute bottom-7 left-7 rounded-2xl bg-slate-950/90 px-5 py-4 text-white backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">
              editor's pick
            </p>
            <p className="mt-1 font-bold">Minimal. Useful. Yours.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
