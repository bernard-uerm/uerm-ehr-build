"use strict";(self["webpackChunkuerm_ehr"]=self["webpackChunkuerm_ehr"]||[]).push([[478],{3478:(e,l,t)=>{t.r(l),t.d(l,{default:()=>fe});var i=t(3673);const a={class:"q-pa-md"},o=(0,i._)("div",{class:"text-h5 text-weight-light"},"CLINICAL NOTES",-1);function c(e,l,t,c,n,s){const d=(0,i.up)("q-toggle"),r=(0,i.up)("q-btn"),u=(0,i.up)("q-icon"),m=(0,i.up)("q-input"),p=(0,i.up)("q-table"),f=(0,i.up)("AddDialog"),h=(0,i.up)("q-dialog"),N=(0,i.up)("edit-dialog"),C=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(C,null,{default:(0,i.w5)((()=>[(0,i._)("div",a,[(0,i.Wm)(p,{filter:e.filter,rows:this.clinicalNotes,"row-key":"id",columns:this.columns,selection:"single",selected:e.selectedClinicalNote,"onUpdate:selected":l[1]||(l[1]=l=>e.selectedClinicalNote=l)},{"body-selection":(0,i.w5)((e=>[(0,i.Wm)(d,{modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l},null,8,["modelValue","onUpdate:modelValue"])])),"top-left":(0,i.w5)((()=>[o])),"top-right":(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:e.openClinicalNotesModal,push:"",icon:"fa fa-plus",class:"q-mr-md",color:"blue-10"},null,8,["onClick"]),(0,i.Wm)(m,{dense:"",color:"primary",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[0]||(l[0]=l=>e.filter=l),placeholder:"Search"},{append:(0,i.w5)((()=>[(0,i.Wm)(u,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["filter","rows","columns","selected"]),(0,i.Wm)(h,{"full-width":"",modelValue:e.addModal,"onUpdate:modelValue":l[3]||(l[3]=l=>e.addModal=l)},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{onCloseAddDialog:l[2]||(l[2]=l=>e.addModal=!1)})])),_:1},8,["modelValue"]),(0,i.Wm)(h,{"full-width":"",modelValue:e.editModal,"onUpdate:modelValue":l[5]||(l[5]=l=>e.editModal=l)},{default:(0,i.w5)((()=>[(0,i.Wm)(N,{clinicalNoteDetails:e.currentClinicalNote,onCloseEditDialog:l[4]||(l[4]=l=>e.editModal=!1)},null,8,["clinicalNoteDetails"])])),_:1},8,["modelValue"])])])),_:1})}var n=t(3617);t(246);const s=(0,i.Uk)("ADD CLINICAL NOTES"),d={class:"row q-col-gutter-md"},r={class:"col-12"},u={class:"col-12"},m={class:"col-12"};function p(e,l,t,a,o,c){const n=(0,i.up)("q-card-section"),p=(0,i.up)("q-input"),f=(0,i.up)("q-select"),h=(0,i.up)("q-btn"),N=(0,i.up)("q-form"),C=(0,i.up)("q-card");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(n,{class:"text-h5 text-weight-light bg-dark text-white"},{default:(0,i.w5)((()=>[s])),_:1}),(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[(0,i.Wm)(N,{class:"q-px-sm q-pt-sm q-pb-xs q-gutter-md",onSubmit:e.saveClinicalNote,ref:"clinicalNote"},{default:(0,i.w5)((()=>[(0,i._)("div",d,[(0,i._)("div",r,[(0,i.Wm)(p,{label:"Name",modelValue:e.clinicalNoteInfo.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.clinicalNoteInfo.name=l),outlined:"",flat:"",color:"primary",rules:[e=>e&&e.length>0||"Please enter Name"]},null,8,["modelValue","rules"])]),(0,i._)("div",u,[(0,i.Wm)(p,{label:"Description",outlined:"",flat:"",color:"primary",rules:[e=>e&&e.length>0||"Please enter Description"],modelValue:e.clinicalNoteInfo.description,"onUpdate:modelValue":l[1]||(l[1]=l=>e.clinicalNoteInfo.description=l)},null,8,["rules","modelValue"])]),(0,i._)("div",m,[(0,i.Wm)(f,{"stack-label":"",label:"Clinical Note Category",options:e.clinicalCategoryList,modelValue:e.clinicalNoteInfo.clinicalCategory,"onUpdate:modelValue":l[2]||(l[2]=l=>e.clinicalNoteInfo.clinicalCategory=l),outlined:"","emit-value":"","map-options":"",rules:[e=>e&&e.length>0||"Please enter Category"]},null,8,["options","modelValue","rules"])])]),(0,i.Wm)(h,{type:"submit",label:"Save Clinical Note",color:"primary",class:"full-width"})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])}t(5363),t(7768);const f=(0,i.aZ)({name:"AddModal",data(){return{tab:"info",clinicalNoteInfo:{name:"",description:"",clinicalCategory:""}}},computed:{...(0,n.Se)({clinicalCategoryList:"clinicalNotes/clinicalCategoryList"})},methods:{async saveClinicalNote(){this.$refs.clinicalNote.validate().then((async e=>{if(e){const e={code:this.clinicalNoteInfo.name.replaceAll(" ","").toLowerCase(),name:this.clinicalNoteInfo.name,description:this.clinicalNoteInfo.description,categoryCode:this.clinicalNoteInfo.clinicalCategory},l=await this.$store.dispatch("clinicalNotes/saveClinicalNotes",e);l.success?(this.showNotify("success",`Successfully saved Clinical Note - ${e.name}`),this.$emit("closeAddDialog",!1)):(this.formErrorMessage=l.message,this.showNotify("error",l.message))}}))},showNotify(e,l){let t="";t="success"===e?"blue-10":"negative",this.$q.notify({progress:!0,message:l,color:t})}}});var h=t(4260),N=t(151),C=t(5589),g=t(7547),w=t(8408),y=t(5869),b=t(5906),v=t(6602),I=t(5269),q=t(4842),Z=t(8516),D=t(2165),k=t(7518),_=t.n(k);const V=(0,h.Z)(f,[["render",p]]),W=V;_()(f,"components",{QCard:N.Z,QCardSection:C.Z,QTabs:g.Z,QTab:w.Z,QSeparator:y.Z,QTabPanels:b.Z,QTabPanel:v.Z,QForm:I.Z,QInput:q.Z,QSelect:Z.Z,QBtn:D.Z});const Q=(0,i.Uk)("UPDATE CLINICAL NOTE"),T={class:"row q-col-gutter-md"},S={class:"col-12"},F={class:"col-12"},A={class:"col-12"};function M(e,l,t,a,o,c){const n=(0,i.up)("q-card-section"),s=(0,i.up)("q-tab"),d=(0,i.up)("q-tabs"),r=(0,i.up)("q-separator"),u=(0,i.up)("q-input"),m=(0,i.up)("q-select"),p=(0,i.up)("q-btn"),f=(0,i.up)("q-btn-group"),h=(0,i.up)("q-form"),N=(0,i.up)("q-tab-panel"),C=(0,i.up)("ClinicalFields"),g=(0,i.up)("q-tab-panels"),w=(0,i.up)("q-card");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.Wm)(n,{class:"text-h5 text-weight-light bg-dark text-white"},{default:(0,i.w5)((()=>[Q])),_:1}),(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{modelValue:e.tab,"onUpdate:modelValue":l[0]||(l[0]=l=>e.tab=l),dense:"",class:"text-grey bg-blue-10","active-color":"white","indicator-color":"yellow-10",align:"justify","narrow-indicator":""},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"info",label:"Clinical Note Info"}),(0,i.Wm)(s,{name:"clinicalFields",label:"Clinical Fields"})])),_:1},8,["modelValue"]),(0,i.Wm)(r),(0,i.Wm)(g,{modelValue:e.tab,"onUpdate:modelValue":l[4]||(l[4]=l=>e.tab=l),animated:""},{default:(0,i.w5)((()=>[(0,i.Wm)(N,{name:"info"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"q-px-sm q-pt-sm q-pb-xs q-gutter-md",onSubmit:e.updateClinicalNote,ref:"clinicalNote"},{default:(0,i.w5)((()=>[(0,i._)("div",T,[(0,i._)("div",S,[(0,i.Wm)(u,{label:"Name",modelValue:e.clinicalNoteInfo.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.clinicalNoteInfo.name=l),outlined:"",flat:"",color:"primary",rules:[e=>e&&e.length>0||"Please enter Name"]},null,8,["modelValue","rules"])]),(0,i._)("div",F,[(0,i.Wm)(u,{label:"Description",outlined:"",flat:"",color:"primary",rules:[e=>e&&e.length>0||"Please enter Description"],modelValue:e.clinicalNoteInfo.description,"onUpdate:modelValue":l[2]||(l[2]=l=>e.clinicalNoteInfo.description=l)},null,8,["rules","modelValue"])]),(0,i._)("div",A,[(0,i.Wm)(m,{"stack-label":"",label:"Clinical Note Category",options:e.clinicalCategoryList,modelValue:e.clinicalNoteInfo.clinicalCategory,"onUpdate:modelValue":l[3]||(l[3]=l=>e.clinicalNoteInfo.clinicalCategory=l),outlined:"","emit-value":"","map-options":"",rules:[e=>e&&e.length>0||"Please enter Category"]},null,8,["options","modelValue","rules"])])]),(0,i.Wm)(f,{class:"full-width"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{type:"submit",label:"Update Clinical Note",color:"primary",class:"full-width"}),(0,i.Wm)(p,{onClick:e.softDelete,label:"Soft Delete",color:"red",class:"full-width"},null,8,["onClick"])])),_:1})])),_:1},8,["onSubmit"])])),_:1}),(0,i.Wm)(N,{name:"clinicalFields"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{clinicalNoteInfo:e.clinicalNoteInfo},null,8,["clinicalNoteInfo"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var x=t(8880);const $={ref:"newTemplate"},U={class:"q-pa-md"},L={class:"row"},E={class:"q-pl-md row q-gutter-md"},P={class:"column col"},j={key:0,class:"flex flex-center"},B={key:1,class:"row justify-center"};function O(e,l,t,a,o,c){const n=(0,i.up)("q-input"),s=(0,i.up)("Date"),d=(0,i.up)("Text"),r=(0,i.up)("Number"),u=(0,i.up)("Textarea"),m=(0,i.up)("Select"),p=(0,i.up)("ICD10"),f=(0,i.up)("q-btn"),h=(0,i.up)("q-btn-group"),N=(0,i.up)("Fields");return(0,i.wg)(),(0,i.iD)("div",$,[(0,i._)("div",U,[(0,i.Wm)(n,{label:"Template Name","stack-label":"",outlined:"",modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.templateFields,((l,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"q-py-sm",key:l},[(0,i._)("div",L,["date"==l.type?((0,i.wg)(),(0,i.j4)(s,{key:0,opts:l,class:"col"},null,8,["opts"])):"text"==l.type?((0,i.wg)(),(0,i.j4)(d,{key:1,opts:l,class:"col"},null,8,["opts"])):"number"==l.type?((0,i.wg)(),(0,i.j4)(r,{key:2,opts:l,class:"col"},null,8,["opts"])):"textarea"==l.type?((0,i.wg)(),(0,i.j4)(u,{key:3,opts:l,class:"col"},null,8,["opts"])):"select"==l.type?((0,i.wg)(),(0,i.j4)(m,{key:4,opts:l,class:"col"},null,8,["opts"])):"icd10"==l.type?((0,i.wg)(),(0,i.j4)(p,{key:5,opts:l,class:"col"},null,8,["opts"])):(0,i.kq)("",!0),(0,i._)("div",E,[(0,i.Wm)(f,{class:"col",icon:"fas fa-trash",round:"",color:"negative",size:"sm",flat:"",onClick:(0,x.iM)((l=>e.removeItem(t)),["prevent"])},null,8,["onClick"]),(0,i._)("div",P,[t>0?((0,i.wg)(),(0,i.j4)(f,{key:0,icon:"fas fa-arrow-up",round:"",color:"primary",size:"sm",flat:"",onClick:(0,x.iM)((l=>e.moveItem(t,"up")),["prevent"]),class:"col"},null,8,["onClick"])):(0,i.kq)("",!0),t!=e.templateFields.length-1?((0,i.wg)(),(0,i.j4)(f,{key:1,icon:"fas fa-arrow-down",round:"",color:"primary",size:"sm",flat:"",onClick:(0,x.iM)((l=>e.moveItem(t,"down")),["prevent"]),class:"col"},null,8,["onClick"])):(0,i.kq)("",!0)])])])])))),128)),this.fieldsShow?((0,i.wg)(),(0,i.iD)("div",B,[(0,i.Wm)(N,{onSetFields:e.setFields,clinicalNoteDialog:!1},null,8,["onSetFields"])])):((0,i.wg)(),(0,i.iD)("div",j,[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[this.templateFields.length>0?((0,i.wg)(),(0,i.j4)(f,{key:0,push:"",color:"positive",label:"Save Template",icon:"fas fa-save",unelevated:"",onClick:(0,x.iM)(e.saveTemplate,["prevent"])},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(f,{push:"",color:"teal",label:"Add Fields",icon:"fas fa-plus",unelevated:"",onClick:(0,x.iM)(e.showFields,["prevent"])},null,8,["onClick"])])),_:1})]))],512)}t(71);var z=t(2665),G=t(6829),H=t(9076),K=t(24),R=t(3564),Y=t(1550),J=t(5562);const X=(0,i.aZ)({name:"ClinicalFields",props:["clinicalNoteInfo"],data(){return{form:{name:"",clinicalNoteCode:""},fieldsShow:!1}},components:{Date:z.Z,Text:G.Z,Number:H.Z,Textarea:K.Z,Select:R.Z,ICD10:Y.Z,Fields:J.Z},computed:{...(0,n.Se)("helpers",["templateFields"]),...(0,n.Se)("clinicalNotes",["clinicalInputTypes"])},async mounted(){this.form.clinicalNoteCode=this.clinicalNoteInfo.code,await this.$store.dispatch("clinicalNotes/fetchClinicalInputTypes")},methods:{removeItem(e){const l=this.templateFields.filter(((l,t)=>t!=e));this.$store.commit("helpers/setTemplateFields",l)},moveItem(e,l){this.templateFields[e];const t=[...this.templateFields],i="up"==l?e-1:e+1;console.log(e,i),t.splice(i,0,t.splice(e,1)[0]),this.$store.commit("helpers/setTemplateFields",t)},async saveTemplate(){const e=this.form;e.fields=this.templateFields;let l=[];for(const[i,a]of e.fields.entries()){const t=this.clinicalInputTypes.filter((e=>e.code===a.type)),o={clinicalNoteCode:e.clinicalNoteCode,type:a.type,inputType:t[0].id,clinicalFieldCode:`${e.clinicalNoteCode}${a.label}`.toLowerCase().replaceAll(" ","").replaceAll("-",""),name:a.label,required:a.required,requiredMsg:a.requiredMsg,options:a.options,sequence:i+1};console.log(o),await this.$store.dispatch("clinicalNotes/saveClinicalNoteFields",o),l.push(o)}const t={name:e.name,templateCode:e.name.toLowerCase().replaceAll(" ","").replaceAll("-",""),clinicalNoteCode:e.clinicalNoteCode,fields:l};await this.$store.dispatch("clinicalNotes/saveClinicalNoteTemplate",t)},showFields(){this.fieldsShow=!0},setFields(e){this.$store.commit("helpers/setTemplateFields",e),this.fieldsShow=!1}}});var ee=t(6375),le=t(9367);const te=(0,h.Z)(X,[["render",O]]),ie=te;_()(X,"components",{QInput:q.Z,QBtn:D.Z,QBtnGroup:ee.Z,QCard:N.Z,QCardSection:C.Z,QCardActions:le.Z});const ae=(0,i.aZ)({name:"AddModal",props:["clinicalNoteDetails"],data(){return{tab:"info",clinicalNoteInfo:{id:"",name:"",description:"",clinicalCategory:"",active:"",code:""}}},created(){this.populateDetails()},computed:{...(0,n.Se)({clinicalCategoryList:"clinicalNotes/clinicalCategoryList"})},created(){console.log(this.clinicalNoteInfo),this.populateDetails()},methods:{populateDetails(){this.clinicalNoteInfo.id=this.clinicalNoteDetails.id,this.clinicalNoteInfo.name=this.clinicalNoteDetails.name,this.clinicalNoteInfo.description=this.clinicalNoteDetails.description,this.clinicalNoteInfo.clinicalCategory=this.clinicalNoteDetails.clinicalCategory,this.clinicalNoteInfo.active=this.clinicalNoteDetails.active,this.clinicalNoteInfo.code=this.clinicalNoteDetails.code},softDelete(){this.clinicalNoteInfo.active=!1,this.updateClinicalNote()},async updateClinicalNote(){this.$refs.clinicalNote.validate().then((async e=>{if(e){const e={id:this.clinicalNoteInfo.id,code:this.clinicalNoteInfo.name.replaceAll(" ","").toLowerCase(),name:this.clinicalNoteInfo.name,description:this.clinicalNoteInfo.description,categoryCode:this.clinicalNoteInfo.clinicalCategory,active:this.clinicalNoteInfo.active},l=await this.$store.dispatch("clinicalNotes/updateClinicalNotes",e);l.success?(e.active?this.showNotify("success",`Successfully updated Clinical Note - ${e.name}`):this.showNotify("orange",`Successfully soft deleted Clinical Note - ${e.name}`),this.$emit("closeEditDialog",!1)):(this.formErrorMessage=l.message,this.showNotify("error",l.message))}}))},showNotify(e,l){let t="";t="success"===e?"blue-10":"negative",this.$q.notify({progress:!0,message:l,color:t})}},components:{ClinicalFields:ie}}),oe=(0,h.Z)(ae,[["render",M]]),ce=oe;_()(ae,"components",{QCard:N.Z,QCardSection:C.Z,QTabs:g.Z,QTab:w.Z,QSeparator:y.Z,QTabPanels:b.Z,QTabPanel:v.Z,QForm:I.Z,QInput:q.Z,QSelect:Z.Z,QBtnGroup:ee.Z,QBtn:D.Z});const ne=(0,i.aZ)({name:"ClinicalNotes",components:{AddDialog:W,EditDialog:ce},data(){return{filter:"",addModal:!1,editModal:!1,selectedClinicalNote:[],currentClinicalNote:[],columns:[{name:"filterName",align:"center",label:"NAME",field:"filterName",sortable:!0},{name:"code",label:"CODE",align:"center",field:"code",sortable:!0},{name:"datetime_created",label:"D/T CREATED",field:"datetime_created",align:"center",sortable:!0},{name:"datetime_updated",label:"D/T UPDATED",field:"datetime_updated",align:"center",sortable:!0}]}},watch:{selectedClinicalNote(e){e.length>0&&(this.editModal=!0,this.formatCurrentClinicalNote(e))},editModal(e){e||(this.selectedClinicalNote=[],this.fetchAllClinicalNotes())},addModal(e){e||this.fetchAllClinicalNotes()}},created(){this.fetchAllClinicalNotes(),this.fetchClinicalCategory()},computed:{...(0,n.Se)({clinicalNotes:"clinicalNotes/clinicalNotes",clinicalNoteCategories:"clinicalNotes/clinicalNoteCategories"})},methods:{async fetchClinicalCategory(){await this.$store.dispatch("clinicalNotes/fetchClinicalCategories")},async fetchAllClinicalNotes(){await this.$store.dispatch("clinicalNotes/fetchClinicalNotes")},openClinicalNotesModal(){this.addModal=!0},formatCurrentClinicalNote(e){const l={id:e[0].id,name:e[0].name,description:e[0].name,clinicalCategory:e[0].clinical_category_code,active:e[0].active,code:e[0].code};this.currentClinicalNote=l}}});var se=t(4379),de=t(8107),re=t(8886),ue=t(4554),me=t(6778);const pe=(0,h.Z)(ne,[["render",c]]),fe=pe;_()(ne,"components",{QPage:se.Z,QTable:de.Z,QToggle:re.Z,QBtn:D.Z,QInput:q.Z,QIcon:ue.Z,QDialog:me.Z})}}]);