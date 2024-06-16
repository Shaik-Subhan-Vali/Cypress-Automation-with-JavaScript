def s(*sets):
    if not sets:
        return set()

    d = sets[0].copy()
    for s in sets[1:]:

        d = d.difference(s)

    return d

set1 = {10, 20, 30, 40, 50}
set2 = {30, 40, 60, 70}
set3 = {50, 60, 90}
print(s(set1, set2, set3))
