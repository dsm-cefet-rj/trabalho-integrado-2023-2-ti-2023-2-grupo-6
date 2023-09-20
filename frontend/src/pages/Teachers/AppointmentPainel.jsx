const AppointmentPainel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Agende sua aula</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          📗
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Horários Disponíveis:
        </p>

        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Domingo
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Terça
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Quarta
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md hover:bg-green-900">
        Marque sua aula
      </button>
    </div>
  );
};

export default AppointmentPainel;
