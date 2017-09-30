/* 1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.


2. Store a set of words in an array and display the contents both forward and backward. */



Array.sum= function(n)
{
	if (n.length==1)
	{
		return n[0]
	}
	else
	{
		x=n.pop()
		return x+Array.sum(n)
	}
}

function grades(n)
{
	this.datastore=n
	l=this.datastore.length
	this.addgrade= function addgrade(grade)
	{
		this.datastore.push(grade)
		l+=1
	}
	this.average= function average()
	{
		return (Array.sum(this.datastore)/l)
	}
	this.showgrades= function showgrades(){
		console.log(this.datastore)
	}

}

var gr= new grades([90,90,100,20])
gr.addgrade(89)
gr.showgrades()
console.log(gr.average())








//2.

var words='hello there my name is el pacino'

var wordarray=words.split(' ')
console.log(wordarray)
console.log(wordarray.reverse())