import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Mojokerto", "Sidoarjo", "Surabaya", "Gresik"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
