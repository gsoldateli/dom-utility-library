# Utility library to handle simple DOM tasks such as:

* getAncestorBySelector(element,cssSelector) : Find the first parent that matches the `cssSelector` query. Returns the parent that matches.
* getSiblingsBySelector(referenceElement,cssSelector) : Return all sibling elements relative to `referenceElement` node. Returns a siblings list.
* insertAfter(newElement,referenceElement) : Insert `newElement` after the `referenceElement`. Returns the new element.
* swapElements(a,b) : Swap two nodes.
* removeAll(cssSelector): Remove all elements from document tha match the css selector criteria.