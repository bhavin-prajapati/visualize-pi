import turtle
import math

myPen = turtle.Turtle()
myPen.speed(1000)
myPen.goto(0,0)
myPen.color("#000000")
myPen.pensize(10)
style = ('Courier', 5)

def make_pi():
    q, r, t, k, m, x = 1, 0, 1, 1, 3, 3
    for j in range(3000):
        if 4 * q + r - t < m * t:
            yield m
            q, r, t, k, m, x = 10*q, 10*(r-m*t), t, k, (10*(3*q+r))//t - 10*m, x
        else:
            q, r, t, k, m, x = q*k, (2*q+r)*x, t*x, k+1, (q*(7*k+2)+r*x)//(t*x), x+2

pi_array = []

for i in make_pi():
    pi_array.append(str(i))
    
size=5
for i in range(0,3000):  
   myPen.forward(size)
   myPen.left(33)
   size = size + (i%9 == 0)
   myPen.color(0,  255*(int(pi_array[i]) / 10), 255*(int(pi_array[i]) / 10))
