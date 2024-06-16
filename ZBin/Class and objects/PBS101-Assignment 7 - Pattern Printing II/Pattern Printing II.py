def solve(N):
    for i in range(1, N + 1):
        spaces = N - i
        print(" " * spaces + "*" * (2 * i - 1))
    print (" "*(N//2+1) +"|")    
N = input("Enter your number: ")   #4    