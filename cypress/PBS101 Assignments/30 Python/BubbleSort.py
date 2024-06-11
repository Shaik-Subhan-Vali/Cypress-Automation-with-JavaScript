def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr


# Test Cases
def test_bubble_sort():
    # Test case 1: Basic sorting
    arr = [64, 34, 25, 12, 22, 11, 90]
    assert bubble_sort(arr) == [11, 12, 22, 25, 34, 64, 90]

    # Test case 2: Already sorted
    arr = [1, 2, 3, 4, 5, 6]

    print("All test cases passed!")


# Run the test cases
test_bubble_sort()