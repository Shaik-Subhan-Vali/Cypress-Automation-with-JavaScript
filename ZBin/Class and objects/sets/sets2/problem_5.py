def func(i):
    max_num = i[0]
    min_num = i[0]

    for num in i:

        if num > max_num:
            max_num = num
        if num < min_num:
            min_num = num

    return max_num, min_num

s = (5, 10, 3, 15, 2, 20)
max_num, min_num = func(s)
print("Maximum:", max_num)
print("Minimum:", min_num)
