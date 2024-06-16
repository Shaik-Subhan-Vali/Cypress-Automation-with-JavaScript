def wall(num1, num2):
    for row in range(num1):
        if row % 2 == 0:
            print("".join("[]" for _ in range(num2)))
        else:
            print(" " + "".join("[]" for _ in range(num2)))

    
    
