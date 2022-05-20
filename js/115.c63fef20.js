"use strict";(self["webpackChunkuerm_ehr"]=self["webpackChunkuerm_ehr"]||[]).push([[115],{7788:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ge});i(5363);var l=i(3673),a=i(8880),o=i(2323);const n=(0,l._)("span",{class:"text-weight-bold"},"UERM",-1),s=(0,l._)("span",{class:"text-weight-light"},"Electronic Health Records",-1),c={class:"text-overline items-center"},r={class:"text-overline items-center"},d=(0,l.Uk)(" HELP "),h=(0,l._)("div",{class:"text-weight-light text-body1"},"v.1",-1),m=(0,l.Uk)("UERM - EHR"),u={key:0,class:"row justify-end q-pa-sm"},p=(0,l.Uk)(" GENERAL MEDICAL NOTES "),g={class:"text-white text-uppercase text-overline"};function f(e,t,i,f,N,w){const b=(0,l.up)("q-btn"),_=(0,l.up)("q-toolbar-title"),y=(0,l.up)("q-space"),C=(0,l.up)("q-icon"),v=(0,l.up)("q-input"),I=(0,l.up)("AccountInfo"),q=(0,l.up)("q-btn-dropdown"),D=(0,l.up)("q-toolbar"),T=(0,l.up)("q-header"),W=(0,l.up)("q-footer"),x=(0,l.up)("q-item-label"),k=(0,l.up)("q-item-section"),S=(0,l.up)("q-item"),Z=(0,l.up)("q-separator"),E=(0,l.up)("q-skeleton"),O=(0,l.up)("ClinicalNoteTree"),Q=(0,l.up)("q-scroll-area"),L=(0,l.up)("q-list"),$=(0,l.up)("q-drawer"),R=(0,l.up)("GeneralInfoDialog"),P=(0,l.up)("q-dialog"),V=(0,l.up)("router-view"),F=(0,l.up)("q-page-container"),G=(0,l.up)("q-layout"),U=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(G,{view:"hHh LpR fFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{class:"bg-blue-9"},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"bg-blue-10"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{flat:"",onClick:t[0]||(t[0]=t=>e.bools.isDrawerOpen=!e.bools.isDrawerOpen),round:"",dense:"",class:"orientation-portrait",icon:"menu"}),(0,l.Wm)(_,{class:"q-gutter-x-sm"},{default:(0,l.w5)((()=>[n,s])),_:1}),(0,l.Wm)(y),(0,l.Wm)(v,{label:"Patient Search",dark:"",dense:"",filled:"","stack-label":"",color:"white",modelValue:e.form.patientName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.patientName=t),onKeyup:e.searchPatient,class:"orientation-landscape"},{append:(0,l.w5)((()=>[(0,l.Wm)(C,{name:"fas fa-search"})])),_:1},8,["modelValue","onKeyup"]),(0,l.Wm)(b,{onClick:(0,a.iM)(e.showPatientSearch,["prevent"]),class:"orientation-portrait",icon:"fas fa-search",flat:"",round:""},null,8,["onClick"]),(0,l.Wm)(q,{class:"q-ml-sm",rounded:"",flat:"",icon:"fas fa-user"},{default:(0,l.w5)((()=>[(0,l.Wm)(I)])),_:1}),(0,l.Wm)(b,{flat:"",onClick:t[2]||(t[2]=t=>e.bools.isRightDrawerOpen=!e.bools.isRightDrawerOpen),round:"",dense:"",class:"orientation-portrait",icon:"fa fa-notes-medical"})])),_:1}),(0,l.Wm)(D,{class:"row justify-center items-center"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(this.mainNavigation,((e,t)=>((0,l.wg)(),(0,l.j4)(b,{key:t,to:e.route.replace("role",this.role),flat:""},{default:(0,l.w5)((()=>[(0,l._)("div",c,[(0,l.Wm)(C,{name:e.icon,class:"q-pr-md",size:"xs"},null,8,["name"]),(0,l.Uk)(" "+(0,o.zw)(e.name),1)])])),_:2},1032,["to"])))),128)),(0,l.Wm)(b,{flat:"",to:"/helpdesk"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(C,{name:"fa fa-question-circle",class:"q-pr-md",size:"xs"}),d])])),_:1})])])),_:1})])),_:1}),(0,l.Wm)(W,{ckass:"bg-blue-10",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[h])),_:1})])),_:1})])),_:1}),(0,l.Wm)($,{modelValue:e.bools.isDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=t=>e.bools.isDrawerOpen=t),"show-if-above":"",width:300,bordered:"",class:"bg-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"fit"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{class:"blue-10"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"lt-sm bg-blue-10"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{class:"text-center text-white text-h5 text-weight-bold"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[m])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Z),(0,l.Wm)(Q,{class:(0,o.C_)(["q-mr-sm q-mt-md",[e.$q.screen.lt.md?"full-ht":"half-ht"]]),visible:!0},{default:(0,l.w5)((()=>[(0,l._)("div",null,[this.bools.loadTree?((0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(E,{animation:"wave",width:"100%",class:"q-mb-md"}),(0,l.Wm)(E,{animation:"wave",width:"90%",class:"q-mb-md"}),(0,l.Wm)(E,{animation:"wave",width:"80%",class:"q-mb-md"})])):((0,l.wg)(),(0,l.j4)(O,{key:1,class:"q-mx-md",clinicalNoteTree:this.clinicalNoteCategoryTree,onFiltered:e.setClinicalNoteFilter,onSetClinicalNote:e.setClinicalNote},null,8,["clinicalNoteTree","onFiltered","onSetClinicalNote"]))])])),_:1},8,["class"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)($,{side:"right",modelValue:this.bools.isRightDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=e=>this.bools.isRightDrawerOpen=e),width:300,class:"bg-white",bordered:""},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(L,{bordered:"",separator:"",dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{class:"q-pa-none text-body1 text-black text-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{class:"text-weight-medium"},{default:(0,l.w5)((()=>[p])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.generalNotes,((t,i)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(S,{clickable:"",onClick:i=>e.openGeneralDataDialog(t),key:i,class:"bg-blue-10 q-pa-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{name:t.icon,class:"uerm-rounded text-white",size:"sm",style:{"min-width":"40px !important"}},null,8,["name"])])),_:2},1024),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l._)("div",g,(0,o.zw)(t.name),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[U]]))),128))])),_:1})])])),_:1},8,["modelValue"]),(0,l.Wm)(P,{modelValue:e.bools.isGeneralInfoOpen,"onUpdate:modelValue":t[6]||(t[6]=t=>e.bools.isGeneralInfoOpen=t),maximized:"","full-height":"","full-width":"",persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{caseInfo:this.caseInfo,dialogDetails:this.dialogDetails,generalNoteLoading:this.bools.generalNoteLoading,onCloseDialog:t[5]||(t[5]=t=>e.closeGeneralDialog())},null,8,["caseInfo","dialogDetails","generalNoteLoading"])])),_:1},8,["modelValue"]),(0,l.Wm)(F,{class:"bg-grey-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(V)])),_:1})])),_:1})}i(6801);var N=i(3617),w=i(3972);const b={style:{width:"600px","max-width":"50vw"}},_=(0,l._)("div",{class:"row q-gutter-lg justify-end"},[(0,l._)("div",{class:"col-12 col-sm-auto column items-end"},[(0,l._)("div",{class:"col text-blue-grey-3 text-weight-medium text-xs"}," USERNAME: "),(0,l._)("div",{class:"col"},"Jommar Ilagan")]),(0,l._)("div",{class:"col-12 col-sm-auto column items-end"},[(0,l._)("div",{class:"col text-blue-grey-3 text-weight-medium text-xs"}," DEPARTMENT: "),(0,l._)("div",{class:"col"},"Information Technology")]),(0,l._)("div",{class:"col-12 col-sm-auto column items-end"},[(0,l._)("div",{class:"col text-blue-grey-3 text-weight-medium text-xs"}," POSITION: "),(0,l._)("div",{class:"col"},"Programmer")])],-1);function y(e,t){const i=(0,l.up)("q-card-section"),a=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)(a,{flat:"",dark:"",square:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[_])),_:1})])),_:1})])}var C=i(4260),v=i(151),I=i(5589),q=i(7518),D=i.n(q);const T={},W=(0,C.Z)(T,[["render",y]]),x=W;function k(e,t,i,a,o,n){const s=(0,l.up)("q-icon"),c=(0,l.up)("q-input"),r=(0,l.up)("q-tree");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(c,{ref:"filterRef",filled:"",modelValue:e.filter,"onUpdate:modelValue":t[0]||(t[0]=t=>e.filter=t),label:"Filter Clinical Notes",debounce:"400"},{append:(0,l.w5)((()=>[""!==e.filter?((0,l.wg)(),(0,l.j4)(s,{key:0,name:"clear",class:"cursor-pointer",onClick:e.resetFilter},null,8,["onClick"])):(0,l.kq)("",!0)])),_:1},8,["modelValue"]),(0,l.Wm)(r,{class:"col-2 text-body text-weight-light",nodes:e.clinicalNoteTree,"node-key":"code","label-key":"name",filter:e.filter,"default-expand-all":"","tick-strategy":"none"},null,8,["nodes","filter"])])}D()(T,"components",{QCard:v.Z,QCardSection:I.Z});i(71),i(2100);const S=(0,l.aZ)({name:"ClinicalNoteTree",props:["clinicalNoteTree"],data(){return{filter:null,clinical_notes:[]}},computed:{...(0,N.Se)({clinicalEncounters:"encounters/clinicalEncounters"})},watch:{filter(e){this.$emit("filtered",e)},async clinicalEncounters(e){e.length>0&&this.init(),await this.initiateTree()},clinicalNoteTree(e){console.log(e,"val"),this.initiateTree()}},mounted(){this.setKeyPress(),this.initiateTree(),this.init()},methods:{setKeyPress(){window.addEventListener("keydown",(async e=>{"112"==e.keyCode&&this.$refs.filterRef.focus()}))},async initiateTree(){this.ticked=this.getKeys(this.clinicalNoteTree),this.clinical_notes=this.getFlatArray(this.clinicalNoteTree),this.$emit("setClinicalNote",this.clinical_notes)},getKeys(e,t=[]){if(!e)throw"Incomplete arguments.";for(const i of e)t.push(i.code),null!=i.children&&i.children.length>0&&this.getKeys(i.children,t);return t},getFlatArray(e,t=[]){if(!e)throw"Incomplete arguments.";for(const i of e){const e=JSON.parse(JSON.stringify(i));delete e.children,t.push(e),null!=i.children&&i.children.length>0&&this.getFlatArray(i.children,t)}return t},resetFilter(){this.filter="",this.$refs.filterRef.focus()},init(){this.$emit("setInit",!0)}}});var Z=i(4842),E=i(4554),O=i(5078);const Q=(0,C.Z)(S,[["render",k]]),L=Q;D()(S,"components",{QInput:Z.Z,QIcon:E.Z,QTree:O.Z});const $={class:"row wrap justify-between items-start content-start q-px-md"},R={class:"text-uppercase"},P={key:0,class:"row justify-end q-pa-sm"};function V(e,t,i,n,s,c){const r=(0,l.up)("q-btn"),d=(0,l.up)("q-card-section"),h=(0,l.up)("q-skeleton"),m=(0,l.up)("ClinicalNoteTree"),u=(0,l.up)("q-scroll-area"),p=(0,l.up)("ClinicalNoteResults"),g=(0,l.up)("q-splitter"),f=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(f,{"full-height":"","full-width":"",style:{height:"100vh","max-width":"100vw"},square:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"text-h5 text-weight-light bg-blue-10 text-white"},{default:(0,l.w5)((()=>[(0,l._)("div",$,[(0,l._)("div",R,(0,o.zw)(`${e.caseInfo.lastname}, ${e.caseInfo.firstname} ${e.caseInfo.middlename}`)+" - "+(0,o.zw)(this.clinicalNoteInfo.clinicalCategoryName),1),(0,l.Wm)(r,{color:"negative",label:"Close",onClick:t[0]||(t[0]=(0,a.iM)((e=>this.$emit("closeDialog",!0)),["prevent"])),icon:"fas fa-times"})])])),_:1}),(0,l.Wm)(u,{class:"q-pa-md",style:{height:"87.5vh"}},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{modelValue:e.generalSplitter,"onUpdate:modelValue":t[1]||(t[1]=t=>e.generalSplitter=t)},{before:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"q-mr-sm q-mt-md",visible:!0,style:{height:"80vh"}},{default:(0,l.w5)((()=>[(0,l._)("div",null,[this.bools.generalNoteLoading?((0,l.wg)(),(0,l.iD)("div",P,[(0,l.Wm)(h,{animation:"wave",width:"100%",class:"q-mb-md"}),(0,l.Wm)(h,{animation:"wave",width:"90%",class:"q-mb-md"}),(0,l.Wm)(h,{animation:"wave",width:"80%",class:"q-mb-md"})])):((0,l.wg)(),(0,l.j4)(m,{key:1,class:"q-mx-md",clinicalNoteTree:this.clinicalNoteTree,onFiltered:e.setClinicalNoteFilter,onSetClinicalNote:e.setClinicalNote},null,8,["clinicalNoteTree","onFiltered","onSetClinicalNote"]))])])),_:1})])),after:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(p,{clinicalNoteTree:this.clinicalNoteTree,clinicalEncounters:this.clinicalEncounters,noteMode:this.bools.noteMode,onOpenEntryNotes:e.setEntryNotes,onSetUpdateNote:e.setUpdateNote},null,8,["clinicalNoteTree","clinicalEncounters","noteMode","onOpenEntryNotes","onSetUpdateNote"])])])),_:1},8,["modelValue"])])),_:1})])),_:1})}i(8353);var F=i(8802);const G=(0,l.aZ)({name:"GeneralInfoDialog",props:["caseInfo","dialogDetails"],data(){return{bools:{isDrawerOpen:!1,isMiniState:!0,isSearchOpen:!1,isRightDrawerOpen:!1,isGeneralInfoOpen:!1,isGeneralInfoOpen:!1,generalNoteLoading:!1},clinicalNoteInfo:{currentTitle:null,title:null,name:null,format:null,clinicalNoteCode:null,clinicalCategoryCode:null,clinicalCategoryName:null,clinicalNotes:[]},generalSplitter:18,clinicalNoteTree:[]}},watch:{},computed:{...(0,N.Se)({mainNavigation:"helpers/mainNavigation",role:"user/role",generalNotes:"clinicalNotes/generalNotes",encounterCases:"encounters/encounterCases",clinicalEncounters:"encounters/clinicalEncounters",clinicalNotes:"clinicalNotes/clinicalNotes"})},mounted(){this.loadInit()},methods:{async loadInit(){this.bools.generalNoteLoading=!0,this.clinicalNoteInfo.clinicalCategoryCode=this.dialogDetails.code,this.clinicalNoteInfo.clinicalCategoryName=this.dialogDetails.name;var e=this.generalNotes.filter((e=>e.code===this.dialogDetails.code));this.clinicalNoteTree=e,setTimeout((async()=>{this.clinicalNotesLists=this.dialogDetails.children,this.fetchGeneralNotes()}),500)},async fetchGeneralNotes(){let e="";e={patientNo:this.encounterCases[0].patientID,clinicalCategoryCode:this.clinicalNoteInfo.clinicalCategoryCode,checking:!0,byCategoryCode:!0},await this.$store.dispatch("encounters/getClinicalEncounters",e),this.clinicalEncounterLists=this.clinicalEncounters,this.bools.generalNoteLoading=!1},async setClinicalNoteFilter(e){await this.$store.dispatch("helpers/setClinicalNoteFilter",e),this.clinicalNoteFilter=e},async setClinicalNote(e){await this.$store.dispatch("helpers/setClinicalNoteTreeValues",e),this.clinicalNoteTreeValues=e},setEntryNotes(e){this.bools.generalNoteLoading=!0,this.bools.noteMode=!0,this.generalSplitter=70,this.setClinicalNotes(e),setTimeout((async()=>{this.bools.generalNoteLoading=!1}),500)},setUpdateNote(e){this.bools.noteMode=!0,this.bools.enableEntry=!0;const t={clinical_note_code:e.clinical_note_code,clinical_note:e.clinical_note_name,result_format:JSON.parse(e.result_format),clinical_encounter_id:parseInt(e.clinical_encounter_id)};this.setPatientNotes(t)},setPatientNotes(e){this.bools.generalEntryLoading=!0,this.bools.generalNoteLoading=!0,setTimeout((()=>{this.editNoteInfo=e;const t={name:e.clinical_note,code:e.clinical_note_code,template_format:e.result_format,title:e.clinical_note};this.setClinicalNoteInfo(t,!1),this.bools.generalEntryLoading=!1,this.bools.generalNoteLoading=!1}),500)},async setClinicalNotes(e){void 0!==e.clinicalNoteCode&&(this.editNoteInfo=[]);const t=void 0===e.clinical_note_code?e.clinicalNoteCode:e.clinical_note_code;var i=this.clinicalNotes.filter((e=>e.code===t));this.setClinicalNoteInfo(i[0],!0),this.fetchGeneralNotes()},async setClinicalNoteInfo(e,t){if(this.clinicalNoteInfo.name=e.name,this.clinicalNoteInfo.clinicalNoteCode=e.code,this.clinicalNoteInfo.format=e.template_format,t){let t=void 0===e.template_format.title?null:e.template_format.title;this.clinicalNoteInfo.title=null===t?e.name:t}else{var i=this.clinicalNotes.filter((t=>t.code===e.code));let t=void 0===i[0].template_format.title?null:i[0].template_format.title;this.clinicalNoteInfo.title=null===t?i[0].name:t}},setInit(){this.bools.enableEntry=!1,this.bools.generalNoteLoading=!0,this.editNoteInfo=[],this.bools.noteMode=!1,this.generalSplitter=100,this.fetchGeneralNotes()}},components:{ClinicalNoteResults:F.Z,ClinicalNoteTree:L}});var U=i(2165),M=i(7704),j=i(218),A=i(4103),K=i(6941),z=i(1070);const H=(0,C.Z)(G,[["render",V]]),B=H;D()(G,"components",{QCard:v.Z,QCardSection:I.Z,QBtn:U.Z,QScrollArea:M.Z,QSplitter:j.Z,QSkeleton:A.ZP,QInnerLoading:K.Z,QSpinnerBall:z.Z,QIcon:E.Z});const J=(0,l.aZ)({components:{AccountInfo:x,ClinicalNoteTree:L,GeneralInfoDialog:B},name:"AppLayout",data(){return{search:"",bools:{isDrawerOpen:!0,isMiniState:!0,isSearchOpen:!1,isRightDrawerOpen:!1,isGeneralInfoOpen:!1,isGeneralInfoOpen:!1,generalNoteLoading:!1,loadTree:!1},form:{patientName:""},generalSplitter:70,dialogDetails:[],clinicalNoteCategoryTree:[],clinicalNoteFilter:[],clinicalNoteTreeValues:[]}},computed:{...(0,N.Se)({mainNavigation:"helpers/mainNavigation",role:"user/role",generalNotes:"clinicalNotes/generalNotes",encounterCases:"encounters/encounterCases",clinicalEncounters:"encounters/clinicalEncounters",clinicalNotes:"clinicalNotes/clinicalNotes",visitEncounterNotes:"clinicalNotes/visitEncounterNotes",admissionEncounterNotes:"clinicalNotes/admissionEncounterNotes",generalNotes:"clinicalNotes/generalNotes"}),caseInfo(){return 0==this.encounterCases.length?{}:this.encounterCases.map((e=>({caseno:e.case_no,patientno:e.patient_no,lastname:e.last_name,firstname:e.first_name,middlename:e.middle_name,gender:e.sex,birthdate:e.birthDate,category:e.patient_category,room:e.room,unit:e.room_unit,ward:e.ward,admitted:new Date(e.datetime_admitted).toDateString(),discharged:e.datetime_discharged?new Date(e.datetime_discharged).toDateString():"",chiefComplaint:e.chief_complaint})))[0]}},watch:{generalSplitter(e){90===e&&(this.generalSplitter=100)},"$route.name":{async handler(e){this.checkPlatform(),this.fetchNotesCategories()},deep:!0}},mounted(){this.fetchNotesCategories(),this.checkPlatform()},methods:{checkPlatform(){"nurses"!==this.$route.name&&"doctors"!==this.$route.name||this.role!==this.$route.name&&this.$router.push({name:this.role,params:{routes:this.$route.params.routes}}),"emr"===this.$route.name?(this.bools.isRightDrawerOpen=!0,this.bools.isDrawerOpen=!0):(this.bools.isRightDrawerOpen=!1,this.bools.isDrawerOpen=!1),"sm"!==w.Z.name&&"xs"!==w.Z.name&&"md"!==w.Z.name||(this.bools.isRightDrawerOpen=!1,this.bools.isDrawerOpen=!1)},async fetchNotesCategories(){this.bools.loadTree=!0,this.$store.dispatch("helpers/loadTree",!0);const e={sectionID:"ehr"};await this.$store.dispatch("clinicalNotes/fetchClinicalCategoryNotes",e),await this.$store.dispatch("clinicalNotes/fetchClinicalNoteCategoryTree"),this.checkPatientType(),this.$store.dispatch("helpers/loadTree",!1),this.bools.loadTree=!1},checkPatientType(){this.encounterCases.length>0&&("I"===this.encounterCases[0].patient_type?this.clinicalNoteCategoryTree=this.admissionEncounterNotes:this.clinicalNoteCategoryTree=this.visitEncounterNotes)},async openGeneralDataDialog(e){this.bools.generalEntryLoading=!0,this.bools.isGeneralInfoOpen=!0,this.dialogDetails=e,this.bools.generalEntryLoading=!1},closeGeneralDialog(){this.bools.isGeneralInfoOpen=!1,this.fetchNotesCategories()},async setClinicalNoteFilter(e){await this.$store.dispatch("helpers/setClinicalNoteFilter",e),this.clinicalNoteFilter=e},async setClinicalNote(e){await this.$store.dispatch("helpers/setClinicalNoteTreeValues",e),this.clinicalNoteTreeValues=e},closeRightDialog(){this.bools.isSearchOpen=!1,this.form.patientName=""},showPatientSearch(){this.bools.isSearchOpen=!this.bools.isSearchOpen},async searchPatient(){this.form.patientName.trim().length<5||(this.$store.commit("bools/isPatientSearching",!0),await this.$store.dispatch("patients/search",this.form.patientName),this.$store.commit("bools/isPatientSearching",!1))}}});var Y=i(9214),X=i(3812),ee=i(9570),te=i(3747),ie=i(2025),le=i(2226),ae=i(2035),oe=i(1762),ne=i(2901),se=i(7011),ce=i(3414),re=i(2350),de=i(5869),he=i(6778),me=i(2652),ue=i(6489);const pe=(0,C.Z)(J,[["render",f]]),ge=pe;D()(J,"components",{QLayout:Y.Z,QHeader:X.Z,QToolbar:ee.Z,QBtn:U.Z,QToolbarTitle:te.Z,QSpace:ie.Z,QInput:Z.Z,QIcon:E.Z,QBtnDropdown:le.Z,QItemSection:ae.Z,QFooter:oe.Z,QDrawer:ne.Z,QScrollArea:M.Z,QList:se.Z,QItem:ce.Z,QItemLabel:re.Z,QSeparator:de.Z,QSkeleton:A.ZP,QDialog:he.Z,QPageContainer:me.Z}),D()(J,"directives",{Ripple:ue.Z})}}]);