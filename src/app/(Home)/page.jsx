import About from './About';
import Blog from './Faq';
import Contact from './Contact';
import Home from './Home';
import Review from './Review';
import Skill from './Skill';

const page = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Review></Review>
            <Contact></Contact>
            <Blog></Blog>
        </div>
    );
};

export default page;