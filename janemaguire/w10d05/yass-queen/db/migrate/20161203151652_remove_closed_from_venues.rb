class RemoveClosedFromVenues < ActiveRecord::Migration[5.0]
  def change
    remove_column :venues, :closed, :string
  end
end
