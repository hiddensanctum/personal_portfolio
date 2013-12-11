class AddDescriptionToProjects < ActiveRecord::Migration
  def change
  	remove_column :projects, :descripton, :string
  	add_column :projects, :description, :string
  end
end
