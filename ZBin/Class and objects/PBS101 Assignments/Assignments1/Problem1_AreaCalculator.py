def AreaOfTriangle(height, Base):
    
    if height >= 0 and Base >= 0:
        Area = (height * Base) / 2
        print("The area of the triangle is: " + str(Area))
    else:   
        print("Invalid input, base and height must be positive numbers.")

# Prompting to input height
height = float(input("Enter your height: "))

# Prompting to input Base
Base = float(input("Enter your Base: "))

# Calculate and print Area of traingle
AreaOfTriangle(height, Base)