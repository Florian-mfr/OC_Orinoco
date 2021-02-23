function main(){
    fetch("http://localhost:3000/api/cameras")
    .then(response => {
        response.json().then(products => {

            const $productList = document.querySelector('.container')

            for(let i = 0; i < products.length; i++) {

                const product = products[i]

                const $a = document.createElement('a')
                $a.href = 'product.html'
                $productList.appendChild($a)

                const $div = document.createElement('div')
                $div.className = 'container__bloc';
                $a.appendChild($div)

                const $name = document.createElement('p')
                $name.className = 'name'
                $name.textContent = product.name
                $div.appendChild($name)

                const $img = document.createElement('img')
                $img.className = 'imageUrl'
                $img.src = product.imageUrl
                $div.appendChild($img)

                const $price = document.createElement('p')
                $price.className = 'price'
                $price.textContent = product.price/100 + ' €'
                $div.appendChild($price)

            }
            
            console.log(products)
        })
    })
    .catch(error => {
        console.log('error: ' + error)
    })
    }

main();


