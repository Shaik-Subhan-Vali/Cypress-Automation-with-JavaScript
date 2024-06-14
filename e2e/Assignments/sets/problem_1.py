def Unique_element_Finder(input_list):
    unique = []
    for i in input_list:
        if input_list.count(i) == 1:
            unique.append(i)
    return unique

s = [1, 2, 2, 3, 4, 5, 3, 6, 4]
print(Unique_element_Finder(s))
