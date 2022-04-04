"""
An equivalent of arrays in py is a list. In python the elemnts are stored else where in memory .
so essentially the array stores the references to each element.
 
"""
new_list = [1,2,3]
# Access is a constant time operation on an array because of the calculations made to get an elemnt by its index and this is why you get errors when you try to access a an ndex that doesnt exist
# new_list[10] gives index array.

# Searching in an array
if 1 in new_list: print(True)
# the in operator calls the contains method on the array which runs a linear search.THough we can use a for loop that will manually go over the array.
for i in new_list:
    if i == 1: 
        print(True)
        break
# appending an element is a constant runtime operation
# prepending an element has a linear runtime since the list is iterated over and each elemnet is moveed one index forward 
new_list.extend([1,2,3])