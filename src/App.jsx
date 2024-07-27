import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import View from './assets/components/View';
import Signup from './assets/components/Signup';
import Login from './assets/components/Login';
import Navbar from './assets/components/Navbar';
import BookList from './assets/components/Booklist';
import EditProfile from './assets/components/Editprofile';
import Adminnavbar from './assets/components/Adminnavbar';
import Usenavbar from './assets/components/Usenavbar';
import Adminview from './assets/components/Adminview';


function App() {
  const location=useLocation()
  const isUserRoute=['/booklist','/editprofile'].some(path => location.pathname.startsWith(path));
  const isAdminRoute =['/admin'].some(path => location.pathname.startsWith(path));
  return (
    <>
      {isAdminRoute ? <Adminnavbar /> : isUserRoute ? <Usenavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allbooks" element={<BookList />} />
        <Route path="/editprofile" element={<EditProfile />} />
        
        <Route path='/admin'element={<Adminview/>}> </Route>
      </Routes>
    </>
  );
}

export default App;