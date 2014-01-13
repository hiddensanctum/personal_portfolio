class AddDescriptionToProjectsAgain < ActiveRecord::Migration
  def change
  	remove_column :projects, :description, :string
    add_column :projects, :description, :text
  end
end
