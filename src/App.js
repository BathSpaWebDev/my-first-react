// import logo from './logo.svg';
import './App.css';
import Postcard from './components/postcard';
import Link from './components/link';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="card-container">

            <Postcard 
              name="Barack Obama" 
              jobTitle="President" 
              text={`
                Some random text to show this is a dynamic value
              `}
            />
            <Postcard 
              name="Michael Jordan" 
              jobTitle="Basketball player" 
              text={`
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptas sed! Sed possimus aspernatur itaque omnis quo a qui sunt quas magnam facilis aliquam, porro suscipit neque! Molestiae, nemo odio?
              `
            }/>

        </div>

       
       
        
  

        <Link url="https://google.com" linkText="Google" />
        <Link url="https://bbc.com" linkText="BBC"/>
        <Link url="https://britishairways.com" linkText="BA"/>
        
      </header>
    </div>
  );
}

export default App;
