const PricingCard = ({ title, description, price, features, buttonText }) => {
  return (
    <div className="lg:text-start w-fit">
      <h2 className="text-darkPink text-2xl lg:text-3xl">{title}</h2>
      <p className="font-sans text-sm text-lightSanJuanBlue my-5 w-52 lg:w-80">
        {description}
      </p>
      <span className="text-sanJuanBlue text-5xl lg:text-6xl">{price}</span>
      <div className="w-full h-[1px] bg-sanJuanBlue my-5"></div>
      <div className="font-sans text-sanJuanBlue">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-6">
            <img src={feature.icon} alt="" className="w-3 h-2" />
            <p className={feature.disabled ? "opacity-40 my-1" : "my-1"}>
              {feature.label}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-sanJuanBlue my-5"></div>
      <button className="text-sanJuanBlue border-sanJuanBlue border-2 px-6 p-3 rounded-full hover:bg-sanJuanBlue hover:text-white font-sans">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
