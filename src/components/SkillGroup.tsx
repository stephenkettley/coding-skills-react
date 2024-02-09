import SkillCard from "./SkillCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type SkillObject = {
  id: string;
  skill: string;
  level: string;
  image: {
    src: string;
    alt: string;
  };
  link: string;
};

type SkillGroupProps = {
  groupHeading: string;
  skills: SkillObject[];
};

const SkillGroup = ({ groupHeading, skills }: SkillGroupProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-slate-100 shadow-xl shadow-slate-600 max-w-screen md:max-w-[850px] w-10/12  py-8 my-8 px-10 rounded-2xl">
      <h1 className="font-bold text-3xl my-8 text-center">{groupHeading}.</h1>
      <Carousel
        opts={{
          align: "end",
        }}
        className="lg:max-w-2xl sm:max-w-[450px] h-full py-2 select-none"
      >
        <CarouselContent className="py-3">
          {skills.map((skill) => (
            <CarouselItem className="md:basis-1/2 sm:basis-1/2">
              <div className="flex items-center justify-center">
                <SkillCard
                  key={skill.id}
                  imageSource={skill.image.src}
                  buttonText={skill.skill}
                  buttonLink={skill.link}
                ></SkillCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SkillGroup;
