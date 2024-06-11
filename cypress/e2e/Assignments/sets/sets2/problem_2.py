def rev(input_tuple):
    t = ()
    for i in range(len(input_tuple) - 1, -1, -1):
        t += (input_tuple[i],)
    return t

s = (1, 2, 3, 4, 5)
print(rev(s))
