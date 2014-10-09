// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null){
      return "null";
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
      var stringObject = '[';
      var stringIt = function(obj) {
        if(obj.length === 0){
          return '' + stringObject + ']';
        }else{
          var comma = ',';
          if(obj.length === 1){
              comma = '';
          }
          stringObject += '' + stringifyJSON(obj.splice(0, 1)[0]) + comma + '';
          
          return stringIt(obj);
        }
      }
      return stringIt(obj);
  }

  if(obj.constructor === Object){
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
      return stringThis(obj);
  }


};
