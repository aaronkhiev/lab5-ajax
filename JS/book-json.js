function makeRequest(index) {
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            responseObject = JSON.parse(xhr.responseText);
            
            var newContent = '';
            
            for (var i = 0; i < responseObject.content.length; i++) {
                if (index == 0) {
                    newContent += '<h3>' + responseObject.content[0].title + '<h3>';
                    newContent += '<p>' + responseObject.content[0].author + '<p>'
                    newContent += '<p>' + responseObject.content[0].sold + '<p>'
                    newContent += '<p>' + responseObject.content[0].description + '<p>';
                }
                if (index == 1) {
                    newContent += '<h3>' + responseObject.content[1].title + '<h3>';
                    newContent += '<p>' + responseObject.content[1].author + '<p>'
                    newContent += '<p>' + responseObject.content[1].sold + '<p>'
                    newContent += '<p>' + responseObject.content[1].description + '<p>';
                }
                if (index == 2) {
                    newContent += '<h3>' + responseObject.content[2].title + '<h3>';
                    newContent += '<p>' + responseObject.content[2].author + '<p>'
                    newContent += '<p>' + responseObject.content[2].sold + '<p>'
                    newContent += '<p>' + responseObject.content[2].description + '<p>';
                }
            }
            
            document.getElementById('content').innerHTML = newContent;
        }
    };
    
    xhr.open('GET', '../data/book-data.json', true);
    
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
    makeRequest(0);
    changeOp();
    document.getElementById("don-quixote-img").style.opacity = 1;
    deselect
});

document.getElementById("two-cities-img").addEventListener("click", function() {
    makeRequest(1);
    changeOp();
    document.getElementById("two-cities-img").style.opacity = 1;
});

document.getElementById("lotr-img").addEventListener("click", function() {
    makeRequest(2);
    changeOp();
    document.getElementById("lotr-img").style.opacity = 1;
});