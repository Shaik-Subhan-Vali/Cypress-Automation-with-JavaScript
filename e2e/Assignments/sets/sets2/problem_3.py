def sets(*sets):
    if not sets:
        return set()
    inset = sets[0].copy()
    for s in sets[1:]:
        inset = inset.intersection(s)
        if not inset:
            break
            
    return inset
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7}
set3 = {4, 5, 8, 9}
print(sets(set1, set2, set3))
