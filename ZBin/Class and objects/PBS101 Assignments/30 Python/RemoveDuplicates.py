def remove_duplicates_set(arr):
    return list(set(arr))


# Test case
arr = [1, 2, 3, 2, 1, 4, 5, 3]
print(remove_duplicates_set(arr))  # Expected output: [1, 2, 3, 4, 5] (order may vary)
