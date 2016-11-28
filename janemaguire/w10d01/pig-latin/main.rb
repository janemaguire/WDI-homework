require "sinatra"
require "sinatra/reloader" if development?

require_relative "controllers/statics_controller"
require_relative "models/pig_latin"
