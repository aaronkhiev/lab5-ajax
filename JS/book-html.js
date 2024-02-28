function makeRequest(path) {
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('details').innerHTML = xhr.responseText;
        }
    };
    
    xhr.open('GET', path, true);
    
    xhr.send(null);
}

function changeOp () {
    var don = document.getElementById('don-quixote-img');
    var city = document.getElementById('two-cities-img');
    var ring = document.getElementById('lotr-img');

    don.style.opacity = '0.5';
    city.style.opacity = '0.5';
    ring.style.opacity = '0.5';
}

document.getElementById("don-quixote-img").addEventListener("click", function() {
    makeRequest('../data/cervantes-data.html');
    changeOp();
    document.getElementById("don-quixote-img").style.opacity = 1;
});

document.getElementById("two-cities-img").addEventListener("click", function() {
    makeRequest('../data/dickens-data.html');
    changeOp();
    document.getElementById("two-cities-img").style.opacity = 1;
});

document.getElementById("lotr-img").addEventListener("click", function() {
    makeRequest('../data/tolkien-data.html');
    changeOp();
    document.getElementById("lotr-img").style.opacity = 1;
});