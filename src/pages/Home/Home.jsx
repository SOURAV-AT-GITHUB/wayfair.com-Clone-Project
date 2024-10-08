import { useMediaQuery } from "@chakra-ui/react";
import {section1video1,section1Data,section2banner1,section2Data,section2video1,section2banner2, section2Data2} from './data'
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [isMinWidth1120] = useMediaQuery('(min-width: 1120px)')
  const section2scrollRef = useRef(null)
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const scrollLeft = () => {
    if (section2scrollRef.current) {
      section2scrollRef.current.scrollBy({
        left: -1000, // Adjust the value based on the card width
        behavior: 'smooth',
      });

      setIsLeftDisabled(true)
      setIsRightDisabled(false)
    }
  }; 
const scrollRight = ()=>{
  if(section2scrollRef.current){
    section2scrollRef.current.scrollBy({
      left:1000,
      behavior:"smooth"
    })
    setIsRightDisabled(true)
    setIsLeftDisabled(false)
  }
}

  return (
    <div id="home">
      <section id="section1">
        <NavLink to="/wall-decor-sale">
            <video crossOrigin="anonymous" muted playsInline autoPlay loop className="hidden min-[960px]:block">
              <source src={section1video1.bigScreen} type="video/mp4" />
            </video>
            <video crossOrigin="anonymous" muted playsInline autoPlay loop className="min-[960px]:hidden">
              <source src={section1video1.smallScreen} type="video/mp4" />
            </video>
        </NavLink>
        <div className="p-2 min-[1120px]:p-10">
          <h3 className="font-bold text-xl">Give your home a fall refresh</h3>
          <div className="flex gap-0  min-[1120px]:gap-4 overflow-x-auto p-1" >

        {section1Data.map((element)=>(
          <div key={element.title} className="p-2 pb-8  border border-transparent  hover:border-black hover:bg-gray-200  rounded-lg min-w-[175px]">
            <img src={element.image} alt={element.title} className="rounded-lg"/>
            <p className="my-2 text-nowrap">Up To 25% OFF</p>
            <h3 className="font-bold text-2xl my-2 ">{element.title}</h3>
          </div>
        ))}
          </div>
        </div>
      </section>


      <section id="section2" className="p-2 px-4  min-[1120px]:px-10 ">
        <div className="p-2 rounded-lg border border-transparent  hover:border-black hover:bg-slate-200">
        <a href="">
        <img src={isMinWidth1120 ? section2banner1.bigScreen : section2banner1.smallScreen} alt="deals-of-the-day" className="rounded-lg"/>
        </a>
        </div>
        <div className="">
          <div className="flex justify-between ">
            <h3 className="font-bold text-xl">deals of the day</h3>
            <p className="text-violet-600 underline"><a href="">See all</a></p>
          </div>
          <div className="flex h-auto relative">
            <button onClick={scrollLeft} disabled={isLeftDisabled} className="arrow hidden min-[1280px]:block  absolute left-0 bottom-32  p-2 px-4 rounded-full bg-slate-100 font-extrabold h-12" >&lt;</button>
            <div className="flex overflow-x-auto gap-4 h-auto hide-scrollbar" ref={section2scrollRef}>
            {section2Data.map((element,index)=>(
              <div key={index+1} className="min-w-[200px] p-2">
                <img src={element.image} alt={element.title} className="rounded-xl"/>
                <p className="truncate">{element.title}</p>
               <div className="flex justify-between">
                <p className="text-2xl font-semibold text-[#951d47]">${element.dealPrice}</p>
               {element.originalPrice && <p className="text-gray-400 line-through">${element.originalPrice}</p>}
               </div>
               {element.openBox && <p className="text-[#951d47] font-medium">Open Box : {element.openBox}</p>}
              </div>
            ))}
            </div>
            <button onClick={scrollRight} disabled={isRightDisabled} className="arrow hidden min-[1280px]:block  absolute right-0 bottom-32 p-2 px-4 rounded-full bg-slate-100 font-extrabold h-12">&gt;</button>
          </div>
        </div>

            <div>
            <a href="">
              <div className="my-4 p-2 rounded-lg border border-transparent  hover:border-black hover:bg-slate-200">
            <video crossOrigin="anonymous" muted playsInline autoPlay loop className="hidden min-[960px]:block rounded-xl">
              <source src={section2video1.bigScreen} type="video/mp4" />
            </video>
            <video crossOrigin="anonymous" muted playsInline autoPlay loop className="min-[960px]:hidden rounded-xl">
              <source src={section2video1.smallScreen} type="video/mp4" />
            </video>

              </div>
            </a>

            <a href="" >
              <div className="px-1 rounded-lg border border-transparent  hover:border-black hover:bg-slate-200">
            <img src={isMinWidth1120 ? section2banner2.bigScreen : section2banner2.smallScreen} alt="save-big" className="rounded-lg my-2"/>
              </div>
         </a>
            </div>
            <br />
            <div className="flex gap-0  min-[1120px]:gap-4 overflow-x-auto p-1" >

{section2Data2.map((element)=>(
  <div key={element.title} className="p-2 pb-8  border  border-transparent  hover:border-black hover:bg-gray-200  rounded-lg min-w-[175px]">
    <img src={element.image} alt={element.title} className="rounded-lg"/>
    <h3 className="font-bold text-2xl my-2 ">{element.title}</h3>
    <p className="text-lg">{element.description}</p>
  </div>
))}
  </div>
      </section>

      


    </div>
  );
}
