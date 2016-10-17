class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :ccgs, :stageX, :nostage
  end
end
