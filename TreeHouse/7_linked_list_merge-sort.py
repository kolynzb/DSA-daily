from .linked_list import LinkedList

def merge_sort(linked_list):
    """ 
    Sorts a linked ist in ascending order 
    - Recusrsively divide the linked list into sublists containing a single node
    - Repeatly merge the  sublist to produce sorted lists until one remains until one remains 
    Returns a sorted linked list 
    """
    if linked_list.size() == 1:
        return linked_list
    elif linked_list.head is None:
        return linked_list

    lef_half,right_half 3:40:21

