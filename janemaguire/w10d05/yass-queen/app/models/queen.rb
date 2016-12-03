class Queen < ApplicationRecord
  has_and_belongs_to_many :venues
  has_and_belongs_to_many :users
end
