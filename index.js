document.getElementById('toggleButton').addEventListener('click', function() {
    var myDiv = document.getElementById('myDiv');
    if (myDiv.style.display === 'flex') {
        myDiv.style.display = 'none';
    } else {
        myDiv.style.display = 'flex';
    }
});