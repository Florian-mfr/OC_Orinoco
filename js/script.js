async function main(){

    const response = await fetch("http://localhost:3000/api/cameras")
        .then(resultat => resultat.json())
        .then(json => json)
    
    getName(response)
    console.log(response)
    }

function getName(data){

    const name = data[0].name
    const imgurl = data[0].imageUrl
    const price = data[0].price

    document.querySelector('.name').textContent = name
    document.getElementById("img").srcset = imgurl
    document.querySelector("#price").innerHTML = price/100 + ",00€"
}



main();


