import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfinitieMovingCards";

const Client = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div className="flex md:max-w-60 max-w-32 gap-2" key={id}>
              <img
                src={img}
                alt={name}
                className={`md:w-10 w-5 ${id !== 3 && "!w-[150px]"} `}
              />
              {nameImg && (
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
