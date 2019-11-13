let navtabside = document.querySelector("nav.navtab");
let navtabItemside = document.querySelectorAll("li.navtab-item");
var pinitial=document.querySelector("p");
pinitial.textContent="Foresee the unfathomable and explore the mysteries of the universe. Only the sharp, intelligent and astronomy enthusiasts will make it to the end. The route to solve the mysteries of the universe lies within the depths of the dark sky and your imagination. It’s time to bring out the Galileo Galilei in you and look into the infinite cosmic depths.";
    
navtabItemside.forEach((navtabItem, activeIndex) => navtabItem.addEventListener("click", () => {
    navtabItemside.forEach(navtabItem => navtabItem.classList.remove("active"));
    navtabItem.classList.add("active");
    navtabside.style.setProperty("--active-index", `${activeIndex}`);
    var c=document.querySelector(".active");
    
    var a=c.innerHTML;
    var p=document.querySelector("p");
    
    if(a=="Synopsis"){
        
        p.textContent="Foresee the unfathomable and explore the mysteries of the universe. Only the sharp, intelligent and astronomy enthusiasts will make it to the end. The route to solve the mysteries of the universe lies within the depths of the dark sky and your imagination. It’s time to bring out the Galileo Galilei in you and look into the infinite cosmic depths.";
        p.style.fontSize="1.0em";
        var ul=document.querySelector("#mylist");
        ul.innerHTML=null;
    }
    if(a=="Description"){
        
        p.textContent="Astro hunt is a fun event in which teams will be participating and they would be required to follow a series of clues and look for the answers. The answers would be places or objects available in the campus. The answers to the clues would be related to astronomy. Teams will have to solve a series of clues in a limited time period. The top 3 teams to solve the clues are declared as the Winners.";
        p.style.fontSize="1.0em";
        var ul=document.querySelector("#mylist");
        ul.innerHTML=null;
    }
    if(a=="Rules"){
        
        p.textContent="General Rules :";
        p.style.fontSize="1.5em";
        var ul=document.querySelector("#mylist");
        ul.innerHTML="<li>Use of internet for solving the clues is allowed.</li><li>Maximum Team Size: 3 members per team.</li><li>Teams must keep all the hints with them, they will be checked at final checkpoint.</li><li>To claim prize you need to be registered here.</li>";   
     }
    if(a=="Query"){
        p.style.fontSize="1.3em";
        p.textContent="Sarthak: +91-8076167860";
        var p1=document.createElement("p");
        p1.textContent="Raghav Nanda: +91-9079320501";
        p.appendChild(p1);
        var p2=document.createElement("p");  
        p2.textContent="For any query, contact us at astronomy@plinth.in";
        p.appendChild(p2);
        var ul=document.querySelector("#mylist");
        ul.innerHTML=null;
    }
}));
