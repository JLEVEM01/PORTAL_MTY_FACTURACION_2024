document.addEventListener("DOMContentLoaded", function(){
    const loader = document.getElementById("loader")
    const sectLogo = document.getElementById("logoSection");


    window.addEventListener("load",  ()=> {

        loader.classList.add('hidden', 'bg-transparent');

        if(window.screenY > 50){
            sectLogo.classList.add("translate-y-0", "scale-100")
            sectLogo.classList.remove("translate-y-3", "scale-110")
        }
    })

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            sectLogo.classList.add("translate-y-0", "scale-100")
            sectLogo.classList.remove("translate-y-3", "scale-110")
        }
        else{
            sectLogo.classList.add("translate-y-3", "scale-110")
            sectLogo.classList.remove("translate-y-", "scale-100")
        }
    })
})