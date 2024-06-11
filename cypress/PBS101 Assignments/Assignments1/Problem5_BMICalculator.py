def calculate_bmi(weight, height):
    # Check if weight and height are positive numbers
    if weight <= 0 or height <= 0:
        print("Invalid input, weight and height must be positive numbers.")
        return
    
    # Check if height is zero
    if height == 0:
        print("Invalid input, height cannot be zero.")
        return
    
    # Calculate BMI
    bmi = weight / (height * height)
    
    # Print the result
    print("Your BMI is: {:.2f}".format(bmi))


# Prompt the user to input weight in kilograms
weight = float(input("Enter your weight in kilograms: "))

# Prompt the user to input height in meters
height = float(input("Enter your height in meters: "))

# Calculate and print BMI
calculate_bmi(weight, height)
