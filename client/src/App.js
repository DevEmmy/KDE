import MainLandingPage from "./Component/LandingPage/MainLandingPage";
import WebNav from "./Component/Navigator/WebNav";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import MainRealEstate from "./Component/RealEstate/MainRealEstate";
import Blogs from "./Component/Blog/Blogs";
import Automobiles from "./Component/AutoMobiles/Automobiles";
import About from "./Component/LandingPage/About";
import ComboDeals from "./Component/LandingPage/ComboDeals";
import Yatch from "./Component/Yatch/Yatch";
import Jets from "./Component/Jet/Jets";
import MainAuth from "./Component/Auth/MainAuth";
import RealEstate from "./Component/RealEstate/RealEstate";
import { CarsContainer } from "./Component/Styles/Automobiles.styled";
import Car from "./Component/AutoMobiles/Car";
import Latest from "./Component/LandingPage/Latest";
import { addUser } from "./store/userSlice"
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import Saved from "./Component/LandingPage/Saved";
import Admin from "./Component/Admin/Admin";
import AdminLeft from "./Component/Admin/AdminLeft";
import ListingCompo from "./Component/Admin/ListingCompo";


function App() {

  const dispatch = useDispatch();
  const getProfile = async ()=>{

    let user = localStorage.getItem('user');
    user = JSON.parse(user)

    if(user){
      dispatch(addUser(user));
    }
    else{
        await axios.get('http://localhost:5555/auth/profile', { headers: {
        'content-type' : "application/json",
        'authorization' : `Bearer ${localStorage.getItem('token')}`
      }
      })
      .then((resp)=>{
      dispatch(addUser(resp.data))
      const item = JSON.stringify(resp.data)
      localStorage.setItem("user", item)
    }
      )
      .catch((err)=>console.log(err))
    }
    }
    
  getProfile()
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<MainLandingPage />} />
      <Route path="/real-estate" element={<MainRealEstate />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/cars" element={<Automobiles />} />
      <Route path="/about" element={<About />} />
      <Route path="/combo-deals" element={<ComboDeals />} />
      <Route path="/yatch" element={<Yatch />} />
      <Route path="/jets" element={<Jets />} />
      <Route path="/auth" element={<MainAuth />} />
      <Route path="/listing/:title" element={<RealEstate />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/saved" element={<Saved />} />
      {/* <Route path="/admin/dashboard" element={<Admin />} /> */}
      <Route path="/admin/dashboard/listings" element={<ListingCompo />} />

    </Routes>
  </Router>
      
  );
}

export default App;
