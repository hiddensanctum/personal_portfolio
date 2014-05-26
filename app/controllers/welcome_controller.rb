class WelcomeController < ApplicationController
	def index
    @project = Project.last
    @post = Post.last
    @page_title = 'Home'
	end
end
