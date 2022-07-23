
// Navabr backgorund when screen is scrolled
let abc = document.querySelector(".navbar");
console.log(abc);
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        abc.classList.add("header-scrolled");
    }else{
        abc.classList.remove("header-scrolled");
    }    
}


// to close the navabr stream

let temp = document.querySelectorAll(".nav-link");;
let navCollapse =document.querySelector(".navbar-collapse.collapse");
temp.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

var counter = 0;
function readmore_function(part){
    // console.log(part + counter++ );
    var moretext = document.getElementById(part + "-more");
    var btn = document.getElementById(part + "-btn");

    if(moretext.style.display == "none"){
        btn.innerHTML = "Read less";
        moretext.style.display = "inline";
    }else{
        btn.innerHTML = "Read more";
        moretext.style.display = "none";
    }
}
const form = document.querySelector('form');
const submit_btn = document.getElementById("submit-btn");
const thankyou_msg = document.getElementById("thankyou-msg");
const name = document.getElementById("form-name");
const phone = document.getElementById("form-phone");
const email = document.getElementById("form-email");
const message = document.getElementById("message_contact_wrapper");

// submit_btn.addEventListener("click", (e) =>{
//     console.log(name.value);
//     console.log(phone.value);
//     e.preventDefault();
//     thankyou_msg.classList.add('show');
//     // name.value = "";
//     // phone.value = "";
//     // email.value = "";
//     // message.value = "";
// });
form.addEventListener('submit', (e) =>{
    console.log(name.value);
    console.log(phone.value);
    thankyou_msg.classList.add('show');
});

// $(function() {
//     $( "#submit-button" ).click(function() {
//       $( "#submit-button" ).addClass( "clic", 250, validate);
//     });
//     function validate() {
//       setTimeout(function() {
//         $( "#submit-button" ).removeClass( "clic" );
//         $( "#submit-button" ).addClass( "validate", 450, callback );
//       }, 2250 );
//     }
//       function callback() {
//         setTimeout(function() {
//           $( "#submit-button" ).removeClass( "validate" );
//         }, 1250 );
//       }
//     });
// const submit_btn = document.getElementById('contact-submit');
// submit_btn.addEventListener('click', postInfo);

// async function postInfo(e){
//     e.preventDefault();
//     const res = await fetch('http://localhost:5500/client/index.html',{
//         method: 'POST',
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify({
            
//         })
//     })
// }

function submit_action(){
    setTimeout(colorChangeer,1000);
    setTimeout(colorChangeertoGreen,2000);
    setTimeout(reset, 3000);
};
function colorChangeer(){
    console.log("From temp");
    const btn = document.getElementById('Submit');
    btn.style.backgroundColor = "purple";
    btn.innerText = 'Sending...';
};
function colorChangeertoGreen(){
    console.log("From temp");
    const btn = document.getElementById('Submit');
    btn.style.backgroundColor = "Green";
    btn.innerText = 'Sent';
};
function reset(){
    const form = document.getElementById('Contactform');
    form.reset();
    const btn = document.getElementById('Submit');
    btn.style.backgroundColor = "transparent";
    btn.innerText = 'Submit';
};

// let c = 1;
// let temp1 = document.querySelector(".navbar-toggler");;
// const div = document.querySelector('#navbarNav');
// temp1.addEventListener("click", function(){
//     console.log(c++);
//     if(div.classList.contains('show')){
//         console.log('true');
//         div.classList.remove('show');
//         console.log(div.classList.contains('show'));
//     }
//     else{
//         console.log('true');
//         div.classList.add('show');
//     }
// } )