import About from "./About";
import Gallery from "./Gallery";
import Aos from "aos";
import 'aos/dist/aos.css'
import Nav from "./Nav";
import image from "/src/assets/cover1.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Contact from "./Contact";
import Footer from "../layout/Footer";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 }); 
  }, []);
 
  return (
   <div >
  
     <div className=" relative  w-full   ">
   <img
     src={image}
     alt="Cover"
     className="md:w-full lg:w-full xl:w-full sm:w-full  w-full bg-opacity-30  h-screen "
   />

   <div className=" w-full absolute top-0">
     <Nav />
   </div>
   <motion.p animate={{position:5}} data-aos="fade-up" className=" md:left-20 left-10  sm:left-20 lg:left-36 xl:left-32 2xl:left-44 absolute top-36 text-xs text-slate-300">
     ВТОРИЧНАЯ НЕДВИЖИMOCTb
   </motion.p>

   <p data-aos="fade-up" className="md:left-20 left-10   sm:left-20 lg:left-36 xl:left-32 2xl:left-44 absolute top-44  md:text-4xl lg:text-5xl sm:text- text-3xl tracking-wide lg:leading-normal font-bold text-slate-200">
     ПРОДАЖА КВАРТИР <br /> И КОМНАТ
   </p>      
   <p data-aos="fade-up" className=" md:left-20 left-10    sm:left-20 lg:left-36 xl:left-32 2xl:left-44 absolute break-normal text-slate-300 font-semibold text-xs tracking-wide  leading-loose md:top-[310px] lg:top-[330px] sm:top-[260px] top-[270px]">
     Lorem ipsum reväktigt sun, plasm, kameratelefon, homoriskap.
     <br /> Kaskade semir, pultvätta prehenade pren
   </p>

   <div data-aos="fade-up" className=" md:left-20 left-10  sm:left-20 lg:left-36 xl:left-32 2xl:left-44 top-[450px] border p-4 border-slate-400 space-x-20 text-xs text-slate-500 absolute">
     НАЙТИ ПОКУПАТЕЛЯ
   </div>






   <div className="flex justify-between absolute  bottom-0 md:w-full lg:w-full xl:w-full sm:w-full  w-full">
<div className="bg-opacity-[0.7]  bg-gray-800 flex">
<p><svg className="h-12 w-12 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
</svg>
</p>
<p><svg className=" h-12 w-12 text-gray-500"  width="16" height="72" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" /></svg></p>
<div   className=" text-xs text-slate-300 m-1" ><p className=" flex justify-center">Продажа </p>
<p>нежилых помещений</p></div>

</div>



<div className=" bg-opacity-[0.7] flex  bg-gray-800 ">


<div className=" text-xs text-slate-300 m-1" ><p className=" flex justify-center">Ипотека </p>
<p>нежилых помещений</p></div>
<p><svg className=" h-12 w-12 text-gray-500"  width="16" height="72" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" /></svg></p>
<p><svg className="h-12 w-12 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
</svg>

</p>

</div>
</div>

 </div>
 <About/>
 <Gallery/>
 <Contact/><Footer/>

 </div>
  );
}
