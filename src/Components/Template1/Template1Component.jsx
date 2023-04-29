const Template1Component = (props) => {
  return (
    <>
      <div className="box">
        <div className="boxinner">
          <div className="leftbox">
            <h3 className="boxheading">{props.heading}</h3>
            <h5 className="boxcontent">{props.content}</h5>
          </div>
          <div className="rightbox">
            <img src={props.image} alt={props.alt} height="100%" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1Component;
