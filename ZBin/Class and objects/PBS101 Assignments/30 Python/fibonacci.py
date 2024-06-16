def fibonacci_recursive(n):
    if n <= 1:
        return n
    else:
        return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)


# Test case: Get the first 10 Fibonacci numbers using recursion
fib_list = [fibonacci_recursive(i) for i in range(10)]
print(fib_list)  # Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
