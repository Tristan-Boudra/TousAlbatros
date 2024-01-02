const Values = (props) => {
  const contentIcon = props.data;
  const listIcon = contentIcon.map((item) => (
    <div className="flex items-center gap-5 md:gap-0">
      <div className="flex bg-primary/20 w-16 h-16 rounded-lg content-center items-center">
        {item.icon}
      </div>
      <div className="flex flex-col md:ml-3 mt-2 md:mt-0 w-72">
        <p className="text-2xl font-medium text-secondary">{item.title}</p>
        <p className="text-base font-medium text-tertiary">{item.subtitle}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col lg:flex-row gap-10 flex-wrap">{listIcon}</div>
  );
};

export default Values;
