function account(balance)
{
	this.balance=balance
	this.deposit=deposit
	this.withdraw=withdraw
	this.checkbalance=checkbalance

}

function withdraw(amount)
{
	if (amount<this.balance)
	{
		this.balance-=amount
	}
	else
	{
		console.log('Insufficient balance')
	}
}

function checkbalance()
{
	console.log(this.balance)
}

function deposit(amount)
{
	this.balance+=amount
}

function factorial(num)
{
	if(num==1)
	{
		return 1
	}
	else
		{
			return num*factorial(num-1)
		}
}

var ac=new account(100)
ac.deposit(10)
ac.checkbalance()
ac.withdraw(20)
ac.checkbalance()