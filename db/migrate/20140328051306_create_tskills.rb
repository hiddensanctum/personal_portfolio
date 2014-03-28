class CreateTskills < ActiveRecord::Migration
  def change
    create_table :tskills do |t|
      t.string :name
      t.string :image
      t.boolean :exploring

      t.timestamps
    end
  end
end
