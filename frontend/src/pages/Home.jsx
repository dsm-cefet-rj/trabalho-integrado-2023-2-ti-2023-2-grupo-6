import HomeBg from "../assets/images/inicial/HomeBg.svg";
import { BiBookAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="pt-[200px] 2xl:h-[100%]">
      <div className="container ">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          <div className="lg:w-[75%]">
            <h1 className=" heading font-[800] md:text-[60px] md:leading-[70px]">
              Descubra o instrutor ideal para você!
            </h1>
            <p className="text__para text-[22px] leading-[38px] text-[#6c6c80] mt-[24px]">
              Este é o lugar perfeito para achar um especialista que irá te
              ajudar a alcançar resultados excelentes no campo que mais importa
              para você.
            </p>

            <Link to="/blog">
              <button
                type="button"
                className="btn hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <BiBookAlt className="w-[20px] h-[20px] mr-5" />
                Estudar
              </button>
            </Link>
          </div>

          <div>
            <img
              className="h-100vh bg-right-bottom bg-no-repeat"
              src={HomeBg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
