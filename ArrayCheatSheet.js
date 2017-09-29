var array=new Array(10) //Declaring an  empty array of size 10
var array1=[1,2,3,4,5]  //manually declaring an array
console.log(array1.length) //print array length
console.log(Array.isArray(array)) //Check idf passed element is array


var a1=[1,2,3]
var a2=new Array(4,5,6)

console.log(a1.indexOf(3)) //return index of element else return -1
var x=a1.lastIndexOf(3) // Searches element from behind
var a3=a1.concat(a2) // The concat function merges two arrays into a single array
console.log(a3)


var a4=a3.splice(3,2) // Return subarray starting from index 3 upto length 2
console.log(a4)
console.log(a3)


a4.push(99) // Append element at the end of array

console.log(a4)

a4.unshift(19) // Append element at the start of array

console.log(a4)

var sentence='i am a lazy programmer'

var wordarray=sentence.split(' ')

console.log(wordarray)

var x=wordarray.pop() // Remove last element and return it
var y=wordarray.shift() //Remove first element and return it
console.log(x,wordarray)


//Mutator functions: using splice to insert and delete from an arbitrary position in an array

var num=[]

for(var i=0;i<10;i++)
{
	num.push(i)


}
num.splice(3,1) //Delete third element


console.log(num)

num.splice(3,4) //Delete four elements starting from the third index

console.log(num)

num.splice(3,0,4,5,6) //Insert n starting from the third index
console.log(num)

//Iterator functions


var num=[1,2,3,4]

var x=[]
function positive(n)
{
	x.push(n)
}

var n= new Array()
console.log(num.forEach(positive))
console.log(x)
console.log(n)


//Performing sorting 

function compare(a,b)
{
	return a-b

}

var n=[]
n.push(1,7,4,3,5,6)
n.sort(compare)
n=n.reverse()
console.log(n)
console.log(n.join(''))
