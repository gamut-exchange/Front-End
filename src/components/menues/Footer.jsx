import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-20 bg-light-primary dark:bg-grey-dark">
      <div className="main-container">
        <div className="flex justify-end">
          <ul className="flex justify-end w-full gap-x-9">
            {social.map((item) => {
              const { id, icon, url } = item;
              return (
                <li key={id}>
                  <a
                    href={url} rel="noopener noreferrer" target="_blank"
                    className=" text-3xl text-white opacity-95 dark:text-dark-primary"
                  >
                    {icon}
                    {/* <img className="w-full h-full" src={icon} alt="icon" /> */}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const social = [
  { id: 1, icon: <AiOutlineTwitter />, url: "https://twitter.com/GamutExchange" },
  { id: 2, icon: <FaDiscord />, url: "https://discord.gg/5vHPEFSe7Y" },
  { id: 3, icon: <FaTelegramPlane />, url: "https://t.me/+sAS0I9338zdlNTRk" },
  { id: 4, icon: <AiOutlineGithub />, url: "https://github.com/gamut-exchange" },
];
