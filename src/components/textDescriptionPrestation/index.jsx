const TextDescriptionPrestation = (props) => {
  const contentDescriptionPrestation = props.data;
  const listIcon = contentDescriptionPrestation.map((item) => (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center">
      {item.icon}
      <p className="text-sm md:text-base font-medium text-quaternary md:mt-4">
        {item.description}
      </p>
    </div>
  ));

  return (
    <div>
      <div className="bg-primary/20 w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">Actions</p>
      </div>
      <h1 className="text-2xl md:text-4xl text-secondary font-bold mt-4">
        Nos Actions
      </h1>
      <div className="flex flex-col gap-10 mt-10">{listIcon}</div>
    </div>
  );
};

export default TextDescriptionPrestation;
