def reverseSentence(sentence):
    words = sentence.split()  
    rev = [word[::-1] for word in words]  
    rev = " ".join(rev)  
    return rev

s = "Hello World"
r = reverseSentence(s)
print(r)
