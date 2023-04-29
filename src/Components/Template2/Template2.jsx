import Template2Component1 from "./Template2Component1";
import Template2Component2 from "./Template2Component2";
import Big from "../../Image/Big.jpeg";
import BCA from "../../Image/BCA.jpeg";
import MCA from "../../Image/MCA.jpeg";
import BDS from "../../Image/BDS.jpeg";
import MBBS from "../../Image/MBBS.jpeg";
import MDMS from "../../Image/MDMS.jpeg";
import BBA from "../../Image/BBA.jpeg";
import MBA from "../../Image/MBA.jpeg";
import BTech from "../../Image/B.Tech..jpeg";
import BArch from "../../Image/B.Arch..jpeg";
import MTech from "../../Image/M.Tech..jpeg";
import BE from "../../Image/BE.jpeg";
import ME from "../../Image/ME.jpeg";

const Template2 = () => {
  return (
    <>
      <div className="coursesdiv">
        <h1 className="coursesheading">Top Courses to Study India</h1>
        <p className="coursespara1">
          India has a profitable economy and a high academic system. As a
          result, it is a good choice for students to study India. Selecting the
          right course after the intermediate is an important decision for
          students. Among all the courses, Engineering is on top of the list
          among Indian students. Candidates can search for the best engineering
          Colleges in India and apply there easily.
        </p>
        <p className="coursespara2">
          There are so many undergraduate and postgraduate programs available in
          Engineering, Management, and Medical for students.
        </p>
        <div className="coursesbottom">
          <div className="coursesleft">
            <div className="forleft">
              <div className="imagediv">
                <img
                  className="borderimage"
                  src={Big}
                  alt="Big"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="coursescenter">
            <div className="forcenter">
              <div className="rightinside">
                <Template2Component1 coursesheading="Computer Courses" />
                <Template2Component2
                  coursesimage={BCA}
                  coursesname="BCA"
                  alt="BCA"
                />
                <Template2Component2
                  coursesimage={MCA}
                  coursesname="MCA"
                  alt="MCA"
                />
                <Template2Component1 coursesheading="Medical Courses" />
                <Template2Component2
                  coursesimage={BDS}
                  coursesname="BDS"
                  alt="BDS"
                />
                <Template2Component2
                  coursesimage={MBBS}
                  coursesname="MBBS"
                  alt="MBBS"
                />
                <Template2Component2
                  coursesimage={MDMS}
                  coursesname="MD/MS"
                  alt="MDMS"
                />
              </div>
            </div>
          </div>
          <div className="coursesright">
            <div className="forright">
              <div className="rightinside">
                <Template2Component1 coursesheading="Management Courses" />
                <Template2Component2
                  coursesimage={BBA}
                  coursesname="BBA"
                  alt="BBA"
                />
                <Template2Component2
                  coursesimage={MBA}
                  coursesname="MBA"
                  alt="MBA"
                />
                <Template2Component1 coursesheading="Engineering Courses" />
                <Template2Component2
                  coursesimage={BTech}
                  coursesname="B.Tech."
                  alt="BTech"
                />
                <Template2Component2
                  coursesimage={BArch}
                  coursesname="B.Arch."
                  alt="BArch"
                />
                <Template2Component2
                  coursesimage={MTech}
                  coursesname="M.Tech."
                  alt="MTech"
                />
                <Template2Component2
                  coursesimage={BE}
                  coursesname="BE"
                  alt="BE"
                />
                <Template2Component2
                  coursesimage={ME}
                  coursesname="ME"
                  alt="ME"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template2;
