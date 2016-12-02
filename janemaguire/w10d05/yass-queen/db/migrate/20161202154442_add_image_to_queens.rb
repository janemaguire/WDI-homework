class AddImageToQueens < ActiveRecord::Migration[5.0]
  def change
    add_column :queens, :image, :string
  end
end
