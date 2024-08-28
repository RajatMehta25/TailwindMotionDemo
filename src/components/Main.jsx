// import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
const Main = () => {
  const ref = useRef(null);
  const data = [
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Gupta",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Aswal",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Mehra",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Oberoi",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Sharma",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Jain",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Jhamb",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Maiya",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Johnson",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Kapoor",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Meena",
      age: "25",
    },
    {
      image: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
      name: "Sita Uniyal",
      age: "25",
    },
  ];
  const NaiJana = () => {
    Swal.fire({
      title: "Me Na Jau Kahi !",
      // text: "Me Na Jau Kahi !",
      icon: "error",
      confirmButtonText: "Bhakk",
    });
  };
  return (
    <div className="w-full flex ">
      <div className="text-white text-[2rem] w-1/5 bg-stone-700 text-center p-5 break-words">Mayka</div>
      <div className=" w-3/5  bg-zinc-900 flex flex-wrap gap-5 p-5 justify-center" ref={ref}>
        {data.map((ele) => (
          <motion.div
            drag
            dragConstraints={ref}
            dragSnapToOrigin
            onDragEnd={() => NaiJana()}
            className="rounded-[1rem] bg-zinc-600 w-64 h-72 text-white p-5 flex flex-col justify-around align-middle overflow-hidden shadow-lg hover:shadow-indigo-500 cursor-pointer "
          >
            <img src={ele.image} alt={ele.name} className="h-1/2  hover:scale-125 cursor-pointer rounded-lg " />

            <div>{`
            ${ele.name}
            ${ele.age}
            `}</div>
            <div className="flex flex-row flex-wrap gap-5 ">
              <motion.button
                // whileTap="tap"
                // whileHover="hover"
                // variants={buttonVariants}
                className="bg-red-700 rounded-lg px-5 text-lg"
                onClick={() => NaiJana()}
              >
                Mayka
              </motion.button>
              <motion.button
                // whileTap="tap"
                // whileHover="hover"
                // variants={buttonVariants}
                className="bg-lime-500 rounded-lg px-5 text-lg"
                onClick={() => NaiJana()}
              >
                Sasural
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-white text-[2rem] w-1/5 bg-stone-700 text-center p-5 break-words">Sasural</div>
    </div>
  );
};

export default Main;
