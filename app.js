let cardArray = [
    {
        name : 'doraemon',
        img : 'image/doraemon.jpeg',
    },
    {
        name : 'nobita',
        img : 'image/nobita.jpeg',
    },
    {
        name : 'sizuka',
        img : 'image/sizuka.jpg',
    },
    {
        name : 'gian',
        img : 'image/gian.jpg',
    },
    {
        name : 'sunio',
        img : 'image/sunio.jpg',
    },
    {
        name : 'dorami',
        img : 'image/dorami.jpg',
    },
    {
        name : 'dekisugi',
        img : 'image/dekisugi.jpg',
    },
    {
        name : 'mom',
        img : 'image/mom.jpg',
    },
    {
        name : 'doraemon',
        img : 'image/doraemon.jpeg',
    },
    {
        name : 'nobita',
        img : 'image/nobita.jpeg',
    },
    {
        name : 'sizuka',
        img : 'image/sizuka.jpg',
    },
    {
        name : 'gian',
        img : 'image/gian.jpg',
    },
    {
        name : 'sunio',
        img : 'image/sunio.jpg',
    },
    {
        name : 'dorami',
        img : 'image/dorami.jpg',
    },
    {
        name : 'dekisugi',
        img : 'image/dekisugi.jpg',
    },
    {
        name : 'mom',
        img : 'image/mom.jpg',
    },
]

cardArray.sort(()=>0.5 - Math.random())

let cardsChosen=[]
let cardsChosenId=[]
let cardsWon=[]

const grid=document.querySelector('.grid')
const resultDisplay=document.querySelector('#result')
const h3=document.querySelector('h3')
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img');
        card.setAttribute('src','image/js.png');
        card.style.width="80px"
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
    const cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];

    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','image/js.png')
        cards[optionTwoId].setAttribute('src','image/js.png')
        
    }
    else if(cardsChosen[0]===cardsChosen[1]){
        cards[optionOneId].setAttribute('src','image/white.png')
        cards[optionTwoId].setAttribute('src','image/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','image/js.png')
        cards[optionTwoId].setAttribute('src','image/js.png')
       
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length===cardArray.length/2){
        h3.innerText="Congratulations! You found them all"
    }

}

function flipCard(){
    
    let cardId=this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,500)
    }

}

createBoard();
function restart(){
    location.reload();
}

