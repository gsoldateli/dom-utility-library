(function (window) {
    'use strict';
    function getAncestorBySelector(elementNode, selectorCSS) {

    	//To each parent
    	while(elementNode = elementNode.parentElement) {

    		//Check if it matches the css selector
    		if(elementNode.matches(selectorCSS)) {
    			return elementNode;
    		}
    	}

    	return null;
    }

    function getSiblingsBySelector(elementNode, cssSelector) {
    	//If there is no parent element, there is no sibling
    	if(!elementNode.parentElement) {
    		return null;
    	}
    	
    	var siblings = elementNode.parentElement.children;
    	var collection = []; //Okay, this is not a collection.

    	for(var x=0; x<siblings.length; x++) {
    		var sibling = siblings[x];
    	
    		if( 
    			!elementNode.isSameNode(sibling)
    			&& sibling.matches(cssSelector)
			) 
    		{
    			collection.push(sibling);
    		}
    	}

    	return collection;
    }

    function insertAfter(newNode,refNode) {
        if(refNode && refNode.nextElementSibiling) {
            refNode.parentElement.insertBefore(newNode,refNode.nextElementSibiling);
        } else {
            refNode.parentElement.appendChild(newNode);
        }

        return newNode;
    }

    function removeAll(cssSelector) {
        var elements = document.querySelectorAll(cssSelector);
        var listRemovedElements = [];

        for(var i=0; i<elements.length; i++) {
            var element = elements[i];
            listRemovedElements.push(element);

            element.remove();
        }

        return listRemovedElements;
    }

    window.$DU = {
    	getAncestorBySelector: getAncestorBySelector,
    	getSiblingsBySelector: getSiblingsBySelector,
        insertAfter: insertAfter,
        removeAll: removeAll
    };

}(window));


