

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader')
    const navBar = document.getElementById("navBar")
    const links = navBar.querySelectorAll("a")
    const l1 = document.getElementById("listNav1")
    const l2 = document.getElementById("listNav2")

    window.addEventListener('load', () => {
        loader.classList.add('hidden', 'bg-transparent');
    })


    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {

            navBar.classList.add("md:bg-white" , "md:shadow-2xl")
            navBar.classList.remove('bg-transparent', 'md:bg-black/10', 'md:backdrop-blur-xl')

            links.forEach(link => {
                link.classList.add("after:bg-black")
                link.classList.remove("after:bg-white")
            })

            l1.classList.add("text-black")
            l1.classList.remove("text-white")

            
            l2.classList.add("text-black")
            l2.classList.remove("text-white")

        }

        else {
            navBar.classList.remove("md:bg-white","md:shadow-2xl")
            navBar.classList.add("bg-transparent", "md:bg-black/10", "md:backdrop-blur-xl")

            links.forEach(link => {
                link.classList.remove("after:bg-black")
                link.classList.add("after:bg-white")
            })

            l1.classList.remove("text-black")
            l1.classList.add("text-white")

            l2.classList.remove("text-black")
            l2.classList.add("text-white")
        }
    })


    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
})

var swiper = new Swiper(".mySwiper", {
    // effect: "creative",
    // creativeEffect: {
    //     prev: {
    //         shadow: true,
    //         translate: ["100%", 0, -400],
    //         opacity: 10,
    //     },
    //     next: {
    //         translate: ["100%", 0, 0],
    //         opacity: 10,

    //     },
    // },
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
        1280:{
            slidesPerView: 4,
        }
    },
});


