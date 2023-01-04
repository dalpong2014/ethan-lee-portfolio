import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiPython,
  SiSocketdotio,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import Image from "next/image";
import ethan from "../public/ethan.jpg";
import pictionary from "../public/PictionaryThumbnail.png";
import DiagonAlleyOnline from "../public/DiagonAlleyOnlineThumbnail.png";
import MoneyBuddy2 from "../public/MoneyBuddy2.png";

export default function Home() {
  const skillsRow1 = {
    JavaScript: <SiJavascript />,
    ReactJS: <SiReact />,
    Redux: <SiRedux />,
    NodeJS: <SiNodedotjs />,
    ExpressJS: <SiExpress />,
    PostgreSQL: <SiPostgresql />,
    Firebase: <SiFirebase />,
    MongoDB: <SiMongodb />,
    Python: <SiPython />,
    SocketIO: <SiSocketdotio />,
    HTML5: <SiHtml5 />,
    CSS3: <SiCss3 />,
    Tailwind: <SiTailwindcss />,
  };

  return (
    <div>
      <Head>
        <title>Ethan Lee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 md:px-20 lg:px-40 bg-gray-900">
        <nav className="py-4 mb-12 flex justify-between">
          <div className="text-5xl flex justify-left gap-16 py-3 text-gray-400 hover:text-gray-200">
            <BiCodeAlt />
          </div>

          <ul className="flex items-center">
            <li>
              <a
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md ml-8"
                href="mailto:ethanlee@dev1.com"
              >
                Contact
              </a>
              <a
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md ml-8"
                target="_blank"
                rel="noreferrer"
                href="/files/EthanLee_Resume.pdf"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
        {/* main content */}
        <div className="text-center grid grid-cols-2">
          <div>
            <div>
              <h2 className="text-5xl text-gray-300 font-medium md:text-6xl">
                Ethan Lee
              </h2>
              <h3 className="text-2xl text-gray-400 py-2 md:text-3xl">
                Fullstack Developer
              </h3>
              <div className="relative mx-auto rounded-full w-60 h-60 mt-5 overflow-hidden md:h-68 md:w-68">
                <Image src={ethan} layout="fill" objectFit="cover" alt="" />
              </div>
              <p className="text-md py-5 leading-8 text-gray-400 md:text-xl max-w-xl mx-auto mt-5">
                Fullstack developer who loves dogs and coffee. Join me down
                below!
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <a
                href="https://www.linkedin.com/in/ethanlee92/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="hover:text-gray-400" />
              </a>
              <a
                href="https://github.com/dalpong2014"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* */}
          <div>
            <div className="ml-10 text-left">
              <h3 className="text-3xl py-6 text-gray-300">About</h3>
              <p className="text-lg leading-4 text-gray-300">
                Hello! I’m a solution-driven fullstack developer who likes to
                build new things in a collaborative environment. I have strong
                interest in building web applications that follow good
                Cybersecurity practices. I believe key to success is persistence
                and perseverance.
              </p>
              <h3 className="text-3xl py-6 text-gray-300 mt-10">Tech Stacks</h3>
              <ul className="text-5xl flex justify-center gap-8 py-2 text-gray-300  flex-col sm:flex-row sm:flex-wrap">
                {Object.keys(skillsRow1).map((keyName, index) => (
                  <li key={index} className="text-center justify-center">
                    {" "}
                    <i>{skillsRow1[keyName]}</i>
                    <p className="text-xs basis-1/2 flex-1 text-center">
                      {keyName}
                    </p>
                  </li>
                ))}
              </ul>
              <h3 className="text-3xl py-4 text-gray-300 mt-10">
                Certifications
              </h3>
              <ul className="flex justify-left gap-2 py-2 flex-col sm:flex-row sm:flex-wrap">
                <li>
                  <div className="w-24 h-24 relative">
                    <a
                      href="https://www.credly.com/badges/0fd03672-d47c-46ac-ac33-0361bc601cc5/linked_in_profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="absolute inset-0 bg-cover bg-center z-0 bg-aplus grayscale hover:grayscale-0 duration-300 flex justify-center items-center"></div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="w-24 h-24 relative">
                    <a
                      href="https://www.credly.com/badges/3cfd1b6e-91c7-437e-9a11-ba26be47acc7?source=linked_in_profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="absolute inset-0 bg-cover bg-center z-0 bg-secplus grayscale hover:grayscale-0 duration-300 flex justify-center items-center"></div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gap-20 text-center">
          <h3 className="text-3xl py-4 text-gray-300 mt-20"> Projects </h3>
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center p-2">
              <h5 className="text-xl py-4 text-gray-300">Pictionary</h5>
              <a
                href="https://capstone-rv05.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={pictionary}
                  alt=""
                  width={250}
                  height={150}
                  className="rounded-2xl"
                />
              </a>

              <p className="py-2 text-gray-300">
                Pictionary is a real-time two-player game where the host can
                create a room and a player can join the room. When the room is
                full, the host is able to draw the given prompt on canvas and
                the player can guess the drawing to accumulate scores.
              </p>
            </div>
            <div className="text-center shadow-lg p-2">
              <h5 className="text-xl py-4 text-gray-300">
                Diagon Alley Online
              </h5>
              <a
                href="https://diagon-alley-online.onrender.com/home"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={DiagonAlleyOnline}
                  alt=""
                  width={250}
                  height={150}
                  className="rounded-2xl"
                />
              </a>
              <p className="py-2 text-gray-300">
                E-Commerce website where users can signup/login to purchase or
                save Harry Potter goods using shopping cart and checkout system.
                It is Built with PostgreSQL, Express.js, React/Redux, Node.js.
                Checkout/payment system is enabled using Stripe.
              </p>
            </div>
            <div className="text-center shadow-lg p-2">
              <h5 className="text-xl py-4 text-gray-300">MoneyBuddy</h5>
              <a
                href="https://money-buddy-app.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={MoneyBuddy2}
                  alt=""
                  width={250}
                  height={150}
                  className="rounded-2xl"
                />
              </a>
              <p className="py-2  text-gray-300">
                Expense tracking application made for daily use. Users can add
                description, amount, and category of expenses to record and
                visualize the data using graphs. It allows budget monitoring and
                calculates monthly savings. It is a single-page application
                using MERN stack
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
