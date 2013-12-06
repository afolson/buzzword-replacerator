// ==UserScript==
// @name        Buzzword Replacerator
// @namespace   https://github.com/afolson/buzzword-replacerator
// @description A UserScript port of the Google Chrome extension to replace buzzwords with more accurate words.
// @version     0.1.1
// @grant       none
// @include     *
// @match       http://*/*
// @match       https://*/*
// ==/UserScript==
// buzzword-replacerator - Replace common buzzwords with more accurate descriptions.
// Copyright (C) 2013  Amanda Folson <amanda@incredibl.org>
// Copyright (C) 2013  Louis T. <LouisT@ltdev.im>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
(function (){
    if (!('opera' in window) && !('chrome' in window)) {
        window.addEventListener('DOMContentLoaded', function(e) {
            walk(document.body);
        }, false);
     } else {
        // Opera and Chrome do not need to wait for DOMContentLoaded,
        // they run UserScripts after this by default.
        walk(document.body);
    };
    function walk (node) {
    	// I stole this function from here:
    	// http://is.gd/mwZp7E
    	// Which I stole from here:
    	// https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
        if (!node) { // The node does not exist, stop looking.
            return false;
        };
    	var child, next;
    	switch (node.nodeType) {
    		case 1:  // Element
    		case 9:  // Document
    		case 11: // Document fragment
    			child = node.firstChild; 
				while (child)  {
    					next = child.nextSibling;
    					walk(child);
    					child = next;
				};
    			break;
    		case 3: // Text node
    			deBullshit(node);
    			break;
		};
    };

    function deBullshit (textNode)  {
    	// Hi, I hope you like slow browsing experiences.
    	textNode.nodeValue = textNode.nodeValue.
    		replace(/\bsynergy\b/gi, "BULLSHIT").
    		replace(/\bthink outside the box\b/gi, "MAKE SHIT UP").
    		replace(/\benterprise\b/gi, "OLD FART").
    		replace(/\bdata scientist\b/gi, "NECK BEARD").
    		replace(/\bbig data\b/gi, "THE BIG D").
	       	replace(/\bthe cloud\b/gi, "THAT NEWFANGLED DATA STORE").
    		replace(/\bincrease roi\b/gi, "SPEND MORE MONEY").
    		replace(/\bclient[- ]centric\b/gi, "IDIOT PROOF").
    		replace(/\banalytics\b/gi, "STALKING COOKIES").
    		replace(/\binvested\b/gi, "PISSED AWAY").
    		replace(/\bdisruptive technology\b/gi, "NEW SHIT FROM TECH HIPSTERS").
    		replace(/\bcontent marketing\b/gi, "SEO FARMING").
    		replace(/\bmind map\b/gi, "BRAIN DIARRHEA").
    		replace(/\bseed funding\b/gi, "BLOOD MONEY");
    };
})();
