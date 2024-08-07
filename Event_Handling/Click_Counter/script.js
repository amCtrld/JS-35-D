const likesCount = document.getElementById('likesCount');
const like = document.getElementById('like');
const dislike = document.getElementById('dislike');

let count = 0 ;

like.addEventListener('click', () => {
    count++;
    likesCount.innerHTML = `${count} likes`;
});

dislike.addEventListener('click', () => {
    if(count >= 1) {
        count--;
        likesCount.innerHTML = `${count} likes`;
    }
})