class DeleteSlugFromUsers < ActiveRecord::Migration
  def change
  	remove_column :users, :slug, :string
  end
end
