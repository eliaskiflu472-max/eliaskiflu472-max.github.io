const form = document.getElementById('myForm');
const loader = document.getElementById('loaderOverlay');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    loader.classList.add('active');
    setTimeout(() => {
        loader.classList.remove('active');
        form.action = 'submithere.html';
        form.method = 'post';
        form.submit();
    }, 2000);
});