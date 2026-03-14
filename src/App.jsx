import './App.css';

function App() {
  return (
    <>
      <h1>Mesbah Ghalib</h1>
      <Person></Person>
      <Person></Person>

    </>
  );
}
function Person() {
  const age = 17;
  return <p>I am a person and my age is {age}</p>;
}
export default App;
