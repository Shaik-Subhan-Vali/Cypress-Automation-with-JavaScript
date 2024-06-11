def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


# Test case
print(factorial(5))  # Expected output: 120
