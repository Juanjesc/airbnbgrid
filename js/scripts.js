document.addEventListener('DOMContentLoaded', () => {
    //Obtemenos la imagen
    const imagenHero = document.querySelector('.hero');

    //Inicializar las variables
    let i = 0;
    let tiempo = 0;

    //Arreglo con imagenes de fondo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    setInterval( () => {
        
        if(tiempo > 80){
            tiempo=0;
            imagenHero.style.backgroundImage = "url(img/"+imagenes[i]+")";
            if(i === imagenes.length -1){
                i = 0;
            }
            else{
                i++;
            }
            console.log(i);
        }
        
        tiempo++;
        
    },150)

    
    
    // Boton flotante del footer
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();
        // Prevenimos default pero ejecutamos el siguiente código

        const footer = document.querySelector('.footer');
        if(footer.classList.contains('activo')){
            //Si contiene activo, ejecuta este código
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerHTML = 'Info';
        }
        else{
            //Si no lo contiene, ejecuta este código
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerHTML = 'X Cerrar';
        }
    })


})