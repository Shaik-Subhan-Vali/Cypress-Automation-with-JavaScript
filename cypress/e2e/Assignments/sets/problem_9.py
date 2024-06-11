def s(set1, set2):
    return set1.difference(set2)

set1 = {10, 20, 30, 40, 50}
set2 = {40, 50, 60, 70, 80}
print(s(set1, set2))
