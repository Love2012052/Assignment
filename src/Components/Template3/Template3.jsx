import Template3Array from "./Template3Array";
import Template3Component from "./Template3Component";

const Template3 = () => {
  return (
    <>
      <div className="scopesdiv">
        <div className="headingouter">
          <h1 className="scopesheading">Career Scopes for Students</h1>
        </div>
        <p className="scopesparagraph">
          There are lots of career scopes for students who completed their
          degrees in India. Students can choose any of the courses from
          different programs in management, engineering, medical, etc. We have
          mentioned below the scope for students after completing the degree in
          India from popular colleges of the country.
        </p>
        <div className="outerscopesdiv">
          {Template3Array.map((val) => {
            return (
              <Template3Component
                icon={val.icon}
                topic={val.topic}
                description={val.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Template3;
