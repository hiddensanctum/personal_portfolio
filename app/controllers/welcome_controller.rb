class WelcomeController < ApplicationController
	def index
    @tskills = Tskills.all.order('created_at ASC')
	end
end
