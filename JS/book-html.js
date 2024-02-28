function makeRequest() {
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        }
    };
    
    xhr.open('GET', 'data/data.html', true);
    
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
    don.style.opacity = '0.5';
});