    var str = "Hello world"
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {

            words[i] = words[i].split("").reverse().join("");
        }
        let reversedString = words.join(" ");
        console.log(reversedString);
    
