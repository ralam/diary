namespace :db do
  desc "Reset guest user entries"
  task :reseed => :environment do 
    ActiveRecord::Base.connection.execute("DELETE FROM entries WHERE user_id = 2")
    Rake::Task["db:seed"].invoke
  end
end

