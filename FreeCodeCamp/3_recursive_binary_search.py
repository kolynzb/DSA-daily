"""
returns false if target is absent and true when present
recursive depth - number of recursion levels
py prefers an iterative soln.
this is supportted in languages like swift
""" 
def recursive_binary_search(list,target):
    if len(list) == 0:
         return False
    else:
        midpoint = (len(list))//2

        if list[midpoint] == target:
            return True
        else:
            if list[midpoint] < target:
                return recursive_binary_search(list[midpoint+1:], target)
            else :
                return recursive_binary_search(list[:midpoint-1], target)

print(recursive_binary_search([1,2,3,4,5,6,7,8,9,10],12))