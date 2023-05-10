const usuarios = [
    {
        usuario: 'carlos@carlos.com',
        senha:'carlos123456'
    },
    {
        usuario: 'leticia@leticia.com',
        senha:'leticia654321'
    },
    {
        usuario: 'bruno@bruno.com',
        senha:'bruno987654'
    },
]
const fotografia = [
    {
        nome: 'Foto1',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto2',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto3',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto4',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto5',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto6',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto7',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto8',
        like: 0,
        deslike: 0,
    },
    {
        nome: 'Foto9',
        like: 0,
        deslike: 0,
    },
    
]

const curtir = document.querySelector("#svg-curtir");
const retorno = document.querySelector("#like");
const deslike = document.querySelector("#svg-deslike");
const retorno2 = document.querySelector("#deslike");

curtir.addEventListener("click", () => {
  retorno.textContent = `1`;
});

deslike.addEventListener("click", () => {
  retorno2.textContent = `1`;
});