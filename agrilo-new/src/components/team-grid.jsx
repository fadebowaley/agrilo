import React from "react";
import Overlay from "../components/overlay";
import TeamLinks from "../components/teamLInks";
import ToluImage from "../assets/tolu1.png";
import Richard from "../assets/richard.png";
import Abisola from "../assets/abisola.jpeg";
import John from "../assets/john.png";
function TeamGrid() {
  return (
    <>
      <h1 className="font-bold text-3xl opacity-[0.7]">
        Our Le
        <span className="border-b border-b-[4px] pb-[6px] border-b-[#1fa12e]">
          ade
        </span>
        rship
      </h1>
      <p className="mt-9 text-[20px] opacity-[0.7] font-['Roboto'] font-[500] text-center">
        We have dedicated team players who bring energy, ideas, and pride to
        their work. Each member of our team is a specialist in his or her field.
        Together, we make sure you’re investing where the best returns are while
        building loyalty across every touchpoint.
      </p>

      <div className="p-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-4">
        <div id="holder1" className="flex flex-col items-center ">
          <div className="md:w-[200px] relative w-[400px]  group  md:h-[200px]">
            <a href="">
              <img
                src={ToluImage}
                loading="lazy"
                alt="Manager Tolu Kuku"
                className=""
              />
            </a>
            <Overlay />
          </div>
          <h4 className="text-center text-[24px] font-[700] mt-[20px]">
            Tolu Kuku
          </h4>
          <p className="text-center opacity-[0.7] text-[17px] font-[600] mb-[25px]">
            Project Manager
          </p>
          <div className="flex justify-center items-center gap-4">
            <TeamLinks />
          </div>
        </div>

        {/* Additional holders can be added similarly */}
        <div id="holder2" className="flex flex-col items-center ">
          <div className="md:w-[200px] relative w-[400px] group  md:h-[200px]">
            <a href="">
              <img
                src={Richard}
                loading="lazy"
                alt="MD Richard"
                className=""
              />
            </a>
            <Overlay />
          </div>
          <h4 className="text-center text-[24px] font-[700] mt-[20px] ">
            Richard Ogundele
          </h4>
          <p className="text-center opacity-[0.7] text-[17px] font-[600] mb-[25px]">
            MD/CEO
          </p>
          <div className="flex justify-center items-center gap-4">
            <TeamLinks />
          </div>
        </div>
        <div id="holder3" className="flex flex-col items-center ">
          <div className="relative md:w-[200px] w-[400px] group  md:h-[200px]">
            <a href="">
              <img
                src={Abisola}
                loading="lazy"
                alt="Manager Abisola"
                className=""
              />
            </a>
            <Overlay />
          </div>
          <h4 className="text-center text-[24px] font-[700] mt-[20px]">
            Abisola Grace Ilufoye
          </h4>
          <p className="text-center opacity-[0.7] text-[17px] font-[600] mb-[25px]">
            Business Development and Corporate Communications Manager
          </p>
          <div className="flex justify-center items-center gap-4">
            <TeamLinks />
          </div>
        </div>
        <div id="holder4" className="flex flex-col items-center ">
          <div className="relative w-[400px]  group md:w-[200px] md:h-[200px]">
            <a href="">
              <img
                src={John}
                loading="lazy"
                alt="Director John"
                className=""
              />
            </a>
            <Overlay />
          </div>
          <h4 className="text-center text-[24px] font-[700] mt-[20px]">
            John Lampan
          </h4>
          <p className="text-center opacity-[0.7] text-[17px] font-[600] mb-[25px]">
            Technical Director
          </p>
          <div className="flex justify-center items-center gap-4">
            <TeamLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamGrid;
