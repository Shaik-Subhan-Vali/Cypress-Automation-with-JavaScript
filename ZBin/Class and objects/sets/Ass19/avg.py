def calculateAverage(numbers):
    if len(numbers) == 0:
        return 0 
    total = sum(numbers)
    return total / len(numbers)

s = [10, 15, 20, 25]
r = calculateAverage(s)
print( r)
