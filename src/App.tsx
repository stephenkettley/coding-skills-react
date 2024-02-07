import { useEffect, useState } from "react";
import "./App.css";
import SkillGroup from "./components/SkillGroup";

async function getUserSkills(skillCategory) {
  const response = await fetch(
    `http://localhost:3000/skills/?level=${skillCategory}`
  );
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to load ${skillCategory} user skills.`);
  }

  return responseData.skills;
}

function App() {
  const [pastSkills, setPastSkills] = useState([]);
  const [currentSkills, setCurrentSkills] = useState([]);
  const [futureSkills, setFutureSkills] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSkills() {
      setIsFetching(true);

      try {
        const pastSkills = await getUserSkills("past");
        const currentSkills = await getUserSkills("current");
        const futureSkills = await getUserSkills("future");
        setPastSkills(pastSkills);
        setCurrentSkills(currentSkills);
        setFutureSkills(futureSkills);
      } catch (error) {
        setError("Failed to load user skills.");
      }
      setIsFetching(false);
    }

    fetchSkills();
  }, []);
  return (
    <>
      <h1 className="font-bold text-5xl text-center m-10 mt-20">Skill List.</h1>
      <div className="flex flex-col items-center">
        <SkillGroup
          groupHeading="Skills I Have"
          skills={pastSkills}
        ></SkillGroup>
        <SkillGroup
          groupHeading="Skills I Am Working On"
          skills={currentSkills}
        ></SkillGroup>
        <SkillGroup
          groupHeading="Skills I Will Obtain"
          skills={futureSkills}
        ></SkillGroup>
      </div>
    </>
  );
}

export default App;
