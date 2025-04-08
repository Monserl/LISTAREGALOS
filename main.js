
const gifts = ["Muñeca", "Carro de juguete","Dragón de peluche","Rompecabezas", "Lego", "Conejo de Peluche","Pelota","Patito de hule",
    "Superheroe","Robot", "Yoyo", "Anillos de madera", "Tren de juguete","Boxeadores de plastico","Oso de peluche","Perro de peluche"]
const searchBtn = document.getElementById('search-btn');
const giftInput = document.getElementById('gift-input');
const resultBox = document.getElementById('result');
const giftItems = document.querySelectorAll('#gift-list li');

// búsqueda
function findGift(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return {
            found: false,
            message: `${giftName} no está en la lista.`
        };
    }
    
    if (gifts[index] === giftName) {
        return {
            found: true,
            position: index,
            message: `${giftName} está en la posición ${index}.`
        };
    }
    
    return findGift(gifts, giftName, index + 1);
}

// manejar búsqueda
searchBtn.addEventListener('click', () => {
    const giftToFind = giftInput.value.trim();
    
    if (!giftToFind) {
        resultBox.textContent = "Por favor escribe un regalo para buscar";
        resultBox.className = "result-box error";
        return;
    }

    // resetear estilos
    giftItems.forEach(item => item.classList.remove('highlight'));
    resultBox.className = "result-box";
    
    // ejecutar búsqueda
    const result = findGift(gifts, giftToFind);
    resultBox.textContent = result.message;
    
    // resultado si se encontró
    if (result.found) {
        giftItems[result.position].classList.add('highlight');
        resultBox.classList.add('success');
    } else {
        resultBox.classList.add('error');
    }
});
