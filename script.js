
  
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
              
                navLinks.forEach(link => link.classList.remove('active'));
                
                this.classList.add('active');
            });
        });
let scrol=document.querySelector(".gallery")
let bt1=document.querySelector("#a1")
let bt2=document.querySelector("#a2")
scrol.addEventListener("wheel",(e)=>{
  e.preventDefault();
  scrol.scrollLeft+=e.deltaY;
})
  bt1.addEventListener("click",()=>{
    scrol.style.scrollBehavior="smooth"
    scrol.scrollLeft-=300;
  })
  bt2.addEventListener("click",()=>{
       scrol.style.scrollBehavior="smooth"
    scrol.scrollLeft+=300;
  })








let reviews = [
  { text: "Best haircut I've ever had! The barber really understood my style and gave me a fresh, clean look.", author: "  John D" },
  { text: " Friendly staff, clean space, and top-notch service. I won't go anywhere else! ", author: "Carle" },
  { text: "  Always a great experience here. On time, professional, and skilled with the clippers! ", author: "Peter" },
  { text: "Walked in looking rough, walked out feeling sharp and confident. These guys are pros! ", author: "Cornor" },
];

let reviewtexts = document.querySelectorAll(".review-text");
let authornames = document.querySelectorAll(".author");
let bt4s = document.querySelectorAll("#bt4");
let bt5s = document.querySelectorAll("#bt5");
let dotscons = document.querySelectorAll("#dotscon");

let currentidex = 0;

let displayreview = (idx) => {
  reviewtexts.forEach((el) => {
    el.textContent = `${reviews[idx].text}`;
  });
  authornames.forEach((el) => {
    el.textContent = `${reviews[idx].author}`;
  });
  updatedots(idx);
};

let updatedots = (activeidx) => {
  dotscons.forEach(dotscon => {
    dotscon.innerHTML = "";
    for (let i = 0; i < reviews.length; i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === activeidx) {
        dot.classList.add("active");
      }
      dot.onclick = () => {
        currentidex = i;
        displayreview(currentidex);
      };
      dotscon.append(dot);
    }
  });
};

let prev = () => {
  currentidex = (currentidex - 1 + reviews.length) % reviews.length;
  displayreview(currentidex);
};

let after = () => {
  currentidex = (currentidex + 1) % reviews.length;
  displayreview(currentidex);
};


bt4s.forEach(btn => btn.addEventListener("click", prev));
bt5s.forEach(btn => btn.addEventListener("click", after));


displayreview(currentidex);



  // if ('scrollRestoration' in history) {
  //   history.scrollRestoration = 'manual';
  // }


window.addEventListener("load",()=>{




  let loader=document.querySelector("#loadei")
  let main=document.querySelector(".semi-loader")
  let th1=document.querySelector("#th-1")
  let afnav=document.querySelector("#af-nav")
  let nav1=document.querySelector("#nav-1")

  setTimeout(()=>{
       loader.classList.add("hidden")
         loader.style.display="none"
        main.classList.add("show")
       setTimeout(()=>{
        loader.style.display="none"
        document.body.classList.remove("lock-scroll")
       
 setTimeout(()=>{
          afnav.classList.add("fadeup")

        },200)
        setTimeout(()=>{
          nav1.classList.add("fadedown")
        },400)
        setTimeout(()=>{
th1.classList.add("fadeup")
        },600)
      

       },800)
  },2000)
})


function revealOnScrollOnce() {
  const fadeEls = document.querySelectorAll('.fade-from-down:not(.visible)');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
   
    if (rect.top < window.innerHeight - 20) {
      el.classList.add('visible');
   
    }
  });
}

// Run on scroll and on load
window.addEventListener('scroll', revealOnScrollOnce);
window.addEventListener('DOMContentLoaded', revealOnScrollOnce);

  
 const hamburger = document.getElementById("hamburger");
const mediaNav = document.getElementById("media-nav");

hamburger.addEventListener("click", () => {
  mediaNav.classList.toggle("active");
});




























document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownLink = dropdown.querySelector('.nav-link');
    
 
    dropdownLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      
      dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          const otherMenu = otherDropdown.querySelector('.dropdown-menu');
          otherMenu.style.opacity = '0';
          otherMenu.style.visibility = 'hidden';
          otherMenu.style.display = 'none';
        }
      });
      
   
      const isVisible = dropdownMenu.style.opacity === '1' || dropdownMenu.style.display === 'block';
      
      if (isVisible) {
  
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.display = 'none';
      } else {
 
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.display = 'block';
      }
    });
    
   
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.display = 'none';
      }
    });
  });
});



 
 
    

document.querySelector("#submit-top").addEventListener("click",(e)=>{
  e.preventDefault();
   let nameofsubmiter=document.querySelector("#name-submit-top").value.trim();
  let emailofsubmiter=document.querySelector("#email-submit-top").value.trim();
  let phoneofsubmiter=document.querySelector("#num-submit-top").value.trim();
  let dateofsubmiter=document.querySelector("#date-submit-top").value.trim();

  let okcon=document.querySelector(".ok-msg");
  let megcon=document.querySelector(".submit-meg");


  
  megcon.innerHTML="";

  if(nameofsubmiter===""||phoneofsubmiter===""||dateofsubmiter===""){
    megcon.classList.add("active")
   megcon.classList.add("animate__animated" ,"animate__fadeIn"  ,"animate__slower")
    megcon.innerHTML=`  <p class="ok-msg  " style="background-color: red;">your  form is Not going to submit because , Incompelete filling of form</p>
      <button>
        <i class="fa-solid fa-xmark"></i>
      </button>

`
setTimeout(()=>{
   megcon.classList.remove("active")
},7000)



    
  }
  else{
   
      megcon.classList.add("active")
       megcon.classList.add("animate__animated" ,"animate__fadeIn"  ,"animate__slower")
    megcon.innerHTML=`  <p class="ok-msg  ">ok ,form has Received .as Your name is ${nameofsubmiter} and you phone number is ${phoneofsubmiter} and the date you selected is ${dateofsubmiter}  We send you an SMS soon </p>
      <button>
        <i class="fa-solid fa-xmark"></i>
      </button>
      
    
    `
    setTimeout(()=>{
   megcon.classList.remove("active")
},7000)

  }
   let submitcross=megcon.querySelector("button")
   submitcross.addEventListener("click",()=>{
      megcon.classList.remove("active")
      megcon.innerHTML="";
    document.querySelector("#name-submit-top").value="";
  document.querySelector("#email-submit-top").value="";
  document.querySelector("#num-submit-top").value="";
  document.querySelector("#date-submit-top").value="";
   



  })


})
    















window.addEventListener("scroll", () => {
  const map = document.getElementById("map");
  const rect = map.getBoundingClientRect();

  if (rect.top < window.innerHeight && !map.dataset.loaded) {
    map.innerHTML = `<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13508.039490135805!2d74.18553665541992!3d32.1770085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f298c417ced37%3A0xaf8f0535682478f9!2sGolden%20Grace%20hair%20%26%20beauty%20Saloon!5e0!3m2!1sen!2s!4v1747874746471!5m2!1sen!2s"
      width="100%" height="450" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    map.dataset.loaded = "true";
  }
});







