import Swal from 'sweetalert2';

export function toast(icon, msg) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    }).fire({
      icon: icon,
      title: msg
    });
  }

  export function formattedDate(date) {
    let dateFormated = new Date(date)
    let finalDate = (adicionaZero(dateFormated.getDate().toString())) + '/' + (adicionaZero(dateFormated.getMonth().toString())) + '/' + dateFormated.getFullYear()
    return finalDate;
  }

  function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}