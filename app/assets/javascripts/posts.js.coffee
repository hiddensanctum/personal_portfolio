ready = ->
	$("#fade").addClass("load")

$(document).ready(ready)
$(document).on('page:load', ready)
