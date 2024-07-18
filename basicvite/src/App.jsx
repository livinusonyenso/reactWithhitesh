import { Fragment } from "react";
import Youtube from "./Youtube";
import Login from "./Component/Login";
import Pofile from "./Component/Pofile";
function App() {
  return (
    <Fragment>
      <h1>react vite youtube</h1>
      <Youtube />
      <Login />
      <Pofile />
    </Fragment>
  );
}

export default App;
