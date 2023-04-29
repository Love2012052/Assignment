import Template4Array from "./Template4Array";
import Template4Component from "./Template4Component";

const Template4 = () => {
  return (
    <>
      <div className="studydiv">
        <h1 className="topstudyheading">Study India vs Study Abroad</h1>
        <div className="diffouter">
          <div className="diffinner">
            <div className="diffheading">
              <div className="detailsheading topleft">
                <h2 className="headingfont">Details</h2>
              </div>
              <div className="studyheading">
                <h2 className="headingfont">Study India</h2>
              </div>
              <div className="studyheading topright">
                <h2 className="headingfont">Study Abroad</h2>
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
            {Template4Array.map((val) => {
              return (
                <Template4Component
                  detail={val.detail}
                  studyindia={val.studyindia}
                  studyabroad={val.studyabroad}
                />
              );
            })}
            <div className="diffheading">
              <div className="detailsheading bottomleft">
                <h5 className="contentfont">University</h5>
              </div>
              <div className="studyheading">
                <h5 className="contentfont">
                  India boasts the largest universityin the world
                </h5>
              </div>
              <div className="studyheading bottomright">
                <h5 className="contentfont">
                  No university is as large as IGNOU Abroad
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template4;
