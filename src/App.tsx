import "./App.css";
import Navbar from "./components/navbar";
import Feedbacks from "./components/feedbacks";
import InfoCards from "./components/infoCards";
import Slider from "./components/slider";
import Footer from "./components/footer";
import Registration from "./components/registration";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Feedbacks />
      <InfoCards />
      <Slider />
      <Registration />
      <Footer />      
    </div>
  );
};

export default App;
