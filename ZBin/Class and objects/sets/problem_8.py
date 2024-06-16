def s(set1, set2):
    return set1.symmetric_difference(set2)
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print(s(set1, set2))
