import{a as C,b as ve}from"./chunk-FAYPD6XW.js";import{e as A,f as de}from"./chunk-QLYKJOXW.js";import{a as se,b as N,c as v,d as T,e as S,h as R,i as K,j as M,k as I,l as L,m as U,n as J,o as pe,p as ce,q as $,s as ue}from"./chunk-IEEKXR5F.js";import"./chunk-RQFMUMHO.js";import{$ as G,$a as j,Aa as m,Ab as W,Cb as h,Ga as e,Ha as t,Hb as me,Ia as a,Ja as u,Ka as d,Ma as P,Oa as z,Pa as g,U as B,Za as n,Zb as fe,_ as b,a as F,bc as le,da as D,ea as q,i as k,ib as Y,jb as x,oa as l,pa as V,ya as c}from"./chunk-L3PLJJSQ.js";var Q={accountType:"personal",accountTeamSize:"50+",accountName:"",accountPlan:"1",businessName:"Keenthemes Inc.",businessDescriptor:"KEENTHEMES",businessType:"1",businessDescription:"",businessEmail:"corp@support.com",nameOnCard:"Max Doe",cardNumber:"4111 1111 1111 1111",cardExpiryMonth:"1",cardExpiryYear:"2",cardCvv:"123",saveCard:"1"};var Z=(()=>{class i{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(r){this.fb=r}ngOnInit(){this.initForm(),this.updateParentModel({},!0)}initForm(){this.form=this.fb.group({accountType:[this.defaultValues.accountType,[v.required]]});let r=this.form.valueChanges.subscribe(s=>{this.updateParentModel(s,!0)});this.unsubscribe.push(r)}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe())}static \u0275fac=function(s){return new(s||i)(V($))};static \u0275cmp=b({type:i,selectors:[["app-step1"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:30,vars:1,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","d-flex","align-items-center","text-gray-900"],["ngbTooltip","Billing is issued based on your selected account type",1,"fas","fa-exclamation-circle","ms-2","fs-7"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[1,"fv-row",3,"formGroup"],[1,"row"],[1,"col-lg-6"],["formControlName","accountType","name","accountType","type","radio","id","kt_create_account_form_account_type_personal","value","personal",1,"btn-check"],["for","kt_create_account_form_account_type_personal",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","p-7","d-flex","align-items-center","mb-10"],["name","address-book",1,"fs-1","me-5"],[1,"d-block","fw-bold","text-start"],[1,"text-gray-900","fw-bolder","d-block","fs-4","mb-2"],["formControlName","accountType","name","accountType","type","radio","id","kt_create_account_form_account_type_corporate","value","corporate",1,"btn-check"],["for","kt_create_account_form_account_type_corporate",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","p-7","d-flex","align-items-center"],["name","briefcase",1,"fs-1","me-5"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(s,o){s&1&&(e(0,"div",0)(1,"h2",1),n(2," Choose Account Type "),a(3,"i",2),t(),e(4,"div",3),n(5," If you need more info, please check out "),e(6,"a",4),n(7," Help Page "),t(),n(8," . "),t()(),e(9,"div",5)(10,"div",6)(11,"div",7),a(12,"input",8),e(13,"label",9),a(14,"app-keenicon",10),e(15,"span",11)(16,"span",12),n(17,"Personal Account"),t(),e(18,"span",3),n(19," If you need more info, please check it out "),t()()()(),e(20,"div",7),a(21,"input",13),e(22,"label",14),a(23,"app-keenicon",15),e(24,"span",11)(25,"span",12),n(26,"Corporate Account"),t(),e(27,"span",3),n(28," Create corporate account to mane users "),t()()()(),a(29,"div",16),t()()),s&2&&(l(9),m("formGroup",o.form))},dependencies:[N,K,T,S,M,I,A,C],encapsulation:2})}return i})();function ke(i,p){i&1&&(e(0,"div",42),n(1," Team Account name is required "),t())}var te=(()=>{class i{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(r){this.fb=r}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({accountTeamSize:[this.defaultValues.accountTeamSize,[v.required]],accountName:[this.defaultValues.accountName,[v.required]],accountPlan:[this.defaultValues.accountPlan,[v.required]]});let r=this.form.valueChanges.subscribe(s=>{this.updateParentModel(s,this.checkForm())});this.unsubscribe.push(r)}checkForm(){return!this.form.get("accountName")?.hasError("required")}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe())}static \u0275fac=function(s){return new(s||i)(V($))};static \u0275cmp=b({type:i,selectors:[["app-step2"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:82,vars:2,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[3,"formGroup"],[1,"mb-10","fv-row"],[1,"d-flex","align-items-center","form-label","mb-3"],["ngbTooltip","Provide your team size to help us setup your billing",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["data-kt-buttons","true",1,"row","mb-2"],[1,"col"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_1","value","1-1",1,"btn-check"],["for","kt_account_team_size_select_1",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],[1,"fw-bolder","fs-3"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_2","value","2-10",1,"btn-check"],["for","kt_account_team_size_select_2",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_3","value","10-50",1,"btn-check"],["for","kt_account_team_size_select_3",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],["formControlName","accountTeamSize","type","radio","id","kt_account_team_size_select_4","value","50+",1,"btn-check"],["for","kt_account_team_size_select_4",1,"btn","btn-outline","btn-outline-dashed","btn-outline-default","w-100","p-4"],[1,"form-text"],[1,"form-label","mb-3","required"],["formControlName","accountName","type","text","placeholder","Team Account name",1,"form-control","form-control-lg","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"mb-0","fv-row"],[1,"d-flex","align-items-center","form-label","mb-5"],["ngbTooltip","Monthly billing will be based on your account plan",1,"fas","fa-exclamation-circle","ms-2","fs-7"],[1,"mb-0"],[1,"d-flex","flex-stack","mb-5","cursor-pointer"],[1,"d-flex","align-items-center","me-2"],[1,"symbol","symbol-50px","me-6"],[1,"symbol-label"],["name","bank",1,"fs-1"],[1,"d-flex","flex-column"],[1,"fw-bolder","text-gray-800","text-hover-primary","fs-5"],[1,"fs-6","fw-bold","text-gray-500"],[1,"form-check","form-check-custom","form-check-solid"],["formControlName","accountPlan","type","radio","value","1",1,"form-check-input"],["name","chart",1,"fs-1"],["formControlName","accountPlan","type","radio","value","2",1,"form-check-input"],[1,"d-flex","flex-stack","mb-0","cursor-pointer"],["name","chart-pie-4",1,"fs-1"],["formControlName","accountPlan","type","radio","value","3",1,"form-check-input"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(s,o){if(s&1&&(e(0,"div",0)(1,"h2",1),n(2,"Account Info"),t(),e(3,"div",2),n(4," If you need more info, please check out "),e(5,"a",3),n(6," Help Page"),t(),n(7,". "),t()(),e(8,"div",4)(9,"div",5)(10,"label",6),n(11," Specify Team Size"),a(12,"i",7),t(),e(13,"div",8)(14,"div",9),a(15,"input",10),e(16,"label",11)(17,"span",12),n(18,"1-1"),t()()(),e(19,"div",9),a(20,"input",13),e(21,"label",14)(22,"span",12),n(23,"2-10"),t()()(),e(24,"div",9),a(25,"input",15),e(26,"label",16)(27,"span",12),n(28,"10-50"),t()()(),e(29,"div",9),a(30,"input",17),e(31,"label",18)(32,"span",12),n(33,"50+"),t()()()(),e(34,"div",19),n(35," Customers will see this shortened version of your statement descriptor "),t()(),e(36,"div",5)(37,"label",20),n(38,"Team Account Name"),t(),a(39,"input",21),c(40,ke,2,0,"div",22),t(),e(41,"div",23)(42,"label",24),n(43," Select Account Plan"),a(44,"i",25),t(),e(45,"div",26)(46,"label",27)(47,"span",28)(48,"span",29)(49,"span",30),a(50,"app-keenicon",31),t()(),e(51,"span",32)(52,"span",33),n(53," Company Account "),t(),e(54,"span",34),n(55," Use images to enhance your post flow "),t()()(),e(56,"span",35),a(57,"input",36),t()(),e(58,"label",27)(59,"span",28)(60,"span",29)(61,"span",30),a(62,"app-keenicon",37),t()(),e(63,"span",32)(64,"span",33),n(65," Developer Account "),t(),e(66,"span",34),n(67," Use images to your post time "),t()()(),e(68,"span",35),a(69,"input",38),t()(),e(70,"label",39)(71,"span",28)(72,"span",29)(73,"span",30),a(74,"app-keenicon",40),t()(),e(75,"span",32)(76,"span",33),n(77," Testing Account "),t(),e(78,"span",34),n(79," Use images to enhance time travel rivers "),t()()(),e(80,"span",35),a(81,"input",41),t()()()()()),s&2){let f;l(8),m("formGroup",o.form),l(32),m("ngIf",((f=o.form.get("accountName"))==null?null:f.hasError("required"))&&((f=o.form.get("accountName"))==null?null:f.touched))}},dependencies:[h,N,K,T,S,M,I,A,C],encapsulation:2})}return i})();function Ve(i,p){i&1&&(e(0,"div",24),n(1," Business Name is required "),t())}function Ne(i,p){i&1&&(e(0,"div",24),n(1," Shortened Descriptor is required "),t())}function Te(i,p){i&1&&(e(0,"div",24),n(1," Contact Email is required "),t())}function Me(i,p){i&1&&(e(0,"div",24),n(1," Wrong email format "),t())}var ne=(()=>{class i{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(r){this.fb=r}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({businessName:[this.defaultValues.businessName,[v.required]],businessDescriptor:[this.defaultValues.businessDescriptor,[v.required]],businessType:[this.defaultValues.businessType,[v.required]],businessDescription:[this.defaultValues.businessDescription],businessEmail:[this.defaultValues.businessEmail,[v.required,v.email]]});let r=this.form.valueChanges.subscribe(s=>{this.updateParentModel(s,this.checkForm())});this.unsubscribe.push(r)}checkForm(){return!(this.form.get("businessName")?.hasError("required")||this.form.get("businessDescriptor")?.hasError("required")||this.form.get("businessType")?.hasError("required")||this.form.get("businessEmail")?.hasError("required")||this.form.get("businessEmail")?.hasError("email"))}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe())}static \u0275fac=function(s){return new(s||i)(V($))};static \u0275cmp=b({type:i,selectors:[["app-step3"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:48,vars:5,consts:[[1,"pb-10","pb-lg-12"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"link-primary","fw-bolder"],[3,"formGroup"],[1,"fv-row","mb-10"],[1,"form-label","required"],["name","businessName","formControlName","businessName",1,"form-control","form-control-lg","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"d-flex","align-items-center","form-label"],[1,"required"],["name","businessDescriptor","formControlName","businessDescriptor",1,"form-control","form-control-lg","form-control-solid"],[1,"form-text"],["name","businessType","formControlName","businessType",1,"form-select","form-select-lg","form-select-solid"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],[1,"form-label"],["name","businessDescription","rows","3","formControlName","businessDescription",1,"form-control","form-control-lg","form-control-solid"],[1,"fv-row","mb-0"],[1,"fs-6","fw-bold","form-label","required"],["name","businessEmail","formControlName","businessEmail",1,"form-control","form-control-lg","form-control-solid"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(s,o){if(s&1&&(e(0,"div",0)(1,"h2",1),n(2,"Business Details"),t(),e(3,"div",2),n(4," If you need more info, please check out "),e(5,"a",3),n(6,"Help Page"),t(),n(7,". "),t()(),e(8,"div",4)(9,"div",5)(10,"label",6),n(11,"Business Name"),t(),a(12,"input",7),c(13,Ve,2,0,"div",8),t(),e(14,"div",5)(15,"label",9)(16,"span",10),n(17,"Shortened Descriptor"),t()(),a(18,"input",11),c(19,Ne,2,0,"div",8),e(20,"div",12),n(21," Customers will see this shortened version of your statement descriptor "),t()(),e(22,"div",5)(23,"label",6),n(24,"Corporation Type"),t(),e(25,"select",13)(26,"option",14),n(27,"S Corporation"),t(),e(28,"option",14),n(29,"C Corporation"),t(),e(30,"option",15),n(31,"Sole Proprietorship"),t(),e(32,"option",16),n(33,"Non-profit"),t(),e(34,"option",17),n(35,"Limited Liability"),t(),e(36,"option",18),n(37,"General Partnership"),t()()(),e(38,"div",5)(39,"label",19),n(40,"Business Description"),t(),a(41,"textarea",20),t(),e(42,"div",21)(43,"label",22),n(44,"Contact Email"),t(),a(45,"input",23),c(46,Te,2,0,"div",8)(47,Me,2,0,"div",8),t()()),s&2){let f,_,E,y;l(8),m("formGroup",o.form),l(5),m("ngIf",((f=o.form.get("businessName"))==null?null:f.hasError("required"))&&((f=o.form.get("businessName"))==null?null:f.touched)),l(6),m("ngIf",((_=o.form.get("businessDescriptor"))==null?null:_.hasError("required"))&&((_=o.form.get("businessDescriptor"))==null?null:_.touched)),l(27),m("ngIf",((E=o.form.get("businessEmail"))==null?null:E.hasError("required"))&&((E=o.form.get("businessEmail"))==null?null:E.touched)),l(),m("ngIf",((y=o.form.get("businessEmail"))==null?null:y.hasError("email"))&&((y=o.form.get("businessEmail"))==null?null:y.touched))}},dependencies:[h,U,J,N,L,T,S,M,I],encapsulation:2})}return i})();function Ie(i,p){i&1&&(e(0,"div",59),n(1," Name on card is required "),t())}function $e(i,p){i&1&&(e(0,"div",59),n(1," Card number is required "),t())}function Fe(i,p){i&1&&(e(0,"div",59),n(1," Expiration month is required "),t())}function De(i,p){i&1&&(e(0,"div",59),n(1," Expiration year is required "),t())}function qe(i,p){i&1&&(e(0,"div",59),n(1," CVV is required "),t())}var ie=(()=>{class i{fb;updateParentModel;form;defaultValues;unsubscribe=[];constructor(r){this.fb=r}ngOnInit(){this.initForm(),this.updateParentModel({},this.checkForm())}initForm(){this.form=this.fb.group({nameOnCard:[this.defaultValues.nameOnCard,[v.required]],cardNumber:[this.defaultValues.cardNumber,[v.required]],cardExpiryMonth:[this.defaultValues.cardExpiryMonth,[v.required]],cardExpiryYear:[this.defaultValues.cardExpiryYear,[v.required]],cardCvv:[this.defaultValues.cardCvv,[v.required]],saveCard:["1"]});let r=this.form.valueChanges.subscribe(s=>{this.updateParentModel(s,this.checkForm())});this.unsubscribe.push(r)}checkForm(){return!(this.form.get("nameOnCard")?.hasError("required")||this.form.get("cardNumber")?.hasError("required")||this.form.get("cardExpiryMonth")?.hasError("required")||this.form.get("cardExpiryYear")?.hasError("required")||this.form.get("cardCvv")?.hasError("required"))}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe())}static \u0275fac=function(s){return new(s||i)(V($))};static \u0275cmp=b({type:i,selectors:[["app-step4"]],inputs:{updateParentModel:"updateParentModel",defaultValues:"defaultValues"},decls:105,vars:6,consts:[[1,"pb-10","pb-lg-15"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],["href","#",1,"text-primary","fw-bolder"],[3,"formGroup"],[1,"d-flex","flex-column","mb-7","fv-row"],[1,"d-flex","align-items-center","fs-6","fw-bold","form-label","mb-2"],[1,"required"],["ngbTooltip","Specify a card holder's name",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["formControlName","nameOnCard","type","text","placeholder","Name on card",1,"form-control","form-control-solid"],["class","fv-plugins-message-container invalid-feedback",4,"ngIf"],[1,"required","fs-6","fw-bold","form-label","mb-2"],[1,"position-relative"],["formControlName","cardNumber","type","text","placeholder","Enter card number",1,"form-control","form-control-solid"],[1,"position-absolute","translate-middle-y","top-50","end-0","me-5"],["src","./assets/media/svg/card-logos/visa.svg","alt","",1,"h-25px"],["src","./assets/media/svg/card-logos/mastercard.svg","alt","",1,"h-25px"],["src","./assets/media/svg/card-logos/american-express.svg","alt","",1,"h-25px"],[1,"row","mb-10"],[1,"col-md-8","fv-row"],[1,"row","fv-row"],[1,"col-6"],["formControlName","cardExpiryMonth",1,"form-select","form-select-solid"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["value","7"],["value","8"],["value","9"],["value","10"],["value","11"],["value","12"],["formControlName","cardExpiryYear",1,"form-select","form-select-solid"],["value","2021"],["value","2022"],["value","2023"],["value","2024"],["value","2025"],["value","2026"],["value","2027"],["value","2028"],["value","2029"],["value","2030"],["value","2031"],[1,"col-md-4","fv-row"],["ngbTooltip","Enter a card CVV code",1,"fas","fa-exclamation-circle","ms-2","fs-7"],["formControlName","cardCvv","type","text","minlength","3","maxlength","4","placeholder","CVV",1,"form-control","form-control-solid"],[1,"position-absolute","translate-middle-y","top-50","end-0","me-3"],["name","credit-cart",1,"fs-1"],[1,"d-flex","flex-stack"],[1,"me-5"],[1,"fs-6","fw-bold","form-label"],[1,"fs-7","fw-bold","text-gray-500"],[1,"form-check","form-switch","form-check-custom","form-check-solid"],["formControlName","saveCard","type","checkbox","value","1",1,"form-check-input"],[1,"form-check-label","fw-bold","text-gray-500"],[1,"fv-plugins-message-container","invalid-feedback"]],template:function(s,o){if(s&1&&(e(0,"div",0)(1,"h2",1),n(2,"Billing Details"),t(),e(3,"div",2),n(4," If you need more info, please check out "),e(5,"a",3),n(6,"Help Page"),t(),n(7,". "),t()(),e(8,"div",4)(9,"div",5)(10,"label",6)(11,"span",7),n(12,"Name On Card"),t(),a(13,"i",8),t(),a(14,"input",9),c(15,Ie,2,0,"div",10),t(),e(16,"div",5)(17,"label",11),n(18,"Card Number"),t(),e(19,"div",12),a(20,"input",13),c(21,$e,2,0,"div",10),e(22,"div",14),a(23,"img",15)(24,"img",16)(25,"img",17),t()()(),e(26,"div",18)(27,"div",19)(28,"label",11),n(29,"Expiration Date"),t(),e(30,"div",20)(31,"div",21)(32,"select",22),a(33,"option"),e(34,"option",23),n(35,"1"),t(),e(36,"option",24),n(37,"2"),t(),e(38,"option",25),n(39,"3"),t(),e(40,"option",26),n(41,"4"),t(),e(42,"option",27),n(43,"5"),t(),e(44,"option",28),n(45,"6"),t(),e(46,"option",29),n(47,"7"),t(),e(48,"option",30),n(49,"8"),t(),e(50,"option",31),n(51,"9"),t(),e(52,"option",32),n(53,"10"),t(),e(54,"option",33),n(55,"11"),t(),e(56,"option",34),n(57,"12"),t()(),c(58,Fe,2,0,"div",10),t(),e(59,"div",21)(60,"select",35),a(61,"option"),e(62,"option",36),n(63,"2021"),t(),e(64,"option",37),n(65,"2022"),t(),e(66,"option",38),n(67,"2023"),t(),e(68,"option",39),n(69,"2024"),t(),e(70,"option",40),n(71,"2025"),t(),e(72,"option",41),n(73,"2026"),t(),e(74,"option",42),n(75,"2027"),t(),e(76,"option",43),n(77,"2028"),t(),e(78,"option",44),n(79,"2029"),t(),e(80,"option",45),n(81,"2030"),t(),e(82,"option",46),n(83,"2031"),t()(),c(84,De,2,0,"div",10),t()()(),e(85,"div",47)(86,"label",6)(87,"span",7),n(88,"CVV"),t(),a(89,"i",48),t(),e(90,"div",12),a(91,"input",49),c(92,qe,2,0,"div",10),e(93,"div",50),a(94,"app-keenicon",51),t()()()(),e(95,"div",52)(96,"div",53)(97,"label",54),n(98,"Save Card for further billing?"),t(),e(99,"div",55),n(100," If you need more info, please check budget planning "),t()(),e(101,"label",56),a(102,"input",57),e(103,"span",58),n(104,"Save Card"),t()()()()),s&2){let f,_,E,y,H;l(8),m("formGroup",o.form),l(7),m("ngIf",((f=o.form.get("nameOnCard"))==null?null:f.hasError("required"))&&((f=o.form.get("nameOnCard"))==null?null:f.touched)),l(6),m("ngIf",((_=o.form.get("cardNumber"))==null?null:_.hasError("required"))&&((_=o.form.get("cardNumber"))==null?null:_.touched)),l(37),m("ngIf",((E=o.form.get("cardExpiryMonth"))==null?null:E.hasError("required"))&&((E=o.form.get("cardExpiryMonth"))==null?null:E.touched)),l(26),m("ngIf",((y=o.form.get("cardExpiryYear"))==null?null:y.hasError("required"))&&((y=o.form.get("cardExpiryYear"))==null?null:y.touched)),l(8),m("ngIf",((H=o.form.get("cardCvv"))==null?null:H.hasError("required"))&&((H=o.form.get("cardCvv"))==null?null:H.touched))}},dependencies:[h,U,J,N,se,L,T,S,pe,ce,M,I,A,C],encapsulation:2})}return i})();var re=(()=>{class i{constructor(){}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=b({type:i,selectors:[["app-step5"]],decls:21,vars:0,consts:[[1,"pb-8","pb-lg-10"],[1,"fw-bolder","text-gray-900"],[1,"text-gray-500","fw-bold","fs-6"],[1,"link-primary","fw-bolder","cursor-pointer"],[1,"mb-0"],[1,"fs-6","text-gray-600","mb-5"],[1,"notice","d-flex","bg-light-warning","rounded","border-warning","border","border-dashed","p-6"],[1,"svg-icon","fs-2tx","text-warning","me-4"],[1,"d-flex","flex-stack","flex-grow-1"],[1,"fw-bold"],[1,"text-gray-800","fw-bolder"],[1,"fs-6","text-gray-600"],[1,"fw-bolder","cursor-pointer"]],template:function(s,o){s&1&&(e(0,"div",0)(1,"h2",1),n(2,"Your Are Done!"),t(),e(3,"div",2),n(4," If you need more info, please "),e(5,"a",3),n(6," Sign In"),t(),n(7,". "),t()(),e(8,"div",4)(9,"div",5),n(10," Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience. "),t(),e(11,"div",6),a(12,"span",7),e(13,"div",8)(14,"div",9)(15,"h4",10),n(16,"We need your attention!"),t(),e(17,"div",11),n(18," To start using great tools, please, please "),e(19,"a",12),n(20," Create Team Platform"),t()()()()()())},encapsulation:2})}return i})();var oe=(i,p)=>({current:i,completed:p}),Pe=i=>({current:i});function ze(i,p){if(i&1&&(u(0),a(1,"app-step1",11),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function Ae(i,p){if(i&1&&(u(0),a(1,"app-step2",11),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function Oe(i,p){if(i&1&&(u(0),a(1,"app-step3",11),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function He(i,p){if(i&1&&(u(0),a(1,"app-step4",11),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function Be(i,p){i&1&&(u(0),a(1,"app-step5",12),d())}function Ge(i,p){if(i&1){let r=P();u(0),e(1,"button",13),z("click",function(){D(r);let o=g();return q(o.prevStep())}),a(2,"app-keenicon",14),n(3," Back "),t(),d()}}function je(i,p){i&1&&(u(0),n(1),a(2,"app-keenicon",17),d()),i&2&&(l(),j(" Continue "," "," "))}function Ye(i,p){i&1&&(u(0),n(1," Submit "),d())}function We(i,p){if(i&1){let r=P();u(0),e(1,"div")(2,"button",15),z("click",function(){D(r);let o=g();return q(o.nextStep())}),e(3,"span",16),c(4,je,3,1,"ng-container",8)(5,Ye,2,0,"ng-container",8),t()()(),d()}if(i&2){let r=g();l(2),m("disabled",!r.isCurrentFormValid$.value),l(2),m("ngIf",r.currentStep$.value<r.formsCount-1),l(),m("ngIf",r.currentStep$.value===r.formsCount-1)}}var _e=(()=>{class i{formsCount=5;account$=new k(Q);currentStep$=new k(1);isCurrentFormValid$=new k(!1);unsubscribe=[];constructor(){}ngOnInit(){}updateAccount=(r,s)=>{let o=this.account$.value,f=F(F({},o),r);this.account$.next(f),this.isCurrentFormValid$.next(s)};nextStep(){let r=this.currentStep$.value+1;r>this.formsCount||this.currentStep$.next(r)}prevStep(){let r=this.currentStep$.value-1;r!==0&&this.currentStep$.next(r)}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe())}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=b({type:i,selectors:[["app-horizontal"]],decls:30,vars:26,consts:[[1,"card"],[1,"card-body"],["id","kt_create_account_stepper",1,"stepper","stepper-links","d-flex","flex-column","pt-15"],[1,"stepper-nav","mb-5"],[1,"stepper-item",3,"ngClass"],[1,"stepper-title"],["noValidate","","id","kt_create_account_form",1,"mx-auto","mw-600px","w-100","pt-15","pb-10"],[1,"current"],[4,"ngIf"],[1,"d-flex","flex-stack","pt-15"],[1,"mr-2"],[1,"w-100",3,"updateParentModel","defaultValues"],[1,"w-100"],["type","button",1,"btn","btn-lg","btn-light-primary","me-3",3,"click"],["name","arrow-left",1,"fs-3","ms-4","me-1"],["type","button",1,"btn","btn-lg","btn-primary","me-3",3,"click","disabled"],[1,"indicator-label"],["name","arrow-right",1,"fs-3","ms-2","me-0"]],template:function(s,o){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),n(6,"Account Type"),t()(),e(7,"div",4)(8,"h3",5),n(9,"Account Info"),t()(),e(10,"div",4)(11,"h3",5),n(12,"Business Info"),t()(),e(13,"div",4)(14,"h3",5),n(15,"Billing Details"),t()(),e(16,"div",4)(17,"h3",5),n(18,"Completed"),t()()(),e(19,"form",6)(20,"div",7),c(21,ze,2,2,"ng-container",8)(22,Ae,2,2,"ng-container",8)(23,Oe,2,2,"ng-container",8)(24,He,2,2,"ng-container",8)(25,Be,2,0,"ng-container",8),t(),e(26,"div",9)(27,"div",10),c(28,Ge,4,0,"ng-container",8),t(),c(29,We,6,3,"ng-container",8),t()()()()()),s&2&&(l(4),m("ngClass",x(12,oe,o.currentStep$.value===1,o.currentStep$.value>1)),l(3),m("ngClass",x(15,oe,o.currentStep$.value===2,o.currentStep$.value>2)),l(3),m("ngClass",x(18,oe,o.currentStep$.value===3,o.currentStep$.value>3)),l(3),m("ngClass",x(21,oe,o.currentStep$.value===4,o.currentStep$.value>4)),l(3),m("ngClass",Y(24,Pe,o.currentStep$.value===5)),l(5),m("ngIf",o.currentStep$.value===1),l(),m("ngIf",o.currentStep$.value===2),l(),m("ngIf",o.currentStep$.value===3),l(),m("ngIf",o.currentStep$.value===4),l(),m("ngIf",o.currentStep$.value===5),l(3),m("ngIf",o.currentStep$.value!==1),l(),m("ngIf",o.currentStep$.value!==o.formsCount))},dependencies:[W,h,R,S,C,Z,te,ne,ie,re],encapsulation:2})}return i})();var ae=(i,p)=>({current:i,completed:p}),Re=i=>({current:i});function Ke(i,p){if(i&1&&(u(0),a(1,"app-step1",19),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function Le(i,p){if(i&1&&(u(0),a(1,"app-step2",19),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function Ue(i,p){if(i&1&&(u(0),a(1,"app-step3",19),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function Je(i,p){if(i&1&&(u(0),a(1,"app-step4",19),d()),i&2){let r=g();l(),m("updateParentModel",r.updateAccount)("defaultValues",r.account$.value)}}function Qe(i,p){i&1&&(u(0),a(1,"app-step5",20),d())}function Xe(i,p){if(i&1){let r=P();u(0),e(1,"button",21),z("click",function(){D(r);let o=g();return q(o.prevStep())}),a(2,"app-keenicon",22),n(3," Back "),t(),d()}}function Ze(i,p){i&1&&(u(0),n(1),a(2,"app-keenicon",25),d()),i&2&&(l(),j(" Continue "," "," "))}function et(i,p){i&1&&(u(0),n(1," Submit "),d())}function tt(i,p){if(i&1){let r=P();u(0),e(1,"div")(2,"button",23),z("click",function(){D(r);let o=g();return q(o.nextStep())}),e(3,"span",24),c(4,Ze,3,1,"ng-container",16)(5,et,2,0,"ng-container",16),t()()(),d()}if(i&2){let r=g();l(2),m("disabled",!r.isCurrentFormValid$.value),l(2),m("ngIf",r.currentStep$.value<r.formsCount-1),l(),m("ngIf",r.currentStep$.value===r.formsCount-1)}}var Ee=(()=>{class i{formsCount=5;account$=new k(Q);currentStep$=new k(1);isCurrentFormValid$=new k(!1);unsubscribe=[];constructor(){}ngOnInit(){}updateAccount=(r,s)=>{let o=this.account$.value,f=F(F({},o),r);this.account$.next(f),this.isCurrentFormValid$.next(s)};nextStep(){let r=this.currentStep$.value+1;r>this.formsCount||this.currentStep$.next(r)}prevStep(){let r=this.currentStep$.value-1;r!==0&&this.currentStep$.next(r)}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe())}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=b({type:i,selectors:[["app-vertical"]],decls:75,vars:26,consts:[["id","kt_create_account_stepper",1,"stepper","stepper-pills","stepper-column","d-flex","flex-column","flex-xl-row","flex-row-fluid"],[1,"card","d-flex","justify-content-center","justify-content-xl-start","flex-row-auto","w-100","w-xl-300px","w-xxl-400px","me-9"],[1,"card-body","px-6","px-lg-10","px-xxl-15","py-20"],[1,"stepper-nav"],[1,"stepper-item",3,"ngClass"],[1,"stepper-wrapper"],[1,"stepper-icon","w-40px","h-40px"],[1,"stepper-check","fas","fa-check"],[1,"stepper-number"],[1,"stepper-label"],[1,"stepper-title"],[1,"stepper-desc","fw-semibold"],[1,"stepper-line","h-40px"],[1,"d-flex","flex-row-fluid","flex-center","bg-body","rounded"],["noValidate","","id","kt_create_account_form",1,"py-20","w-100","w-xl-700px","px-9"],[1,"current"],[4,"ngIf"],[1,"d-flex","flex-stack","pt-10"],[1,"mr-2"],[1,"w-100",3,"updateParentModel","defaultValues"],[1,"w-100"],["type","button",1,"btn","btn-lg","btn-light-primary","me-3",3,"click"],["name","arrow-left",1,"fs-3","ms-1"],["type","button",1,"btn","btn-lg","btn-primary","me-3",3,"click","disabled"],[1,"indicator-label"],["name","arrow-right",1,"fs-3","ms-2","me-0"]],template:function(s,o){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),a(7,"i",7),e(8,"span",8),n(9,"1"),t()(),e(10,"div",9)(11,"h3",10),n(12," Account Type "),t(),e(13,"div",11),n(14," Setup Your Account Details "),t()()(),a(15,"div",12),t(),e(16,"div",4)(17,"div",5)(18,"div",6),a(19,"i",7),e(20,"span",8),n(21,"2"),t()(),e(22,"div",9)(23,"h3",10),n(24," Account Settings "),t(),e(25,"div",11),n(26," Setup Your Account Settings "),t()()(),a(27,"div",12),t(),e(28,"div",4)(29,"div",5)(30,"div",6),a(31,"i",7),e(32,"span",8),n(33,"3"),t()(),e(34,"div",9)(35,"h3",10),n(36," Business Info "),t(),e(37,"div",11),n(38," Your Business Related Info "),t()()(),a(39,"div",12),t(),e(40,"div",4)(41,"div",5)(42,"div",6),a(43,"i",7),e(44,"span",8),n(45,"4"),t()(),e(46,"div",9)(47,"h3",10),n(48," Billing Details "),t(),e(49,"div",11),n(50," Set Your Payment Methods "),t()()(),a(51,"div",12),t(),e(52,"div",4)(53,"div",5)(54,"div",6),a(55,"i",7),e(56,"span",8),n(57,"5"),t()(),e(58,"div",9)(59,"h3",10),n(60," Completed "),t(),e(61,"div",11),n(62," Woah, we are here "),t()()()()()()(),e(63,"div",13)(64,"form",14)(65,"div",15),c(66,Ke,2,2,"ng-container",16)(67,Le,2,2,"ng-container",16)(68,Ue,2,2,"ng-container",16)(69,Je,2,2,"ng-container",16)(70,Qe,2,0,"ng-container",16),t(),e(71,"div",17)(72,"div",18),c(73,Xe,4,0,"ng-container",16),t(),c(74,tt,6,3,"ng-container",16),t()()()()),s&2&&(l(4),m("ngClass",x(12,ae,o.currentStep$.value===1,o.currentStep$.value>1)),l(12),m("ngClass",x(15,ae,o.currentStep$.value===2,o.currentStep$.value>2)),l(12),m("ngClass",x(18,ae,o.currentStep$.value===3,o.currentStep$.value>3)),l(12),m("ngClass",x(21,ae,o.currentStep$.value===4,o.currentStep$.value>4)),l(12),m("ngClass",Y(24,Re,o.currentStep$.value===5)),l(14),m("ngIf",o.currentStep$.value===1),l(),m("ngIf",o.currentStep$.value===2),l(),m("ngIf",o.currentStep$.value===3),l(),m("ngIf",o.currentStep$.value===4),l(),m("ngIf",o.currentStep$.value===5),l(3),m("ngIf",o.currentStep$.value!==1),l(),m("ngIf",o.currentStep$.value!==o.formsCount))},dependencies:[W,h,R,S,C,Z,te,ne,ie,re],encapsulation:2})}return i})();var ye=(()=>{class i{constructor(){}ngOnInit(){}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=b({type:i,selectors:[["app-wizards"]],decls:1,vars:0,template:function(s,o){s&1&&a(0,"router-outlet")},dependencies:[fe],encapsulation:2})}return i})();var nt=[{path:"",component:ye,children:[{path:"horizontal",component:_e},{path:"vertical",component:Ee},{path:"",redirectTo:"horizontal",pathMatch:"full"},{path:"**",redirectTo:"horizontal",pathMatch:"full"}]}],we=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=G({type:i});static \u0275inj=B({imports:[le.forChild(nt),le]})}return i})();var Yt=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=G({type:i});static \u0275inj=B({imports:[me,we,ue,de,ve]})}return i})();export{Yt as WizardsModule};
