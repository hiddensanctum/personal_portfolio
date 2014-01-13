class FixDescriptionToProjects < ActiveRecord::Migration
  def change
  	remove_column :projects, :descripton, :string
  end
end
