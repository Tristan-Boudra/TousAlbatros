const TextDescription = (props) => {
  const contentDescription = props.data;
  return (
    <div>
      <div className="bg-primary/20 w-max rounded-full">
        <p className="text-primary px-3 py-2 w-auto text-xs">
          {contentDescription.tag}
        </p>
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl text-secondary font-bold mt-4">
          {contentDescription.title}
        </h1>
        <p className="text-sm md:text-base font-medium text-quaternary mt-4">
          {contentDescription.description}
        </p>
      </div>
    </div>
  );
};

export default TextDescription;
