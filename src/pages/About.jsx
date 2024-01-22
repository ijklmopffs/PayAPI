import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/about/desktop/image-team-members.jpg";
import heroTablet from "../assets/about/tablet/image-team-members.jpg";
import heroMobile from "../assets/about/mobile/image-team-members.jpg";
import bg from "../assets/shared/desktop/bg-pattern-circle.svg";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "linear", type: "tween" }}
      exit={{ opacity: 0, y: -100 }}
      className="bg-[#edf3e8]"
    >
      <section className="md:max-w-[80%] mx-auto p-4">
        <Navbar />

        <section className="mt-10 lg:max-w-4xl mx-auto">
          <div className="lg:text-start">
            <h2 className="text-sanJuanBlue text-3xl w-72 md:text-5xl mx-auto lg:mx-0 md:w-[35rem] lg:text-6xl lg:w-[45rem]">
              We empower innovators by delivering access to the financial system
            </h2>
            <div>
              <div className="my-10 flex flex-col md:flex-row justify-between md:text-start gap-2 md:gap-0">
                <h3 className="text-3xl text-sanJuanBlue">Our Vision</h3>
                <p className="font-sans text-sm text-lightSanJuanBlue w-80 md:w-[36rem] mx-auto md:mx-0">
                  Our main goal is to build beautiful consumer experiences along
                  with developer-friendly infrastructure. The result is an
                  intelligent tool that gives everyone the ability to create
                  amazing products that solve big problems. We are deeply
                  focused on democratizing financial services through
                  technology.
                </p>
              </div>

              <div className="my-10 flex flex-col md:flex-row justify-between md:text-start gap-2 md:gap-0">
                <h3 className="text-3xl text-sanJuanBlue">Our Business</h3>
                <p className="font-sans text-sm text-lightSanJuanBlue w-80 md:w-[36rem] mx-auto md:mx-0">
                  At the core of our platform is the technical infrastructure
                  APIs that connect consumers. Our innovative product provides
                  key insights for businesses and individuals, as well as robust
                  reporting for traditional financial institutions and
                  developers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <div className="mx-auto w-fit relative">
        <img
          src={bg}
          alt=""
          className="absolute -left-[50rem] -top-40 hidden lg:block"
        />
        <img src={hero} alt="" className="relative z-10 hidden lg:block" />
        <img src={heroTablet} alt="" className="hidden md:block lg:hidden" />
        <img src={heroMobile} alt="" className="md:hidden" />
      </div>

      <section className="mt-20">
        <div className="md:max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-80 md:text-start">
            <div className="w-full h-[1px] bg-sanJuanBlue/30 my-5"></div>
            <h2 className="font-sans text-sanJuanBlue">Team Members</h2>
            <p className="text-darkPink text-6xl">300+</p>
            <div className="w-full h-[1px] bg-sanJuanBlue/30 my-5 hidden md:block"></div>
          </div>

          <div className="w-80 md:text-start mt-10 md:mt-0">
            <div className="w-full h-[1px] bg-sanJuanBlue/30 my-5 hidden md:block"></div>
            <h2 className="font-sans text-sanJuanBlue">Offices in the US</h2>
            <p className="text-darkPink text-6xl">3</p>
            <div className="w-full h-[1px] bg-sanJuanBlue/30 my-5 hidden md:block"></div>
          </div>

          <div className="w-80 md:text-start mt-10 md:mt-0">
            <div className="w-full h-[1px] bg-sanJuanBlue/30 my-5 hidden md:block"></div>
            <h2 className="font-sans text-sanJuanBlue">
              Transactions Analyzed
            </h2>
            <p className="text-darkPink text-6xl">10M+</p>
            <div className="w-full h-[1px] bg-sanJuanBlue/30 my-5"></div>
          </div>
        </div>

        <div className="lg:max-w-4xl mx-auto md:text-start">
          <div>
            <div className="my-10 flex flex-col md:flex-row justify-between">
              <h3 className="text-3xl text-sanJuanBlue">The Culture</h3>
              <p className="font-sans text-sm text-lightSanJuanBlue w-80 md:w-[36rem] mx-auto md:mx-0">
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>

            <div className="my-10 flex flex-col md:flex-row justify-between">
              <h3 className="text-3xl text-sanJuanBlue">The People</h3>
              <p className="font-sans text-sm text-lightSanJuanBlue w-80 md:w-[36rem] mx-auto md:mx-0">
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
