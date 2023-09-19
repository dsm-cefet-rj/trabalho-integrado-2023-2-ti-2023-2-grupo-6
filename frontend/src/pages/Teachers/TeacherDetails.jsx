import { useState } from "react";
import teacherImg from "/assets/images/author.jpg";
import TeacherAbout from "./TeacherAbout";
import Tag from "../../components/BlogList/Tag";

const TeacherDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={teacherImg} alt="" className="w-full" />
              </figure>

              <div>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Natan Balthazar
                </h3>
                <Tag label={"Front-End"} />

                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit flet
                  okjable!
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <TeacherAbout />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetails;
