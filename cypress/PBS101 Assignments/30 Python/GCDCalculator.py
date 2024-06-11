def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a


# Test cases
print(gcd(48, 18))  # Expected output: 6
print(gcd(56, 98))  # Expected output: 14
