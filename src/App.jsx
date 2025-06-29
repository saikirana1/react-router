import { useContext } from "react";
import { MyContext } from "./components/Context";
import Home from "./components/Home";

function App() {
  const [{ captain }, hero, setHero] = useContext(MyContext);
  let name = "Sai Kiran";

  return (
    <>
      <Home data={name} />
      <h1>Welcome</h1>
      <h1>{captain}</h1>
      <h1>{hero}</h1>
      <button onClick={() => setHero("Allu Arjun")}>Change Hero</button>
    </>
  );
}

export default App;
