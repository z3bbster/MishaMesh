/** 
 * mQuery-mini by z3bbster
 *
 * Mini qjuery like functionality
 * 
 */
var $$ = mQuery = mQlite = function(){

	if (arguments.length == 0 || typeof arguments[0] !== 'string') {
		console.error('[mQuery-mini] No valid targets!');
		return;
	}

	var args = arguments, 											// Arguments object 
		converted_args = Array.prototype.slice.call(arguments),		// Convert it to a real Array
		target = args[0].split(','),								// Array of single/multi dom target(s)
		d = document; 				
	
	if (typeof window.angular == 'object') {
		if (target.length == 1) 
			return angular.element( d.querySelector(args[0]) ); 	// Single AngularJs DOM reference "div.class"
		if (target.length > 1) 
			return angular.element( d.querySelectorAll(args[0]) ); 	// Multiple AngularJs DOM reference ".note, #alert"
	};
	if (target.length == 1) return d.querySelector(args[0]); 		// Single DOM reference "div.class"
	if (target.length > 1) return d.querySelectorAll(args[0]); 		// Multiple DOM reference "div.note, div.alert"
}

$$.version = 'v0.1.0';

$$.addClass = function ( classname, element ) {
    var cn = element.className;
    console.log('cn: '+cn);
    //test for existance
    //if( cn.indexOf( classname ) != -1 ) return;
    //add a space if the element already has class
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}

$$.removeClass = function ( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

/*
	Code examples:
	var aa = $(11);
	var a = $('.main');
	$.addClass('red white',a);
	a.innerHTML ="<b>HELLO</b> WORLD FROM MQUERY!";
	var b = mQlite('.main1').innerHTML ="HELLO <b>WORLD</b> FROM MQUERY!";
	var c = mQuery('p.main2').innerHTML ="HELLO WORLD <b>FROM</b> MQUERY!";
	var d = $('p.main3').innerHTML ="HELLO WORLD FROM <b>MQUERY</b>!";
	 

	var e = $('p.main4, p.main5, p.main6, p.main7, p.main8');
	console.log(e);
	for (var i = 0; i < e.length; i++) {
		e[i].className += ' red';
		e[i].innerHTML ="MQUERY set all!";
	};
	console.log($$.version);
*/


