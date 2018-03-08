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
    }

    window.$DU = {
    	getAncestorBySelector: getAncestorBySelector
    };

}(window));


console.log($DU.getAncestorBySelector(document.querySelector('.intro'), 'body'));