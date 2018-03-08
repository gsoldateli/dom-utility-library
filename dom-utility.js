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

    window.$DU = {
    	getAncestorBySelector: getAncestorBySelector,
    	getSiblingsBySelector: getSiblingsBySelector
    };

}(window));


console.log($DU.getAncestorBySelector(document.querySelector('.intro'), 'body'));