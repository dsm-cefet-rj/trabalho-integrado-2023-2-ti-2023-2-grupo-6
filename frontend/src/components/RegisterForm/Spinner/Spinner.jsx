const Spinner = () => {
  return (
    <div className="fixed bg-[rgba(0,0,0,0.5)] z-[5000] flex justify-center items-center inset-0;">
      <div className="w-16 h-16 animate-[spin_1.2s_linear_infinite] rounded-[50%] border-8 border-solid border-[#000_transparent_#555_transparent]"></div>
    </div>
  );
};

export default Spinner;
