class CreateCcgs < ActiveRecord::Migration
  def change
    create_table :ccgs do |t|
      t.string :name
      t.string :scn
      t.integer :pancreatic_incidence
      t.integer :all_incidence
      t.integer :pancreatic_mortality
      t.integer :all_mortality
      t.integer :stage1
      t.integer :stage2
      t.integer :stage3
      t.integer :stage4
      t.integer :stageX

      t.timestamps null: false
    end
  end
end
