class CcgsController < ApplicationController 
  
  def index
    @ccgs = Ccg.all
  end
  
  def create
    @ccg = Ccg.new(params[:ccg])
 
  @ccg.save
  redirect_to @ccg
  end
  
  def show
    @ccgs = Ccg.all
    @ccg = Ccg.find(params[:id])
  end
end
