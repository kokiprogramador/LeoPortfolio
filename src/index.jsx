import { render } from "preact";
import Home from "./Pages/Home.jsx";

export function App() {
  return <Home />;
}
render(<App />, document.getElementById("app"));
