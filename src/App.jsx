/* eslint-disable react/prop-types */

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Login />
      <LogoutLink />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
