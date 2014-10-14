// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
 
    if(obj === null){
      return "null";
  }
    if(obj.constructor === Function){
      return;
  }
  if(obj.constructor === String){
      return '"' + obj + '"';
  }
  if(obj.constructor === Boolean){
      return '' + obj.toString() + '';
  }
  if(obj.constructor === Number) {
      return obj.toString();
  }
  if(obj.constructor === Array){
      var arrayCopy = obj.slice();
      var stringObject = '[';
      var stringIt = function(arrayCopy) {
        if(arrayCopy.length === 0){
          return '' + stringObject + ']';
        }else{
          var comma = ',';
          if(arrayCopy.length === 1){
              comma = '';
          }
          stringObject += '' + stringifyJSON(arrayCopy.splice(0, 1)[0]) + comma + '';
          
          return stringIt(arrayCopy);
        }
      }
      return stringIt(arrayCopy);
  }

  if(obj.constructor === Object){
      var objCopy = {};
      for(var key in obj){
          if(obj[key] === null){
              objCopy[key] = obj[key]
          }else{
              if(obj[key] !== undefined && obj[key]!== null && obj[key].constructor !== Function ){
          objCopy[key] = obj[key];
            }
        }
      }
      var stringObj = '{';
      var stringThis = function(obj){
          var keysList = Object.keys(obj);
          if(keysList.length === 0){
              return '' + stringObj + '}' ;
          }else{
          comma = ',';
          if(keysList.length === 1){
              comma = '';
          }
              stringObj += '"' + keysList[0] + '":' + stringifyJSON(obj[keysList[0]]) + comma;
              delete obj[keysList[0]];
              return stringThis(obj);
          }
      }
      return stringThis(objCopy);
  }

  


};
