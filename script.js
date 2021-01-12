var coll = document.getElementsByClassName("collapsible");
var i;
console.log("hel")
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document.getElementsByClassName("collapsible")[0].click()
document.getElementsByClassName("collapsible")[5].click()