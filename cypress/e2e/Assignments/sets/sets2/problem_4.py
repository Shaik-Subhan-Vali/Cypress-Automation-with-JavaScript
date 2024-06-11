def is_subset(sub, set2):
    for e in sub:
        if e not in set2:
            return False
    return True

set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5, 6}
print(is_subset(set1, set2))
