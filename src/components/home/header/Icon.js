const Icon = (props) => {
    const contentIcon = props.contentIcon;
    const listIcon = contentIcon.map((item) =>
        <div className='flex flex-col md:flex-row items-center md:ml-12'>
            <div>
                <div className="flex bg-primary/20 w-20 h-20 rounded-lg content-center items-center">
                    {item.icon}
                </div>
            </div>
            <div className='flex flex-col md:ml-3 items-center md:items-start mt-2 md:mt-0'>
                <p className='text-2xl font-medium text-slate-900'>{item.title}</p>
                <p className='text-base font-medium text-slate-500'>{item.subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row mx-auto gap-10 flex-wrap">
            {listIcon}
        </div>
    );
};

export default Icon;