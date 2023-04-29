const Template3Component = (props) => {
  return (
    <>
      <div className="innerscopesdiv">
        <div className="iconsscopes">
          <i class={props.icon}></i>
        </div>
        <div className="iconsbox">
          <h4 className="domainheading">{props.topic}</h4>
          <p className="scopespara">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Template3Component;
