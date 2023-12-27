def high_order_sum(value1, value2, value3, operation):
    return operation(value1, value2, value3)

def sum_three_values(a, b, c):
    return a + b + c

# Uso da função de alta ordem
result = high_order_sum(10, 5, 8, sum_three_values)
print(result)  # Saída: 23
