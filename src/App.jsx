import './App.css';

function App() {
  return (
    <>
      <h1>Mesbah Ghalib</h1>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>

    </>
  );
}
function Person() {
  const age = 17;
  const name="jolil"
  // return <p>I am a person and my age is {age}</p>;
  return <p>My name is {name} and my age is {age}</p>;
}
function Sports() {
  return (
    <section>
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
   <div>
      <p>Name: </p>
      <p>Dep: </p>
   </div>
  )
}

export default App;
