import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tesla from "../assets/shared/desktop/tesla.svg";
import microsoft from "../assets/shared/desktop/microsoft.svg";
import hpWhite from "../assets/shared/desktop/hp.svg";
import google from "../assets/shared/desktop/google.svg";
import oracle from "../assets/shared/desktop/oracle.svg";
import nvidia from "../assets/shared/desktop/nvidia.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }

    if (formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
    }

    if (formData.message.trim() === "") {
      errors.message = "This field is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
  };

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

        <section className="mt-20">
          <h1 className="text-sanJuanBlue text-3xl md:text-6xl mx-auto md:mx-0 md:text-start w-80 md:w-[45rem]">
            Submit a help request and we’ll get in touch shortly.
          </h1>
          <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between">
            <div>
              <div>
                <form
                  action="post"
                  onSubmit={handleSubmit}
                  className="flex flex-col"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className={
                      formErrors.name
                        ? "bg-transparent border-b-2 border-b-charmPink w-[325px] md:w-[445px] p-4 focus:outline-none cursor-pointer"
                        : "bg-transparent border-b-2 border-b-sanJuanBlue w-[325px] md:w-[445px] p-4 focus:outline-none cursor-pointer"
                    }
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <span className="font-bold text-xs italic text-charmPink mt-10">
                      {formErrors.name}
                    </span>
                  )}

                  <input
                    type="email"
                    placeholder="Email Address"
                    className={
                      formErrors.email
                        ? "bg-transparent border-b-2 border-b-charmPink w-[325px] md:w-[445px] p-4 focus:outline-none cursor-pointer my-5"
                        : "bg-transparent border-b-2 border-b-sanJuanBlue w-[325px] md:w-[445px] p-4 focus:outline-none cursor-pointer my-5"
                    }
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <span className="font-bold text-xs italic text-charmPink">
                      {formErrors.email}
                    </span>
                  )}

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="bg-transparent border-b-2 border-b-sanJuanBlue w-[325px] md:w-[445px] p-4 focus:outline-none my-5 cursor-pointer"
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    className="bg-transparent border-b-2 border-b-sanJuanBlue w-[325px] md:w-[445px] p-4 focus:outline-none my-5 cursor-pointer"
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    className={
                      formErrors.message
                        ? "bg-transparent border-b-2 border-b-sanJuanBlue w-[325px] md:w-[445px] p-4 pb-20 focus:outline-none my-8 cursor-pointer"
                        : "bg-transparent border-b-2 border-b-sanJuanBlue w-[325px] md:w-[445px] p-4 pb-20 focus:outline-none my-8 cursor-pointer"
                    }
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {formErrors.message && (
                    <span className="font-bold text-xs italic text-charmPink">
                      {formErrors.message}
                    </span>
                  )}
                </form>
                <button
                  onClick={handleSubmit}
                  className="text-sanJuanBlue flex items-start border-sanJuanBlue border-2 px-6 p-3 rounded-full hover:bg-sanJuanBlue hover:text-white font-sans"
                >
                  submit
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-sanJuanBlue mx-auto lg:mx-0 w-96 mb-5 lg:text-start">
                Join the thousands of innovators already building with us
              </h3>
              <div className="flex items-center flex-wrap mx-auto md:mx-0 w-80 md:w-[30rem] gap-10">
                <img src={tesla} alt="tesla image" className="w-32" />
                <img src={microsoft} alt="microsoft image" className="w-32" />
                <img src={hpWhite} alt="HP image" className="w-32" />
                <img src={oracle} alt="oracle image" className="w-32" />
                <img src={google} alt="google image" className="w-32" />
                <img src={nvidia} alt="nvidia image" className="w-32" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </motion.main>
  );
}
