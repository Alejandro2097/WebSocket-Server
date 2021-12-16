// Referencia del html
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

//socket del cliente
const socket = io();

socket.on('connect', () => {
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});
socket.on('disconnect', () =>{
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});