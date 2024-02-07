import SkillCard from "./SkillCard";

const SkillGroup = ({ groupHeading, skills }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-slate-100 shadow-xl shadow-slate-400 max-w-11/12 py-8 my-8 px-10 rounded-lg">
      <h1 className="font-bold text-3xl my-10 text-center">{groupHeading}.</h1>
      <div className="grid  gap-5 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            imageSource={skill.image.src}
            buttonText={skill.skill}
            buttonLink={skill.link}
          ></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
