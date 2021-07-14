import Didact from './demo';

const Counter = () => {
  const [state, setState] = Didact.useState(0);
  return (
    <div className="counter">
      <span>{state}</span>
      <button onclick={() => setState((v) => v + 1)}>Plus</button>
    </div>
  );
};

const App = () => (
  <div className="app">
    <div>Hello World!</div>
    <Counter />
  </div>
);

Didact.render(<App />, document.getElementById('app'));
