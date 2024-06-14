def generate_matrix(n):
    matrix = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            matrix[i][j] = (i + 1) * (j + 1)
    return matrix

def spiral_traversal(matrix):
    result = []
    while matrix:
        # Traverse right
        result.extend(matrix.pop(0))
        # Traverse down
        if matrix and matrix[0]:
            for row in matrix:
                result.append(row.pop())
        # Traverse left
        if matrix:
            result.extend(matrix.pop()[::-1])
        # Traverse up
        if matrix and matrix[0]:
            for row in matrix[::-1]:
                result.append(row.pop(0))
    return result

def print_matrix(matrix):
    for row in matrix:
        print(row)

n = int(input("Enter the size of the matrix: "))
matrix = generate_matrix(n)
print("Generated Matrix:")
print_matrix(matrix)
print("Spiral Traversal:")
print(spiral_traversal(matrix))
