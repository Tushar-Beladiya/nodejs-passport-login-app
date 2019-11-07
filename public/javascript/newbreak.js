var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 0;

  function myClock() {
    document.getElementById("demo").innerHTML = c++;
  }
}    

    if (performance.navigation.type == 1) {
        document.getElementById('demo').textContent = c++;
    } else {
       
    }