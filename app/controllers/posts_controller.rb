class PostsController < ApplicationController
	before_filter :authenticate_user!, except: [:index, :show]

	def index
		@posts = policy_scope(Post).paginate(:page => params[:page], :per_page => 2)
	end

	def show
		@post = Post.find(params[:id])
	end

	def new
		@post = Post.new
	end

	def edit
		@post = Post.find(params[:id])
	end

	def create
		@post = Post.new(post_params)

		if @post.save
			redirect_to posts_path
		end
	end

	def update
		@post = Post.find(params[:id])

		if @post.update_attributes(post_params)
			redirect_to posts_path
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy

		redirect_to posts_path
	end

	private
	def post_params
		params.require(:post).permit(:title, :body, :published)
	end
end
