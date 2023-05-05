
import { useEffect } from "react";
import Swal from "sweetalert2";
import Router from "next/router";


   
  
  const EmptyTable = () => {
    Swal.fire({
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
        icon: "warning",
        title: 'Tabla de Projectos Vacia, agrega un nuevo projecto',
      });
    
  }
  
  export default EmptyTable