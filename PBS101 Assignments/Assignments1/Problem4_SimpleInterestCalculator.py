def solve(a, b, c):
    if a < 0 or b < 0 or c < 0:
        print("Invalid input, all values must be non-negative.")
    
    # Calculate simple interest
    simple_interest = (a * b * c) / 100
    
    # Print the result
    print("The simple interest is:", simple_interest)
    
# Prompting to input a
a = input("Enter your a: ")
# Prompting to input a
b = input("Enter your b: ")
# Prompting to input a
c = input("Enter your c: ")


#Simple interest calculator
solve(a, b, c)     