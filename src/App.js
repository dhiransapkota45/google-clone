import State from "./contexts/State";
import Home from "./components/Home"
const App = () => {
  
  return (
    <State>
      <Home />
    </State>
  );
};

export default App;
