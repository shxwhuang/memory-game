document.addEventListener('DOMContentLoaded', function() {
    // card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'ice-cream',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChoosen = []
    var cardChoosenId = []
    var cardWon = []

    // create your board
    function createBoard() {
        // console.log('creatard')
        for(var i =0 ; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChoosenId[0]
        const optionTwoId = cardChoosenId[1]
        if (cardChoosen[0] === cardChoosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardWon.push(cardChoosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again!')
        }
        cardChoosen = []
        cardChoosenId = []

        resultDisplay.textContent = cardWon.length
        if (cardWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulation'
        }
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardChoosen.push(cardArray[cardId].name)
        cardChoosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChoosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})