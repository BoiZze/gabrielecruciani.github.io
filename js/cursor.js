var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

var videos = document.querySelectorAll('iframe');

document.addEventListener('mousemove', function(e){
var x = e.clientX;
var y = e.clientY;
cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});
document.addEventListener('mousedown', function(){
cursor.classList.add('click');
});
document.addEventListener('mouseup', function(){
cursor.classList.remove('click')
});
a.forEach(item => {
item.addEventListener('mouseover', () => {
cursor.classList.add('hover');
});
item.addEventListener('mouseleave', () => {
cursor.classList.remove('hover');
});
})


videos.forEach(video => {
    video.addEventListener('mouseover', () => {
      cursor.style.display = 'none'; // Nascondi il cursore personalizzato sopra il video
    });
    video.addEventListener('mouseleave', () => {
      cursor.style.display = 'block'; // Riporta il cursore personalizzato quando il cursore esce dal video
    });
  
    // Aggiungi un gestore per fare clic sui video incorporati
    video.addEventListener('click', () => {
      // Simula il clic sul video
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
