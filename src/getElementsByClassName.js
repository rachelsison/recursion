// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//Use: document.body, element.childNodes, element.classList
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    // document.body
    var listOfElems = [];
    var getElemsHelper = function(className, elem){

        if(elem.classList.contains(className)){
            listOfElems.push(elem);
        }
        if(elem.children.length){
            for(var i=0; i < elem.children.length; i++){
                getElemsHelper(className, elem.children[i]);
            }
        }
        return listOfElems;
    }
    return getElemsHelper(className, document.body);
};
