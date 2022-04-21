import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container />
      </main>
      <Footer />
    </div>
  );
}

export default App;
