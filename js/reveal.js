let options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal__visible')
            observer.unobserve(entry.target)
        }else {
           console.log('entry.target')
        }

    });
};

let observer = new IntersectionObserver(callback, options);

window.addEventListener('load', () => {
    document.querySelectorAll('.reveal').
    forEach(r => {
        observer.observe(r)
    });
})
