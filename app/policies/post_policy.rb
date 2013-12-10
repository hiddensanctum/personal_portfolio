class PostPolicy < ApplicationPolicy
  attr_reader :user, :post

  def initialize(user, post)
    @user = user
    @post = post
  end

  def create?
    if user.present?
      user.admin?
    end
  end

  def update?
    if user.present?
      user.admin?
    end
  end

  def destroy?
    if user.present?
      user.admin?
    end
  end

  def publish?
    if user.present?
      user.admin?
    end
  end

  class Scope < Struct.new(:user, :scope)
    def resolve
      if user.present? && user.admin?
        scope.all
      else
        scope.where(:published => true)
      end
    end
  end
end
