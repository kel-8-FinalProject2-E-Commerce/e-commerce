import Swal from "sweetalert2";

const swallGlobal = () => {
  const SwalLogin = () =>{
    setInterval( Swal.fire({
        icon: 'success',
        title: "success login",
  }), 2000)
}
const Swallogout = () =>{
    setInterval( Swal.fire({
        icon: 'error',
        title: "invalid login",
  }), 2000)
}

const SwalAdd = () =>{
  setInterval( Swal.fire({
      icon: 'success',
      title: "success add",
}), 2000)
}
    return { SwalLogin, Swallogout, SwalAdd }
}

export default swallGlobal

    