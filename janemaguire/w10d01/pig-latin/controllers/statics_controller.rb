require "sinatra"
require "sinatra/reloader" if development?

get "/" do
  @header = "Home"
  erb :home
end

post "/translation" do
  @words = params[:words]
  @translation = PigLatin.translate params[:words]
  erb :answer
end
