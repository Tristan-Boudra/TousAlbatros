import { useState } from "react";
import chevronUp from "../../assets/images/icon/chevronUp.png";

const ImgWithCarousel = (props) => {
  const dataImg = props.data;
  const allImages = dataImg.map((img) => img.image);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
    );
  };
  return (
    <ul className="flex flex-row w-full md:w-1/2 relative items-center lg:flex-row gap-10 flex-wrap">
      {dataImg.map((img, index) => (
        <li
          key={index}
          className={`flex flex-col ${
            index === currentImageIndex ? "" : "hidden"
          }`}
        >
          <img src={img.image} alt="Logo TousAlbatros" className="" />
        </li>
      ))}
      <img
        alt="chevronPrevImage"
        src={chevronUp}
        className="absolute top-1/2 cursor-pointer w-14 h-14 md:w-20 md:h-20 left-[-30px] md:left-0 transform -translate-y-1/2 rotate-[-90deg]"
        onClick={prevImage}
      />
      <img
        alt="chevronNextImage"
        src={chevronUp}
        className="absolute top-1/2 cursor-pointer w-14 h-14 md:w-20 right-[-30px] md:h-20 md:right-0 transform -translate-y-1/2 rotate-90"
        onClick={nextImage}
      />
    </ul>
  );
};

export default ImgWithCarousel;
