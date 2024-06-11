def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True


# Test cases
print(is_prime(2))   # Expected output: True (2 is a prime number)
print(is_prime(4))   # Expected output: False (4 is not a prime number)
print(is_prime(17))  # Expected output: True (17 is a prime number)
print(is_prime(18))  # Expected output: False (18 is not a prime number)
