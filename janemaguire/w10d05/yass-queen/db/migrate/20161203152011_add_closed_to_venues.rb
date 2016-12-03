class AddClosedToVenues < ActiveRecord::Migration[5.0]
  def change
    add_column :venues, :closed, :integer
  end
end
