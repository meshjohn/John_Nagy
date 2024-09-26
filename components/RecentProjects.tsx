import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import dynamic from "next/dynamic";

const RecentProjects = () => {
  const NoSSR = dynamic(
    () => import("@/components/ui/3d-pin").then((mod) => mod.PinContainer),
    { ssr: false }
  );
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recenct projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex item-center justify-center sm:w-[570px] w-[80vw]"
            key={project.id}
          >
            <NoSSR title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[90vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className={`z-10 absolute bottom-10 lg:bottom-12  lg:h-[250px] lg:w-[500px]`}
                />
              </div>
              <h1 className="font-boldlg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center icons-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                      key={icon}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:flex-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </NoSSR>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
