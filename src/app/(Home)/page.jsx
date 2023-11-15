import About from "./About";
import Blog from "./Faq";
import Home from "./Home";
import Review from "./Review";
import Skill from "./Skill";
import Projects from "./Projects";
import Services from "./Services";
import Team from "./Team";

const page = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Services></Services>
      <Projects></Projects>
      <Team></Team>
      <Review></Review>
      {/* <Contact></Contact> */}
      <Blog></Blog>
    </div>
  );
};

export default page;
