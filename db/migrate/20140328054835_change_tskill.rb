class ChangeTskill < ActiveRecord::Migration
  def change
    remove_column :tskills, :image, :string
    add_column :tskills, :skill_icon, :string
  end
end
