import { FC } from "react";
import { Product } from "../models/Product";
import RatingStar from "./RatingStar";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import PriceSection from "./PriceSection";
import useAuth from "../hooks/useAuth";

const ProductCard: FC<Product> = ({ id, price, thumbnail, title, category, rating, discountPercentage }) => {
  const dispatch = useAppDispatch();
  const { requireAuth } = useAuth();

  const addCart = () => requireAuth(() => {
    dispatch(addToCart({ id, price, title, category, rating, thumbnail, discountPercentage }));
    toast.success("Added to your bag");
  });

  return (
    <article className="product-card" data-test="product-card">
      <div className="product-image-wrap">
        <Link to={`/product/${id}`} aria-label={`View ${title}`}>
          <img src={thumbnail} alt={title} className="product-image" />
        </Link>
        {discountPercentage ? <span className="discount-pill">-{Math.round(discountPercentage)}%</span> : null}
        <button onClick={addCart} className="quick-add" title="Add to cart" aria-label="Add to cart">
          <AiOutlineShoppingCart />
        </button>
      </div>
      <div className="p-4">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-fuchsia-500">{category}</p>
        <Link to={`/product/${id}`} title={title} className="line-clamp-1 text-[15px] font-bold text-slate-900 hover:text-fuchsia-500 dark:text-white">
          {title}
        </Link>
        <RatingStar rating={rating} />
        <div className="mt-3 flex items-end justify-between gap-3">
          <PriceSection discountPercentage={discountPercentage} price={price} />
          <Link to={`/product/${id}`} className="text-xs font-bold text-slate-400 hover:text-fuchsia-500">
            View <FiArrowUpRight className="inline" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
