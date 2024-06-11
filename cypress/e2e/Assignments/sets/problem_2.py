def tuple_sum(input):
    t = 0
    for i in input:
        t += i
    return t

s = (8, 2, 3, 0, 7)
print(tuple_sum(s))
