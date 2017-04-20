class AddIndexOnEntryUserId < ActiveRecord::Migration[5.0]
  def change
    add_index :entries, :user_id
    add_foreign_key :entries, :users
  end
end
