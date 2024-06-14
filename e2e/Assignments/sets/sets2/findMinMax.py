def findMinMax(arr):
    min = arr[0]
    for i in range(1, len(arr)):
        if arr[i] < min:
            min = arr[i]
    print(min)

arr = [15, 2, 34, 8, 19] 
findMinMax(arr)
