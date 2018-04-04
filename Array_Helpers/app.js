Array.prototype.square = function(){
console.log(this)
var res= [];
for(var i=0;i<this.length;i++)
res[i]=this[i]*this[i];
return res;
}

Array.prototype.cube = function(){
console.log(this)
var res= [];
for(var i=0;i<this.length;i++)
res[i]=this[i]*this[i]*this[i];
return res;
}


Array.prototype.sum = function(){
return this.reduce((a, b)=> a + b,0);
}

Array.prototype.average = function(){
return this.reduce((a, b)=> a + b,0)/this.length;
}

Array.prototype.even = function(){
//console.log(this)
var res= [];
  for(var i=0;i<this.length;i++){
    if(this[i]%2==0)
    res[res.length]=this[i]
  }
return res;
}


Array.prototype.odd = function(){
//console.log(this)
var res= [];
  for(var i=0;i<this.length;i++){
    if(this[i]%2!==0) res[res.length]=this[i]
  }
return res;
}
