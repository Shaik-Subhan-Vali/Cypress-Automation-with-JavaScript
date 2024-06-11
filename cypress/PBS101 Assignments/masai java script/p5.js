var str = "Masai";
o="";
var s1 =str.split();

for(var i=0; i<s1.length; i++)
{
	if(i==0)
	{
		o = o + "N";
	}
	else
	{
		o = o + s1[i];
	}
}

console.log(o);