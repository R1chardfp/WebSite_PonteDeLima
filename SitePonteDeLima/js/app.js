const Slide = () => {
    const mob = document.querySelector('.mob');
    const naveg = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //ativar
    mob.addEventListener('click',()=>{

        //ativar navegador
        naveg.classList.toggle('nav-active');
        //animaçoes
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation= '';
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
        }
        
        });
        //mob animation
        mob.classList.toggle('toggle');

    });
    
}

Slide();
