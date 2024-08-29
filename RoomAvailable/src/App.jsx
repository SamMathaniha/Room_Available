import AboutUs from "./componenets/AboutUs/AboutUs";
import ContactModal from "./componenets/ContactModal/ContactModal";
import Footer from "./componenets/Footer/Footer";
import Header from "./componenets/Header/Header";
import Hero from "./componenets/Hero/Hero";
import Hotels from "./componenets/Hotels/Hotels";
import Rooms from "./componenets/Rooms/Rooms";

function App() {
  return (
    <div className="App">
      <Header />

      <Hero />
      <Hotels />
      <Rooms />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
