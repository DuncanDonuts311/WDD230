const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const prophets=jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });
    function ordinal(number) {
        let x = number % 10;
        let y = number % 100;
        if(x == 1 && y !== 11) {
            return'${number}st';
        }
        else if (x == 2 && y !== 12) {
            return'${number}nd';
        }
        else if(x == 3 && y !== 13) {
            return'${number}rd';
        }
        return'${number}th';
    }

function displayProphets(prophet) {
    let card = document.createElement('section');

    let h2=document.createElement('h2');
    let prophetNum = ordinal(prophet.order);
    h2.textContent = '${prophet.name} ${prophet.lastname} ${prophetNum}';
    card.appendChild(h2);

    let p1 = document.createElement('p');
    p1.textContent = 'Date of birth: ${prophet.birthdate}';
    card.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = 'Place of birth: ${prophet.birthplace}';
    card.appendChild(p2);

    let image = document.createElement('img');
    image.src = prophet.imageurl;
    image.setAttribute('alt', prophet.order);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
}