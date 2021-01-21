const chunkArrayInGroups = function(arr, size){

    var mySize = size
    var result = []
    var element = []

    for (i=0;i<arr.length; i++){
        element.push(arr[i])
        mySize--

        if (mySize==0){
            result.push(element)
            mySize= size
            element= []
        }

    }
    if (element.length > 0){
        result.push(element)
    }
    return result
}

module.exports = chunkArrayInGroups
