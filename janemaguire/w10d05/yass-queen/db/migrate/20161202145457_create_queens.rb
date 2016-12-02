class CreateQueens < ActiveRecord::Migration[5.0]
  def change
    create_table :queens do |t|
      t.string :name
      t.text :description
      t.string :nationality
      t.string :hometown
      t.text :catchphrases
      t.string :website

      t.timestamps
    end
  end
end
