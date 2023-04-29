const Template2Component2 = (props) => {
  return (
    <>
      <div className="namediv">
        <div className="leftname">
          <img
            src={props.coursesimage}
            alt={props.alt}
            height="100%"
            width="100%"
          />
        </div>
        <div className="rightname">{props.coursesname}</div>
      </div>
    </>
  );
};

export default Template2Component2;
