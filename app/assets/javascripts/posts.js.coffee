ready = ->
	$(".fadeIn").each ->
  $this = $(this)
  $this.before "<div>&nbsp;</div>"
  $this.prev().remove()
  $this.fadeIn Math.floor(Math.random() * 500)

$(document).ready(ready)
$(document).on('page:load', ready)
