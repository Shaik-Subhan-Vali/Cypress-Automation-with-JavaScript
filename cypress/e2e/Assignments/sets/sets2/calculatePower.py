import math
def calculate_power(base, exponent):
    x=math.pow(base, exponent)
    return x

base = 2
exponent = 3
r = calculate_power(base, exponent)
print("powerResult =", r)
