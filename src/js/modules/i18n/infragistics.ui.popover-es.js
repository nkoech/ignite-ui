﻿/*!@license
* Infragistics.Web.ClientUI Popover localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function ($) {
$.ig = $.ig || {};

if (!$.ig.Popover) {
	$.ig.Popover = {};

	$.extend( $.ig.Popover, {
		locale: {
			popoverOptionChangeNotSupported: "No se admite el cambio de la siguiente opción después de inicializar igPopover:",
			popoverShowMethodWithoutTarget: "El parámetro target de la función show es obligatorio cuando se utiliza la opción selectors"
		}
	});

}
})(jQuery);
