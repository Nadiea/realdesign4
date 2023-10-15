import image from "/src/assets/contact.png"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Contact() {


  useEffect(() => {
    Aos.init({ duration: 2000 }); 
  }, []);




  return (
    <div className="bg-zinc-900 md:p-24 p-16 md:mt-0 mt-72 sm:mt-[500px] lg:mt-0 ">


<div className=" md:grid grid-cols-12">
<div className=" grid justify-start col-span-6 ">
    <h1 data-aos="flip-right"  className=" font-Poppins text-4xl font-bold  text-slate-50 mb-10">КОНСУЛЬТАЦИЯ</h1>
    <p data-aos="zoom-in" className=" font-Poppins text-xs   text-slate-50 mb-1 ">Оставьте ваши данные и наш консультант свяжется с вами</p>
    <p data-aos="zoom-in"  className=" font-Poppins text-xs  mb-6  text-slate-50 ">в течение 10 минут</p>
 
       <input data-aos="zoom-in"  className=" w-60 h-12 mb-2 rounded-md  bg-zinc-800 p-1 font-Poppins" placeholder="Ваше имя"  />
       <input  data-aos="zoom-in"  className=" w-60 h-12 mb-2  rounded-md  bg-zinc-800  p-1  font-Poppins " placeholder="Ваш телефон"  />
     
       <input data-aos="zoom-in"  className=" w-60 h-12  rounded-md p-1  font-Poppins mb-10 bg-zinc-800" placeholder="Email "  />
       <div data-aos="zoom-in"  className=" w-60 h-16 border-2 text-slate-500 font-Poppins flex justify-center items-center border-zinc-400">.г.Москва,ул.Московская д.0</div>
<p  data-aos="zoom-in" className=" font-Poppins text-slate-500 text-xs">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ </p>
<p data-aos="zoom-in"  className=" font-Poppins  text-slate-500 text-xs ml-20 underline"> Hawa Honry, unpunane ycro</p>
   
</div>
<div className="  hidden md:block  grid justify-start col-span-6">
<div data-aos="zoom-in"    className="  reletive w-full h-80"><img  className="h-full w-full " src={image}/></div>
<h1 className=" font-Poppins text-2xl  absolute top-[2550px]  text-slate-50  ">НАШИ КОНТАКТЫ</h1>
<div className=" flex gap-24 mt-20 text-slate-400">
<div className=" flex gap-5 font-xs font-Poppins">
 <div><svg className="h-4 w-4  text-gray-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></div>
<div>
    <p className=" text-xs">+7(912) 345-67-89</p>
   
    <p className=" text-xs">+7(912) 345-67-89</p>
</div>
</div>
<div className=" text-xs flex gap-5"><p><svg className="h-4 w-4 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg>

</p>

<p className=" text-xs font-Poppins">32,mirpur Dhanmundi Dhaka:1205</p>
</div>


</div>


<p className="text-xs font-Poppins ml-10 text-slate-400   mb-5">пит с 10:00 до 18:00</p>

<div className=" flex gap-5"><svg className="h-4 w-4 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>
<div className=" text-xs font-Poppins text-slate-400 ">realestateagency@gmail.ru</div>





</div>
<div className=" flex mt-3  gap-6">
    <p><svg className="h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></p>
    <p><svg className="h-4 w-4 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg></p>
    <p><svg className="h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></p>
    <p><svg className="h-4 w-4 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg></p>
</div>
   
   
</div>
</div>


    </div>


  )
}
