window.addEventListener("message", (event) => {
    if (event.origin !== "https://chunithm-net-eng.com" || event.origin !== "https://new.chunithm-net.com") return
    console.log(event.origin)
    console.log(document.referrer)
    const textarea = document.querySelector("ta-posted")

});
