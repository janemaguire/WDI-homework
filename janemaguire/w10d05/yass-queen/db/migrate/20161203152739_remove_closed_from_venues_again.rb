class RemoveClosedFromVenuesAgain < ActiveRecord::Migration[5.0]
  def change
    remove_column :venues, :closed
  end
end
