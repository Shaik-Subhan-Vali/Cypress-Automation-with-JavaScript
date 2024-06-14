var name = "masai";
var l = "abcdefghijklmnopqrstuvwxyz";
var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var o = "";

for(let x=0; x<name.length; x++)
{
	for(let j=0;j<l.length; j++)
	{
		if(name[x] == l[j])
		{
			o = o + u[j];
		}
	}
}

console.log(o);

