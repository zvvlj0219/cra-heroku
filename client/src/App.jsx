import { Link, Routes, Route } from 'react-router-dom'
import FirstView from './FirstView'
import LinkPage from './LinkPage'


const App = () => {
  const linkStyle = {
    padding: '15px',
    fontSize: '20px'
  }

  return (
    <div>
      <div
        style={{
          height: '50px',
          textAlign: 'center',
          paddingTop: '15px'
        }}
      >
        <Link to='/app' style={linkStyle}>
          app
        </Link>
        <Link to='/linkpage' style={linkStyle}>
          link
        </Link>
        <Link to='/' style={linkStyle}>
          home
        </Link>
      </div>
      <hr />
      <Routes>
        <Route 
          path="/"
          element={
            <h2 style={{textAlign:'center'}}>
              select component
            </h2>
          }
        />   
        <Route path="/app" element={<FirstView />} />
        <Route path="/linkpage" element={<LinkPage />} />
      </Routes>
    </div>
  )
}

export default App
