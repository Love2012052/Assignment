const Template4Component = (props) => {
  return (
    <>
      <div className="diffheading">
        <div className="detailsheading">
          <h5 className="contentfont">{props.detail}</h5>
        </div>
        <div className="studyheading">
          <h5 className="contentfont">{props.studyindia}</h5>
        </div>
        <div className="studyheading">
          <h5 className="contentfont">{props.studyabroad}</h5>
        </div>
      </div>
      <div className="diffheading">
        <div className="detailsheadinghr">
          <hr></hr>
        </div>
        <div className="studyheadinghr">
          <hr></hr>
        </div>
        <div className="studyheadinghr">
          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default Template4Component;
