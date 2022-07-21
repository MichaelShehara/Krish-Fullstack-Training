var head;
  
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
  
    /* Function to reverse the linked list */
    function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }
  
    // prints content of linked list
    function printList(node) {
        while (node != null) {
            console.log(node.data + " ");
            node = node.next;
        }
    }

    // Checks whether the reversed linked list is palindrome
    function isPalindrome(head) {
  
        var value = head;
                var ispalin = true;
                var stack = [];
          
                while (value != null) {
                    stack.push(value.data);
                    value = value.next; 
                }
          
                while (head != null) {
          
                    var i = stack.pop();
                    if (head.data == i) {
                        ispalin = true;
                    } else {
                        ispalin = false;
                        break;
                    }
                    head = head.next;
                }
                return ispalin;
    }
  
      
        head = new Node(10);
        head.next = new Node(20);
        head.next.next = new Node(30);
        head.next.next.next = new Node(40);
  
        console.log("Given Linked list");
        printList(head);
        head = reverse(head);
        console.log("Reversed linked list");
        printList(head);
        console.log("Is the Reversed linked list a palindrome:" + " " + isPalindrome(head));