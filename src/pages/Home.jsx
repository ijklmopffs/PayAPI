import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import bg from "../assets/shared/desktop/bg-pattern-circle.svg";
import headerPhone from "../assets/home/desktop/illustration-phone-mockup.svg";
import tesla from "../assets/shared/desktop/tesla-white.svg";
import microsoft from "../assets/shared/desktop/microsoft-white.svg";
import hpWhite from "../assets/shared/desktop/hewlett-packard-white.svg";
import google from "../assets/shared/desktop/google-white.svg";
import oracle from "../assets/shared/desktop/oracle-white.svg";
import nvidia from "../assets/shared/desktop/nvidia-white.svg";
import easy from "../assets/home/desktop/illustration-easy-to-implement.svg";
import simple from "../assets/home/desktop/illustration-simple-ui.svg";
import personal from "../assets/home/desktop/icon-personal-finances.svg";
import banking from "../assets/home/desktop/icon-banking-and-coverage.svg";
import consumer from "../assets/home/desktop/icon-consumer-payments.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "linear", type: "tween" }}
      exit={{ opacity: 0, y: -100 }}
    >
      <header className="bg-[#edf3e8] p-4 relative pt-2">
        <img
          src={bg}
          alt=""
          className="absolute -right-[19.5rem] -top-[17rem]"
        />
        <section className="md:max-w-[80%] mx-auto">
          <Navbar />

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full lg:text-start">
            <div>
              <h1 className="text-sanJuanBlue text-3xl md:text-5xl lg:text-7xl my-8 w-72 md:w-[35rem] mx-auto md:mx-0">
                Start building with our APIs for absolutely free.
              </h1>
              <div className="md:relative flex flex-col justify-center lg:block">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="px-6 p-3 shadow-2xl rounded-full text-sanJuanBlue text-sm font-sans w-[25rem] my-2"
                />
                <button className="text-waterWhite bg-darkPink px-6 p-3 rounded-full md:absolute md:right-20 lg:right-40 top-1 hover:opacity-70">
                  Schedule a Demo
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-normal mt-2 gap-2 font-sans text-sm text-lightSanJuanBlue">
                <p className="">Have any questions?</p>
                <span className="font-bold">Contact Us</span>
              </div>
            </div>
            <div className="md:relative md:z-10">
              <img src={headerPhone} alt="phone mockup" />
            </div>
          </div>
        </section>
      </header>

      <section className="bg-mirageBlue relative">
        <div className="max-w-[80%] mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center justify-between p-20 relative z-10">
          <div className="lg:text-start">
            <h2 className="text-3xl md:text-5xl text-waterWhite">
              Who we work with
            </h2>
            <p className="text-sm font-sans text-waterWhite w-[26rem] my-14">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <Link to="/about">
              <button className="text-waterWhite border-white border-2 px-6 p-3 rounded-full hover:bg-white hover:text-black">
                About Us
              </button>
            </Link>
          </div>
          <div className="flex items-center flex-wrap w-80 md:w-[30rem] gap-10">
            <img src={tesla} alt="tesla image" className="w-32" />
            <img src={microsoft} alt="microsoft image" className="w-32" />
            <img src={hpWhite} alt="HP image" className="w-32" />
            <img src={oracle} alt="oracle image" className="w-32" />
            <img src={google} alt="google image" className="w-32" />
            <img src={nvidia} alt="nvidia image" className="w-32" />
          </div>
        </div>
      </section>

      <section className="bg-[#edf3e8] p-5">
        <div className="md:max-w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row items-center md:text-start text-sanJuanBlue justify-center lg:gap-10">
            <div>
              <img src={easy} alt="" className="md:w-96 lg:w-auto" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl">Easy to implement</h2>
              <p className="text-sm text-lightSanJuanBlue w-96 my-5 font-sans">
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center md:text-start text-sanJuanBlue justify-center lg:gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl">Simple UI & UX</h2>
              <p className="font-sans text-sm text-lightSanJuanBlue w-96 my-5">
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
            </div>
            <div>
              <img src={simple} alt="" className="md:w-96 lg:w-auto" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between mt-20 lg:mt-0">
            <div className="w-fit flex flex-col items-center gap-4">
              <div>
                <img src={personal} alt="" className="w-24 lg:w-auto" />
              </div>
              <div className="w-52 lg:w-96 text-sanJuanBlue font-sans">
                <h3 className="font-bold text-lg">Personal Finance</h3>
                <p className="text-sm my-2">
                  Consolidate financial data from multiple sources and
                  categorize transactions up to 2 years of history. Analyze
                  reports to reconcile activities in your account.
                </p>
              </div>
            </div>

            <div className="w-fit flex flex-col items-center gap-4">
              <div>
                <img src={banking} alt="" className="w-24 lg:w-auto" />
              </div>
              <div className="w-52 lg:w-96 text-sanJuanBlue font-sans">
                <h3 className="font-bold text-lg">Banking and Coverage</h3>
                <p className="text-sm my-2">
                  With our platform, you can speed up account onboarding and
                  support ongoing payments for checking, savings, credit card,
                  and brokerage accounts.
                </p>
              </div>
            </div>

            <div className="w-fit flex flex-col items-center gap-4">
              <div>
                <img src={consumer} alt="" className="w-24 lg:w-auto" />
              </div>
              <div className="w-52 lg:w-96 text-sanJuanBlue font-sans">
                <h3 className="font-bold text-lg">Consumer Payments</h3>
                <p className="text-sm my-2">
                  It’s easier to set up secure bank payments with us through a
                  flow designed with the user experience in mind. Customers
                  could instantly authenticate their account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  );
}
