import './App.css';
import './shared.css';
import { createRoot } from "react-dom/client";

import SearchPage from './Pages/Search/searchPage';
import Header from './Components/Header/header';
import SpecScreen from './Pages/SpecScreen/specScreen';

function App() {
  return (
    <div className='appContainer bColor0'>
    <Header title="Kitchen Specs" date='April 2023'/>
    <main className='bColor0'>
      {/* <SearchPage/> */}
      <SpecScreen title="classic burger"/>
    </main>
    </div>
  );
}

export default App;
