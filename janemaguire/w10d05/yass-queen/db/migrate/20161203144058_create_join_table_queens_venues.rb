class CreateJoinTableQueensVenues < ActiveRecord::Migration[5.0]
  def change
    create_join_table :queens, :venues do |t|
      # t.index [:queen_id, :venue_id]
      # t.index [:venue_id, :queen_id]
    end
  end
end
