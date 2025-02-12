import { IoDocumentTextOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaHelicopter } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function rewardsMock() {
  const items = [
    {
      id: 1,
      title: "5+ Times Global #1 Weekly Blog Writer",
      company: "Dev",
      date: "January, 2022",
      icon: <IoDocumentTextOutline />,
      bgColor: "bg-[#007011]",
      color: "text-[#fff]",
    },
    {
      id: 2,
      title: "Top Rated Freelancer",
      company: "Upwork",
      date: "September, 2021",
      icon: <FaTrophy />,
      bgColor: "bg-[#0D83B2]",
      color: "text-[#fff]",
    },
    {
      id: 3,
      title: "Rising talent",
      company: "Upwork",
      date: "July, 2021",
      icon: <MdOutlineKeyboardDoubleArrowUp />,
      bgColor: "bg-[#1EAE9D]",
      color: "text-[#fff]",
    },
    {
      id: 4,
      title: "Mars 2020 Helicopter Mission Contributor",
      company: "GitHub & NASA",
      date: "April, 2021",
      icon: <FaHelicopter />,
      bgColor: "bg-[#C74344]",
      color: "text-[#fff]",
    },
    {
      id: 5,
      title: "Global Rank 750",
      company: "Google Kickstart 2020 Round H",
      date: "November, 2020",
      icon: <FaStar />,
      bgColor: "bg-[#00D431]",
      color: "text-[#fff]",
    },
    {
      id: 6,
      title: "Winner of Coding Competition",
      company: "RCC Institute of Information Technology",
      date: "March, 2020",
      icon: "🥇",
      bgColor: "bg-[#FFCC01]",
      color: "text-[#fff]",
    },
    {
      id: 7,
      title: "1st Runner-up of Coding Competition",
      company: "Heritage Institute of Information Technology",
      date: "September, 2019",
      icon: "🥈",
      bgColor: "bg-[#808080]",
      color: "text-[#fff]",
    },
    {
      id: 8,
      title: "2nd Runner-up of Coding Competition",
      company: "Government College of Engineering and Ceramic Technology",
      date: "March, 2019",
      icon: "🥉",
      bgColor: "bg-[#FE5E00]",
      color: "text-[#fff]",
    },
  ];

  return items;
}

export default rewardsMock;
