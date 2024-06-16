def is_armstrong(number):
    # Store the original number for comparison later
    original = number

    # Calculate the number of digits
    number_of_digits = 0
    temp = number
    while temp != 0:
        temp //= 10
        number_of_digits += 1

    # Calculate the Armstrong sum
    armstrong_sum = 0
    temp = number
    while temp != 0:
        remainder = temp % 10
        armstrong_sum += remainder ** number_of_digits
        temp //= 10

    # Check if the calculated sum is equal to the original number
    if armstrong_sum == original:
        return f"{original} is an Armstrong number."
    else:
        return f"{original} is not an Armstrong number."


# Example usage
print(is_armstrong(153))  # 153 is an Armstrong number
print(is_armstrong(9474))  # 9474 is an Armstrong number
print(is_armstrong(9475))  # 9475 is not an Armstrong number
