import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import checkmark from "../assets/shared/desktop/icon-check.svg";
import PricingCard from "../components/PricingCard";
import Footer from "../components/Footer";

export default function Pricing() {
  const freePlanFeatures = [
    { icon: checkmark, label: "Transactions" },
    { icon: checkmark, label: "Auth", my: 1 },
    { icon: checkmark, label: "Identity" },
    { icon: "", label: "Investments", disabled: true },
    { icon: "", label: "Assets", disabled: true },
    { icon: "", label: "Liabilities", disabled: true },
    { icon: "", label: "Income", disabled: true },
  ];

  const basicPlanFeatures = [
    { icon: checkmark, label: "Transactions" },
    { icon: checkmark, label: "Auth" },
    { icon: checkmark, label: "Identity" },
    { icon: checkmark, label: "Investments" },
    { icon: checkmark, label: "Assets" },
    { icon: "", label: "Liabilities", disabled: true },
    { icon: "", label: "Income", disabled: true },
  ];
  const premiumPlanFeatures = [
    { icon: checkmark, label: "Transactions" },
    { icon: checkmark, label: "Auth" },
    { icon: checkmark, label: "Identity" },
    { icon: checkmark, label: "Investments" },
    { icon: checkmark, label: "Assets" },
    { icon: checkmark, label: "Liabilities" },
    { icon: checkmark, label: "Income" },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "linear", type: "tween" }}
      exit={{ opacity: 0, y: -100 }}
      className="bg-[#edf3e8] md:flex lg:block flex-col justify-between items-stretch md:h-screen lg:h-auto"
    >
      <section className="md:max-w-[80%] mx-auto p-4">
        <Navbar />

        <div className="mt-20">
          <h1 className="lg:text-start text-5xl lg:text-6xl text-sanJuanBlue">
            Pricing
          </h1>
          <div className="mt-10 flex flex-col md:flex-row gap-8 lg:gap-0 items-center justify-between">
            <PricingCard
              title="Free Plan"
              description="Build and test using our core set of products with up to 100 API requests"
              price="$0.00"
              features={freePlanFeatures}
              buttonText="Request Access"
            />

            <PricingCard
              title="Basic Plan"
              description="Launch your project with unlimited requests and no contractual minimums "
              price="$249.00"
              features={basicPlanFeatures}
              buttonText="Request Access"
            />

            <PricingCard
              title="Premium Plan"
              description="Get tailored solutions, volume pricing, and dedicated support for your team "
              price="$499.00"
              features={premiumPlanFeatures}
              buttonText="Request Access"
            />
          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  );
}
