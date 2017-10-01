function stack()
{
	this.datastore=[]
	this.push=push
	this.pop=pop
	this.top=0
	this.peek=peek
	this.clearstack=clearstack
}

function push(element)
{
	this.datastore.push(element)
	this.top++

}

function pop(element)
{
	if(this.top>0)
	{


	this.top--
	return this.datastore.pop()

}
else
{
	console.log('Stack Empty')
}}

function peek()
{
	if (this.top!=0)
	{
	return this.datastore[this.top-1]
}
else
{
	console.log('Stack Empty')
}
}

function clearstack()
{
	this.datastore=[]
	this.top=0
}



st=new stack()
st.push(1)
st.push(3)
st.pop()
console.log(st.peek())


function dict()
{
	this.datastore={}
	this.showdict=showdict
	this.map=map;
	this.keys=keys
	this.values=values
	this.remove=remove
	this.isempty=isempty

}

function showdict()
{
	return this.datastore
}

function map(key,value)
{
	this.datastore[key]=value
}

function keys()
{
	var k=[]
	for(i in this.datastore)
	{
		k.push(i)
	}
	return k
}

function values()
{
	var v=[]
	for(i in this.datastore)
	{
		v.push(this.datastore[i])
	}
	return v
}
function remove(key)
{
	delete this.datastore[key]
}

function isempty()
{
	if(this.datastore=={})
	{
		return true
	}

	else
	{
		return false
	}
}




d= new dict()
d.map(3,5)
d.map(9,0)
d.map('hello','world')
console.log(d.showdict())