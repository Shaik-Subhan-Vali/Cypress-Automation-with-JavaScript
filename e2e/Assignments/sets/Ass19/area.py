def calculate_area(length, width):
    return length * width

def calculate_perimeter(length, width):
    return 2 * (length + width)

l = 5
w = 3

area = calculate_area(l, w)
print("Area of the rectangle:", area)

perimeter = calculate_perimeter(l, w)
print("Perimeter of the rectangle:", perimeter)
