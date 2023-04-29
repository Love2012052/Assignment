import Template1Array from "./Template1Array";
import Template1Component from "./Template1Component";

const Template1 = () => {
  return (
    <>
      <div className="highlightsdiv">
        <h1 className="highlightsheading">Highlights about India</h1>
        <hr></hr>
        <div className="outerbox">
          <div className="innerbox">
            {Template1Array.map((val) => {
              return (
                <Template1Component
                  heading={val.heading}
                  content={val.content}
                  image={val.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
