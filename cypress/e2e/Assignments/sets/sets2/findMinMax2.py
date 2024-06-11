def findMinMax(arr):
    max = arr[0]
    for i in range(1, len(arr)):
        if arr[i] > max:
            max = arr[i]
    print(max)

arr = [15, 2, 34, 8, 19] 
findMinMax(arr)
