class PostPolicy < ApplicationPolicy
  attr_reader :user, :post

  def initialize(user, post)
    @user = user
    @post = post
  end

  def create?
    user.present?
  end

  def update?
    if user.present?
      return true if user.id == post.author_id
      user.editor?
    end
  end

  def destroy?
    if user.present?
      return true if user.editor?
    end
  end

  def publish?
    if user.present?
    end
  end

  class Scope < Struct.new(:user, :scope)
    def resolve
      if user.present?
        scope.all
      elsif user.present?
        scope.where(:author_id => user.id) | scope.published
      else
        scope.where(:published => true)
      end
    end
  end
end
