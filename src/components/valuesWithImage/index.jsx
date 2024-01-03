const ValuesWithImage = (props) => {
  const value = props.data;

  return (
    <div className="flex flex-col lg:flex-row gap-10 flex-wrap">
      <div className="flex items-center gap-5 md:gap-0">
        <div className="flex bg-primary/20 w-12 h-12 md:w-16 md:h-16 rounded-lg content-center items-center">
          {value.icon}
        </div>
        <div className="flex flex-col md:ml-3 mt-2 md:mt-0 w-72">
          <p className="text-xl md:text-2xl font-medium text-secondary">
            {value.title}
          </p>
          <p className="text-sm md:text-base font-medium text-tertiary">
            {value.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesWithImage;
