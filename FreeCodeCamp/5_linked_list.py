class Node:
    """
    An object for storing a single node of a linked list.
    Models two attributes - data and the link to the next node in the list
    run python -i <filename>
    """
    data= None 
    next_node= None
    def __init__(self,data):
        self.data = data
    # The repr() function returns a printable representation of the given object.
    def __repr__(self):
        return "<Node data: %s>" % self.data

# N1 = Node(10)
# N2 = Node(20)
# N1.next_node = N2
class LinkedList:
    """
    Singly linked list
    """
    def __init__(self):
        self.head = None
    def is_empty(self):
        return self.head == None
    def size(self): #conviniece method
        """
        Returns the number of nodes in the list 
        Takes O(n)
        """
        current = self.head
        count = 0

        while current:
            count += 1
            current = current.next_node
        return count
    def add(self, data):
        """ 
        Adds a new node at the head of the list of
        O(1) time
        """
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node
    def search(self,key):
        """
        Search for first node containing data that matches the key
        0(n) times

        """
        current = self.head
        while current:
            if current.data == key:
                return current
            else:
                current = current.next_node
        return None
    def insert(self, data, index):
        """ 
        Inserts a new node containing the given data at position index 
        Insertion takes O(1) time but finding the node at insertion point takes O(n) time
        therefore it takes an overall linear time
        """
        if index == 0:
            self.add(data)
        if index > 0 :
            new = Node(data)
            position = index 
            current = self.head
            while position > 1:
                current = node.next_node
                position -= 1
            prev_node = current
            next_node = current.next_node
            prev_node.next_node = new
            new.next_node = next_node
    def remove(self, key):
        """
        Removes Node containing data that matches the key
        Returns the node or `None` if key doesn't exist
        Takes O(n) time
        """
        current = self.head
        previous = None
        found = False

        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next_node
                self.__count -= 1
                return current
            elif current.data == key:
                found = True
                previous.next_node = current.next_node
                self.__count -= 1
                return current
            else:
                previous = current
                current = current.next_node

        return None

    
    def __repr__(self):
        """
        Return a string representation of the list
        """

        nodes = []
        current = self.head
        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return  '-> '.join(nodes)    


l = LinkedList()
l.add(1)
