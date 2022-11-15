import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { projects, socials, techStacks } from "../helpers/data";
import Social from "../components/Social";
import TechStack from "../components/TechStack";
import Project from "../components/Project";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mohammed Safvan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8 bg-light md:px-20 dark:bg-dark pb-5  transition-colors duration-500">
        <section className=" min-h-screen min-w-full ">
          <nav className="py-6 mb-4 flex justify-between ">
            {/* <h1 className=" text-xl dark:text-white">Safvan</h1> */}
            <TypeAnimation
              className="text-xl dark:text-white"
              sequence={[
                "Mohammed",
                1000,
                "Mohammed Safvan",
                1000,
                "Mohammed",
                1000,
                "Safvan",
                1000,
                "",
                500,
              ]}
              wrapper="div"
              repeat={Infinity}
            />
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  color={darkMode ? "gray" : ""}
                  className=" cursor-pointer text-2xl transform transition hover:scale-125 duration-500"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <div >
                  <a
                    href="#"
                    className="bg-brand hover:bg-mid text-white px-4 py-2 rounded-md ml-8"
                  >
                    Resume
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <div className=" text-center p-5">
            <h2 className=" text-3xl py-2 text-brand font-semibold">
              Mohammed Safvan
            </h2>
            <h3 className="text-xl py-2 dark:text-white ">
              Student | AI & ML Enthusiast | Full Stack Developer
            </h3>
            <p className=" text-md leading-8 px-2 text-mid">
              An individual with passion for coding. Currently pursuing
              undergraduates in AI & ML from Sree Chitra Thirunal College of
              Engineering.
              <br /> I Like to work with new technologies. <br />
              Interested in Artificial Intelligence and Machine Learning and
              embracing myself more, on this.
              <br />
              Familiar with popular technologies of web, mobile and AI&ML
            </p>
          </div>
          <div className=" text-4xl flex justify-center gap-5 text-gray-600 ">
            {socials.map((element, index) => (
              <Social icon={element.Icon} url={element.url} key={index} />
            ))}
          </div>

          <section className="py-10">
            <div>
              <h3 className=" text-2xl dark:text-white">
                Technologies I use :
              </h3>
              <div className="flex pt-6 gap-3 flex-wrap flex-auto justify-center">
                {techStacks.map((element, index) => (
                  <TechStack
                    name={element.name}
                    url={element.url}
                    imageUrl={element.imageUrl}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section>
            <h3 className=" text-2xl dark:text-white">Projects :</h3>
            <div className="flex flex-row  p-5 gap-5 flex-wrap justify-center">
              {projects.map((element, index) => (
                <Project key={index} element={element} />
              ))}
            </div>
          </section>
        </section>
      </main>
      {/* <hr className="text-mid" /> */}
      <footer className="flex  min-w-full bg-light dark:bg-dark flex-wrap  justify-center h-10">
        <span className="text-xs mt-2 text-mid block dark:text-mid snap-center justify-center ">
          © 2022 - Built with NextJS and Tailwind CSS
        </span>
      </footer>
    </div>
  );
}
