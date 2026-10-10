import { FC } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Banner: FC = () => (
  <section className="container mx-auto px-4 py-8">
    <div className="overflow-hidden rounded-[2rem] bg-slate-950 md:flex">
      <img src="/banner.jpg" alt="NOVA collection" className="h-72 w-full object-cover md:h-80 md:w-1/2" />
      <div className="flex flex-1 flex-col justify-center p-8 text-white md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">limited edit</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight">Good design belongs in your everyday.</h2>
        <p className="mt-3 max-w-lg text-slate-300">Fresh picks, practical favorites and standout pieces — all in one place.</p>
        <Link to="/products" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-fuchsia-400">
          Shop the edit <FiArrowUpRight />
        </Link>
      </div>
    </div>
  </section>
);
export default Banner;
