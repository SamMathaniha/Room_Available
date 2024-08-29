import AboutUs from "./componenets/AboutUs/AboutUs";
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
    </div>
  );
}

export default App;
