const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('add');
        } else {
            entry.target.classList.remove('add');
        }
    });
});
const hideElements = document.querySelectorAll('.hide');
hideElements.forEach((el) => observers.observe(el));
