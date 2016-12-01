class CreateBirds < ActiveRecord::Migration[5.0]
  def change
    create_table :birds do |t|
      t.string :name
      t.string :breed
      t.string :image
      t.integer :age
      t.string :toys

      t.timestamps
    end
  end
end
