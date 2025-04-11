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

document.getElementById("instaShareBtn").addEventListener("click", async () => {
  const imageUrl = document.querySelector(".portrait-image").src;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    try {
      // Try deep linking to Instagram
      window.location.href = `instagram://camera`;

      // Fallback to Instagram app/store after delay
      setTimeout(() => {
        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
          window.location.href =
            "https://apps.apple.com/app/instagram/id389801252";
        } else {
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.instagram.android";
        }
      }, 2500);
    } catch (error) {
      console.error("Error opening Instagram:", error);
      alert("Could not open Instagram. Please make sure it is installed.");
    }
  } else {
    alert("Instagram sharing is only available on mobile devices");
  }
});

// Copy image URL to clipboard as fallback
document
  .getElementById("instaShareBtn")
  .addEventListener("longpress", async () => {
    const imageUrl = document.querySelector(".portrait-image").src;
    try {
      await navigator.clipboard.writeText(imageUrl);
      alert("Image URL copied to clipboard. You can paste it in Instagram.");
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  });
