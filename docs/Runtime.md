

# Quick reminder of time complexity 

Big O time is the language and metric we use to describe the efficency of algorithms. 

| Time Complexity  | Common case  |
|-------|-------|
|  Constant time `O(1)` |  No matter how many elements we're working with, the algorithm will always take the same amount of time. ;  |
|  Logarithmic time `O(log n)`  |  You have this if doubling the number of elements you are iterarting over doesn't double the amount of work. You can always assume that searching operations are  time.   |
|  Linear time `O(n)` |  Iterarting trough all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have `o(n)` or linear time    |
|  Quasilinear time `O(n*log n)`  | You have this if doubling the number of elements you are iterating over doesn't double the amount of work, but also you add some extra work. You can find this with sorting operations (I.e Merge sort).  
|  Quadratic time `O(n^2)`  |  Every element in a collection has to be compared to every other element. I.e: 'The handshake problem'
| Exponential Time `O(2^n)`| You add a 'single' element to a collection, the proccessing power required doubles. 
