import React from "react";
import { Link } from "react-router-dom";
import ListCard from "../../components/ListCard";

const Home = () => {
  const recentLists = [
    { id: 1, name: "Lista de compras", date: "2 días atrás" },
    { id: 2, name: "Lista de tareas", date: "1 semana atrás" },
    { id: 3, name: "Lista de deseos", date: "2 semanas atrás" },
    { id: 2, name: "Lista de tareas", date: "1 semana atrás" },
    { id: 2, name: "Lista de tareas", date: "1 semana atrás" },
  ];
  const getStorageProducts = localStorage.getItem("nameList");
  //const parsedData = JSON.parse(getStorageProducts);

  const storedNameList = localStorage.getItem("nameList");
  const parsedData = JSON.parse(storedNameList);
  console.log(parsedData);
  return (
    <div className="z-0 mx-auto p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 h-screen lg:bg-contain bg-[url('../../assets/images/PaperBG.jpg')] ">
  
      <div className="col-span-full flex justify-between items-center h-full mb-6">
        <div className="flex items-center text-end h-28 w-full bg-contain bg-no-repeat bg-[url('../../assets/images/Cloud.webp')]">
          <h1 className="text-center text-2xl font-bold">Listas recientes</h1>
        </div>
        <Link to="/create">
          <div className="w-16 h-16 lg:hidden bg-violet-300 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </Link>
      </div>
      {parsedData && parsedData.map((list) => (
      <ListCard
        key={list.id}
        title={list.name}
        items={list.data}
      />
    ))}
      <Link to="/create" className="self-start">
        <div className="hidden lg:block m-auto">
          <div className="max-w-[22rem] h-[13.5rem] bg-violet-300 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
