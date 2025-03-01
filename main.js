window.addEventListener("message", (event) => {
    console.log(event.origin)
    console.log(document.referrer)
    if (event.origin !== "https://chunithm-net-eng.com" || event.origin !== "https://new.chunithm-net.com") return
    
    const textarea = document.querySelector("ta-posted")

});
