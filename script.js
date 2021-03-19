// set the first nav item as active
var dis = $(".list-wrap li").eq(0);
// align the wave
align(dis);
// align the wave on click
$(".list-wrap li").click(function(){
  dis = $(this); 
  align(dis);
});
$('body').on('keydown',function(e){
    var code = e.keyCode || e.which;
    if(code == 9) {
      if(dis.is(':last-child')){
        $(".list-wrap li:nth-child(1)").trigger("click");
      }
      else{
        dis.next().trigger("click");
      }   
    } 
});
$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    $("#showroom").animate({
      left: "-=980"
    });
  }
  else if(e.keyCode == 39) { // right
    $("#showroom").animate({
      left: "+=980"
    });
  }
});

function align(dis){
  
  // get index of item
  var index = dis.index() + 1;
  
  // add active class to the new item
  $(".list-wrap li").removeClass("active");
  dis.delay(100).queue(function() {
    dis.addClass('active').dequeue();
  });
  
  // move the wave
  var left = index * 78 - 98;
  var Wscreen=screen.width;
  var Hscreen=screen.height;

  if(Wscreen<=280){
    left= index * 41.59 - 79.59;
    $("li").height(41.59)
    $(".list-wrap").height(45)
    $(".bold").css("font-size",18)
    $("h1").css("font-size",18)
    $("h2").css("font-size",16)
  }
  if(Wscreen>=320){
    left= index * 48.8 - 84.8;
    $("li").height(48.8)
  }

if(Wscreen>=360){
  left= index * 56 - 88;
  $("li").height(56)
}
if(Wscreen>=375){
  left= index * 58.7 - 88.7;
  $("li").height(58.7)
}
if(Wscreen>=390){
  left= index * 61.41 - 88.7;
  $("li").height(61.41)
}
if(Wscreen>=411){
  left= index * 65.17 - 93.83;
  $("li").height(65.17)
}
if(Wscreen>=428){
  left= index * 68.23 - 93.83;
  $("li").height(68.23)
}

if(Wscreen>=540){
  left= index * 79.2 - 99.2;
  $("li").height(79.2)
}

if(Wscreen>=768){
  left= index * 79.2 - 99.2;
  $("li").height(79.2)
}
if(Wscreen>=769){
  left = index * 80 - 98;
  
}





  
 
  $("#wave").css('left', left);
  
  // ▼ this is not necessary for the navigation ▼

  
  //add and remove class to the centerContent id

  
  if (dis.attr("title") == ("Competences"))  {
    
    document.getElementById("profil1").classList.remove("actif1");
    document.getElementById("profil1").classList.add("none");
    document.getElementById("experiences1").classList.remove("actif1");
    document.getElementById("experiences1").classList.add("none");
    document.getElementById("formations1").classList.remove("actif1");
    document.getElementById("formations1").classList.add("none");
    document.getElementById("interets1").classList.remove("actif1");
    document.getElementById("interets1").classList.add("none");
    document.getElementById("competences1").classList.remove("none");
    document.getElementById("competences1").classList.add("actif1");
    
  }

  if (dis.attr("title") == ("Profil"))  {
    
    
    document.getElementById("competences1").classList.remove("actif1");
    document.getElementById("competences1").classList.add("none");
    document.getElementById("experiences1").classList.remove("actif1");
    document.getElementById("experiences1").classList.add("none");
    document.getElementById("formations1").classList.remove("actif1");
    document.getElementById("formations1").classList.add("none");
    document.getElementById("interets1").classList.remove("actif1");
    document.getElementById("interets1").classList.add("none");
    document.getElementById("profil1").classList.remove("none");
    document.getElementById("profil1").classList.add("actif1");
  }

  if (dis.attr("title") == ("Experiences"))  {
    
    
    document.getElementById("competences1").classList.remove("actif1");
    document.getElementById("competences1").classList.add("none");
    document.getElementById("profil1").classList.remove("actif1");
    document.getElementById("profil1").classList.add("none");
    document.getElementById("formations1").classList.remove("actif1");
    document.getElementById("formations1").classList.add("none");
    document.getElementById("interets1").classList.remove("actif1");
    document.getElementById("interets1").classList.add("none");
    document.getElementById("experiences1").classList.remove("none");
    document.getElementById("experiences1").classList.add("actif1");
  }

  if (dis.attr("title") == ("Formations"))  {
    
    
    document.getElementById("competences1").classList.remove("actif1");
    document.getElementById("competences1").classList.add("none");
    document.getElementById("profil1").classList.remove("actif1");
    document.getElementById("profil1").classList.add("none");
    document.getElementById("experiences1").classList.remove("actif1");
    document.getElementById("experiences1").classList.add("none");
    document.getElementById("interets1").classList.remove("actif1");
    document.getElementById("interets1").classList.add("none");
    document.getElementById("formations1").classList.remove("none");
    document.getElementById("formations1").classList.add("actif1");
  }
 
  if (dis.attr("title") == ("Interets"))  {
    
    
    document.getElementById("competences1").classList.remove("actif1");
    document.getElementById("competences1").classList.add("none");
    document.getElementById("profil1").classList.remove("actif1");
    document.getElementById("profil1").classList.add("none");
    document.getElementById("experiences1").classList.remove("actif1");
    document.getElementById("experiences1").classList.add("none");
    document.getElementById("formations1").classList.remove("actif1");
    document.getElementById("formations1").classList.add("none");
    document.getElementById("interets1").classList.remove("none");
    document.getElementById("interets1").classList.add("actif1");
  }
  
  
    
  // set the background color
  var color = dis.data('color');
  
  $("body").css('background', color);
  
  
  
  // set the text
  $(".page").text(dis.attr("title"));
}