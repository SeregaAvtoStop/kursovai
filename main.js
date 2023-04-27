function enlargeImage(img) {  // Create a new element to display the enlarged image
    var overlay = document.createElement("div"); overlay.style.position = "fixed";
    overlay.style.top = 0; overlay.style.left = 0;
    overlay.style.width = "100%"; overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)"; overlay.style.zIndex = 9999;
    overlay.onclick = function () {
        document.body.removeChild(overlay);
    };
    // Create a new element for the enlarged image  var enlargedImg = document.createElement("img");
    enlargedImg.src = img.src; enlargedImg.style.position = "absolute";
    enlargedImg.style.top = "50%"; enlargedImg.style.left = "50%";
    enlargedImg.style.transform = "translate(-50%,-50%)"; enlargedImg.style.maxHeight = "90%";
    enlargedImg.style.maxWidth = "90%";
    // Add the elements to the document  overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);
}