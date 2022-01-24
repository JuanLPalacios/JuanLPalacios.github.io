window.addEventListener("load",()=>{
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
})