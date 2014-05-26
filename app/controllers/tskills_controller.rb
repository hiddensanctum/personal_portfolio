class TskillsController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]

  def index
    @tskills = Tskill.all
  end

  def new
    @tskill =Tskill.new
  end

  def create
    @tskill = Tskill.new(tskill_params)

    if @tskill.save
      redirect_to posts_path
    end
  end

  def edit
    @tskill = Tskill.find(params[:id])
  end

  def update
    @tskill = Tskill.find(params[:id])

    if @tskill.update_attributes(tskill_params)
      redirect_to posts_path
    end
  end

  def destroy
    @tskill = Tskill.find(params[:id])
    @tskill.destroy

    redirect_to posts_path
  end

  private
  def tskill_params
    params.require(:tskill).permit(:name, :skill_icon, :exploring)
  end
end
