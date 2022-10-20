document.addEventListener('DOMContentLoaded', function() {
    const popupLinks = document.querySelectorAll('.popup-link');
    const popupCloseIcon = document.querySelectorAll('.close');
    const popup = document.querySelector('.popup');
   
    /* const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock-padding'); */

    let unlock = true;
    const timeout = 800;

    if(popupLinks.length > 0) {
        for(let i = 0; i < popupLinks.length; i++) {
            const popupLink = popupLinks[i];
            popupLink.addEventListener('click', function(e) {
                const popupName = popupLink.getAttribute('href').replace('#','');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            })
        }
    }

    if(popupCloseIcon.length > 0) {
        for (let i = 0; i < popupCloseIcon.length; i++) {
             const el = popupCloseIcon[i];
             el.addEventListener('click', (e)=> {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            })
        }
    }

    function popupOpen(curentPopup) {
        curentPopup.classList.remove('close');
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', (e)=> {
            if(!e.target.closest('.popup')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }

    function popupClose(curentPopup) {
        curentPopup.classList.remove('active')
        curentPopup.classList.add('close');
    }
    

   /*  popupOpen.addEventListener('click', ()=> {
        popup.classList.add('active')
    })
    popupClose.addEventListener('click', ()=> {
        popup.classList.remove('active')
    }) */

   /*  document.addEventListener('click', (event)=> {
    if(!popup.classList.contains('active')) {
        return}
        else {
          if(event.target.className != 'popup-content') {
         console.log('click')    
        }   
        }
    }) */
    /* 
        event.stopPropagation();
        if(event.target.className != 'popup'){
           
            popup.classList.remove('active')
        }
    }) */
   
})