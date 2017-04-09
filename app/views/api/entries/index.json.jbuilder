@entries.each do |entry|
    json.set! entry.id do
        json.extract! entry, :id, :create_date
    end
end