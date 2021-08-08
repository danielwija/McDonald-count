//command + shift + L = 「一起編輯」(vsCode)
//command + [  =「縮排」(vsCode)
//command + option + i = 「檢查」(chome)
//command + delete = 「刪除一行」(mac)

let mcdData = {
    company:"麥當勞",
    activity:"麥當勞[1+1]",
    img:"img/menu.jpeg",
    data:{
        red:[
            {name:"吉事漢堡",id:"h1",price:42,},
            {name:"法式芥末香雞堡",id:"h2",price:45},
            {name:"四塊麥克雞塊",id:"cn1",price:49},
            {name:"勁辣香雞翅",id:"cw1",price:45},
            {name:"酥嫩雞翅",id:"cw2",price:45},
            {name:"蘋果派",id:"a1",price:32},
            {name:"大蛋捲冰淇淋",id:"ic",price:30},
            {name:"薯條",id:"ff",price:32},
        ],
        white:[
            {name:"熱紅茶",id:"hrt",price:33},
            {name:"玉米湯",id:"cs",price:33},
            {name:"可樂",id:"ko",price:28},
            {name:"雪碧",id:"sp",price:28},
            {name:"冰綠茶",id:"cgt",price:28},
            {name:"冰紅茶",id:"crt",price:28},
        ]
    }
  }
//不包括套餐紅茶


let message = document.getElementById("message");
let selectRed = document.getElementById("selectRed");

//把選項加入option
for(let i = 0; i < mcdData.data.red.length; i++){
    let option = document.createElement("option");
    option.innerHTML = mcdData.data.red[i].name;
    option.value=mcdData.data.red[i].price;
    selectRed.append(option);
}
let selectWhite = document.getElementById("selectWhite")
for(let i = 0; i < mcdData.data.white.length; i++){
    let option = document.createElement("option");
    option.innerHTML = mcdData.data.white[i].name;
    option.value=mcdData.data.white[i].price;
    selectWhite.append(option);
}

let redChang = false;
let whiteChang = false;
let redPrice = undefined;
let whitePrice = undefined;

const redOnchang = () => {
    redPrice = document.getElementById("selectRed").value;
    if(whiteChang){
        r = parseInt(redPrice)+parseInt(whitePrice)-50;
        message.innerHTML = `you save ${r} dollar`
    }else{
        message.innerHTML = `you need to choose white food too!`
    }
    redChang = true;
}

const whiteOnchang = () => {
    whitePrice = document.getElementById("selectWhite").value;
    if(redChang){
        r = parseInt(whitePrice)+parseInt(redPrice)-50;
        message.innerHTML = `you save ${r} dollar!`
    }else{
        message.innerHTML = `you need to choose red food too`
    }
    whiteChang = true;
}


