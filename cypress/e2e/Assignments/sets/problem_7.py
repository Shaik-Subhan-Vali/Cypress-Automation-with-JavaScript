def duplicates(i):
    u = sorted(set(i))
    return tuple(u)

s = [1, 2, 3, 4, 3, 2, 1]
print(duplicates(s))
