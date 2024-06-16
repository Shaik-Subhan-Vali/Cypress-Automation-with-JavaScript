def is_palindrome(number):
    # Convert the number to a string
    number_str = str(number)
    # Check if the string is the same when reversed
    return number_str == number_str[::-1]


# Test case
print(is_palindrome(121))  # Expected output: True (121 is a palindrome)
print(is_palindrome(123))  # Expected output: False (123 is not a palindrome)
