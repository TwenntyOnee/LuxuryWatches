import "./App.css";
import Navbar from "./navbar";
import Content from "./content";
import Collection from "./collection";
import Copyright from "./copyright";
import Watches from "./watches";
import videoBack from "../src/images/BackgroundVid.mp4";

function App() {
  return (
    <div className="App">
      <body className="bg-bgWatches bg-cover w-full h-screen bg-opacity ">
        <Navbar />
        <Content />
        <Collection />
        <Copyright />
      </body>
    </div>
  );
}

export default App;
