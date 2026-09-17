const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(result => {document.querySelector('.myJoke').innerText = result.value;
        });
});