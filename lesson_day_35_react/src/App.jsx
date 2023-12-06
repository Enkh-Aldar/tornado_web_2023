import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Team from './pages/Team'
import About from './pages/About'
import Contact from './pages/Contact'
import PostDetail from './pages/PostDetail'
import Posts from './pages/posts'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import DataFetcher from './pages/DataFetcher'

function App() {
  return (
    <div className='text-center'>
      <nav className='bg-gray-100 p-4'>
        <Link to ="/" className='mr-4'>Home</Link>
        <Link to ="/about" className='mr-4'>About</Link>
        <Link to ="/contact" className='mr-4'>Contact</Link>
        <Link to ="/posts" className='mr-4'> Posts</Link>
        <Link to ="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="feature" element={<Feature />}/>
          <Route path="team" element={<Team />}/>
        </Route>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:postId" element={<PostDetail />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/users" element={<DataFetcher />}/>
      </Routes>
    </div>
  )
}

export default App;
