import { FaGift, FaMoneyBillWaveAlt, FaPhoneAlt, FaShippingFast } from "react-icons/fa"
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Free Shopping",
    icon:<FaShippingFast />,
  },
  {
    title: "Best Price Guarantee",
    icon:<FaMoneyBillWaveAlt />,
  },
  {
    title: "Free Curbside pickup",
    icon:<FaGift />,
  },
  {
    title: "Supprot 24/7",
    icon:<FaPhoneAlt />,
  },
];

const FeatureSection = () => {
  return (
    <div className=" container pt-16">
      <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map(el => <FeatureCard key={el.title} title={el.title} icon={el.icon} />)}
      </div>
    </div>
  )
}

export default FeatureSection;
