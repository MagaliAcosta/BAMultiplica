const colorSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setModo = (modo) => {
    document.documentElement.setAttribute('data-theme', modo);
    localStorage.setItem('theme', modo);
}

slider.addEventListener('click', ()  => {
    let cambiarModo = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setModo(cambiarModo);
});

setModo(localStorage.getItem('theme') || colorSistema);