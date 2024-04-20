import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import profile from "./images/profile.jpg"

function App() {
  return (
    <div className="App">
      <img src={profile} alt="Profile Picture" height={200} width={200}/>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
