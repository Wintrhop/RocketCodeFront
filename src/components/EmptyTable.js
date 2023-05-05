
import { useEffect } from "react";
import Swal from "sweetalert2";
import Router from "next/router";

export function EmptyTable(items) {
  
    const table = items;
  
    useEffect(()=> {
      if (table.length ===0) {
          Swal.fire({
              showConfirmButton: false,
              timer: 1800,
              timerProgressBar: true,
              icon: "warning",
              title: 'Tabla de Projectos Vacia, agrega un nuevo projecto',
            });
          Router.push("/createproject")
          ;}
    }, [table]);
    return table;
  }