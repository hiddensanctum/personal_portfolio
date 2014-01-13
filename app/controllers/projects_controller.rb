class ProjectsController < ApplicationController
	before_filter :authenticate_user!, except: [:index, :show]

  def index
    @projects = Project.all.order('created_at ASC')
  end

  def new
    @project = Project.new
  end

  def create
  	@project = Project.new(project_params)

		if @project.save
			redirect_to projects_path
		end
  end

  def edit
    @project = Project.find(params[:id])
  end

	def update
		@project = Project.find(params[:id])

		if @project.update_attributes(project_params)
			redirect_to projects_path
		end
	end

	def destroy
		@project = Project.find(params[:id])
		@project.destroy

		redirect_to projects_path
	end

	private
	def project_params
		params.require(:project).permit(:title, :description, :technologies_used, :image, :url, :github)
	end

end
