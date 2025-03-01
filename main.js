const acceptableOrigins = ["https://chunithm-net-eng.com/", "https://new.chunithm-net.com/"]

// メッセージ受信準備完了通知
document.addEventListener("DOMContentLoaded", () => {
    const ref = document.referrer
    if (acceptableOrigins.includes(document.referrer))
        window.opener.postMessage("ready", ref)
});

window.addEventListener("message", (event) => {
    console.log(event.origin)
    if (event.origin !== "https://chunithm-net-eng.com" && event.origin !== "https://new.chunithm-net.com") return
    const textarea = document.querySelector("ta-posted")
    textarea.value = event.data
});
