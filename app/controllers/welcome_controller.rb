class WelcomeController < ApplicationController
	def index
    @tskills = Tskill.all.order('created_at ASC')
    @project = Project.last
    @post = Post.last
    @page_title = 'Home'
    @hide_nav = true
	end
end
