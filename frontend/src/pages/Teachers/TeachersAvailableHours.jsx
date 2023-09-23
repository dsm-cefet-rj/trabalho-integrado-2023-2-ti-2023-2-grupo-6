import React from 'react'

const TeachersAvailableHours = () => {
  
    function criaHorario(e)
    {
      e.preventDefault()
    }
  return (
    <>
    <div className="text-center h-[250px] w-[250px] shadow-md text-[20px] rounded-lg p-3">
            <h1 className="text-headingColor text-[20px] leading-9 font-bold">Disponibilize um horário</h1>
            <form 
            onSubmit={criaHorario}
            className="mt-4 flex flex-col gap-3"
            >
                  <input
                    className="border text-[16px] mb-2" 
                    type="datetime-local"
                    > 
                  </input>
                  <button className="mt-4 btn px-1 w-full text-[14px] h-7rounded-md hover:bg-green-900">Disponibilizar</button>
            </form>
    </div> 
    </>
  )
}

export default TeachersAvailableHours