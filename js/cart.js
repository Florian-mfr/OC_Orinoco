let $container_cart = document.querySelector('.container_cart')

let productList = JSON.parse(window.localStorage.getItem('florian_maffre_orinoco'))

console.log(productList)

for (let i = 0; i < productList.length; i++) {

    const product = productList[i]

    const $ul = document.createElement('ul')
    $ul.className = 'cart_ul'
    $container_cart.appendChild($ul)

    const $a = document.createElement('a')
    $a.className = 'image'
    $ul.appendChild($a)

    const $img = document.createElement('img')
    $img.className = 'imageUrl'
    $img.src = product.imageUrl
    $a.appendChild($img)

    const $name = document.createElement('p')
    $name.className = 'name'
    $name.textContent = product.name
    $ul.appendChild($name)

    const $quantity = document.createElement('span')
    $quantity.className = 'qantity'
    $quantity.textContent = product.quantity
    $ul.appendChild($quantity)

    const $price = document.createElement('span')
    $price.className = 'price'
    $price.textContent = (product.price / 100) * product.quantity + ' €'
    $ul.appendChild($price)
}