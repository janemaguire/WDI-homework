require 'test_helper'

class QueensControllerTest < ActionDispatch::IntegrationTest
  setup do
    @queen = queens(:one)
  end

  test "should get index" do
    get queens_url
    assert_response :success
  end

  test "should get new" do
    get new_queen_url
    assert_response :success
  end

  test "should create queen" do
    assert_difference('Queen.count') do
      post queens_url, params: { queen: { catchphrases: @queen.catchphrases, description: @queen.description, hometown: @queen.hometown, name: @queen.name, nationality: @queen.nationality, website: @queen.website } }
    end

    assert_redirected_to queen_url(Queen.last)
  end

  test "should show queen" do
    get queen_url(@queen)
    assert_response :success
  end

  test "should get edit" do
    get edit_queen_url(@queen)
    assert_response :success
  end

  test "should update queen" do
    patch queen_url(@queen), params: { queen: { catchphrases: @queen.catchphrases, description: @queen.description, hometown: @queen.hometown, name: @queen.name, nationality: @queen.nationality, website: @queen.website } }
    assert_redirected_to queen_url(@queen)
  end

  test "should destroy queen" do
    assert_difference('Queen.count', -1) do
      delete queen_url(@queen)
    end

    assert_redirected_to queens_url
  end
end
