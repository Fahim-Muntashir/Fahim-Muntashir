import About from './About';
import Contact from './Contact';
import Home from './Home';
import Review from './Review';

const page = () => {
    return (
        <div>
            <Home></Home> <About></About>
           <Review></Review>
            <Contact></Contact>
           
        </div>
    );
};

export default page;