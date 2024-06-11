def largest(s):
    l =s[0]
    for x in range(len(s)):
        if l<s[x]:
            l=s[x]
    return l        

s = [4, 65, 32, 2, 104, 78, 10]
print(largest(s))