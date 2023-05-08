const contentElement = document.getElementById('content');
const getTheFetch = document.getElementById('getTheFetch');

getTheFetch.addEventListener('click', () => {
    fetch('http://10.111.3.78:3000/api/users')
        .then(response => response.text())
        .then(data => {
            contentElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
