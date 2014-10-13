class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

def create
    @pokemon = Pokemon.new(params[:pokemon]) #create a new pokemon
    @pokemon.save #save the pokemon
    redirect_to pokemon_path(@pokemon) # redirect to the show action
end
end
