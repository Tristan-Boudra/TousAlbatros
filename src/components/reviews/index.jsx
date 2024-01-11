const AvisClient = (props) => {
  const { name, description, image } = props.data;

  return (
    <div className="flex items-center justify-center space-x-4 relative w-full mt-10">
      <div className="flex flex-col justify-center items-center border rounded-xl w-48 md:w-60 lg:w-72 p-5 relative">
        <img
          src={image}
          className="h-32 w-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          alt="Logo TousAlbatros"
        />
        <h3 className="text-secondary font-bold mt-14 text-sm md:text-base">
          {name}
        </h3>
        <p className="text-center text-tertiary mt-5 text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AvisClient;
