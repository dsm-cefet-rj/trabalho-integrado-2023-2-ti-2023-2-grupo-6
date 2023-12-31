import SearchBar from "../../components/SearchBar/index";
import TeacherList from "../../components/Teacher/TeacherList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeachers,
  selectAllTeachers,
} from "../../features/teacher/teacherSlice";
import EmptyList from "../../components/BlogList/EmptyList";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const filteredTeachers = teachers.filter((teacher) =>
      teacher.specialization
        .toLowerCase()
        .includes(searchKey.toLowerCase().trim())
    );
    console.log(filteredTeachers);
  };

  const handleClearSearch = () => {
    setSearchKey("");
  };

  return (
    <>
      <section>
        <div className="px-4 mx-auto max-w-screen-md mt-[50px] mb-[70px] h-[100%]">
          <h2 className="heading text-center">
            Encontre o professor ideal para você!
          </h2>
          <p className="mb-8 lg:mb-16 text-center font-light text__para">
            Está com dificuldade em algum assunto e quer sanar todas as suas
            dúvidas? Marque uma reunião com nossos professores!
          </p>
        </div>
      </section>

      <div className="max-w-[1140px] w-[95%] mx-auto my-0 px-0 py-4;">
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        {teachers.length === 0 ? <EmptyList /> : <TeacherList />}
      </div>
    </>
  );
};

export default Teachers;
