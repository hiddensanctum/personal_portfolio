class ProjectsController < ApplicationController
	before_filter :authenticate_user!, except: [:index, :show]

  def index
    @projects = Project.all
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

  def show
    @project = Project.find(params[:id])
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
		params.require(:project).permit(:title, :description, :technologies_used, :image)
	end

end
