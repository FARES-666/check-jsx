import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import image from "./image.jpg";
import video from "./free.mp4"
function App() {
  return (
    <div className="App">
      <section className="hea">
        <h1>Fares Fakhfakh</h1>
        <img src="/received_ff.jpeg" alt=""/>
        <img src={image} alt="" />
      </section>
        <video src={video} controls ></video>
    </div>
  );
}

export default App;
