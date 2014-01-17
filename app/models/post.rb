class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: [:slugged, :finders]
	acts_as_taggable

	def should_generate_new_friendly_id?
  	slug.blank? || title_changed?
	end
end
