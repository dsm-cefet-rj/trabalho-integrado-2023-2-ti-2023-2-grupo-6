import work from "../../../public/assets/images/work.gif";
const Working = () => {
  return (
    <section>
      <div className="flex flex-col justify-center mb-[70px] px-4 mx-auto max-w-screen-sm mt-[50px] ">
        <h2 className="heading text-center">Trilhas de Conhecimento</h2>
        <img src={work} alt="Trabalhando" />
      </div>
    </section>
  );
};

export default Working;
