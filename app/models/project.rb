class Project < ActiveRecord::Base
	mount_uploader :image, ImageUploader
end
