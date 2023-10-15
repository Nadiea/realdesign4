import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 3000 }); 
  }, []);

  return (
    <div data-aos="fade-down"  className="  font-Poppins md:flex-row flex  md:gap-0 gap-2  justify-center items-center   md:justify-between md:p-6 p-6 bg-zinc-950  text-slate-100">

<div>
        <h2 className=" md:text-2xl text-lg md:font-medium font-light  font-Poppins  ">REAL ESTATE</h2>
        <p className="font-thin text-sm mb-2">агенство недвижимости</p>
      </div>

      <div className=" mb-1">
        <p className=" underline text-[10px] font-Poppins   ">Политика конфиденциальности</p>
        <p className=" underline text-[10px] font-Poppins  ">Пользовательское соглашения</p>
      </div>

<div>
 <p className=" text-[8px]  text-slate-500  font-Poppins  ">  Designed by Anastasia Zhukova, 2022</p>
</div>



    </div>
  )
}
