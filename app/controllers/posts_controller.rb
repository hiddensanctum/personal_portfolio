class PostsController < ApplicationController
	before_filter :authenticate_user!, except: [:index, :show]

	def index
		if current_user.present?
			@posts = policy_scope(Post).order('created_at DESC')
			render 'admin'
		else
			if params[:tag]
	    	@posts = policy_scope(Post).order('created_at DESC').tagged_with(params[:tag]).paginate(:page => params[:page], :per_page => 3)
	  	else
	    	@posts = policy_scope(Post).order('created_at DESC').paginate(:page => params[:page], :per_page => 3)
	  	end
	  end
	end

	def show
		@post = Post.find(params[:id])

		if request.path != post_path(@post)
	    redirect_to @post, status: :moved_permanently
	  end
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
		params.require(:post).permit(:title, :body, :published, :tag_list)
	end
end
