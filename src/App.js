import './button.css';
import MainForm from './components/mainsection.jsx';

function App() {
  return (
    <div className="realBody">
      <header>CRUD Application</header>
      <p style={{padding:"0",margin:"0",color:"red"}}>Note: Only one entry can be made with a single phone number.</p>
      <div className="block">
        <MainForm />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
