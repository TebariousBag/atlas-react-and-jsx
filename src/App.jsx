// import the greeting we created
import Greeting from "./components/Greeting";
// import SocialLinks we created
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
  <div className="app"><Greeting /></div>
  <div className="social-links"><SocialLinks /></div>
  </div>
  );
}

export default App;
