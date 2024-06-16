def remove_all_whitespaces(s):
    return ''.join(s.split())  # Split and join without white spaces


# Test case
s = " Hello   World!  This is \nPython\tCode.  "
print(remove_all_whitespaces(s))  # Expected output: "HelloWorld!ThisisPythonCode."
