  $(".toggle").click(function(){
  $("ul").show();
  
});

$(".list-mb .fa-x").click(() => {
        $("ul").hide(); 
    });

   let gallery = document.getElementById("gallery")

        function scrollleft() {
            gallery.scrollLeft -= 400

        }

        function scrollright() {
            gallery.scrollLeft += 400
        }


 let backdrop = document.getElementById("backdrop");

        function showpopup() {
            let backdrop = document.getElementById("backdrop");
            backdrop.style.display = "block";
        }


        function hidepopup() {
            backdrop.style.display = "none";
        }

  let display2 = document.getElementById("backdrop-2")

        function showpopup2(event) {
            display2.classList.add("display-2")
            // event.preventDefault();
        }

        function hidepopup2() {
            display2.classList.remove("display-2")
        }

$(document).ready(()=>{
    $(window).scroll(()=>{
        $('header').addClass('scrolled')
    })
   })
