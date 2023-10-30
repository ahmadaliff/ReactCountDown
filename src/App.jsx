import Footer from "./Component/Footer";
import Countdown from "./pages/Countdown";
import Style from "./Styles/style.module.scss";
function App() {
  return (
    <div id={Style.App}>
      <Countdown style={Style} />
      <Footer style={Style} />
    </div>
  );
}

export default App;
