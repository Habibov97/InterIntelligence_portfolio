import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

function socialLinks() {
  const items = [
    {
      id: 1,
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      icon: <FaGithub />,
    },
    {
      id: 3,
      icon: <FaDev />,
    },
    {
      id: 4,
      icon: <FaSquareUpwork />,
    },
    {
      id: 5,
      icon: <BiLogoGmail />,
    },
  ];

  return items;
}

export default socialLinks;
