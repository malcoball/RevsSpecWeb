import './App.css';
import './shared.css';
import SearchPage from './Pages/Search/searchPage';
import Header from './Components/Header/header';

function App() {
  return (
    <div className='appContainer bColor0'>
    <Header title="Kitchen Specs" date='April 2023'/>
    <main className='bColor0'>
      <SearchPage/>
    </main>
    </div>
  );
}

export default App;
