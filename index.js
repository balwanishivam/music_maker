window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelectorAll(".visual");
    const color=[
        "60d394",
        "d36060",
        "c060d3",
        "d3d160",
        "6860d3",
        "60b2d3"
    ];
    console.log(sounds);
    console.log(visual);
    
      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 96) {
            sounds[0].currentTime=0;
            sounds[0].play();
            index=0;
            createBubbles(index);
        }
      });
      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 97) {
            sounds[1].currentTime=0;
            sounds[1].play();
            index=1;
            createBubbles(index);
        }
      });
      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 98) {
            sounds[2].currentTime=0;
            sounds[2].play();
            index=2;
            createBubbles(index);
        }
      });
      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 99) {
            sounds[4].currentTime=0;
            sounds[4].play();
            index=4;
            createBubbles(index);
        }
      });
      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 100) {
            sounds[5].currentTime=0;
            sounds[5].play();
            index=5;
            createBubbles(index);
        }
      });
      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 101) {
            sounds[3].currentTime=0;
            sounds[3].play();
            index=3;
            createBubbles(index);
        }
      });
     
    
    pads.forEach((pad,index) =>{
          pad.addEventListener('click',function(){
              sounds[index].currentTime=0;
              sounds[index].play();
              createBubbles(index);
          });
    });

    const createBubbles = (index) =>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=color[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };  
});
