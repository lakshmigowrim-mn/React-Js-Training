import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import { Button } from 'antd';
import Welcome from './Welcome';
import UsersList from './UsersList';
import CakeList from './CakeList';
import Meeting from './Meeting';
import Names from './Names';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Incorrectdetails from './Incorrectdetails';
import Admin from './admin';


function App() {
  var name = 'Here are the few delicious cakes for you.... Enjoy it...!!!!'
  
  return (
    <div style={{textAlign:"center "}}>
      {/* <Navbar />
      <Home /><br/>
      <label><marquee><h3>{name}</h3></marquee></label><br/>
      <CakeList/>
      
      <UsersList /><br/> */}
      {/* <Welcome welcome={details[0]} />
      <Welcome welcome={details[1]}/>
      <Welcome welcome={details[2]}/>
      <Welcome welcome={details[0]} />
      <Welcome welcome={details[1]}/>
      <Welcome welcome={details[2]}/>
      <Welcome welcome={details[0]} />
      <Welcome welcome={details[1]}/>
      <Welcome welcome={details[2]}/>
      <Welcome welcome={details[0]} /> */}
      {/* <br/>
      <Login/><br/>
      <Meeting/> */}
      {/* <Names/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/nameslist' element={<Names></Names>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cakelist' element={<CakeList></CakeList>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path='/wrongdetails' element={<Incorrectdetails></Incorrectdetails>}></Route>
          <Route path='/nameslist' element={<Names></Names>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/admin/edit/:userid' element={<Admin></Admin>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
