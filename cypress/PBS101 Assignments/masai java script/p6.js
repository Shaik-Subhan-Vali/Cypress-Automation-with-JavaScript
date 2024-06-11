var names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
var x = 0;

for(var i=0; i<names.length; i++)
{
 var a = names[i];
  if(a[0] == "N" || a[0] == "n")
	{
		x++;
	}
}

console.log(x);
