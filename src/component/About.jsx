import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import image from "/src/assets/cover2.jpeg";
// import { motion } from "framer-motion";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 }); 
  }, []);

  const [counters, setCounters] = useState({
    рынке: 0,
    проектов: 0,
    человек: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const newрынке = prevCounters.рынке + 2;
        const newпроектов = prevCounters.проектов + 5;
        const newComпроектов = prevCounters.человек + 8;

        if (newрынке >= 200 || newпроектов >= 300 || newComпроектов >= 100) {
          clearInterval(interval);
        }

        return {
          рынке: newрынке,
          проектов: newпроектов,
          человек: newComпроектов,
        };
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="  md:p-32 p-10 bg-zinc-900  font-Poppins">
      <div >
        <h1 className=" text-4xl font-semibold text-slate-300  tracking-tight " data-aos="fade-up">
          О КОМПАНИИ
        </h1>
        <p className="    text-slate-300 leading-7 font-semibold text-sm  " data-aos="fade-up">
          Lorem ipsum donera travare ar nätpoker. Oling nidertad <br /> men
          benera exorat diliga.
        </p>

        <div className="  md:grid grid-cols-6  md:gap-8">
          <div className="    text-slate-300 col-span-3 leading-7 md:mt-5 mb-4  font-semibold text-xs  " data-aos="fade-down">
            <p>
              Lorem ipsum donera travare ar nätpoker. Oling nidertad <br /> men
              benera exorat Ott vanera. Stuprörspolitik
              <br /> Norytir garanterad traditionell Yligt sper. Asat nepoktigt
              trer
              <br /> Soplarade nedat kan, lust noren, Prev synat, trektig om
              <br /> homoktig Soliga tigon, innan poska vapången benat
            </p>

            <div><p>homokinkdh soliaga tirnrnnrnrnrnrnrn</p></div>

            <button className="  bпроектов bпроектов-slate-400 font-semibold border border-slate-600 mt-10 text-sm 0 p-2 space-x-4 w-40 h-9 ">
              ЧИТАТЬ ЕЩЕ
            </button>
          </div>
          <div className=" col-span-3" data-aos="fade-down">
            <div>
              <div className=" flex justify-end gap-4 mb-2">
                <p>
                  <svg
                    className="h-5 w-5 text-white"
                    width="36"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </p>
                <p>
                  <svg
                    className="h-5 w-5 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </p>
                <p>
                  <svg
                    className="h-5 w-5 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                  </svg>
                </p>
                <p>
                  <svg
                    className="h-5 w-5 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                    <circle cx="12" cy="12" r="3" />{" "}
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </p>
                <p>
                  <svg
                    className="h-5 w-5 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </p>
              </div>
            </div>

            <img src={image} />
          </div>
        </div>








        
        <div></div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-36 sm:mt-10 mt-10   gap-10 md:mt-20  font-Poppins text-slate-300">

        <div data-aos="fade-up" className=" md:flex gap-2">
          <div className=" md:text-5xl font-bold flex justify-center   font-Poppins text-2xl">
            {" "}
            {counters.рынке.toLocaleString()}
          </div>
          <div className="  md:text-sm text-sm   gap-1  font-Poppins   ">
            <p>лет</p>
            <p> на рынке</p>
          </div>
        </div>

        <div data-aos="fade-up" className=" md:flex gap-2">
          <div className=" md:text-5xl font-bold  flex justify-center    font-Poppins  text-2xl">
            {counters.проектов.toLocaleString()}
          </div>
          <div className=" md:text-sm text-sm  sm:flex-none flex-none  md:flex-none lg:flex-none xl:flex-none  gap-1   font-Poppins  ">
            <p>уникальных</p>
            <p>проектов</p>
          </div>
        </div>

        <div  data-aos="fade-up" className=" md:flex gap-2">
          <div className=" md:text-5xl  font-bold  flex justify-center   font-Poppins text-2xl">
            {counters.человек.toLocaleString()}
          </div>
          <div className=" md:text-sm text-sm  gap-1 font-Poppins  ">
            <p>штато</p>
            <p>проектов</p>
          </div>
        </div>
      </div>
    </div>
  );
}
