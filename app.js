// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn=document.querySelector(".switch-btn");
const video=document.querySelector(".video-container");

const preloader=document.querySelector(".preloader");

// add preloader(img (gif) displayed till site (video) is completely loaded)
window.addEventListener("load", function (){

    preloader.classList.add("hide-preloader"); //after loading add the class (hide-preloader) which hides the img
});

//btn consist of 3 spans (play, pause, and switch) and there is slide class which
//when applied to btn div (switch-btn) makes the switch span move forward

btn.addEventListener("click", function (){

    //on clicking btn we check if slide class already applied remove and play video else add and pause video
    if(btn.classList.contains("slide")){
        btn.classList.remove("slide");
        video.play();
    }
    else{
        btn.classList.add("slide");
        video.pause();
    }
});
