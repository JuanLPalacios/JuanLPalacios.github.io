window.addEventListener("load",()=>{
    /***`Support For Hash Navigation`
    let hash = location.hash
    const observer = new MutationObserver(()=>{
        console.log(hash);
        console.log(location.hash);
        if(hash != location.hash){
            hash = location.hash;
            console.log(location.hash);
            //if(hash=="")
        }
    });
    observer.observe(document, {subtree: true, childList: true})
    */
   document.querySelector("#menu-btn").addEventListener("click", (event) => {
       let ul = document.querySelector("#nav-menu");
       ul.classList.toggle("mobile-nav-menu");
   })
})