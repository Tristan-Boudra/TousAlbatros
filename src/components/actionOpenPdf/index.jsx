const ActionOpenPdf = (props) => {
  const contentIcon = props.data;
  const listIcon = contentIcon.map((item) => (
    <a
      href={item.linkPdf}
      className="flex flex-col flex-start md:flex-row md:items-center gap-5 md:gap-0"
    >
      {item.icon}
      <div className="flex flex-col md:ml-3 mt-2 md:mt-0 w-72">
        <p className="text-xl md:text-2xl font-medium text-secondary">
          {item.title}
        </p>
        <p className="text-sm md:text-base font-medium text-tertiary">
          {item.subtitle}
        </p>
      </div>
    </a>
  ));

  return (
    <div className="flex flex-col lg:flex-row gap-10 flex-wrap">{listIcon}</div>
  );
};

export default ActionOpenPdf;
