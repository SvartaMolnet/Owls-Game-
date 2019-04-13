
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var matchCount=0;
var j=0;
var currentCard=0;

var cards = [{
  img: new Image(), //kort 1
  side1: {
    color: "yellow",
    kind: "body",
    mate: false
  },
  side2: {
    color: "blue",
    kind: "body",
    mate: false
  },
  side3: {
    color: "green",
    kind: "head",
    mate: false
  },
  side4: {
    color: "red",
    kind: "head",
    mate: false
  },
  rot: 0,
  posX: 0,
  posY: 0
}, {
  img: new Image(), //kort 2
  side1: {
    color: "green",
    kind: "body",
    mate: false
  },
  side2: {
    color: "yellow",
    kind: "head",
    mate: false
  },
  side3: {
    color: "blue",
    kind: "head",
    mate: false
  },
  side4: {
    color: "red",
    kind: "body",
    mate: false
  },
  rot: 0,
  posX: 100,
  posY: 0
}, {
  img: new Image(), //Kort 3
  side1: {
    color: "red",
    kind: "body",
    mate: false
  },
  side2: {
    color: "yellow",
    kind: "body",
    mate: false
  },
  side3: {
    color: "green",
    kind: "head",
    mate: false
  },
  side4: {
    color: "blue",
    kind: "head",
    mate: false
  },
  rot: 0,
  posX: 200,
  posY: 0
}, {
  img: new Image(), //kort 4
  side1: {
    color: "blue",
    kind: "body",
    mate: false
  },
  side2: {
    color: "yellow",
    kind: "head",
    mate: false
  },
  side3: {
    color: "green",
    kind: "head",
    mate: false
  },
  side4: {
    color: "red",
    kind: "body",
    mate: false
  },
  rot: 0,
  posX: 0,
  posY: 100
}, {
  img: new Image(), //Kort 5
  side1: {
    color: "green",
    kind: "body",
    mate: false
  },
  side2: {
    color: "red",
    kind: "head",
    mate: false
  },
  side3: {
    color: "blue",
    kind: "head",
    mate: false
  },
  side4: {
    color: "yellow",
    kind: "body",
    mate: false
  },
  rot: 0,
  posX: 100,
  posY: 100
}, {
  img: new Image(), //Kort 6
  side1: {
    color: "red",
    kind: "body",
    mate: false
  },
  side2: {
    color: "blue",
    kind: "head",
    mate: false
  },
  side3: {
    color: "green",
    kind: "head",
    mate: false
  },
  side4: {
    color: "yellow",
    kind: "body",
    mate: false
  },
  rot: 0,
  posX: 200,
  posY: 100
}, {
  img: new Image(), //Kort 7
  side1: {
    color: "red",
    kind: "body",
    mate: false
  },
  side2: {
    color: "yellow",
    kind: "head",
    mate: false
  },
  side3: {
    color: "blue",
    kind: "head",
    mate: false
  },
  side4: {
    color: "yellow",
    kind: "body",
    mate: false
  },
  rot: 0,
  posX: 0,
  posY: 200
}, {
  img: new Image(), //Kort 8
  side1: {
    color: "yellow",
    kind: "body",
    mate: false
  },
  side2: {
    color: "green",
    kind: "body",
    mate: false
  },
  side3: {
    color: "red",
    kind: "head",
    mate: false
  },
  side4: {
    color: "blue",
    kind: "head",
    mate: false
  },
  rot: 0,
  posX: 100,
  posY: 200
}, {
  img: new Image(), //Kort 9
  side1: {
    color: "green",
    kind: "head",
    mate: false
  },
  side2: {
    color: "red",
    kind: "body",
    mate: false
  },
  side3: {
    color: "blue",
    kind: "body",
    mate: false
  },
  side4: {
    color: "red",
    kind: "head",
    mate: false
  },
  rot: 0,
  posX: 200,
  posY: 200
}];
var checkValues = [{ //------------1
  cardValuesOne: {
    cardNumber: 0,
    cardRotation: 90
  },
  cardValuesTwo: {
    cardNumber: 1,
    cardRotation: 270
  }
}, {                //------------2
  cardValuesOne: {
    cardNumber: 1,
    cardRotation: 90
  },
  cardValuesTwo: {
    cardNumber: 2,
    cardRotation: 270
  }
}, {                //------------3
  cardValuesOne: {
    cardNumber: 0,
    cardRotation: 180
  },
  cardValuesTwo: {
    cardNumber: 3,
    cardRotation: 0
  }
}, {                //------------4
  cardValuesOne: {
    cardNumber: 3,
    cardRotation: 90
  },
  cardValuesTwo: {
    cardNumber: 4,
    cardRotation: 270
  }
}, {                //------------5
  cardValuesOne: {
    cardNumber: 1,
    cardRotation: 180
  },
  cardValuesTwo: {
    cardNumber: 4,
    cardRotation: 0
  }
}, {                //------------6
  cardValuesOne: {
    cardNumber: 4,
    cardRotation: 90
  },
  cardValuesTwo: {
    cardNumber: 5,
    cardRotation: 270
  }
}, {                //------------7
  cardValuesOne: {
    cardNumber: 2,
    cardRotation: 180
  },
  cardValuesTwo: {
    cardNumber: 5,
    cardRotation: 0
  }
}, {                //------------8
  cardValuesOne: {
    cardNumber: 3,
    cardRotation: 180
  },
  cardValuesTwo: {
    cardNumber: 6,
    cardRotation: 0
  }
}, {                //------------9
  cardValuesOne: {
    cardNumber: 6,
    cardRotation: 90
  },
  cardValuesTwo: {
    cardNumber: 7,
    cardRotation: 270
  }
}, {                //------------10
  cardValuesOne: {
    cardNumber: 4,
    cardRotation: 180
  },
  cardValuesTwo: {
    cardNumber: 7,
    cardRotation: 0
  }
}, {                //------------11
  cardValuesOne: {
    cardNumber: 7,
    cardRotation: 90
  },
  cardValuesTwo: {
    cardNumber: 8,
    cardRotation: 270
  }
}, {                //------------12
  cardValuesOne: {
    cardNumber: 5,
    cardRotation: 180
  },
  cardValuesTwo: {
    cardNumber: 8,
    cardRotation: 0
  }
}];
var printCheckValues = function() {
  document.getElementById("c11").innerHTML = checkValues[0].cardValuesOne.cardNumber;
  document.getElementById("c12").innerHTML = checkValues[0].cardValuesTwo.cardNumber;

  document.getElementById("c21").innerHTML = checkValues[1].cardValuesOne.cardNumber;
  document.getElementById("c22").innerHTML = checkValues[1].cardValuesTwo.cardNumber;

  document.getElementById("c31").innerHTML = checkValues[2].cardValuesOne.cardNumber;
  document.getElementById("c32").innerHTML = checkValues[2].cardValuesTwo.cardNumber;

  document.getElementById("c41").innerHTML = checkValues[3].cardValuesOne.cardNumber;
  document.getElementById("c42").innerHTML = checkValues[3].cardValuesTwo.cardNumber;

  document.getElementById("c51").innerHTML = checkValues[4].cardValuesOne.cardNumber;
  document.getElementById("c52").innerHTML = checkValues[4].cardValuesTwo.cardNumber;

  document.getElementById("c61").innerHTML = checkValues[5].cardValuesOne.cardNumber;
  document.getElementById("c62").innerHTML = checkValues[5].cardValuesTwo.cardNumber;

  document.getElementById("c71").innerHTML = checkValues[6].cardValuesOne.cardNumber;
  document.getElementById("c72").innerHTML = checkValues[6].cardValuesTwo.cardNumber;

  document.getElementById("c81").innerHTML = checkValues[7].cardValuesOne.cardNumber;
  document.getElementById("c82").innerHTML = checkValues[7].cardValuesTwo.cardNumber;

  document.getElementById("c91").innerHTML = checkValues[8].cardValuesOne.cardNumber;
  document.getElementById("c92").innerHTML = checkValues[8].cardValuesTwo.cardNumber;

  document.getElementById("c101").innerHTML = checkValues[9].cardValuesOne.cardNumber;
  document.getElementById("c102").innerHTML = checkValues[9].cardValuesTwo.cardNumber;

  document.getElementById("c111").innerHTML = checkValues[10].cardValuesOne.cardNumber;
  document.getElementById("c112").innerHTML = checkValues[10].cardValuesTwo.cardNumber;

  document.getElementById("c121").innerHTML = checkValues[11].cardValuesOne.cardNumber;
  document.getElementById("c122").innerHTML = checkValues[11].cardValuesTwo.cardNumber;
};

var setPos = function() {
  for (var i=0; i < cards.length; i++){
    if (cards[i].posX === 0 && cards[i].posY === 0){
      checkValues[0].cardValuesOne.cardNumber = i;
      checkValues[2].cardValuesOne.cardNumber = i;
      document.getElementById("nr1").innerHTML = i;
      document.getElementById("px1").innerHTML = cards[i].posX;
      document.getElementById("py1").innerHTML = cards[i].posY;
      document.getElementById("r1").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 100 && cards[i].posY === 0){
      checkValues[0].cardValuesTwo.cardNumber = i;
      checkValues[1].cardValuesOne.cardNumber = i;
      checkValues[4].cardValuesOne.cardNumber = i;
      document.getElementById("nr2").innerHTML = i;
      document.getElementById("px2").innerHTML = cards[i].posX;
      document.getElementById("py2").innerHTML = cards[i].posY;
      document.getElementById("r2").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 200 && cards[i].posY === 0){
      checkValues[1].cardValuesTwo.cardNumber = i;
      checkValues[6].cardValuesOne.cardNumber = i;
      document.getElementById("nr3").innerHTML = i;
      document.getElementById("px3").innerHTML = cards[i].posX;
      document.getElementById("py3").innerHTML = cards[i].posY;
      document.getElementById("r3").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 0 && cards[i].posY === 100){
      checkValues[2].cardValuesTwo.cardNumber = i;
      checkValues[3].cardValuesOne.cardNumber = i;
      checkValues[7].cardValuesOne.cardNumber = i;
      document.getElementById("nr4").innerHTML = i;
      document.getElementById("px4").innerHTML = cards[i].posX;
      document.getElementById("py4").innerHTML = cards[i].posY;
      document.getElementById("r4").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 100 && cards[i].posY === 100){
      checkValues[3].cardValuesTwo.cardNumber = i;
      checkValues[4].cardValuesTwo.cardNumber = i;
      checkValues[5].cardValuesOne.cardNumber = i;
      checkValues[9].cardValuesOne.cardNumber = i;
      document.getElementById("nr5").innerHTML = i;
      document.getElementById("px5").innerHTML = cards[i].posX;
      document.getElementById("py5").innerHTML = cards[i].posY;
      document.getElementById("r5").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 200 && cards[i].posY === 100){
      checkValues[5].cardValuesTwo.cardNumber = i;
      checkValues[6].cardValuesTwo.cardNumber = i;
      checkValues[11].cardValuesOne.cardNumber = i;
      document.getElementById("nr6").innerHTML = i;
      document.getElementById("px6").innerHTML = cards[i].posX;
      document.getElementById("py6").innerHTML = cards[i].posY;
      document.getElementById("r6").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 0 && cards[i].posY === 200){
      checkValues[7].cardValuesTwo.cardNumber = i;
      checkValues[8].cardValuesOne.cardNumber = i;
      document.getElementById("nr7").innerHTML = i;
      document.getElementById("px7").innerHTML = cards[i].posX;
      document.getElementById("py7").innerHTML = cards[i].posY;
      document.getElementById("r7").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 100 && cards[i].posY === 200){
      checkValues[8].cardValuesTwo.cardNumber = i;
      checkValues[9].cardValuesTwo.cardNumber = i;
      checkValues[10].cardValuesOne.cardNumber = i;
      document.getElementById("nr8").innerHTML = i;
      document.getElementById("px8").innerHTML = cards[i].posX;
      document.getElementById("py8").innerHTML = cards[i].posY;
      document.getElementById("r8").innerHTML = cards[i].rot;
    };
    if (cards[i].posX === 200 && cards[i].posY === 200){
      checkValues[10].cardValuesTwo.cardNumber = i;
      checkValues[11].cardValuesTwo.cardNumber = i;
      document.getElementById("nr9").innerHTML = i;
      document.getElementById("px9").innerHTML = cards[i].posX;
      document.getElementById("py9").innerHTML = cards[i].posY;
      document.getElementById("r9").innerHTML = cards[i].rot;
    };
  };
};

var degToRad = function (deg) {
  return deg * Math.PI / 180;
};

var centerOfCard = function (card) {
  var centerX = card.posX + (100 / 2);
  var centerY = card.posY + (100 / 2);
  return {
    X: centerX,
    Y: centerY
  }
};

var renderCard = function (card) {
  context.save();

  var cardCenter = centerOfCard(card);
  context.translate(cardCenter.X, cardCenter.Y);
  context.rotate(degToRad(card.rot));
  context.translate(-cardCenter.X, -cardCenter.Y);
  context.drawImage(card.img, card.posX, card.posY, 100, 100);

  context.restore();
};

var render = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < cards.length; i++) {
    renderCard(cards[i]);
  };
};

var setSide = function (card, complement) {
  //var color = card.side1.color;
  //var kind = card.side1.kind;
  //return {Color: color, Kind: kind}
  var rotation = complement - card.rot;
  if (rotation < 0) {
    rotation = 360 + (rotation);
  }
  if (rotation === 0) {
    var color = card.side1.color;
    var kind = card.side1.kind;
    var mate = card.side1.mate;
    return {
      Color: color,
      Kind: kind,
      Mate: mate
    }
  };
  if (rotation === 90) {
    var color = card.side2.color;
    var kind = card.side2.kind;
    var mate = card.side2.mate;
    return {
      Color: color,
      Kind: kind,
      Mate: mate
    }
  };
  if (rotation === 180) {
    var color = card.side3.color;
    var kind = card.side3.kind;
    var mate = card.side3.mate;
    return {
      Color: color,
      Kind: kind,
      Mate: mate
    }
  };
  if (rotation === 270) {
    var color = card.side4.color;
    var kind = card.side4.kind;
    var mate = card.side4.mate;
    return {
      Color: color,
      Kind: kind,
      Mate: mate
    }
  };
};

cards[8].img.onload = function () {
  render();
};

var changePos = function(a, b) {
  swapPosX = cards[a].posX;
  swapPosY = cards[a].posY;
  cards[a].posX = cards[b].posX;
  cards[a].posY = cards[b].posY;
  cards[b].posX = swapPosX;
  cards[b].posY = swapPosY;
};

var updateTable = function(h, a, b, c){ //-----------------> DEBUGING
  for(i=0; i<checkValues.length; i++){

    if (h===0){
      document.getElementById("mate").innerHTML = c;
      if (c===true){
        document.getElementById("m").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m").style.backgroundColor="red";
      };
      document.getElementById("degone").innerHTML = a;
      document.getElementById("degtwo").innerHTML = b;
    };
    if (h===1){
      document.getElementById("mate1").innerHTML = c;
      if (c===true){
        document.getElementById("m1").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m1").style.backgroundColor="red";
      };
      document.getElementById("degone1").innerHTML = a;
      document.getElementById("degtwo1").innerHTML = b;
    };
    if (h===2){
      document.getElementById("mate2").innerHTML = c;
      if (c===true){
        document.getElementById("m2").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m2").style.backgroundColor="red";
      };
      document.getElementById("degone2").innerHTML = a;
      document.getElementById("degtwo2").innerHTML = b;
    };
    if (h===3){
      document.getElementById("mate3").innerHTML = c;
      if (c===true){
        document.getElementById("m3").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m3").style.backgroundColor="red";
      };
      document.getElementById("degone3").innerHTML = a;
      document.getElementById("degtwo3").innerHTML = b;
    };
    if (h===4){
      document.getElementById("mate4").innerHTML = c;
      if (c===true){
        document.getElementById("m4").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m4").style.backgroundColor="red";
      };
      document.getElementById("degone4").innerHTML = a;
      document.getElementById("degtwo4").innerHTML = b;
    };
    if (h===5){
      document.getElementById("mate5").innerHTML = c;
      if (c===true){
        document.getElementById("m5").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m5").style.backgroundColor="red";
      };
      document.getElementById("degone5").innerHTML = a;
      document.getElementById("degtwo5").innerHTML = b;
    };
    if (h===6){
      document.getElementById("mate6").innerHTML = c;
      if (c===true){
        document.getElementById("m6").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m6").style.backgroundColor="red";
      };
      document.getElementById("degone6").innerHTML = a;
      document.getElementById("degtwo6").innerHTML = b;
    };
    if (h===7){
      document.getElementById("mate7").innerHTML = c;
      if (c===true){
        document.getElementById("m7").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m7").style.backgroundColor="red";
      };
      document.getElementById("degone7").innerHTML = a;
      document.getElementById("degtwo7").innerHTML = b;
    };
    if (h===8){
      document.getElementById("mate8").innerHTML = c;
      if (c===true){
        document.getElementById("m8").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m8").style.backgroundColor="red";
      };
      document.getElementById("degone8").innerHTML = a;
      document.getElementById("degtwo8").innerHTML = b;
    };
    if (h===9){
      document.getElementById("mate9").innerHTML = c;
      if (c===true){
        document.getElementById("m9").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m9").style.backgroundColor="red";
      };
      document.getElementById("degone9").innerHTML = a;
      document.getElementById("degtwo9").innerHTML = b;
    };
    if (h===10){
      document.getElementById("mate10").innerHTML = c;
      if (c===true){
        document.getElementById("m10").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m10").style.backgroundColor="red";
      };
      document.getElementById("degone10").innerHTML = a;
      document.getElementById("degtwo10").innerHTML = b;
    };
    if (h===11){
      document.getElementById("mate11").innerHTML = c;
      if (c===true){
        document.getElementById("m11").style.backgroundColor="green";
      };
      if (c===false){
        document.getElementById("m11").style.backgroundColor="red";
      };
      document.getElementById("degone11").innerHTML = a;
      document.getElementById("degtwo11").innerHTML = b;
    };
  };
};

var valueCheck = function(){
  j++;
  var t;

  printCheckValues();
  render();
  if (j<=8){t=j; document.getElementById("loopturns").innerHTML = 0;};
  if (j>8){t=j%9; document.getElementById("loopturns").innerHTML = parseInt(j/9);};
  document.getElementById("match").innerHTML = t; //Local iteration
  if (j != 0){
      changePos(t,2);
      cards[t].rot+=90;
      if(cards[t].rot===360){cards[t].rot=0;};
      printCheckValues();
  };
  printCheckValues();
  //document.getElementById("currentCard").innerHTML = currentCard;
  render();


  for (var i = 0; i < checkValues.length; i++) {

    setPos();
    document.getElementById("checkValues").innerHTML = i+1;
    var compareOne = setSide(cards[checkValues[i].cardValuesOne.cardNumber], checkValues[i].cardValuesOne.cardRotation);
    var compareTwo = setSide(cards[checkValues[i].cardValuesTwo.cardNumber], checkValues[i].cardValuesTwo.cardRotation);

    // ---------------------> DEBUGGING
    var trueRotationOne = checkValues[i].cardValuesOne.cardRotation;
    var trueRotationTwo = checkValues[i].cardValuesTwo.cardRotation;
    if (trueRotationOne < 0) {
      trueRotationOne = 360 + (trueRotationOne);
    };
    if (trueRotationTwo < 0) {
      trueRotationTwo = 360 + (trueRotationTwo);
    };
    // ---------------------> DEBUGGING

    if (compareOne.Color === compareTwo.Color && compareOne.Kind != compareTwo.Kind) {
      matchCount++;

      updateTable(i, trueRotationOne, trueRotationTwo, true);

    };
    if (compareOne.Color != compareTwo.Color || compareOne.Kind === compareTwo.Kind){

      updateTable(i, trueRotationOne, trueRotationTwo, false);

    };
  };
  if (j===1320) {
    clearInterval(reInterval);
  };

  //------------------------------->

};

/*var getValues = function(i){

  cards[i].rot+=180;
  currentCard+=1;
  valueCheck();
};*/
var testCycle = function(i) {
  valueCheck();
  changePos(x,y);
  // document.getElementById("currentCard").innerHTML = currentCard;
  // //currentCard+=1
  // if(cards[i].rot===0){
  //   cards[i].rot+=90;
  //   valueCheck();
  // };
  // if(cards[i].rot===90){
  //   cards[i].rot+=90;
  //   valueCheck();
  // };
};
changePos(0,0);
//cards[5].rot=270;
//var t=setInterval(testCycle(currentCard), 1000);
var reInterval=setInterval(testCycle, 100);
/*

cards[0].img.src = 'http://i.imgur.com/Tb9Vd5a.jpg';
cards[1].img.src = 'http://i.imgur.com/jxYTlGv.jpg';
cards[2].img.src = 'http://i.imgur.com/Y5IIutF.jpg';
cards[3].img.src = 'http://i.imgur.com/HEY74ia.jpg';
cards[4].img.src = 'http://i.imgur.com/6hUNGzB.jpg';
cards[5].img.src = 'http://i.imgur.com/FJ5RRqy.jpg';
cards[6].img.src = 'http://i.imgur.com/f2MlzzQ.jpg';
cards[7].img.src = 'http://i.imgur.com/FhV2LhH.jpg';
cards[8].img.src = 'http://i.imgur.com/qkCBNWK.jpg';

*/
cards[0].img.src = 'card1medium.jpg';
cards[1].img.src = 'card2medium.jpg';
cards[2].img.src = 'card3medium.jpg';
cards[3].img.src = 'card4medium.jpg';
cards[4].img.src = 'card5medium.jpg';
cards[5].img.src = 'card6medium.jpg';
cards[6].img.src = 'card7medium.jpg';
cards[7].img.src = 'card8medium.jpg';
cards[8].img.src = 'card9medium.jpg';
