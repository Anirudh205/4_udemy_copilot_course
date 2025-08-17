import './App.css'
import Home from './components/Home'
import ListEmpl from './components/ListEmpl'
import AddEmpl from './components/AddEmpl'
import EmplDetails from './components/EmplDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management System</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<ListEmpl />} />
          <Route path="/add" element={<AddEmpl />} />
          <Route path="/details/:id" element={<EmplDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App