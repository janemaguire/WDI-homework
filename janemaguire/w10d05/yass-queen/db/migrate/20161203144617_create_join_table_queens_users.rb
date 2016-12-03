class CreateJoinTableQueensUsers < ActiveRecord::Migration[5.0]
  def change
    create_join_table :queens, :users do |t|
      # t.index [:queen_id, :user_id]
      # t.index [:user_id, :queen_id]
    end
  end
end
