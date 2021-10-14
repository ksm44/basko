//популярное
document.getElementById('radio-1').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = '';
    }


});

//молоко
document.getElementById('radio-2').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            arr[i].style.display = 'none';
        } else {
            arr[i].style.display = '';
        }

    }
});

//сметана
document.getElementById('radio-3').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i === 2 || i === 3) {
            arr[i].style.display = '';
        } else {
            arr[i].style.display = 'none';
        }

    }
});

//творог
document.getElementById('radio-4').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i === 1) {
            arr[i].style.display = '';
        } else {
            arr[i].style.display = 'none';
        }

    }
});

//яйца
document.getElementById('radio-5').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i === 10) {
            arr[i].style.display = '';
        } else {
            arr[i].style.display = 'none';
        }

    }
});

//мясо
document.getElementById('radio-6').addEventListener("click", function() {
    let arr = document.getElementsByClassName('product');
    for (let i = 0; i < arr.length; i++) {
        if (i > 4 && i <= 9) {
            arr[i].style.display = '';
        } else {
            arr[i].style.display = 'none';
        }

    }
});