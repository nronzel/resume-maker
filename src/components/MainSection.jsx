import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import ResumeForm from "./ResumeForm.jsx";
import ResumePreview from "./ResumePreview.jsx";

const MainSection = () => {
  const [profile, setProfile] = useState({
    firstName: "Art",
    lastName: "Vandelay",
    email: "avandalay@vandelayindustries.com",
    phone: "555-555-5555",
    link: "https://vandelayindustries.com",
    title: "Import/Exporter",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime facilis ipsam corrupti sed quam unde architecto eum exercitationem debitis cum, temporibus vitae quia labore ad, obcaecati cupiditate a officiis eos nemo aliquid aliquam doloremque ea. Sit error nihil eum adipisci quam eos perspiciatis, ipsam, aliquam sapiente illum omnis dolore.",
  });

  const [experience, setExperience] = useState([
    {
      id: 0,
      companyName: "Vandelay Industries",
      start: "Jan 2000",
      end: "Present",
      jobTitle: "Import/Exporter",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro dolorem quis. Corrupti, minima accusantium",
      isLast: true,
    },
  ]);

  const [workExperienceCount, setWorkExperienceCount] = useState(1);

  const [education, setEducation] = useState([
    {
      id: 0,
      school: "New York University",
      degree: "Bachelors",
      start: "1996",
      end: "2000",
      fieldOfStudy: "Architecture",
      isLast: true,
    },
  ]);

  const [educationCount, setEducationCount] = useState(1);

  const [skills, setSkills] = useState([
    { id: 0, skill: "importing" },
    { id: 1, skill: "exporting" },
    { id: 2, skill: "architecture" },
    { id: 3, skill: "test" },
    { id: 4, skill: "test2" },
  ]);

  const handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleWorkXpChange = (e, id) => {
    const { name, value } = e.target;
    setExperience((prevState) => {
      const workExperience = [...prevState];
      workExperience[id] = { ...workExperience[id], [name]: value };
      return workExperience;
    });
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setEducation((prevState) => {
      const education = [...prevState];
      education[id] = { ...education[id], [name]: value };
      return education;
    });
  };

  const handleSkillsChange = (e, id) => {
    const { name, value } = e.target;
    setSkills((prevState) => {
      const skills = [...prevState];
      skills[id] = { ...skills[id], [name]: value };
      return skills;
    });
  };

  const handleAddWorkExperience = () => {
    const newExperience = {
      id: workExperienceCount,
      companyName: "",
      start: "",
      end: "",
      jobTitle: "",
      jobDescription: "",
      isLast: true,
    };
    setExperience((prevState) => [...prevState, newExperience]);
    setWorkExperienceCount((prevCount) => prevCount + 1);
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: educationCount,
      school: "",
      degree: "",
      start: "",
      end: "",
      fieldOfStudy: "",
      isLast: true,
    };
    setEducation((prevState) => [...prevState, newEducation]);
    setEducationCount((prevCount) => prevCount + 1);
  };

  const handleAddSkill = () => {
    const newSkill = {
      id: skills.length,
      skill: "",
    };
    setSkills((prevState) => [...prevState, newSkill]);
  };

  const handleRemoveEducation = () => {
    setEducation((prevState) => {
      const education = [...prevState];
      education.pop();
      return education;
    });
    setEducationCount((prevCount) => prevCount - 1);
  };

  const handleRemoveWorkExperience = () => {
    setExperience((prevState) => {
      const experience = [...prevState];
      experience.pop();
      return experience;
    });
    setWorkExperienceCount((prevCount) => prevCount - 1);
  };

  const handleRemoveSkill = (id) => {
    setSkills((prevState) => prevState.filter((skill) => skill.id !== id));
  };

  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "column", xl: "row" }}
      justifyContent="center"
      alignItems={{
        base: "center",
        md: "center",
        lg: "center",
        xl: "flex-start",
      }}
      gap={5}
    >
      <ResumeForm
        handleChange={handleProfileInputChange}
        handleWorkXpChange={handleWorkXpChange}
        handleAddWorkXp={handleAddWorkExperience}
        handleRemoveWorkXp={handleRemoveWorkExperience}
        experience={experience}
        workExperienceCount={workExperienceCount}
        education={education}
        handleEducationChange={handleEducationChange}
        educationCount={educationCount}
        handleAddEducation={handleAddEducation}
        handleRemoveEducation={handleRemoveEducation}
        skills={skills}
        handleSkillsChange={handleSkillsChange}
        handleRemoveSkill={handleRemoveSkill}
        handleAddSkill={handleAddSkill}
      />
      <ResumePreview
        profile={profile}
        workExperience={experience}
        education={education}
        skills={skills}
      />
    </Flex>
  );
};

export default MainSection;
