document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.getElementById("cursor");
    const toggleButton = document.getElementById("toggleButton");
    const additionalInfo = document.getElementById("additionalInfo");

    const toggleInfoVisibility = () => {
        additionalInfo.classList.toggle("visible");
    };

    const onMouseMove = (event) => {
        cursor.style.left = event.pageX + "px";
        cursor.style.top = event.pageY + "px";

        if (event.target.hasAttribute("cursor-type")) {
            let cursorSize = event.target.getAttribute("cursor-type");
            cursor.classList.add(cursorSize);
        } else {
            cursor.classList = "";
        }
    };

    const onButtonClick = () => {
        toggleInfoVisibility();
    };

    document.addEventListener("mousemove", onMouseMove);
    toggleButton.addEventListener("click", onButtonClick);
});
const link = document.querySelectorAll('.link');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}
