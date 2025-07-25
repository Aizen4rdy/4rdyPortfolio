import React, { useState, useEffect } from "react";
import backgroundGif from "../assets/background.gif";
import { person, tagline, typedTitle, info } from "../constants";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typedTitle.title[index];

    if (!deleting && subIndex === current.text.length) {
      setText(current.text);
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % typedTitle.title.length);
      return;
    }

    const randomSpeed = Math.floor(Math.random() * (120 - 40 + 1)) + 40;

    const timeout = setTimeout(() => {
      setText(current.text.substring(0, subIndex));
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, randomSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  const currentColor = typedTitle.title[index].color;

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-no-repeat pt-16"
      data-aos="fade-in"
    >
      <div className="absolute inset-0">
        <img
          src={backgroundGif}
          alt="background"
          className="w-full h-screen object-cover z-0"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 z-10"></div>

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center h-full px-4 sm:px-0 gap-y-6">
        <header className="w-full text-center text-white space-y-4 cursor-default">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide hover:text-amber-400 transition duration-300">
            {person.name.fullname}
          </h1>

          <h1
            className={`text-5xl sm:text-7xl font-bold font-Pixeboy min-h-[2rem] ${currentColor} drop-shadow-glow`}
          >
            {text}
            <span className="animate-pulse">|</span>
          </h1>

          <div className="flex justify-center">
            <p className="text-white text-justify leading-relaxed max-w-2xl">
              {info.titleDesc}
            </p>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <p className="text-gray-400 text-center text-sm max-w-xl">
              {tagline.tag.split(" ").join("\u00A0\u00A0\u00A0")}
            </p>
          </div>

          <div className="relative top-10 flex">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-9 justify-center p-2 rounded z-20">
              {Object.entries(person.socials).map(([key, social]) => (
                <a
                  key={key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white border-2 rotate-45 flex items-center justify-center rounded hover:bg-amber-300 transition-transform hover:scale-110"
                >
                  <i className={`${social.icon} -rotate-45 text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
