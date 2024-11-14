import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
// import Testimonials from './Components/Testimonials';
import Check from './Components/Check';


function App() {
  return (
    <div className="box-border w-screen h-screen p-0 m-0 overflow-x-hidden App">
      <Header/>
      <Hero/>
      {/* <Testimonials/> */}
     <Check/>
      
      
      
      
    </div>
  );
}

export default App;
