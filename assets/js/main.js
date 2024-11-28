
// page active 
const nav_bar_active = document.querySelectorAll('.nav_bar_active');
const pageAtive = (links) => {
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(element => {
                if(element.className == 'active'){
                    element.classList.remove('active')
                }
            })
            link.classList.add('active')
        })
        
    });
}

pageAtive(nav_bar_active[0].childNodes);


// scroll to show header section 
const header_section = document.querySelector('.header_section');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 250) {
        header_section.classList.add('is-sticky')
    }else {
        header_section.classList.remove('is-sticky')
    }
});

// mobile menu 
const show_btn = document.querySelector('.show_btn');
const close_btn = document.querySelector('.close_btn');
const nav_bar = document.querySelector('.nav_bar');
show_btn.addEventListener('click', () => {
    nav_bar.classList.add('show')
    close_btn.classList.add('show')
})
close_btn.addEventListener('click', () => {
    nav_bar.classList.remove('show')
    close_btn.classList.remove('show')
})