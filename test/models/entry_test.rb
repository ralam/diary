# == Schema Information
#
# Table name: entries
#
#  id          :integer          not null, primary key
#  content     :text             not null
#  create_date :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#

require 'test_helper'

class EntryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
