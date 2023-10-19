//convert string into array
//check if ! exist
// remove it
//convert array into string

function remove(string) {
  let array = string.split("");
  let index = array.length - 1
  if(array[index] == "!"){
    let x = array.pop()
  }
  return array.join('')
}

console.log(remove("hi"))
