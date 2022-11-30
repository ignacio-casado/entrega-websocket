const socket = io()
console.log('new entry')

socket.on('NewClientJustEntered', ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Nuevo cliente conectado',
        showConfirmButton: false,
        timer: 1500
      })
})