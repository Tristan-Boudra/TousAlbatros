const TextDescriptionPrestation = (props) => {
  const contentDescriptionPrestation = props.data;
  const listIcon = contentDescriptionPrestation.map((item) => (
    <div className="flex flex-row gap-10 items-center">
      <div className="flex bg-primary/20 w-52 h-16 rounded-lg content-center items-center">
        {item.icon}
      </div>
      <p className="text-base font-medium text-quaternary mt-4">
        {item.description}
      </p>
    </div>
  ));

  return (
    <div>
      <div className="bg-primary/20 w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">Prestation</p>
      </div>
      <h1 className="text-4xl text-secondary font-bold mt-4">
        Nos Prestations
      </h1>
      <div className="flex flex-col gap-10 mt-10">{listIcon}</div>
    </div>
  );
};

export default TextDescriptionPrestation;
