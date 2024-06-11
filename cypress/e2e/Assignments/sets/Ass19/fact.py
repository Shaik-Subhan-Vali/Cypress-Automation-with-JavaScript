def calculateFactorial(n):
    f = 1
    for i in range(1, n+1):
        f *= i
    return f

result = calculateFactorial(5)
print("Result:", result)
