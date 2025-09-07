import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? workData : workData.slice(0, 4);

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">My Works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        These projects represent the skills I’ve been building as I continue
        learning and growing as a developer. I’ve focused on practicing modern
        web development, solving real problems, and experimenting with new
        ideas. Each one reflects my dedication to improving and my excitement
        for what’s ahead
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
        {displayedProjects.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{
              backgroundImage: `url(${project.bgImage.src || project.bgImage})`,
            }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div>
                <Image src={assets.send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {workData.length > 4 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-lightHover)] duration-500"
        >
          Show more{" "}
          <Image src={assets.right_arrow_bold} alt="" className="w-4" />
        </button>
      )}
      {workData.length > 4 && showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-lightHover)] duration-500"
        >
          Show less
        </button>
      )}{" "}
    </div>
  );
};

export default Work;
