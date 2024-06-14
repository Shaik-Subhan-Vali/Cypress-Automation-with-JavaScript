var names = ["Nobita", "Naruto", "Noddy", "Shinchan", "Oswald"];
var c = 0;

for(var i=0; i<names.length; i++)
{
 var a = names[i];
 for(var j=0; j<a.length; j++)
  if(a[j] == "A" || a[j] == "a")
	{
		c++;
        break;
	}
}

console.log(c);