var words = ['html', 'sol', 'css', 'ts', 'py'];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 700);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter = 0;
    }
}