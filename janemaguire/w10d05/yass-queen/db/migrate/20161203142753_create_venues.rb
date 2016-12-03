class CreateVenues < ActiveRecord::Migration[5.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :image
      t.string :city
      t.string :country
      t.date :opened
      t.date :closed

      t.timestamps
    end
  end
end
