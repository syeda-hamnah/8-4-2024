function submitform() {
    JavaScript:void(0);
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    console.log(name, age, city, country)
    if (name === '' || age === '' || city === '' || country === '') {
        alert('All feilds are required!')
    }
}

function fillcountry () {
    var countryName;
    var cityEntered = document.getElementById("city").value;
    switch (cityEntered) {
        case "karachi" :
            countryName = "Pakistan";
            break;
        case "london" :
            countryName = "England";
            break;
        case "paris" :
            countryName = "France";
            break;
        case 'istanbul' :
            countryName = 'Turkey';
            break;
        case 'capadocia' :
            countryName = 'Turkey';
            break;
        default:
            'Unknown'
        }
                   
document.getElementById("country").value = countryName;
}

function expandparagraph () {
    document.getElementById('text').innerText = 'Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.';
    document.getElementById('text').innerHTML += '<ol><li>Slow Loris </li><li>Fast Loris </li><li>Just-right Loris </li></ol> '
}
function expandText() {
    document.getElementById('moreText').className = 'show';
    document.querySelector('a').style.display = 'none'; // Hide the "Click for more" link
}

function hideContent() {
    document.getElementById('text').className = 'hide';
    document.getElementById('button').innerText = 'Display Content';

}

function showContent() {
    document.getElementById('text').className = 'show';
    document.getElementById('button').innerText = 'Hide Content';
}

function toggleContent() {
    const textElement = document.getElementById('text');
    const buttonElement = document.getElementById('button');

    if (textElement.className === 'hide') {
        showContent();
    } else {
        hideContent();
    }
}
function swapPic(before, newPic) {
    document.getElementById(before).src = newPic;
}