import SearchBar from "../../components/SearchBar/index";
import { teachers } from "../../assets/data/db.json";
import TeacherCard from "../../components/Teacher/TeacherCard";

const Teachers = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="px-4 mx-auto max-w-screen-md mt-[50px] mb-[70px] h-[100%]">
          <h2 className="heading text-center">
            Ache o professor ideal para você!
          </h2>
          <p className="mb-8 lg:mb-16 text-center font-light text__para">
            Está com dificuldade em algum assunto e quer sanar todas as suas
            dúvidas? Marque uma reunião com nossos professores!
          </p>
          <SearchBar />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teachers;
