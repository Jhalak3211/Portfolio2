import  {Navbar} from "./components/Navbar/Navbar.jsx"; // adjust path if needed



import styles from "./App.module.css";
import { Hero } from './components/Navbar/Hero/Hero.jsx';

function App() {
 

  return (
   <div className={styles.App}> 
    <Navbar />
    <Hero/>
  
  </div>
  );
  
}

export default App;
