let up = document.getElementById("up");
let down = document.getElementById("down");
let wheel = document.getElementById("wheel");
let featureCarousal = document.getElementById("featureCarousal");
let icon = document.querySelectorAll("#wheel > .fa-solid");
let theme=document.getElementById("theme");
let video=document.getElementById("video");
let playBtn=document.querySelectorAll(".playBtn");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let root=document.querySelector(":root");
let body=document.querySelector("body");
let problemTick=document.styleSheets[0].cssRules[34];
let planTick=document.styleSheets[0].cssRules[57];
let logo=document.getElementById("headLogo");
let counter = 0;
let angle = 45;
// light mode color palette
let shade0 = "#CECECE"
,shadeB = "#FFFFFF"//white
,shade1="#E1E1E1"//lighterGrey
,shade2 = "#A6A6A6"//ligthgrey
,shade3="#393B3E";//darkgrey

//------------------------------- lazy loading ------------------------------
let source="euZLD6upr10"
let img= new Image;
 img.src="https://img.youtube.com/vi/"+source+"/maxresdefault.jpg";
 img.alt="click to see video";
 video.appendChild(img);


 video.addEventListener("click",loadFrame);

 function loadFrame(){
  playBtn[0].style.display="none";
   let iframe=document.createElement("iframe");
   iframe.src="https://www.youtube.com/embed/"+source+"?rel=0&showinfo=0&autoplay=1";
   iframe.frameBorder="0";
   iframe.allowFullscreen=true;
   iframe.allow="autoplay";
   video.replaceChild(iframe,img);
 }
 
//  -----------------------theme changer --------------------------------------
let moon=`<i class="fa-solid fa-moon"></i>`
let sun=`<i class="fa-solid fa-sun"></i>`
theme.addEventListener("click",themeChanger);

function themeChanger(){
  let selectedTheme=theme.getAttribute("data-theme");
  
  if(selectedTheme=="dark"){
    theme.setAttribute("data-theme","light");
    theme.innerHTML=moon;
    root.style.setProperty("--color-primary-2-color",shadeB);
    root.style.setProperty("--text-color","black");
    root.style.setProperty("--color-primary-1-color",shade1)
    root.style.setProperty("--color-primary-0-color",shade0)
    root.style.setProperty("--color-primary-4-color",shade0)
    root.style.setProperty("--color-primary-3-color",shade1)
    root.style.setProperty("--contrast-color","#2f8d46")
    problemTick.style.content="url(\"images/lighttick.svg\")";
    planTick.style.content="url(\"images/lighttick.svg\")";
    logo.src="images/BillZone_Color_Web.png";
    body.style.color="black"
    
  }else if(selectedTheme=="light"){
    theme.setAttribute("data-theme","dark");
    theme.innerHTML=sun;
    root.style.setProperty("--color-primary-2-color","#062761");
    root.style.setProperty("--text-color","#D5E4FF");
    root.style.setProperty("--color-primary-1-color","#0A4EC1")
    root.style.setProperty("--color-primary-0-color","#01122E")
    root.style.setProperty("--color-primary-4-color","#000000 ")
    root.style.setProperty("--color-primary-3-color","#000103")
    root.style.setProperty("--contrast-color","#FFA400")
    problemTick.style.content="url(\"images/tick.svg\")";
    planTick.style.content="url(\"images/tick.svg\")";
    logo.src="images/BillZone_Reversed_Web.png";
  }
}


leftBtn.addEventListener("click", () => {

featureCarousal.scrollLeft -= 100;
});

//right btn to scroll
rightBtn.addEventListener("click", () => {
featureCarousal.scrollLeft += 100;

});



