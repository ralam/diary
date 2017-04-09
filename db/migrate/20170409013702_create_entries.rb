class CreateEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :entries do |t|
      t.text :content, null: false
      t.date :create_date, null: false
      t.timestamps
    end
  end
end
