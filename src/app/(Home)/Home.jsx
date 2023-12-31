"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

// motion
import { motion } from "framer-motion";
//icons
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

// varients
import { fadeIn } from "../../../variants";

const Hero = () => {
  return (
    <section className="h-screen xl:h-[90vh]" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text and img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Hello I am <br />
              <span className="text-blue-800">Fahim Muntashir</span>
              <br />
              <Typewriter
                words={["Webdeveloper", "Content Creater!", "Programmer"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              A positive mindset, believing in ease, and self-confidence are
              keys to achieving success. Challenges become opportunities, and
              with clear goals and affirmations, you bolster productivity and
              attract positive outcomes. Success follows naturally.
            </motion.p>

            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start xl:gap-x-6"
            >
              <a
                href="https://www.facebook.com/FahimMuntashirBD/"
                target="_blank"
              >
                <BsFacebook className="social-icon text-3xl text-blue-600 hover:text-blue-800" />
              </a>
              <a
                href="https://www.instagram.com/fahim.muntashir1/"
                target="_blank"
              >
                {" "}
                <BsInstagram className="social-icon text-3xl text-purple-600 hover:text-purple-800" />
              </a>
              <a
                href="https://au.linkedin.com/in/fahim-muntashir"
                target="_blank"
              >
                {" "}
                <BsLinkedin className="social-icon text-3xl text-indigo-600 hover:text-indigo-800" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCyoBlQNPSHaQYNW4n6zkINQ"
                target="_blank"
              >
                {" "}
                <FiYoutube className="social-icon text-3xl text-red-600 hover:text-red-800" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=TRKmJkEAAAAJ&hl=en"
                target="_blank"
              >
                {" "}
                <SiGooglescholar className="text-3xl text-green-600 hover:text-green-800" />
              </a>
            </motion.div>
          </div>
          {/* img  car*/}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:right-0 flex justify-center items-center"
          >
            <Image
              className=""
              src={"/fahim.png"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            ></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
