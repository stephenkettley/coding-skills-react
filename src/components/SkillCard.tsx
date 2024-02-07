import SkillButton from "./SkillButton";

const SkillCard = ({ imageSource, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col lg:w-72 w-48 gap-4 border border-slate-800 py-7 px-10 bg-slate-300 hover:shadow-xl hover:-translate-y-1 rounded-xl">
      <img
        src={`http://localhost:3000/${imageSource}`}
        className="lg:h-60 h-28"
      ></img>
      <SkillButton text={buttonText} link={buttonLink}></SkillButton>
    </div>
  );
};

export default SkillCard;
