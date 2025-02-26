// menu
let menuOpener = document.querySelector('.menu-opener')
//nav
let nav = document.querySelector('header nav');
//ouvinte para o evento click do menuOpener
menuOpener.addEventListener('click', ()=>{
    if(nav.classList.contains('opened')){
        nav.classList.remove('opened')
        menuOpener.querySelector('.close-icon').style .display='none'
        menuOpener.querySelector('.hamburger-icon') .style .display='flex'
    }else{
        nav.classList.add('opened')
        menuOpener.querySelector('.close-icon').style .display='flex'
        menuOpener.querySelector('.hamburger-icon') .style .display='none'
    }
})

// TESTEMONIALS
// Vetor de objetos contendo as frases e os icones
let testemonials = [
    {quote:'"Mais do que nunca, os animais são tratados como membros da família."', origin:'cbs.svg'}, 
    {quote:'"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que humanos reconheceriam."', origin:'forbes.svg'}, 
    {quote:'"DogDev usa ingredientes simples e limpos em seus produtos."', origin:'fox.svg'}, 
    {quote:'"Vejo a DogDev como uma verdadeira heroína do ramo"', origin:'sharktank.svg'}
]

//captura os elementos do html usando queryselector
let testemonialQuote=document.querySelector('.testemonials .quote')
let testemonialIcons=document.querySelector('.testemonials .icons')

//repetição para criar as imagens
for(let tindex in testemonials){
    let img=document.createElement('img')
    img.setAttribute('src', './assets/images/'+testemonials[parseInt(tindex)].origin3)
    img.style.cursor='pointer'
    img.addEventListener('click', ()=>fillTestemonials(parseInt(tindex)))
    testemonialIcons.appendChild(img)
}

// variavel para controlar o testemunho atual
let currentTestemonial=0

//variavel para controlar o tempo de cada testemunho
let testemonialTimer

//funcao para preencher o testemunho
const fillTestemonials = (index) =>{
    clearTimeout(testemonialTimer)
    currentTestemonial=index
    //acessa o item quote dentro dentro do vetor de testemunhos
    testemonialQuote.innerHTML=testemonials[currentTestemonial].quote
    let imgs = testemonialsIcons.querySelectorAll('img')
    for(let img of imgs) img.style.opacity=0.2
    imgs[currentTestemonial].style.opacity=1
    testemonialTimer = setTimeout(nextTestemonial, 3000)
}

//funcao que passa para o proximo testemunho
const nextTestemonial=()=>{
    if(testemonials[currentTestemonial+1]){
        fillTestemonials(currentTestemonial+1)
    }else{
        fillTestemonials(0)
    }
}

//inicia a exibição dos testemunhos
nextTestemonial()