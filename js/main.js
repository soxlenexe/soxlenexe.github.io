

function getEl(id){
 let a = document.getElementById(id);
 return a;

}
function getEle(q){
    let a = document.querySelector(q);
    return a;
}


function randomValues() {
    anime({
      targets: getEl('el'),
      translateX: function() {
        return anime.random(0, 270);
      },
      translateY:function() {
        return anime.random(0, 270);
      },
      opacity:function() {
        return anime.random(0.00, 1.00);
      },
      easing: 'easeInOutQuad',
      duration: 750,
      complete: randomValues
    });
  }
  
  randomValues();