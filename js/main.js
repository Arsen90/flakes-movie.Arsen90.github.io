const faDown = document.querySelector('.fa-down');
const profileContent = document.querySelector('.profile-content');

faDown.addEventListener('click', ()=> {
   if(profileContent.style.visibility == 'hidden'){
       profileContent.style.visibility = 'visible';
   } else{
    profileContent.style.visibility = 'hidden'
   }

})



// toggle start

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.profile-content,.fas-i,.movie-list-title,.navbar-container,.menu-list-item-link,.sidebar,.left-menu-icon,.toggle');

ball.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('active')
    });
    ball.classList.toggle('active');
});

// toggle  end


// slide owl carousel  start

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    navText:['<i class="fas fa-chevron-left arrow-left"></i>','<i class="fas fa-chevron-right arrow"></i>'],
    dots:false,
    responsive:{
        0:{
            items:1.2
        },
        294:{
            items:1.3
        },
        368:{
            items:1.5
        },
        393:{
            items:1.7
        },
        412:{
            items:2
        },
        450:{
            items:2.5
        },
        
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


// slidde owl carousel end