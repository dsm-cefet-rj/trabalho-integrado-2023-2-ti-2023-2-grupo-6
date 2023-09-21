import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { teachers } from "../../server/database/db.json";
import Tag from "../../components/BlogList/Tag";
import { Link } from "react-router-dom";
import AppointmentPainel from "./AppointmentPainel";

const TeacherDetails = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    let teacher = teachers.find((teacher) => teacher.id === parseInt(id));
    if (teacher) {
      setTeacher(teacher);
    }
  }, [id]);

  if (!teacher) {
    return null;
  }

  return (
    <section>
      <Link
        className="no-underline text-[0.8rem] text-[#a9a9a9] font-medium block ml-2.5 mt-2.5 mb-8"
        to="/professores"
      >
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[300px] max-h-[300px]">
                <img
                  src={teacher.photo}
                  alt=""
                  className="w-full h-[200px] object-cover mb-2 rounded-[20px]"
                />
              </figure>

              <div>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {teacher.name}
                </h3>
                <Tag label={teacher.specialization} />

                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa veritatis sit earum rem magni expedita.
                </p>
              </div>
            </div>
            <div className="">
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Descubra mais sobre {teacher.name}
                </h3>
              </div>

              <p className="text__para text-[14px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium quisquam suscipit libero assumenda illum
                necessitatibus esse obcaecati rerum perspiciatis temporibus. Ab
                magnam facilis officia modi explicabo ducimus voluptate atque
                aliquam? Quisquam suscipit libero assumenda illum necessitatibus
                esse obcaecati rerum perspiciatis temporibus. ducimus voluptate
                atque aliquam?
              </p>
              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Formação
                </h3>
              </div>
              <div>
                <ul className="pt-4 md:p-5">
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Técnico
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Centro Federal de Educação Tecnológica Celso Suckow da
                      Fonseca, RJ
                    </p>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Aluno
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Universidade do Estado do Rio de Janeiro
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Experiencia
                </h3>
              </div>
              <div>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                  <li className="p-4 rounded bg-[#c8f1ce]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                      07-04-2010 - 13-09-2014
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                      Monitor
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Centro Federal de Educação Tecnológica Celso Suckow da
                      Fonseca, RJ
                    </p>
                  </li>
                  <li className="p-4 rounded bg-[#c8f1ce]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                      07-04-2010 - 13-09-2014
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                      Professor
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Universidade Federal Fluminense, RJ
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <AppointmentPainel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetails;
