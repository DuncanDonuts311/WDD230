const requestURL = "https://duncandonuts311.github.io/wdd230/chamber/data/data.json";
const cardsView = document.querySelector('button#cardsBtn');
const tableView = document.querySelector('button#listsBtn');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];

    // display default view
    displayCards(businesses);

    // display tableView
    tableView.addEventListener("click", function () {
      toggleList();
      displayList(businesses);
    });
    // display cardsView
    cardsView.addEventListener("click", function () {
      toggleCard();
      displayCards(businesses);
    });
  });

  function displayCards(businesses) {
    for (let i = 0; i < businesses.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let webURL = document.createElement('a');
      let image = document.createElement('img');
      image.setAttribute('src', businesses[i].logo);
      image.setAttribute('alt', `Logo of ${businesses[i].name}`);
      h2.textContent = `${businesses[i].name}`;
      p1.textContent = `${businesses[i].address}`;
      p2.textContent = `(881) ${businesses[i].phone}`;
      webURL.textContent = businesses[i].website;
      webURL.href = businesses[i].website;
      webURL.target = "_blank";
      p3.appendChild(webURL);
      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      document.querySelector('div.cards').appendChild(card);
    }
  };


function displayList(businesses) {
  for (let i = 0; i < businesses.length; i++ ) {
    let container = document.createElement('table');
    let business = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let weblist = document.createElement('td');
    let webURL = document.createElement('a');
    name.innerHTML = `${businesses[i].name}`;
    address.innerHTML = `${businesses[i].address}`;
    phone.innerHTML = `(881) ${businesses[i].phone}`;
    webURL.innerHTML = `${businesses[i].website}`;
    webURL.href = businesses[i].website;
    webURL.target = "_blank";
    weblist.innerHTML = webURL;
    business.appendChild(name);
    business.appendChild(address);
    business.appendChild(phone);
    business.appendChild(weblist);
    container.appendChild(business);
    document.querySelector('div.lists').appendChild(container);
  }
};

function toggleList() {
  document.getElementById("listToggle").style.display = "block";
  document.getElementById("cardToggle").style.display = "none";
}

function toggleCard() {
  document.getElementById("cardToggle").style.display = "flex";
  document.getElementById("listToggle").style.display = "none";
}