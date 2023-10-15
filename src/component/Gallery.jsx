import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

import image1 from "/src/assets/cover1.jpg";
import image2 from "/src/assets/cover2.jpeg";
import image3 from "/src/assets/cover3.jpg";
import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    Aos.init({ duration: 2000 }); 
  }, []);


  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);
  const [isZoomed4, setIsZoomed4] = useState(false);
  const handleImageClick1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  const handleImageClick2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  const handleImageClick3 = () => {
    setIsZoomed3(!isZoomed3);
  };
  const handleImageClick4 = () => {
    setIsZoomed4(!isZoomed4);
  };
  return (
    <>
      <div className=" bg-black top-0 w-full"></div>
      <div className="md:grid grid-cols-12 h-screen  bg-black">
        <div data-aos="fade-up" className="col-span-3  relative">
          <img
            src={image1}
            className={`h-full relative bg-black object-cover opacity-30 transition-opacity duration-300 hover:opacity-100 ${
              isZoomed1 ? "scale-110" : "scale-100"
            } cursor-pointer`}
            alt="Image 1"
            onClick={handleImageClick1}
          />
          <div className="absolute left-6 top-9 text-slate-300 font-Poppins font-bold md:text-sm text-[10px]">
            <p className="md:text-xl text-sm">0 1</p>
            <p className="mt-2">Квартиры / комнаты</p>
          </div>

          <div className=" hidden md:block font-Poppins text-[10px] rotate-90 text-slate-300 absolute  top-[550px] ">
            посмотреть посмотреть
          </div>
          {isZoomed1 && (
            <div className="flex h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48  bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
              <svg
                className="h-8 w-8 text-slate-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          )}
        </div>

        <div data-aos="fade-up" className="col-span-3  relative">
          <img
            src={image2}
            className={`h-full relative object-cover bg-black  opacity-30 transition-opacity duration-300 hover:opacity-100 ${
              isZoomed2 ? "scale-110" : "scale-100"
            } cursor-pointer`}
            alt="Image 1"
            onClick={handleImageClick2}
          />
          <div className=" absolute  left-6 top-9 text-slate-300   font-Poppins font-bold md:text-sm text-[10px]">
            <p className=" md:text-xl text-sm">0 2</p>
            <p className=" mt-2">Жилые дома</p>
          </div>
          <div className="hidden md:block font-Poppins text-[10px] rotate-90 text-slate-300 absolute  top-[550px] ">
            посмотреть посмотреть
          </div>
          {isZoomed2 && (
            <div className="flex h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48 bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
              <svg
                className="h-8 w-8 text-slate-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          )}
        </div>

        <div data-aos="fade-down" className="col-span-3  relative">
          <img
            src={image3}
            className={`h-full relative object-cover bg-black opacity-30  transition-opacity duration-300 hover:opacity-100 ${
              isZoomed3 ? "scale-110" : "scale-100"
            } cursor-pointer`}
            alt="Image 1"
            onClick={handleImageClick3}
          />
          <div className=" absolute  left-6 top-9 text-slate-300   font-Poppins font-bold md:text-sm text-[10px]">
            <p className=" md:text-xl text-sm">0 3</p>
            <p className=" mt-2">Новостройки</p>
          </div>
          <div className=" hidden md:block font-Poppins text-[10px] rotate-90 text-slate-300 absolute  top-[550px] ">
            посмотреть посмотреть
          </div>
          {isZoomed3 && (
            <div className="flex h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48 bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
              <svg
                className="h-8 w-8 text-slate-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          )}
        </div>

        <div data-aos="fade-up" className="col-span-3  relative">
          <img
            src={image1}
            className={`h-full relative object-cover opacity-70 bg-black   transition-opacity duration-300 hover:opacity-100 ${
              isZoomed4 ? " scale-110 " : "scale-100"
            } cursor-pointer`}
            alt="Image 1"
            onClick={handleImageClick4}
          />
          <div className=" absolute  left-6 top-9 text-slate-300   font-Poppins font-bold md:text-sm text-[10px]">
            <p className=" md:text-xl text-sm">0 4</p>
            <p className=" mt-2">Коммерческая </p>
            <p className=" mt-2"> недвижимость</p>
          </div>
          <div className="hidden md:block font-Poppins text-[10px] rotate-90 text-slate-300 absolute  top-[550px] ">
            посмотреть посмотреть
          </div>
          {isZoomed4 && (
            <div className="flex  h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48 bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
              <svg
                className="h-8 w-8 text-slate-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
