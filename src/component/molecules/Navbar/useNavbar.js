import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../config/store/reducer/userSlice/userSlice";

const useNavbar = () => {
  const dispatch = useDispatch()
  const [isfalse, setIsfalse] = useState(false);
  const isLogin = localStorage.getItem('token') ? true : false;
  const isAdmin = localStorage.getItem('role') === 'admin' ? true : false;

  const handleNavbar = () => {
    if (window.scrollY >= 10) {
      setIsfalse(true);
    } else {
      setIsfalse(false);
    }
  };
  window.addEventListener("scroll", handleNavbar);

  const handleLogout = () => {
    dispatch(logout())
  }
  const menuNavbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: 'Cart',
      link: '/cart'
    },
    {
      name : 'electronics',
      link : '/electronics'
    },
    {
      name : 'jewelery',
      link : '/jewelery'
    },
    {
      name : 'men,s clothing',
      link : '/menst-cloting'
    },
    {
      name: '/'
    }


  ]
  
  return { isfalse, isLogin , handleLogout, isAdmin};
};

export { useNavbar };
