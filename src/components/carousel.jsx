import { useState } from "react";

const Carousel = () => {
  const chevronUp = require('../assets/images/icon/chevronUp.png');

  const images = [
    require("../assets/logos/supports/1.png"),
    require("../assets/logos/supports/2.png"),
    require("../assets/logos/supports/3.png"),
    require("../assets/logos/supports/4.png"),
    require("../assets/logos/supports/5.png"),
    require("../assets/logos/supports/6.png")
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const displayedImages = [];

  for (let i = 0; i < 3; i++) {
    const index = (currentImageIndex + i) % images.length;
    displayedImages.push(images[index]);
  }

  return (
    <div className="flex items-center justify-center space-x-4 relative">
      <img
        alt="chevronPrevImage"
        src={chevronUp}
        className="absolute top-1/2 cursor-pointer w-20 h-20 left-0 transform -translate-y-1/2 rotate-[-90deg]"
        onClick={prevImage}
      ></img>
      <div className="flex gap-10 w-9/12 justify-center">
        {displayedImages.map((image, index) => (
          <img key={index} src={image} className="w-auto h-32 object-cover" alt={`support ${index + 1}`} />
        ))}
      </div>
      <img
        alt="chevronNextImage"
        src={chevronUp}
        className="absolute top-1/2 cursor-pointer w-20 h-20 right-0 transform -translate-y-1/2 rotate-90"
        onClick={nextImage}
      ></img>
    </div>
  );
};

export default Carousel;
