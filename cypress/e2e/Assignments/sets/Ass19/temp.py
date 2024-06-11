def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

c = 20
f = 68

converted_fahrenheit = celsius_to_fahrenheit(c)
print("Celsius to Fahrenheit:", c, "C ->", converted_fahrenheit, "F")

converted_celsius = fahrenheit_to_celsius(f)
print("Fahrenheit to Celsius:", f, "F ->", converted_celsius, "C")
