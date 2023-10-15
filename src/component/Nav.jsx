import  { useState } from 'react';

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className=" w-11/12 md:w-10/12 mx-auto sm:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 font-Poppins text-[9px] font-semibold flex justify-between p-4 h-20 text-white">
      <div>
        <h1 className="font-medium text-lg md:text-2xl">REAL ESTATE</h1>
        <p className=" text-[10px] font-light">dhanmundimirpurdhaka1205</p>
      </div>
      <div className="hidden md:flex xl:flex lg:flex 2xl:flex  justify-center items-center">
        <ul className="flex space-x-16 ">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Gallery</li>
          <li className="hover:underline">Contact</li>
        </ul>
      </div>
      <div className="hidden md:block lg:block xl:block sm:hidden  2xl:block  flex-col justify-center items-center ">
        <div className=" flex  space-x-2">
          <div>
            <div>
              <svg
                className="h-5 w-5 text-slate-300"
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
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>

          <div className="  text-slate-300  text-xs">+8801736363539</div>
        </div>
        <div className=" flex  space-x-2 mt-1">
          <div>
            <div>
              <svg
                className="h-4 w-4 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <p className="   text-slate-300  text-xs">32,Dhanmundi Dhaka</p>
        </div>
      </div>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center">
        <button onClick={toggleDropdown}>
          <svg
            className="h-6 w-6 text-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isDropdownOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-col mt-2 space-y-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Gallery</span>
          <span className="hover:underline cursor-pointer">Contact</span>
        </div>
      )}




    </div>
  );
}





// import  { useState } from 'react';

// export default function Nav() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="w-full md:w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-9/12 mx-auto font-Poppins text-sm md:text-base font-semibold flex flex-col md:flex-row justify-between p-4 md:h-20 text-white">
//       <div className="mb-2 md:mb-0">
//         <h1 className="font-medium text-lg md:text-2xl">REAL ESTATE</h1>
//         <p className="text-xs md:text-sm font-light">dhanmundimirpurdhaka1205</p>
//       </div>
//       <div className="md:flex xl:flex lg:flex 2xl:flex  justify-center items-center mb-2 md:mb-0 hidden">
//         <ul className="flex space-x-6">
//           <li className="hover:underline">Home</li>
//           <li className="hover:underline">About</li>
//           <li className="hover:underline">Gallery</li>
//           <li className="hover:underline">Contact</li>
//         </ul>
//       </div>
//       <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center">
//         <button onClick={toggleDropdown}>
//           <svg
//             className="h-6 w-6 text-slate-300"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isDropdownOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>
//       </div>
//       {isDropdownOpen && (
//         <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-col mt-2 space-y-2">
//           <span className="hover:underline cursor-pointer">Home</span>
//           <span className="hover:underline cursor-pointer">About</span>
//           <span className="hover:underline cursor-pointer">Gallery</span>
//           <span className="hover:underline cursor-pointer">Contact</span>
//         </div>
//       )}
//       <div className="md:flex xl:flex lg:flex 2xl:flex items-center hidden">
//         <div className="mr-2">
//           <svg
//             className="h-5 w-5 text-slate-300"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//             stroke="currentColor"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path stroke="none" d="M0 0h24v24H0z" />
//             <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
//           </svg>
//         </div>
//         <div className="text-slate-300 text-xs">+8801736363539</div>
//       </div>
//       <div className="md:flex xl:flex lg:flex 2xl:flex items-center hidden">
//         <div className="mr-2">
//           <svg
//             className="h-4 w-4 text-gray-300"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//             />
//           </svg>
//         </div>
//         <p className="text-slate-300 text-xs">32, Dhanmundi Dhaka</p>
//       </div>
//     </div>
//   );
// }
