document.getElementById("shareBtn").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Beautiful Portrait",
        text: "Check out this amazing portrait!",
        url: window.location.href,
      });
      console.log("Content shared successfully");
    } catch (err) {
      console.log("Error sharing:", err);
    }
  } else {
    alert("Web Share API is not supported in your browser");
  }
});
