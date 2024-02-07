const SkillButton = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-slate-500 lg:py-3 lg:px-10 rounded-2xl hover:bg-slate-700 text-white hover:scale-[0.96] shadow-sm shadow-slate-800 text-center py-3 px-1 transition duration-400"
    >
      {text}
    </a>
  );
};

export default SkillButton;
