export default async function getUserSkills(skillCategory) {
  const response = await fetch(`http://localhost:3000/skills/${skillCategory}`);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to load ${skillCategory} user skills.`);
  }

  return responseData.skills;
}
