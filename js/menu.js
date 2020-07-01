let Elmenu = document.querySelector('.menu');
let Elnav = document.querySelector('.nav');
let Elicon_cross = document.querySelector('.icon-cross')
let Elicon_menu = document.querySelector('.icon-menu')
let Elbody = document.querySelector('body')
let show_menu = false;
let Width = window.innerWidth
Elmenu.addEventListener('click',function(){
    show_menu = !show_menu;
    if (show_menu) {
        Elnav.style.animation = 'navMoveIn .3s forwards'
        Elicon_cross.style.display = 'inline-block';
        Elicon_menu.style.display = 'none'
        if (Width>1324)
        Elbody.style.animation = 'bodyMoveIn .3s forwards'
    }
    else {
        Elnav.style.animation = 'navMoveOut .3s forwards'
        Elicon_cross.style.display = 'none';
        Elicon_menu.style.display = 'inline-block'
        if (Width>1324)
        Elbody.style.animation = 'bodyMoveOut .3s forwards'
    }
})
window.onresize = () => {
    Width = window.innerWidth
    if(show_menu) {
        if(Width <= 1324) {
            Elbody.style.animation = 'bodyMoveOut .3s forwards'
        }
        else {
            Elbody.style.animation = 'bodyMoveIn .3s forwards'
        }    
    }
}