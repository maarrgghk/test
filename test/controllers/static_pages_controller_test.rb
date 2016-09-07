require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get indicators" do
    get :indicators
    assert_response :success
  end

  test "should get background" do
    get :background
    assert_response :success
  end

end
