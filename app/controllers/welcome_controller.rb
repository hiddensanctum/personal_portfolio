class WelcomeController < ApplicationController
	def index
		@projects = Project.take(3)
	end
end
