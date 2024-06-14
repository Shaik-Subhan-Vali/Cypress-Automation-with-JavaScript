def recursive_reverse(arr):
    if len(arr) == 0:
        return []
    return [arr[-1]] + recursive_reverse(arr[:-1])
arr = [1, 2, 3, 4, 5]
arr.reverse()  # Reverses the array in place
print(arr)  # Expected output: [5, 4, 3, 2, 1]



arr = [1, 2, 3, 4, 5]
reversed_arr = recursive_reverse(arr)
print(reversed_arr)  # Expected output: [5, 4, 3, 2, 1]
