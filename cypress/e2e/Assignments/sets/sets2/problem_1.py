def set_union(set1, set2, set3):
    r = set1.copy()
    r.update(set2)
    r.update(set3)
    return r

set1 = {1, 2, 3}
set2 = {3, 4, 5}
set3 = {5, 6, 7}
print(set_union(set1, set2, set3))
