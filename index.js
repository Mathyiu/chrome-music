window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "rgb(221, 0, 0)",
        "#fbff01",
        "lime",
        "magenta",
        "mediumblue"
    ];
    //console.log(sounds[0]); ver se todos os sons estão ok
    //// lets get going witht the sound here

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
             sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    /// create a function that make bubbles

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild
        });
    }
});

