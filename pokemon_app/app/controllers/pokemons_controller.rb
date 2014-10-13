class PokemonsController < ApplicationController
  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  
  # filters out unwanted params
  def pokemon_params
    pokemon_params.require(:pokemon).permit(:name, :description)
  end

end
