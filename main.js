window.addEventListener("message", (event) => {
    console.log("ORIGIN: " + event.origin)
    console.log("REFERRER: " + document.referrer)
    if (event.origin !== "https://chunithm-net-eng.com" || event.origin !== "https://new.chunithm-net.com") return
    console.log(event.origin)
    console.log(document.referrer)
    const textarea = document.querySelector("ta-posted")

});
