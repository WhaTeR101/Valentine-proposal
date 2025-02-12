const noButton = document.getElementById("buttonn");
const mainDiv = document.querySelector(".main_div");

noButton.addEventListener("click", function() {
    // Get button width and height
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Get the parent's (main_div's) dimensions
    const parentWidth = mainDiv.offsetWidth;
    const parentHeight = mainDiv.offsetHeight;

    // Calculate the max possible positions for X and Y inside the parent
    const maxX = parentWidth - buttonWidth - 10; // Keep 10px padding
    const maxY = parentHeight - buttonHeight - 10; // Keep 10px padding

    // Generate random positions for X and Y within the allowed range
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Prevent the button from being placed outside the parent div:
    randomX = Math.min(Math.max(randomX, 10), maxX); // x stays within [10, maxX]
    randomY = Math.min(Math.max(randomY, 10), maxY); // y stays within [10, maxY]

    // Apply the new position to the button with smooth animation
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
