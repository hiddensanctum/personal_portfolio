require "test_helper"

feature "Admin are able to create technology" do
  scenario "has a my name" do
    visit "http://localhost:3000/"
    page.text.must_include "James Chuang"
  end
end
