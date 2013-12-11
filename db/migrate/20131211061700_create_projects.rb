class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :descripton
      t.string :technologies_used
      t.string :image

      t.timestamps
    end
  end
end
