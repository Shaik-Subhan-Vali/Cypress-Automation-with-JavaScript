def distinct_character_count(s):
    # Using a set to get unique characters
    unique_chars = set(s)
    return len(unique_chars)


# Example usage
s = "hello world"
print(distinct_character_count(s))  # Expected output: 8 (h, e, l, o, w, r, d, space)
