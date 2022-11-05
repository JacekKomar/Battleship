generateShip: function(){
    var direction = Math.floor(Math.random() * 2);
  var row, col;
  if(direction ===1){
  
  }else
  
  }
  var newShipLocations = [];
  for (var i = 0; i < this.shipLength; i++){
    if (direction === 1){
  row = Math.floor(Math.random() * this.boardSize);
  col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    }
    else{
      row = Math.floor(Math.random() * this.boardSize - this.shipLength);
      col = Math.floor(Math.random() * (this.boardSize));
  
  
  }
var newShipLocations = [];
for (var i = 0; i < this.shipLength; i++) {

    if (direction === 1) {
newShipLocations.push(row + "" +(col + i));


    } else {
newShipLocations.push((row + i) + "" + col);

    }
}
return newShipLocations

  },
 



  collision: function(locations){
    for(var i = 0; i < this.numShips; i++){
        var ship = model.ships[i];
        for (var j = 0; j <locations.length; j++) {
            if (ship.locations.indexOf(locations[j]) >=0){
                return true;
            }
        }

    }
    return false
  }