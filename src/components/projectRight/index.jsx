import React, { useState } from "react";
import chevronUp from "../../assets/images/icon/chevronUp.png";

const ProjectRight = (props) => {
  const { name, description, image } = props.data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center border rounded-xl p-5 relative">
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <h3 className="text-secondary font-bold text-sm md:text-base">
          {name}
        </h3>
        <p className="text-tertiary mt-5 text-sm md:text-base">{description}</p>
      </div>
      <ul className="flex flex-row w-full  md:w-1/2 relative items-center justify-center">
        {image.map((img, index) => (
          <li
            key={index}
            className={`flex flex-col ${
              index === currentImageIndex ? "" : "hidden"
            }`}
          >
            <img
              src={img.image}
              alt="Logo TousAlbatros"
              className="h-32 w-auto rounded-full"
            />
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
    </div>
  );
};

export default ProjectRight;
