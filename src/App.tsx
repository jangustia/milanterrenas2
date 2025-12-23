import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="container">
        <h1>Welcome to Your App</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="subtitle">
          Click on the button to increase the counter
        </p>
      </div>
    </div>
  )
}

export default App
