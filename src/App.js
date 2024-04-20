import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import profile from "./images/profile.jpg"
import SocialLinks from "./components/SocialLinks"

function App() {
  return (
    <div className="App">
      <image src={profile} alt="Profile Picture" height={200} width={200}/>
      <About />
      <SocialLinks/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
