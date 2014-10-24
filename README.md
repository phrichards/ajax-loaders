# AjaxLoaders.js

AjaxLoaders.js is a plugin that will add a CSS3 animation as a loading indicator when an Ajax call is made. 

The animations are those found in [SpinKit](https://github.com/tobiasahlin/SpinKit).

## Options

spinnerNumber: Choose one of eight available animations.

backgroundColor: Choose the color of the animation.

top & left: CSS top and left values can be passed in to change the positioning of the animations on the page.

## Usage

* Include `loaders.css` and `loaders.js` in your project.
* Add the class of "loading" to your body tag.
* Add the following element above your closing body tag: 
	
		<div class="overlay"></div>

* To call the plugin, attach it to the element that triggers your Ajax request. To use it with a button, for example, you'd use code like the following:

		$('myButton').on('click', function(){
			$(this).loaders({spinnerNumber: 6, backgroundColor: 'purple', top: '10%', left: '90%'});
			myAjaxCall();
		});	

## Examples

Examples are available at [http://www.phrichards.ca/ajaxloaders/](http://www.phrichards.ca/ajaxloaders/).

