def calculate_final_price(price):
    if price < 0:
        print("Invalid input, the price must be a non-negative number.")
    if price > 20:
        fp = price * 0.9  # 10% discount applied
    else:
        fp = price  # No discount applied

    print("The final price of the item is:", fp)

# Prompting to input price
price = input("Enter your price: ")

# Calculate final price
calculate_final_price(price)    