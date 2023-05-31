import Swal from 'sweetalert2'
const sweetMessage = (title, type, message) => {
    Swal.fire({
        title: '¡Error!',
        text: message,
        icon: type,
        confirmButtonText: 'Entendido'
    })
}
export {sweetMessage}