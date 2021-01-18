import React from 'react'
import logo from './logo.svg'
import './Main.css'
import { proxy, useProxy } from 'valtio'

const state = proxy({
  count: 0
})

function App () {
  const snapshot = useProxy(state)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => (state.count = state.count + 1)}>
            count is: {snapshot.count}
          </button>
        </p>
        <p>
          Edit <code>Main.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
