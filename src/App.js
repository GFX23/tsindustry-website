import "./index.css"
import Background from "./pages/background";
import Home from "./pages/home";
import NavBar from "./pages/navbar";


function App() {
  return (
    <div className="max-w-7xl w-screen h-full flex flex-col mx-auto">
      <Background />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
