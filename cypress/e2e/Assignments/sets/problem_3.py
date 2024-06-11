def set(set1, set2):

    u = set1.union(set2)
    i = set1.intersection(set2)
    
    print("Union:", u)
    print("Intersection:", i)

set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
set(set1, set2)
