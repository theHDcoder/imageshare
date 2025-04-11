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

document.getElementById("instaShareBtn").addEventListener("click", () => {
  const imageUrl = document.querySelector(".portrait-image").src;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `instagram://library?AssetPath=${encodeURIComponent(
      imageUrl
    )}`;
    setTimeout(() => {
      window.location.href = "https://www.instagram.com";
    }, 2000);
  } else {
    alert("Instagram sharing is only available on mobile devices");
  }
});
