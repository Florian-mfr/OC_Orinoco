let $container_cart = document.querySelector('.container_cart')

let productList = JSON.parse(window.localStorage.getItem('florian_maffre_orinoco'))

console.log(productList)

let totalPrice = 0

for (let i = 0; i < productList.length; i++) {

    const product = productList[i]
    const product_id = product._id
    let cartStorage = window.localStorage.florian_maffre_orinoco

    const $div = document.createElement('div')
    $div.className = 'cart_div'
    $container_cart.appendChild($div)

    const $a = document.createElement('a')
    $a.className = 'image div_item'
    $a.href = 'product.html?id=' + product_id
    $div.appendChild($a)

    const $img = document.createElement('img')
    $img.className = 'imageUrl'
    $img.src = product.imageUrl
    $a.appendChild($img)

    const $name = document.createElement('p')
    $name.className = 'name div_item'
    $name.textContent = product.name
    $div.appendChild($name)

    const $divInput = document.createElement("div")
    $divInput.className = 'divInput div_item'
    $div.appendChild($divInput)


    const $quantity = document.createElement('input')
    $quantity.type = 'number'
    $quantity.className = 'quantity'
    $quantity.value = product.quantity
    $quantity.max = '10'
    $divInput.appendChild($quantity)

    $quantity.addEventListener('change', e => {
        console.log(e.target.value)
        const index = productList.findIndex(function (product_) {
            return product_._id == product_id
        })
        productList[index].quantity = e.target.value
        $price.textContent = (productList[index].price / 100) * productList[index].quantity + ' €'
        localStorage.florian_maffre_orinoco = JSON.stringify(productList)
        window.location.reload()
    })

    const $divPrice = document.createElement("div")
    $divPrice.className = 'divPrice div_item'
    $div.appendChild($divPrice)

    const price = (product.price / 100) * product.quantity
    totalPrice += price
    const $price = document.createElement('span')
    $price.className = 'price'
    $price.textContent = price + ' €'
    $divPrice.appendChild($price)



    const $deleteButton = document.createElement('button')
    $deleteButton.className = 'deleteButton fa fa-trash'
    $divPrice.appendChild($deleteButton)

    $deleteButton.addEventListener('click', () => {
        productList.splice(i, 1)
        localStorage.florian_maffre_orinoco = JSON.stringify(productList)
        window.location.reload()
    })
}


function totalPrices(totalPrice) {
    const $div = document.createElement('div')
    $div.className = 'cart_divTotal'
    $container_cart.appendChild($div)

    const $totalPrice = document.createElement('span')
    $totalPrice.className = 'totalPrice'
    $totalPrice.textContent = 'Total : ' + totalPrice + ' €'
    $div.appendChild($totalPrice)
}
totalPrices(totalPrice)


/*********** Form validity *************/


function validValue(input, regex) {
    if (input.value) {
        let testValue = regex.test(input.value)
        if (testValue) {
            input.style.border = '2px solid green'
        } else {
            input.style.border = '2px solid red'
        }
    } else {
        input.style.border = '1px solid black'
    }
}

let firstName = document.querySelector('#firstName')
const nameRegex = /^[a-zA-Z '-]+$/
firstName.addEventListener('change', function() {
    validValue(this, nameRegex)
})

let lastName = document.querySelector('#lastName')
lastName.addEventListener('change', function () {
    validValue(this, nameRegex)
})

let adress = document.querySelector('#adress')
const adressRegex = /^[0-9]{1,10}[a-zA-Z '-]+$/
adress.addEventListener('change', function () {
    validValue(this, adressRegex)
})

let city = document.querySelector('#city')
city.addEventListener('change', function () {
    validValue(this, nameRegex)
})

let zipcode = document.querySelector('#zipcode')
const zipcodeRegex = /^[0-9]{5}$/
zipcode.addEventListener('change', function () {
    validValue(this, zipcodeRegex)
})

let email = document.querySelector('#email')
const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/
email.addEventListener('change', function () {
    validValue(this, emailRegex)
})