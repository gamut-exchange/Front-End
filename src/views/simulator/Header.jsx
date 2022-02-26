import React from "react";
import { Link } from "react-router-dom";
import twitter from "../../images/social/twitter.svg";
import discord from "../../images/social/discord.svg";
import telegram from "../../images/social/telegram.svg";
import git from "../../images/social/git.svg";
import icon1 from "../../images/support/icon1.svg";
import icon2 from "../../images/support/icon2.svg";
import icon3 from "../../images/support/icon3.svg";
import icon4 from "../../images/support/icon4.svg";
import EfficientModel from "../../components/EfficientModel";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className=" pt-12 pb-24 md:pb-24 md:pt-24 bg-[url('../images/bg.png')] bg-contain bg-center bg-no-repeat relative dark:bg-dark-primary dark:bg-opacity-95">
      <div className="main-container">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-light-primary mb-4 font-bold text-[50px] sm:text-[60px] md:text-[100px] lg:text-[130px] lg:leading-[155px] text-center">
              Gamut Exchange
            </h1>
            <p className="text-grey-dark text-center text-2xl sm:text-3xl md:text-[70px]">
              Decentralized Finance 3.0
            </p>
          </div>
          <div className="flex justify-center sm:flex-row flex-col gap-y-8 items-center w-full gap-x-8 mt-10 mb-11">
            <button
              className="btn-primary dark:text-dark-primary w-full"
              style={{ maxWidth: 182, minHeight: 49 }}
              onClick={handleOpen}
            >
              Calculator
            </button>
            <Link
              className="btn-primary dark:text-dark-primary w-full"
              style={{ maxWidth: 182, minHeight: 49 }}
              to="/"
            >
              Read Docs
            </Link>
          </div>
          <div className="flex w-full flex-wrap gap-y-7 md:flex-row flex-col gap-x-7 max-w-xl px-2">
            <div className="flex-1">
              <p className="text-center text-base mb-2 text-grey-dark">
                Socials
              </p>
              <ul className="flex justify-center w-full gap-x-9">
                {social.map((item) => {
                  const { id, icon, url } = item;
                  return (
                    <li key={id}>
                      <a
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-7 h-7"
                      >
                        <img className="w-full h-full" src={icon} alt="icon" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex-1">
              {" "}
              <p className="text-center capitalize text-base mb-2 text-grey-dark">
                supporting
              </p>
              <ul className="flex justify-center w-full gap-x-9">
                {support.map((item) => {
                  const { id, icon, url } = item;
                  return (
                    <li key={id}>
                      <a
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-7"
                      >
                        <img className="w-full" src={icon} alt="icon" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <EfficientModel open={open} close={handleClose} />
    </div>
  );
};

export default Header;

const social = [
  { id: 1, icon: twitter, url: "twitter" },
  { id: 2, icon: discord, url: "https://discord.gg/5vHPEFSe7Y" },
  { id: 3, icon: telegram, url: "https://t.me/+T1BLwIqs789jOWE0" },
  { id: 4, icon: git, url: "https://github.com/gamut-exchange" },
];
const support = [
  { id: 1, icon: icon1, url: "https://www.avax.network/" },
  { id: 2, icon: icon2, url: "https://fantom.foundation/" },
  { id: 3, icon: icon3, url: "https://www.xdaichain.com/" },
  { id: 4, icon: icon4, url: "https://polygon.technology/" },
];
