class AddOpenedToVenues < ActiveRecord::Migration[5.0]
  def change
    add_column :venues, :opened, :integer
  end
end
