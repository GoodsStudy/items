let list = document.querySelectorAll("#vanclproducts li");
let arr = [];

for (let item of list) {
    let obj = {};
    if (item.querySelector(".teshui")) {
        obj.tehui = item.querySelector(".teshui").innerHTML;
    }
    if (item.querySelector(".Mpricediv0124 .Sprice strong")) {
        obj.price = item.querySelector(".Mpricediv0124 .Sprice strong").innerHTML;
    }
    if (item.querySelector("p .track")) {
        obj.title = item.querySelector("p .track").innerHTML;
    }
    if (item.querySelector(".pic .track img")) {
        obj.img = item.querySelector(".pic .track img").src;
    }
    arr.push(obj);
}



let list = document.querySelectorAll("#vanclproducts li");


for (let item of list) {
    let obj = {};
    if (item.querySelector(".track img")) {
        obj.img = item.querySelector(".track img").src;
    }
    if (item.querySelector(".track")) {
        obj.title = item.querySelector(".track").title;
    }
    //现价
    if (item.querySelector(".pic .teshui")) {
        obj.price = item.querySelector(".pic .teshui").innerHTML;
    } else {
        obj.price = null;
    }

    //原价
    if (item.querySelector(".pic .teshui") || item.querySelector(".Mpricediv0124 .Sprice")) {
        if (item.querySelector(".pic .teshui")) {
            obj.sprice = item.querySelector(".pic .teshui").innerHTML;
        } else {
            obj.sprice = item.querySelector(".Mpricediv0124 .Sprice").innerHTML;
        }
    } else {
        obj.sprice = null;
    }

    if (item.querySelector(".pic")) {
        obj.pop = item.querySelector(".pic").dataset.pop;
    }
    arr.push(obj);
}
console.log(JSON.stringify(arr))




setInterval(function() {
    let arr = ['666', 'neic', '厉害', '强的一批'];
    let num = parseInt(Math.random() * arr.length);
    document.querySelector("#player-full-input-txt").value = arr[num];
    document.querySelector('#player-full-input-btn').click();
}, 2000);