import Footer from "../../SharedComponents/Footer/Footer";
import TextInput from "../../SharedComponents/TextInput/TextInput";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <TextInput></TextInput>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;