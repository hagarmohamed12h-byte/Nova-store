import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FC } from "react";
import FeatureCard from "./FeatureCard";

const data = [
  { icon: <TbTruckDelivery className="text-3xl" />, title: "Fast delivery", desc: "Tracked on every order" },
  { icon: <RiRefund2Fill className="text-3xl" />, title: "Easy returns", desc: "Simple 14-day returns" },
  { icon: <TbDiscount className="text-3xl" />, title: "Member perks", desc: "Better deals, every week" },
  { icon: <MdSupportAgent className="text-3xl" />, title: "Real support", desc: "We're here when you need us" },
];

const Features: FC = () => (
  <div className="container mx-auto grid gap-3 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
    {data.map((item) => <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />)}
  </div>
);
export default Features;
