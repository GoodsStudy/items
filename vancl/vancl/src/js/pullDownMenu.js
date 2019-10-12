(() => {

    let list = document.querySelectorAll(".list");
    let ul = document.querySelectorAll(".down_title ul");

    for (let i = 0; i < list.length; i++) {
        list[i].index = i;
        list[i].onmouseover = function() {
            startMove(ul[this.index], { "height": ul[this.index].children[0].offsetHeight * ul[this.index].children.length })
        }

        list[i].onmouseout = function() {
            startMove(ul[this.index], { "height": 0 });
        }
    }

})()