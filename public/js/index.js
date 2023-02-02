const socket = io();

const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const thumnail = document.getElementById("thumnail");
const enviar = document.getElementById("enviar")

enviar.addEventListener("submit", e =>{
  console.log('Enviado')
  socket.emit('newProduct', {title: title.value, description: description.value, price: price.value, thumnail:thumnail.value})
})
/* Swal.fire({
  title: 'hola Leoo',
  input: 'text',
  icon: 'success'
}) */

