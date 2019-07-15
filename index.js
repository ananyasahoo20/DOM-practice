var header = $('h1');
var coding = $('.coding');
var work = $('#work');
var button = $('button');
var gucci = $('img');
// var coding = document.querySelector('.coding');
// console.log(header);
// console.log(coding);
// console.log(work);
coding.text("Keep working hard!");
work.text("We're GUCCI in the FLIP FLOPS.");
button.on ('click', changeColors);
function changeColors() {
  button.toggleClass('pink');
  gucci.toggleClass('hide')
}
