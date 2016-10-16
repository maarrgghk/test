class CreateScns < ActiveRecord::Migration
  def change
    create_table :scns do |t|
      t.string :name
      t.integer :value

      t.timestamps null: false
    end
  end
end
