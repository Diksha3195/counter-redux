import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Button_control from "./components/Button_control";
import PrivacyMSG from "./components/PrivacyMSG";
import Header from "./components/Header";
import Container from "./components/Container";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center>
      <Card>
        <div className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMSG /> : <Container />}
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Button_control></Button_control>
            </div>
          </div>
        </div>
      </Card>
    </center>
  );
}

export default App;
