# [Algorithms and Data Structures Tutorial - Full Course for Beginners](https://youtu.be/8hly31xKli0)

### What is an algorithm

- A set of steps a program takes to complete a task.

### Understanding Algorithms

- Basically setting steps to solve a particular problem in the fastest and most _efficient_ way.

### Algorithmic Thinking

- Is breaking down a problem into steps and identifying the type of algorithm or data structures to use to solve the problem at hand. This is why they are included in coding interviews.

## Lets Play a guessing game 😂.

- I will play this with my friends Jack and Britney . So i ask Janice "I am thinking of a number (_answer is 3_) , can you guess it". she then asks if the number is between 1 and 10 (_He has now established the bounds of the problemset_) .
  When solving algorithms clearly define the problem set and the input values of the algorithm.
  Back to the game, she then asks is it one (_i say too low_) ,is it 2 (_to low_) ,is it 3 (_yes_) .
  I ask Britney the same question including the bounds of the number i am thinking of. She goes "Is it 2" (_too low_) is it 3 (_yes_) .

- So right now they both have the same number of iterations / turns. but if i make the number to be guessed slightly higher (_like 10_).He says is it 1 (_i say too low_) ,is it 2 (_to low_) ,is it 3 (_too low_) this goes on till he reaches 10.
  When i ask britney she goes is it 5 (_i say too low_), is it 8 (_i say too low_), is it 9 (_i say too low_), its 10 (_Correct_).

- So now we see Britneys strategy is way better because she took less turns.In the worst case senario(_10_) we notice that John is slower and takes 10 turns.if we play the same game with a range of 1 to 100 with 5 as the number.We notice that John takes 5 tries and Britney takes 7.Now if the number is 100 john takes 100 turns and britney takes 7 tries.
- Assuming this was facebook searching algorithm. How long would it take to find a username using either of the searches.
  |Approach | Search Algorithm used|
  |-----|-------|
  |John| linear Search or sequential Search or simple Search|
  |Brintney| Binary Search|

### linear Search algorithm

- library example
  teps

1.  Start at beginning
2.  Compare current values to target
3.  Move sequentially
4.  Reach end of list

# Algoritm Guide lines

# Efficiency

Efficiency is dettermined by space and time.

## Time Complexity

## Space complexity

- the amount of space it takes in memory.Its also measured by the worst case senario.Consider memory usage especially considering the size of the dataset(_n_) grows bigger.
- In [iterative binary search](./2_binary_search.py) the time complexity is constant space 0(1) because we are reassigning the variables on line 7 and 8. (_With sapce complexity we consider the amount of extra memory need for the algorithm to run_) so the value of the space n doesnot increase heance constant space.

- In [recursive binary search](./2_binary_search.py) In this
  func would call itself and get the midpoint it then checks whether its greater then the target and then it splits the list (n/2) so for each function call memory is alocated for the next split list (N --> N/2 --> N/4 ) hence logarithmic space (_but this depends on the language this is called TAIL OPTIMIZATION_)

# **Introduction To Data Structures**.

    A data storage format. It is the collection of values and the format they are stored in, the relationships between the values and the collection as well as the operations appplied on the data stored in the structure.

## Operations on Data Structures

- We need to be able to ;

1. Access and read values.
2. Search for arbitrary values.
3. Insert values at any point in the structure.
4. Delete values from the structure.

### **Arrays**

- is a data structure for storing more than one data item that has a similar data type
- In languages like java and swift they are homogenous containers(_contain one data type e.g._ `int[] age = {1,2,3,4,5}` ) and in python and javascript they are heterogenous structures( _contain one data type e.g._ `let age = [1,2,3,4,5]`).
- It is a contiguos data structure(stored in blocks beside each other with no gap so that retrieving the values is faster).
  ![array structure](https://www.guru99.com/images/1/102319_0559_ArrayinData1.png)

### Accessing a Value in an Array

- When an array is declared a base ammout of contiguos memory is allocated as the array storage.Computers refer to memory using an address but instead of keep a reference to all the memory allocated for an array, it only has to store the address of the first location .Because the memory is contiguous,using the base addresss the array can calculate the address of any of value by using the index position of the value as an offset.

```
 N = size of the array
 Space = N\*M (_M is memory allocated to each element_)
// so since it knows the size allocated to each element it can calculate the location for the next address.
M1 = 1*M
```

| Array  | 5   | 6   | 9   | 2   |
| ------ | --- | --- | --- | --- |
| Index  | 0   | 1   | 2   | 3   |
| memory | M0  | M1  | M2  | M3  |

[py example](./4_arrays.py)

## Lets build our data structure

- why? we build our own data structures to solve particular problems.
  now since arrays are bad at inserting and deleting.

### Linked List

- This is good when your operation has far more deletes and insertions than other operations.
- Is a linear data structure where each element is list is contained in a separate object (_node_). A node models two peices of information an individual item of the data we want to store and the reference to the next node in the list
- The first node is called the head and the last is called the tail.These nodes are special. the list only maintains the reference to the head although in some implementations it keep a referance to the tail aswell.The tail denoted the end and points to nothing.(nodes are self referantial objects --> meaning it includes a refereance to the node itself)
  ![linked list](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)
- They come in two forms _singly linked lists_(each node stores a reference to the next node in the list) and _double linked lists_(each node stores a reference to the node before or after ).
  [_check out the files_](./5_linked_list.py)

![Double linked list](https://sebhastian.com/doubly-linked-list-javascript/doubly-linked-list-example.png)

- Where to use them -->

## Merge-Sort Algorithm

- When you have an unsorted array, It is split into half and the two arrays .On the second pass they are split and we do that till each element has a single sub array.Then it merges two arrays close to each other in ascending order ,then cobines the next pairs next to each other and does this till its done.(_This strategy is called divide and conquer_)
  _[check files here (merge-sort on an array)](./6_merge-sort.py)_
- Merge sort on a [linked list](./7_linked_list_merge-sort.py).

## Sorting And Searching algorithms.

- To find the importance using a good search algorithm we start with a bad one.
- [Bogo Sort](./9_bogo_sort.py). Randomises the list of values until its sorted.
