def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False


# Test cases
print(is_leap_year(2000))  # Expected output: True (2000 is a leap year)
print(is_leap_year(1900))  # Expected output: False (1900 is not a leap year)
print(is_leap_year(2020))  # Expected output:
