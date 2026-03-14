import './App.css';

function App() {
  return (
    <>
      <h1>Mesbah Ghalib</h1>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="mozumdar" tech="JavaScript" ></Developer>
      <Developer name="shabana" tech="Python" ></Developer>
      <Developer name="yaali" tech="Java" ></Developer>

    </>
  );
}
function Person() {
  const age = 17;
  const name="jolil"
  // return <p>I am a person and my age is {age}</p>;
  return (
    <p style={{ border: '2px solid red', padding: '10px', borderRadius: '5px' }}>
      My name is {name} and my age is {age}
    </p>
  );
}
function Sports() {
  return (
    <section className='student'>
      <h3>Cricket</h3>
      <ol>
        <li>Kola</li>
        <li>Banana</li>
      </ol>
    <p>Playsing & losing</p>
  </section>
  )
}
function Student() {
  return (
   <div style ={Personstyle}>
      <p>Name: John Doe</p>
      <p>Dep: Computer Science</p>
   </div>
  )

}

const Personstyle = {
  color: 'blue',
  backgroundColor: 'yellow',
  padding: '10px',
  borderRadius: '5px',
  border: '4px solid yellow',
  fontSize: '40px'
}
function Developer(props) {
  console.log(props)
  return (
    <div style={{border: '4px solid yellow'}}>
      <p>Developer:{props.name}</p>
      <p>Technology: {props.tech}</p>
    </div>
  )
}


export default App;
