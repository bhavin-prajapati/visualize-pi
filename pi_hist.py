import math
import matplotlib
import numpy as np
import matplotlib.pyplot as plt

def make_pi():
    q, r, t, k, m, x = 1, 0, 1, 1, 3, 3
    for j in range(10000):
        if 4 * q + r - t < m * t:
            yield m
            q, r, t, k, m, x = 10*q, 10*(r-m*t), t, k, (10*(3*q+r))//t - 10*m, x
        else:
            q, r, t, k, m, x = q*k, (2*q+r)*x, t*x, k+1, (q*(7*k+2)+r*x)//(t*x), x+2

pi_array = []

for i in make_pi():
    pi_array.append(str(i))
    
data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
for i in pi_array:
    index = int(i)
    data[index] = data[index] + 1

print(pi_array)
print(data)

fig, axs = plt.subplots()
axs.hist(data, 10)

plt.show()