class RemoveColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :venues, :opened
  end
end
