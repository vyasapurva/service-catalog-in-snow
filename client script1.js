// function onLoad() {
//     var itm = g_form.getValue('cat_item'); //catalog item
//     var itm_no = g_form.getValue('number');
//     var group = '';
//     var role_admin = g_user.hasRole('admin');
//     var role_po = g_user.hasRole('admin');

     var grApproval = new GlideRecord("sysapproval_group");
     grApproval.addQuery('parent.number', itm_no);
//     grApproval.query();
//     if (grApproval.next()) {
//         var agrp = grApproval.approval;
//         group = grApproval.assignment_group;
//     }

//     var ga = new GlideAjax('FIS_CheckUserInGroup');
//     ga.addParam('sysparm_name', 'useringroup');
     ga.addParam('sysparm_group', group);
     ga.getXML(checkuser);

     function checkuser(response) {
         var answer = response.responseXML.documentElement.getAttribute("answer");
         if (itm == '45c90aeddb9118d07e090e41ca9619e5' && answer == 'true' || (itm == '45c90aeddb9118d07e090e41ca9619e5' && (role_admin == true || role_po == true))) {

                 g_form.setReadOnly('variables.expiration_date', false);
                 var date = g_form.getValue("variables.expiration_date");

             } else {
                 g_form.setReadOnly('variables.expiration_date', true);
             }         }


    }
