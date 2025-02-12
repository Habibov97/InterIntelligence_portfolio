import { FaLink } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function articleMock() {
  const items = [
    {
      id: 1,
      title: "Upwork",
      type: "Freelance",
      date: "May 2021 - Present",
      description:
        "A Top Rated Freelancer at Upwork, an American freelancing platform and the largest network of independent professionals to get things done, from quick turnarounds to big transformations.",
      image: "/upwork.webp",
      links: [
        {
          id: 1,
          link: <FaLink />,
        },
      ],
    },
    {
      id: 2,
      title: "Lounge",
      type: "Freelance",
      date: "January 2022 - Present",
      description:
        "Developed features for the web & native app which took the app from launch to 90,000 monthly active users. Was awarded with a 5-Star review and the following testimonial: “Tap is an exceptional software engineer. He worked in my team for nearly a year, and consistently performed to an extremely high level.",
      image: "/lounge.webp",
      links: [
        {
          id: 1,
          link: <FaLink />,
        },
        {
          id: 2,
          link: <FaAndroid />,
        },
        {
          id: 3,
          link: <FaApple />,
        },
      ],
    },
    {
      id: 3,
      title: "Clyde.Ai",
      type: "Freelance",
      date: "November 2021 - January 2022",
      description:
        "Clyde is a AI powered Web Application which automatically calculates the value of rewards you'd earn based on your transaction data. Collaborated with the team to develop the Clyde Web Application.",
      image: "/clyde.webp",
      links: [
        {
          id: 1,
          link: <FaLink />,
        },
      ],
    },
    {
      id: 4,
      title: "SmartApp",
      type: "Personal Project",
      date: "November 2020 - January 2021",
      description:
        "With SmartsApp, you'll get fast and simple messaging secured with End to End Encryption for free, available on the web, all android & iOS phones, and Windows. Used Diffie-Hellman Key Exchange algorithm to generate the shared keys & XOR Cipher to encrypt messages. The tech stack consisted of React, Redux, Electron, Flutter & Firebase.",
      image: "/smartapp.webp",
      links: [
        {
          id: 1,
          link: <FaLink />,
        },
        {
          id: 2,
          link: <FaGithub />,
        },
        {
          id: 3,
          link: <FaApple />,
        },
      ],
    },
    {
      id: 5,
      title: "The Algorithm",
      type: "Open Source Mainter",
      date: "October 2020 - Present",
      description:
        "Maintaining and Adding New Algorithms to the code base of the world's largest Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language.",
      image: "/algorhtym.webp",
      links: [
        {
          id: 1,
          link: <FaLink />,
        },
        {
          id: 2,
          link: <FaGithub />,
        },
      ],
    },
    {
      id: 6,
      title: "Hacktober Fest 2020",
      type: "Open Source",
      date: "October 2020",
      description:
        "Created Quality Pull Requests in the celebration of the Open Source Spirit at Hacktoberfest, a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio.",
      image: "/hackaton.webp",
      links: [
        {
          id: 1,
          link: <FaLink />,
        },
      ],
    },
  ];

  return items;
}

export default articleMock;
