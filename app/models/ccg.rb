class Ccg < ActiveRecord::Base
  
  def ccg_params
    params.require(:ccg).permit(:name, :scn, :pancreatic_incidence, :all_incidence, :pancreatic_mortality, :all_mortality,:stage1, :stage2, :stage3, :stage4, :stageX)
  end
end
