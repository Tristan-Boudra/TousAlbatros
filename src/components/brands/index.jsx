const Carousel = () => {
  const images = [
    require("../../assets/logos/supports/1.png"),
    require("../../assets/logos/supports/2.png"),
    require("../../assets/logos/supports/3.png"),
    require("../../assets/logos/supports/4.png"),
    require("../../assets/logos/supports/5.png"),
    require("../../assets/logos/supports/6.png"),
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-primary/20 w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">
          Entreprises donatrices
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-5 relative w-full mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="md:w-auto h-20 md:h-20 object-cover"
            alt={`support ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
