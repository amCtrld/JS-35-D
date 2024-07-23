const personName = document.getElementById('name');
const submit = document.getElementById('submit');
const greetings = document.getElementById('greetings');

submit.addEventListener('click', function(){
    const now = new Date();
    const hour = now.getHours();

    let greeting = '';

    if(hour >= 5 && hour < 12){
        greeting = 'Good Morning';
    } else if(hour >= 12 && hour < 17){
        greeting = 'Good Afternoon';
    } else{
        greeting = 'Good Evening';
    }

    greetings.innerHTML = greeting + ' ' + personName.value;

});