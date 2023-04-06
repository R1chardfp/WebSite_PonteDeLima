

function Slide() {
    const mob = document.querySelector('.mob');
    const naveg = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const footer = document.querySelectorAll('.foo2');
    const video = document.querySelector('.container-video');
    //ativar
    mob.addEventListener('click', () => {

        //ativar navegador
        naveg.classList.toggle('nav-active');
        //animaçoes
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                enableScrolling();
                
            } else {
                disableScrolling();
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
                //document.getElementsByClassName('foo2')[0].style.visibility = 'hidden';
            }
            
        });
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                document.getElementsByClassName('container-video')[0].style.visibility = 'hidden';

                document.getElementsByClassName('foo2')[0].style.visibility = 'hidden';
            } else {
                document.getElementsByClassName('container-video')[0].style.visibility = 'visible';
                document.getElementsByClassName('foo2')[0].style.visibility = 'visible';
            }
            
        });
        //mob animation
        mob.classList.toggle('toggle');
        
    });

}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

Slide();
