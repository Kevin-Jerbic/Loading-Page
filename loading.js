// Loading page
window.addEventListener('load', loader);

function loader() {
    const TLLOAD = gsap.timeline();
// Création d'une TimeLine, après ma loading page, je display none cette dernière et je
// display block (par ex) tous mes autres éléments. Car display none en CSS.
    TLLOAD.to('#container-load', {
        opacity: 0,
        duration: 0.5,
        delay: 4
    });
    TLLOAD.add(() => {
        document.querySelector('#container-load').style.display = "none";
        document.getElementById('navbar').style.display = "block";
        document.querySelector('#particles-js').style.position = "relative";
        document.querySelector('#presentation').style.display = "block";
        document.querySelector('#skills').style.display = "block";
        document.querySelector('#portfolio-waves').style.display = "block";
        document.querySelector('#portfolio').style.display = "block";
        document.querySelector('#portfolio-waves2').style.display = "block";
        document.querySelector('#contact').style.display = "block";
        document.querySelector('footer').style.display = "block";
    })
}