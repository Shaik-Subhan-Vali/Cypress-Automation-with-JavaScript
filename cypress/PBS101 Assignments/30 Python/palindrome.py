def is_palindrome(s):
    # Remove whitespace and convert to lowercase for case-insensitive comparison
    normalized_str = ''.join(s.split()).lower()
    # Check if the string is the same when reversed
    return normalized_str == normalized_str[::-1]


# Test cases
print(is_palindrome("A man a plan a canal Panama"))  # Expected output: True (ignores spaces and case)
print(is_palindrome("racecar"))  # Expected output: True (reads the same forward and backward)
print(is_palindrome("hello"))  # Expected output: False (not a palindrome)
