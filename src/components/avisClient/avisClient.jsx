const AvisClient = () => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-xl w-72 p-5 relative">
      <img
        src={require("../../assets/logos/logo_tousAlbatros.png")}
        className="h-20 w-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        alt="Logo TousAlbatros"
      />
      <h3 className="text-secondary font-bold mt-10">Boudra Tristan</h3>
      <p className="text-center text-tertiary mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default AvisClient;
