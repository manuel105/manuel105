const t_abstractamente = document.querySelector('#t_abstractamente')
const t_conoce = document.querySelector('#t_conoce')
const redes = document.querySelector('#redes')
const proyecto = document.querySelector('#proyecto')
const comotratar = document.querySelector('#comotratar')
const general = document.querySelector('#general')
const esquizofrenia = document.querySelector('#esquizofrenia')
const sintomas = document.querySelector('#sintomas')
const caru = document.querySelector('#caru')
const tarjeta = document.querySelector('#tarjeta')
const tarjetaa = document.querySelector('#tarjetaa')
const tarjetaaa = document.querySelector('#tarjetaaa')



window.addEventListener('scroll', function (){
    console.log(this.window.scrollY)
    let pos = this.window.scrollY
    
    if (pos > 1) {
        t_abstractamente.style.opacity = 1
        t_abstractamente.style.marginLeft = '0px'
        t_abstractamente.style.transitionDuration = '1s' 
        t_conoce.style.opacity = 1
        t_conoce.style.marginLeft = '0px'
        t_conoce.style.transitionDuration = '1.5s' 
        redes.style.opacity = 1
        redes.style.marginLeft = '0px'
        redes.style.transitionDuration = '2s' 
        
    }
    if (pos > 600) {
        t_abstractamente.style.opacity = 0
        t_abstractamente.style.marginLeft = '-500px'
        t_abstractamente.style.transitionDuration = '1s' 
        t_conoce.style.opacity = 0
        t_conoce.style.marginLeft = '-500px'
        t_conoce.style.transitionDuration = '1.5s' 
        redes.style.opacity = 0
        redes.style.marginLeft = '-500px'
        redes.style.transitionDuration = '2s'   
    }

    if (pos > 300) {
        proyecto.style.opacity = 1
        proyecto.style.marginLeft = '0px'
        proyecto.style.transitionDuration = '2s' 
        comotratar.style.opacity = 1
        comotratar.style.transitionDuration = '2s' 
        general.style.opacity = 1
        general.style.transitionDuration = '2s' 
        esquizofrenia.style.opacity = 1
        esquizofrenia.style.transitionDuration = '2s' 
        sintomas.style.opacity = 1
        sintomas.style.transitionDuration = '2s' 
    }
    if (pos < 300) {
        proyecto.style.opacity = 0
        proyecto.style.marginLeft = '-500px'
        proyecto.style.transitionDuration = '2s' 
        comotratar.style.opacity = 0
        comotratar.style.transitionDuration = '2s' 
        general.style.opacity = 0
        general.style.transitionDuration = '2s'
        esquizofrenia.style.opacity = 0
        esquizofrenia.style.transitionDuration = '2s'
        sintomas.style.opacity = 0
        sintomas.style.transitionDuration = '2s'
    }
    if (pos > 1430) {
        proyecto.style.opacity = 0
        proyecto.style.marginLeft = '-500px'
        proyecto.style.transitionDuration = '2s' 
        comotratar.style.opacity = 0
        comotratar.style.transitionDuration = '2s' 
        general.style.opacity = 0
        general.style.transitionDuration = '2s' 
        esquizofrenia.style.opacity = 0
        esquizofrenia.style.transitionDuration = '2s'
        sintomas.style.opacity = 0
        sintomas.style.transitionDuration = '2s'
    }

    if (pos > 900) {
        caru.style.transform = 'scale(1)';
        caru.style.transitionDuration = '1s' 

    }

    if (pos < 900) {
        caru.style.transform = 'scale(0)';
        caru.style.transitionDuration = '1s' 

    }
    if (pos > 2190) {
        caru.style.transform = 'scale(0)';
        caru.style.transitionDuration = '1s' 

    }

    if (pos > 1500) {
        tarjeta.style.opacity = 1
        tarjeta.style.marginLeft = '0px'
        tarjeta.style.transitionDuration = '1s'
        tarjetaa.style.opacity = 1
        tarjetaa.style.marginRight = '0px'
        tarjetaa.style.transitionDuration = '1s'
        tarjetaaa.style.opacity = 1
        tarjetaaa.style.marginRight = '0px'
        tarjetaaa.style.transitionDuration = '1s'
    }
    if (pos < 1500) {
        tarjeta.style.opacity = 0
        tarjeta.style.marginLeft = '-500px'
        tarjeta.style.transitionDuration = '1s'
        tarjetaa.style.opacity = 0
        tarjetaa.style.marginRight = '-500px'
        tarjetaa.style.transitionDuration = '1s'
        tarjetaaa.style.opacity = 0
        tarjetaaa.style.marginRight = '-500px'
        tarjetaaa.style.transitionDuration = '1s'
    }
    
})