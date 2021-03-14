/************ Récuperation de l'id du produit ************/

function getProductId() {
    return new URL(window.location.href).searchParams.get('id')
}


let productId = getProductId()
/************* *Affichage page produit  ****************/
function main() {

    fetch('http://localhost:3000/api/cameras/' + productId)
        .then(response => {

            response.json().then(products => {


                const $productPage = document.querySelector('.container')

                const $divImg = document.createElement('div')
                $divImg.className = 'container__img'
                $productPage.appendChild($divImg)

                const $img = document.createElement('img')
                $img.className = 'imageUrl'
                $img.src = products.imageUrl
                $divImg.appendChild($img)

                const $divText = document.createElement('div')
                $divText.className = 'container__text';
                $productPage.appendChild($divText)

                const $name = document.createElement('h2')
                $name.className = 'name'
                $name.textContent = products.name
                $divText.appendChild($name)

                const $description = document.createElement('p')
                $description.className = 'description'
                $description.textContent = products.description
                $divText.appendChild($description)

                const $divLenses = document.createElement('p')
                $divLenses.className = 'personnalisation'
                $divText.appendChild($divLenses)

                const $choix = document.createElement('span')
                $choix.className = 'choix'
                $choix.textContent = 'Choix de la lentille :'
                $divLenses.appendChild($choix)

                for (let i = 0; i < products.lenses.length; i++) {

                    let $lenses = products.lenses[i]
                    $lenses = document.createElement('button')
                    $lenses.className = 'lenses'
                    $lenses.textContent = products.lenses[i]
                    $divLenses.appendChild($lenses)
                    let lensesClass = 'lenses'
                    $lenses.addEventListener('click', () => {
                        if ($lenses.className == lensesClass) {
                            $lenses.className = 'lenses, clicked'
                        } else {
                            $lenses.className = 'lenses'
                        }
                    })
                }


                const $price = document.createElement('span')
                $price.className = 'price'
                $price.textContent = products.price / 100 + ' €'
                $divText.appendChild($price)

                const $addCart = document.createElement('button')
                $addCart.className = 'addCart'
                $addCart.textContent = 'Ajouter au panier'
                $divText.appendChild($addCart)

                /********** Ajout du produit au panier ************/

                $addCart.addEventListener('click', () => {

                    let cartStorage = window.localStorage.florian_maffre_orinoco
                    const id = products._id
                    if (!cartStorage) {
                        cartStorage = []
                    } else {
                        cartStorage = JSON.parse(cartStorage)
                    }
                    let verifyId = cartStorage.findIndex(function (Object) {
                        if (Object._id == id) {
                            return true
                        } return false
                    })
                    if (verifyId !== -1) {
                        window.localStorage.florian_maffre_orinoco = JSON.stringify(cartStorage)
                        alert('Le produit est déjà dans votre panier.')
                    } else {
                        cartStorage.push({
                            name: products.name,
                            price: products.price,
                            quantity: 1,
                            imageUrl: products.imageUrl,
                            _id: products._id
                        });
                        window.localStorage.florian_maffre_orinoco = JSON.stringify(cartStorage)
                    }
                    function cartLink(){
                        document.location.href="panier.html"
                      }
                    cartLink()
                })

            })
        }).catch(error => {
            console.log('error: ' + error)
        })
}
main();