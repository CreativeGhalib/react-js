import './App.css';
import ToDo from './ToDo';

function App() {
  return (
    <>
      <h1>Mesbah Ghalib</h1>
      <ToDo task="Buy groceries"></ToDo>
      {/*// destructuring kore ToDo({task}) function e disi*/ }
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>
      {developers.map(dev => (
        <Developer key={dev.name} name={dev.name} tech={dev.tech} />
      ))}
    </>
  );
}
function Person() {
  const age = 17;
  const name = 'jolil';
  // return <p>I am a person and my age is {age}</p>;
  return (
    <p style={{ border: '2px solid red', padding: '10px', borderRadius: '5px' }}>
      My name is {name} and my age is {age}
    </p>
  );
}
function Sports() {
  return (
    <section className="student">
      <h3>Cricket</h3>
      <ol>
        <li>Kola</li>
        <li>Banana</li>
      </ol>
      <p>Playsing & losing</p>
    </section>
  );
}
function Student() {
  return (
    <div style={Personstyle}>
      <p>Name: John Doe</p>
      <p>Dep: Computer Science</p>
    </div>
  );
}

const Personstyle = {
  color: 'blue',
  backgroundColor: 'yellow',
  padding: '10px',
  borderRadius: '5px',
  border: '4px solid yellow',
  fontSize: '10px',
};
// function Developer(props) {
//   console.log(props)
//   return (
//     <div style={{border: '4px solid yellow'}}>
//       <p>Developer:{props.name}</p>
//       <p>Technology: {props.tech}</p>
//     </div>
//   )
// }
const developers = [
  { name: 'Mesbah Ghalib', tech: 'React' },
  { name: 'Jolil', tech: 'Angular' },
  { name: 'Sabbir', tech: 'Vue' },
];
function Developer({ name, tech }) {
  return (
    <div style={{ border: '4px solid yellow' }}>
      <p>Developer:{name}</p>
      <p>Technology: {tech}</p>
    </div>
  );
}

export default App;
