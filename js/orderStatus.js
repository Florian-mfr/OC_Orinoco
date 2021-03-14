/********** Affiche de l'ID de la commande ************/

function commandId() {
    const orderId = new URL(location.href).searchParams.get('orderId')
    document.getElementById('commandId').textContent = orderId
}
commandId()