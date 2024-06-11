def solve(N):
    N = int(N)
    for i in range(2*N+1, 0, -2):
        spaces = (2*N+1 - i) // 2
        if i==2*N+1:
            print(" "+"***"+"   "+"***"+" ")
            print("*****"+" "+"*****")    
        else:
            row = " " * spaces + "*" * i + " " * spaces
            print(row)
N = input("Enter your number: ")   #5      