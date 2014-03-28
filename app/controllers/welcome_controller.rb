class WelcomeController < ApplicationController
	def index
    @tskills = Tskill.all.order('created_at ASC')
	end
end
