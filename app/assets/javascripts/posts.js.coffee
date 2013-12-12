ready = ->
	$(".fadeIn").each ->
  $this = $(this)
  $this.before "<div>&nbsp;</div>"
  $this.prev().remove()
  $this.fadeIn Math.floor(500)

$(document).ready(ready)
$(document).on('page:load', ready)
