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

    function swapElements(elementA, elementB) {
        var result=false;
        var cloneA = elementA.cloneNode(true);
        var cloneB = elementB.cloneNode(true);

        try {
            //Insert element placeholders into dom
            elementA.parentElement.insertBefore(cloneA,elementA);
            elementB.parentElement.insertBefore(cloneB,elementB);

            //Move the real elements
            cloneB.parentElement.insertBefore(elementA,cloneB);
            cloneA.parentElement.insertBefore(elementB,cloneA);
            
            result = true;
        }
        catch(err) {
            console.log(err.message);
            result = false;
        }


        //Remove placeholders;
        cloneA.remove();
        cloneB.remove();

        return result;
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
        swapElements: swapElements,
        removeAll: removeAll
    };

}(window));


