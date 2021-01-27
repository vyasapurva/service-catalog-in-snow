var CheckUserInGroup = Class.create();
FIS_CheckUserInGroup.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	
	useringroup : function(){
		
		var grp = this.getParameter('sysparm_group');
		
		if(gs.getUser().isMemberOf(grp))
			{
		return true;
			}
		else
			{
				return false;
			}
	},

    type: 'FIS_CheckUserInGroup'
});
