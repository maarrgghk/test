require 'csv'
desc "Imports a CSV file into an ActiveRecord table"
task :import, [:filename] => :environment do    
    CSV.foreach("#{Rails.root}/public/ccg.csv", :headers => true) do |row|
      Ccg.create!(row.to_hash)
    end
end