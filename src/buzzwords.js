walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	// Which I stole from here:
	// https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
	var child, next;
	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
				while ( child ) 
				{
					next = child.nextSibling;
					walk(child);
					child = next;
				}
			break;
		case 3: // Text node
			deBullshit(node);
			break;
		}
}

function deBullshit(textNode) 
{
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
		replace(/\bcontent marketing\b/gi, "SEO FARMING");
}
