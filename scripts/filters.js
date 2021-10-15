//популярное
document.getElementById('radio-1').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('hidden');
    }


});

//молоко
document.getElementById('radio-2').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            arr[i].classList.add('hidden');
        } else {
            arr[i].classList.remove('hidden');
        }

    }
});

//сметана
document.getElementById('radio-3').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i === 2 || i === 3) {
            arr[i].classList.remove('hidden');
        } else {
            arr[i].classList.add('hidden');
        }

    }
});

//творог
document.getElementById('radio-4').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i === 1) {
            arr[i].classList.remove('hidden');
        } else {
            arr[i].classList.add('hidden');
        }

    }
});

//яйца
document.getElementById('radio-5').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i === 10) {
            arr[i].classList.remove('hidden');
        } else {
            arr[i].classList.add('hidden');
        }

    }
});

//мясо
document.getElementById('radio-6').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i > 4 && i <= 9) {
            arr[i].classList.remove('hidden');
        } else {
            arr[i].classList.add('hidden');
            //arr[i].style.display = 'none';
        }

    }
});