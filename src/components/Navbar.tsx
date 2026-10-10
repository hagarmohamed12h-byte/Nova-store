import { FC, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";
import { updateDarkMode } from "../redux/features/homeSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import SearchBar from "./SearchBar";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useAppSelector((state) => state.cartReducer.cartItems.length);
  const username = useAppSelector((state) => state.authReducer.username);
  const isDarkMode = useAppSelector((state) => state.homeReducer.isDarkMode);
  const { requireAuth } = useAuth();

  const showCart = () => requireAuth(() => dispatch(setCartState(true)));
  const toggleTheme = () => {
    dispatch(updateDarkMode(!isDarkMode));
    document.body.classList.toggle("dark");
  };
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90">
      <div className="container mx-auto px-4">
        <div className="flex min-h-[76px] items-center justify-between gap-5">
          <Link to="/" onClick={closeMenu} className="group shrink-0">
            <span className="text-2xl font-black tracking-[-0.04em] text-slate-950 dark:text-white">
              NOVA<span className="text-fuchsia-500">.</span>
            </span>
            <span className="ml-2 hidden text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 sm:inline">
              curated essentials
            </span>
          </Link>

          <div className="hidden max-w-md flex-1 md:block">
            <SearchBar onSearch={closeMenu} />
          </div>

          <nav className="hidden items-center gap-6 sm:flex">
            <Link to="/products" className="nav-link">Shop</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <div className="flex items-center gap-3">
              {username !== "" ? (
                <img src="https://robohash.org/Terry.png?set=set4" alt="avatar" className="h-7 w-7 rounded-full" />
              ) : (
                <FaUser className="text-slate-500 dark:text-white" />
              )}
              {username !== "" ? (
                <CustomPopup />
              ) : (
                <button onClick={() => dispatch(updateModal(true))} className="nav-link">Sign in</button>
              )}
            </div>
            <button onClick={showCart} className="relative text-2xl text-slate-800 transition hover:-translate-y-0.5 dark:text-white" aria-label="Open cart">
              <AiOutlineShoppingCart />
              <span className="absolute -right-3 -top-3 grid h-5 min-w-5 place-items-center rounded-full bg-slate-950 px-1 text-[10px] font-bold text-white dark:bg-fuchsia-500" data-test="cart-item-count">
                {cartCount}
              </span>
            </button>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="text-xl text-slate-500 dark:text-white">
              {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </button>
          </nav>

          <button className="text-2xl sm:hidden dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-black/5 py-5 dark:border-white/10 sm:hidden">
            <SearchBar onSearch={closeMenu} />
            <div className="mt-5 grid gap-4">
              <Link to="/products" onClick={closeMenu} className="nav-link">Shop</Link>
              <Link to="/categories" onClick={closeMenu} className="nav-link">Categories</Link>
              <button onClick={() => { showCart(); closeMenu(); }} className="text-left nav-link">Cart ({cartCount})</button>
              <button onClick={toggleTheme} className="text-left nav-link">{isDarkMode ? "Light mode" : "Dark mode"}</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
