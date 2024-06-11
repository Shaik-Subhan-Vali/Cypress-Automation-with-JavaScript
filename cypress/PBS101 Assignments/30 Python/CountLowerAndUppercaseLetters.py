def count_lower_and_upper(s):
    lower_count = sum(1 for c in s if c.islower())
    upper_count = sum(1 for c in s if c.isupper())
    return lower_count, upper_count


# Test case
s = "Hello World!"
print(count_lower_and_upper(s))  # Expected output: (8, 2)  # 8 lowercase, 2 uppercase
