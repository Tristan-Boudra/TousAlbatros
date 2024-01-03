import { useState, useEffect } from "react";

const Carousel = () => {
  const chevronUp = require("../../assets/images/icon/chevronUp.png");

  const images = [
    require("../../assets/logos/supports/1.png"),
    require("../../assets/logos/supports/2.png"),
    require("../../assets/logos/supports/3.png"),
    require("../../assets/logos/supports/4.png"),
    require("../../assets/logos/supports/5.png"),
    require("../../assets/logos/supports/6.png"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const nextImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const displayedImages = [];

  if (isMobile) {
    const index = currentImageIndex % images.length;
    displayedImages.push(images[index]);
  } else {
    for (let i = 0; i < 3; i++) {
      const index = (currentImageIndex + i) % images.length;
      displayedImages.push(images[index]);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-primary/20 w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">
          Entreprises donatrices
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4 relative w-full mt-10">
        <img
          alt="chevronPrevImage"
          src={chevronUp}
          className="absolute top-1/2 cursor-pointer w-14 h-14 md:w-20 md:h-20 left-0 transform -translate-y-1/2 rotate-[-90deg]"
          onClick={prevImage}
        />
        <div className="flex gap-10 md:w-9/12 sm:w-full justify-center">
          {displayedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-full md:w-auto h-20 md:h-32 object-cover"
              alt={`support ${index + 1}`}
            />
          ))}
        </div>
        <img
          alt="chevronNextImage"
          src={chevronUp}
          className="absolute top-1/2 cursor-pointer w-14 h-14 md:w-20 md:h-20 right-0 transform -translate-y-1/2 rotate-90"
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default Carousel;
