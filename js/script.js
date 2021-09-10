const animItems = document.querySelectorAll('.animElem');

window.addEventListener('scroll', animOnScroll);

function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
        }
        else {
            animItem.classList.remove('active');
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function activeAddress(address) {
    document.getElementById("address1").classList.remove("addressActive");
    document.getElementById("address2").classList.remove("addressActive");
    document.getElementById("address3").classList.remove("addressActive");
    document.getElementById("address4").classList.remove("addressActive");
    document.getElementById("marker1").src = "img/showcase/marker.svg";
    document.getElementById("marker2").src = "img/showcase/marker.svg";
    document.getElementById("marker3").src = "img/showcase/marker.svg";
    document.getElementById("marker4").src = "img/showcase/marker.svg";
    switch (address) {
        case 1:
            document.getElementById("showcaseImg1").src = "img/showcase/chere/1.png";
            document.getElementById("showcaseImg2").src = "img/showcase/chere/2.png";
            document.getElementById("showcaseImg3").src = "img/showcase/chere/3.png";
            document.getElementById("showcaseImg4").src = "img/showcase/chere/4.png";
            document.getElementById("address1").classList.add("addressActive");
            document.getElementById("marker1").src = "img/showcase/marker-active.svg";
            break;
        case 2:
            document.getElementById("showcaseImg1").src = "img/showcase/poro/1.png";
            document.getElementById("showcaseImg2").src = "img/showcase/poro/2.png";
            document.getElementById("showcaseImg3").src = "img/showcase/poro/3.png";
            document.getElementById("showcaseImg4").src = "img/showcase/poro/4.png";
            document.getElementById("address2").classList.add("addressActive");
            document.getElementById("marker2").src = "img/showcase/marker-active.svg";
            break;
        case 3:
            document.getElementById("showcaseImg1").src = "img/showcase/novo/1.png";
            document.getElementById("showcaseImg2").src = "img/showcase/novo/2.png";
            document.getElementById("showcaseImg3").src = "img/showcase/novo/3.png";
            document.getElementById("showcaseImg4").src = "img/showcase/novo/4.png";
            document.getElementById("address3").classList.add("addressActive");
            document.getElementById("marker3").src = "img/showcase/marker-active.svg";
            break;
        case 4:
            document.getElementById("showcaseImg1").src = "img/showcase/gleby/1.png";
            document.getElementById("showcaseImg2").src = "img/showcase/gleby/2.png";
            document.getElementById("showcaseImg3").src = "img/showcase/gleby/3.png";
            document.getElementById("showcaseImg4").src = "img/showcase/gleby/4.png";
            document.getElementById("address4").classList.add("addressActive");
            document.getElementById("marker4").src = "img/showcase/marker-active.svg";
            break;
    }
}

document.getElementById("address1").addEventListener("click", () => {
    activeAddress(1);
});
document.getElementById("address2").addEventListener('click', () => {
    activeAddress(2);
});
document.getElementById("address3").addEventListener("click", () => {
    activeAddress(3);
});
document.getElementById("address4").addEventListener('click', () => {
    activeAddress(4);
});

let timeStamp;

if (localStorage.getItem('initTimestamp')) {
    timeStamp = localStorage.getItem('initTimestamp');
}
else {
    timeStamp = new Date();
    localStorage.setItem('initTimestamp', timeStamp);
}

let endTimeStamp = new Date(new Date(timeStamp).getTime() + 24 * 60 * 60 * 1000);

setInterval(() => {
    let timeStampDiff = endTimeStamp - new Date();
    let hrs = (timeStampDiff / 1000) / 60 / 60;
    let hrsFloor = Math.floor(hrs);

    let minsSecs = hrs - hrsFloor;
    let mins = minsSecs * 60;
    let minsFloor = Math.floor(mins);

    let secs = (mins - minsFloor) * 60;
    let secsFloor = Math.floor(secs);

    if (hrsFloor < 0) {
        document.getElementById("hrs").innerHTML = '00';
        document.getElementById("mins").innerHTML = '00';
        document.getElementById("secs").innerHTML = '00';
    }
    else {
        document.getElementById("hrs").innerHTML = hrsFloor;
        document.getElementById("mins").innerHTML = minsFloor;
        document.getElementById("secs").innerHTML = secsFloor;
    }

}, 1000);
