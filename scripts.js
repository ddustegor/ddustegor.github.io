document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            tabs.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.style.display = 'none');

            const target = document.querySelector(tab.getAttribute('href'));
            target.style.display = 'block';
            tab.classList.add('active');
        });
    });
});
