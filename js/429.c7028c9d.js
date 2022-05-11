"use strict";(self["webpackChunkuerm_ehr"]=self["webpackChunkuerm_ehr"]||[]).push([[429],{3429:(e,l,t)=>{t.r(l),t.d(l,{default:()=>pe});var i=t(3673);const a={class:"q-pa-md"},o=(0,i._)("div",{class:"text-h5 text-weight-light"},"CLINICAL NOTES",-1);function c(e,l,t,c,s,n){const d=(0,i.up)("q-toggle"),r=(0,i.up)("q-btn"),u=(0,i.up)("q-btn-group"),m=(0,i.up)("q-icon"),p=(0,i.up)("q-input"),f=(0,i.up)("q-table"),h=(0,i.up)("AddDialog"),N=(0,i.up)("q-dialog"),C=(0,i.up)("edit-dialog"),g=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(g,null,{default:(0,i.w5)((()=>[(0,i._)("div",a,[(0,i.Wm)(f,{filter:e.filter,rows:this.clinicalNotes,"row-key":"id",columns:this.columns,selection:"single",selected:e.selectedClinicalNote,"onUpdate:selected":l[2]||(l[2]=l=>e.selectedClinicalNote=l)},{"body-selection":(0,i.w5)((e=>[(0,i.Wm)(d,{modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l},null,8,["modelValue","onUpdate:modelValue"])])),"top-left":(0,i.w5)((()=>[o])),"top-right":(0,i.w5)((()=>[(0,i.Wm)(u,{class:"q-mr-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{onClick:l[0]||(l[0]=e=>this.$router.go(-1)),icon:"fa fa-arrow-left",color:"red"}),(0,i.Wm)(r,{onClick:e.openClinicalNotesModal,push:"",icon:"fa fa-plus",color:"blue-10"},null,8,["onClick"])])),_:1}),(0,i.Wm)(p,{dense:"",color:"primary",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[1]||(l[1]=l=>e.filter=l),placeholder:"Search"},{append:(0,i.w5)((()=>[(0,i.Wm)(m,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["filter","rows","columns","selected"]),(0,i.Wm)(N,{"full-width":"",modelValue:e.addModal,"onUpdate:modelValue":l[4]||(l[4]=l=>e.addModal=l)},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{onCloseAddDialog:l[3]||(l[3]=l=>e.addModal=!1)})])),_:1},8,["modelValue"]),(0,i.Wm)(N,{"full-width":"",modelValue:e.editModal,"onUpdate:modelValue":l[6]||(l[6]=l=>e.editModal=l)},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{clinicalNoteDetails:e.currentClinicalNote,onCloseEditDialog:l[5]||(l[5]=l=>e.editModal=!1)},null,8,["clinicalNoteDetails"])])),_:1},8,["modelValue"])])])),_:1})}var s=t(3617);t(246);const n=(0,i.Uk)("ADD CLINICAL NOTES"),d={class:"col-12"},r={class:"col-12"};function u(e,l,t,a,o,c){const s=(0,i.up)("q-card-section"),u=(0,i.up)("q-btn"),m=(0,i.up)("q-input"),p=(0,i.up)("q-card"),f=(0,i.up)("q-scroll-area"),h=(0,i.up)("q-btn-group"),N=(0,i.up)("q-form");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(p,{class:"full-height full-width"},{default:(0,i.w5)((()=>[(0,i.Wm)(N,{onSubmit:e.saveClinicalNote,ref:"clinicalNote"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{class:"text-h5 text-weight-light bg-dark text-white"},{default:(0,i.w5)((()=>[n])),_:1}),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{visible:"",style:{height:"800px"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.clinicalNoteInfo,((l,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"row q-pa-md",key:t},[(0,i.Wm)(p,{class:"col-12 q-pa-md"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{align:"right"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{round:"",color:"negative",class:"absolute",style:{top:"0",transform:"translateY(-60%)"},icon:"fa fa-times",onClick:l=>e.removeClinicalNote(t)},null,8,["onClick"])])),_:2},1024),(0,i._)("div",d,[(0,i.Wm)(m,{label:"Name",modelValue:l.name,"onUpdate:modelValue":e=>l.name=e,outlined:"",flat:"",color:"primary",rules:[e=>e&&e.length>0||"Please enter Name"]},null,8,["modelValue","onUpdate:modelValue","rules"])]),(0,i._)("div",r,[(0,i.Wm)(m,{type:"textarea",label:"Description",outlined:"",flat:"",color:"primary",modelValue:l.description,"onUpdate:modelValue":e=>l.description=e},null,8,["modelValue","onUpdate:modelValue"])])])),_:2},1024)])))),128))])),_:1})])),_:1}),(0,i.Wm)(s,{class:"fixed-bottom text-h5 text-weight-light bg-dark text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{label:"Add Clinical Note",onClick:e.addClinicalNote,color:"green",icon:"fa fa-plus"},null,8,["onClick"]),(0,i.Wm)(u,{type:"submit",label:"Save Clinical Note",color:"primary",icon:"fa fa-save"}),(0,i.Wm)(u,{label:"Close",color:"negative",onClick:e.closeDialog,icon:"fa fa-times"},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])}t(71),t(5363),t(7768);const m=(0,i.aZ)({name:"AddModal",props:["clinicalNoteCategory"],data(){return{tab:"info",clinicalNoteInfo:[{name:"",description:"",clinicalCategory:""}]}},computed:{...(0,s.Se)({clinicalCategoryList:"clinicalNotes/clinicalCategoryList"})},created(){this.clinicalNoteInfo[0].clinicalCategory=this.clinicalNoteCategory},methods:{async saveClinicalNote(){this.$refs.clinicalNote.validate().then((async e=>{if(!e)return!1;for(var l of this.clinicalNoteInfo){var t={code:l.name.replaceAll(" ","").toLowerCase(),name:l.name,description:l.description,categoryCode:l.clinicalCategory};console.log(t);var i=await this.$store.dispatch("clinicalNotes/saveClinicalNotes",t)}i.success?(this.showNotify("success","Successfully saved Clinical Note(s)"),this.$emit("closeAddDialog",!1)):(this.formErrorMessage=i.message,this.showNotify("error",i.message)),this.closeDialog()}))},addClinicalNote(){var e={name:"",description:"",clinicalCategory:this.clinicalNoteCategory};this.clinicalNoteInfo.push(e)},removeClinicalNote(e){const l=Array.from(this.clinicalNoteInfo);l.splice(e,1),this.clinicalNoteInfo=l},showNotify(e,l){let t="";t="success"===e?"blue-10":"negative",this.$q.notify({progress:!0,message:l,color:t})},closeDialog(){this.$emit("closeDialog",!0)}}});var p=t(4260),f=t(151),h=t(5269),N=t(5589),C=t(7704),g=t(2165),w=t(4842),y=t(6375),v=t(7518),b=t.n(v);const I=(0,p.Z)(m,[["render",u]]),q=I;b()(m,"components",{QCard:f.Z,QForm:h.Z,QCardSection:N.Z,QScrollArea:C.Z,QBtn:g.Z,QInput:w.Z,QBtnGroup:y.Z});const D=(0,i.Uk)("UPDATE CLINICAL NOTE"),k={class:"row q-col-gutter-md"},W={class:"col-12"},Z={class:"col-12"},_={class:"col-12"};function V(e,l,t,a,o,c){const s=(0,i.up)("q-card-section"),n=(0,i.up)("q-tab"),d=(0,i.up)("q-tabs"),r=(0,i.up)("q-separator"),u=(0,i.up)("q-input"),m=(0,i.up)("q-select"),p=(0,i.up)("q-btn"),f=(0,i.up)("q-btn-group"),h=(0,i.up)("q-form"),N=(0,i.up)("q-tab-panel"),C=(0,i.up)("ClinicalFields"),g=(0,i.up)("q-tab-panels"),w=(0,i.up)("q-card");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{class:"text-h5 text-weight-light bg-dark text-white"},{default:(0,i.w5)((()=>[D])),_:1}),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d,{modelValue:e.tab,"onUpdate:modelValue":l[0]||(l[0]=l=>e.tab=l),dense:"",class:"text-grey bg-blue-10","active-color":"white","indicator-color":"yellow-10",align:"justify","narrow-indicator":""},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{name:"info",label:"Clinical Note Info"}),(0,i.Wm)(n,{name:"clinicalFields",label:"Clinical Fields"})])),_:1},8,["modelValue"]),(0,i.Wm)(r),(0,i.Wm)(g,{modelValue:e.tab,"onUpdate:modelValue":l[4]||(l[4]=l=>e.tab=l),animated:""},{default:(0,i.w5)((()=>[(0,i.Wm)(N,{name:"info"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"q-px-sm q-pt-sm q-pb-xs q-gutter-md",onSubmit:e.updateClinicalNote,ref:"clinicalNote"},{default:(0,i.w5)((()=>[(0,i._)("div",k,[(0,i._)("div",W,[(0,i.Wm)(u,{label:"Name",modelValue:e.clinicalNoteInfo.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.clinicalNoteInfo.name=l),outlined:"",flat:"",color:"primary",rules:[e=>e&&e.length>0||"Please enter Name"]},null,8,["modelValue","rules"])]),(0,i._)("div",Z,[(0,i.Wm)(u,{label:"Description",outlined:"",flat:"",color:"primary",rules:[e=>e&&e.length>0||"Please enter Description"],modelValue:e.clinicalNoteInfo.description,"onUpdate:modelValue":l[2]||(l[2]=l=>e.clinicalNoteInfo.description=l)},null,8,["rules","modelValue"])]),(0,i._)("div",_,[(0,i.Wm)(m,{"stack-label":"",label:"Clinical Note Category",options:e.clinicalCategoryList,modelValue:e.clinicalNoteInfo.clinicalCategory,"onUpdate:modelValue":l[3]||(l[3]=l=>e.clinicalNoteInfo.clinicalCategory=l),outlined:"","emit-value":"","map-options":"",rules:[e=>e&&e.length>0||"Please enter Category"]},null,8,["options","modelValue","rules"])])]),(0,i.Wm)(f,{class:"full-width"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{type:"submit",label:"Update Clinical Note",color:"primary",class:"full-width"}),(0,i.Wm)(p,{onClick:e.softDelete,label:"Soft Delete",color:"red",class:"full-width"},null,8,["onClick"])])),_:1})])),_:1},8,["onSubmit"])])),_:1}),(0,i.Wm)(N,{name:"clinicalFields"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{clinicalNoteInfo:e.clinicalNoteInfo},null,8,["clinicalNoteInfo"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var Q=t(8880);const S={ref:"newTemplate"},T={class:"q-pa-md"},F={class:"row"},A={class:"q-pl-md row q-gutter-md"},M={class:"column col"},x={key:0,class:"flex flex-center"},$={key:1,class:"row justify-center"};function U(e,l,t,a,o,c){const s=(0,i.up)("q-input"),n=(0,i.up)("Date"),d=(0,i.up)("Text"),r=(0,i.up)("Number"),u=(0,i.up)("Textarea"),m=(0,i.up)("Select"),p=(0,i.up)("ICD10"),f=(0,i.up)("q-btn"),h=(0,i.up)("q-btn-group"),N=(0,i.up)("Fields");return(0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("div",T,[(0,i.Wm)(s,{label:"Template Name","stack-label":"",outlined:"",modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.templateFields,((l,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"q-py-sm",key:l},[(0,i._)("div",F,["date"==l.type?((0,i.wg)(),(0,i.j4)(n,{key:0,opts:l,class:"col"},null,8,["opts"])):"text"==l.type?((0,i.wg)(),(0,i.j4)(d,{key:1,opts:l,class:"col"},null,8,["opts"])):"number"==l.type?((0,i.wg)(),(0,i.j4)(r,{key:2,opts:l,class:"col"},null,8,["opts"])):"textarea"==l.type?((0,i.wg)(),(0,i.j4)(u,{key:3,opts:l,class:"col"},null,8,["opts"])):"select"==l.type?((0,i.wg)(),(0,i.j4)(m,{key:4,opts:l,class:"col"},null,8,["opts"])):"icd10"==l.type?((0,i.wg)(),(0,i.j4)(p,{key:5,opts:l,class:"col"},null,8,["opts"])):(0,i.kq)("",!0),(0,i._)("div",A,[(0,i.Wm)(f,{class:"col",icon:"fas fa-trash",round:"",color:"negative",size:"sm",flat:"",onClick:(0,Q.iM)((l=>e.removeItem(t)),["prevent"])},null,8,["onClick"]),(0,i._)("div",M,[t>0?((0,i.wg)(),(0,i.j4)(f,{key:0,icon:"fas fa-arrow-up",round:"",color:"primary",size:"sm",flat:"",onClick:(0,Q.iM)((l=>e.moveItem(t,"up")),["prevent"]),class:"col"},null,8,["onClick"])):(0,i.kq)("",!0),t!=e.templateFields.length-1?((0,i.wg)(),(0,i.j4)(f,{key:1,icon:"fas fa-arrow-down",round:"",color:"primary",size:"sm",flat:"",onClick:(0,Q.iM)((l=>e.moveItem(t,"down")),["prevent"]),class:"col"},null,8,["onClick"])):(0,i.kq)("",!0)])])])])))),128)),this.fieldsShow?((0,i.wg)(),(0,i.iD)("div",$,[(0,i.Wm)(N,{onSetFields:e.setFields,clinicalNoteDialog:!1},null,8,["onSetFields"])])):((0,i.wg)(),(0,i.iD)("div",x,[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[this.templateFields.length>0?((0,i.wg)(),(0,i.j4)(f,{key:0,push:"",color:"positive",label:"Save Template",icon:"fas fa-save",unelevated:"",onClick:(0,Q.iM)(e.saveTemplate,["prevent"])},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(f,{push:"",color:"teal",label:"Add Fields",icon:"fas fa-plus",unelevated:"",onClick:(0,Q.iM)(e.showFields,["prevent"])},null,8,["onClick"])])),_:1})]))],512)}var L=t(450),E=t(4739),j=t(9127),P=t(4849),B=t(9115),G=t(883),O=t(7526);const z=(0,i.aZ)({name:"ClinicalFields",props:["clinicalNoteInfo"],data(){return{form:{name:"",clinicalNoteCode:""},fieldsShow:!1}},components:{Date:L.Z,Text:E.Z,Number:j.Z,Textarea:P.Z,Select:B.Z,ICD10:G.Z,Fields:O.Z},computed:{...(0,s.Se)("helpers",["templateFields"]),...(0,s.Se)("clinicalNotes",["clinicalInputTypes"])},async mounted(){this.form.clinicalNoteCode=this.clinicalNoteInfo.code,await this.$store.dispatch("clinicalNotes/fetchClinicalInputTypes")},methods:{removeItem(e){const l=this.templateFields.filter(((l,t)=>t!=e));this.$store.commit("helpers/setTemplateFields",l)},moveItem(e,l){this.templateFields[e];const t=[...this.templateFields],i="up"==l?e-1:e+1;console.log(e,i),t.splice(i,0,t.splice(e,1)[0]),this.$store.commit("helpers/setTemplateFields",t)},async saveTemplate(){const e=this.form;e.fields=this.templateFields;let l=[];for(const[i,a]of e.fields.entries()){const t=this.clinicalInputTypes.filter((e=>e.code===a.type)),o={clinicalNoteCode:e.clinicalNoteCode,type:a.type,inputType:t[0].id,clinicalFieldCode:`${e.clinicalNoteCode}${a.label}`.toLowerCase().replaceAll(" ","").replaceAll("-",""),name:a.label,required:a.required,requiredMessage:a.requiredMessage,options:a.options,sequence:i+1};console.log(o),await this.$store.dispatch("clinicalNotes/saveClinicalNoteFields",o),l.push(o)}const t={name:e.name,code:e.name.toLowerCase().replaceAll(" ","").replaceAll("-",""),clinicalNoteCode:e.clinicalNoteCode,fields:l};await this.$store.dispatch("clinicalNotes/saveClinicalNoteTemplate",t)},showFields(){this.fieldsShow=!0},setFields(e){this.$store.commit("helpers/setTemplateFields",e),this.fieldsShow=!1}}});var Y=t(9367);const H=(0,p.Z)(z,[["render",U]]),K=H;b()(z,"components",{QInput:w.Z,QBtn:g.Z,QBtnGroup:y.Z,QCard:f.Z,QCardSection:N.Z,QCardActions:Y.Z});const R=(0,i.aZ)({name:"AddModal",props:["clinicalNoteDetails"],data(){return{tab:"info",clinicalNoteInfo:{id:"",name:"",description:"",clinicalCategory:"",active:"",code:""}}},created(){this.populateDetails()},computed:{...(0,s.Se)({clinicalCategoryList:"clinicalNotes/clinicalCategoryList"})},created(){console.log(this.clinicalNoteInfo),this.populateDetails()},methods:{populateDetails(){this.clinicalNoteInfo.id=this.clinicalNoteDetails.id,this.clinicalNoteInfo.name=this.clinicalNoteDetails.name,this.clinicalNoteInfo.description=this.clinicalNoteDetails.description,this.clinicalNoteInfo.clinicalCategory=this.clinicalNoteDetails.clinicalCategory,this.clinicalNoteInfo.active=this.clinicalNoteDetails.active,this.clinicalNoteInfo.code=this.clinicalNoteDetails.code},softDelete(){this.clinicalNoteInfo.active=!1,this.updateClinicalNote()},async updateClinicalNote(){this.$refs.clinicalNote.validate().then((async e=>{if(e){const e={id:this.clinicalNoteInfo.id,code:this.clinicalNoteInfo.name.replaceAll(" ","").toLowerCase(),name:this.clinicalNoteInfo.name,description:this.clinicalNoteInfo.description,categoryCode:this.clinicalNoteInfo.clinicalCategory,active:this.clinicalNoteInfo.active},l=await this.$store.dispatch("clinicalNotes/updateClinicalNotes",e);l.success?(e.active?this.showNotify("success",`Successfully updated Clinical Note - ${e.name}`):this.showNotify("orange",`Successfully soft deleted Clinical Note - ${e.name}`),this.$emit("closeEditDialog",!1)):(this.formErrorMessage=l.message,this.showNotify("error",l.message))}}))},showNotify(e,l){let t="";t="success"===e?"blue-10":"negative",this.$q.notify({progress:!0,message:l,color:t})}},components:{ClinicalFields:K}});var J=t(7547),X=t(8408),ee=t(5869),le=t(5906),te=t(6602),ie=t(3017);const ae=(0,p.Z)(R,[["render",V]]),oe=ae;b()(R,"components",{QCard:f.Z,QCardSection:N.Z,QTabs:J.Z,QTab:X.Z,QSeparator:ee.Z,QTabPanels:le.Z,QTabPanel:te.Z,QForm:h.Z,QInput:w.Z,QSelect:ie.Z,QBtnGroup:y.Z,QBtn:g.Z});const ce=(0,i.aZ)({name:"ClinicalNotes",components:{AddDialog:q,EditDialog:oe},data(){return{filter:"",addModal:!1,editModal:!1,selectedClinicalNote:[],currentClinicalNote:[],columns:[{name:"filterName",align:"center",label:"NAME",field:"filterName",sortable:!0},{name:"code",label:"CODE",align:"center",field:"code",sortable:!0},{name:"datetime_created",label:"D/T CREATED",field:"datetime_created",align:"center",sortable:!0},{name:"datetime_updated",label:"D/T UPDATED",field:"datetime_updated",align:"center",sortable:!0}]}},watch:{selectedClinicalNote(e){e.length>0&&(this.editModal=!0,this.formatCurrentClinicalNote(e))},editModal(e){e||(this.selectedClinicalNote=[],this.fetchAllClinicalNotes())},addModal(e){e||this.fetchAllClinicalNotes()}},created(){this.fetchAllClinicalNotes(),this.fetchClinicalCategory()},computed:{...(0,s.Se)({clinicalNotes:"clinicalNotes/clinicalNotes",clinicalNoteCategories:"clinicalNotes/clinicalNoteCategories"})},methods:{async fetchClinicalCategory(){await this.$store.dispatch("clinicalNotes/fetchClinicalCategories")},async fetchAllClinicalNotes(){const e=await this.$store.dispatch("helpers/decrypt",this.$route.params.categoryCode),l={clinicalCategoryCode:e.decrypted};await this.$store.dispatch("clinicalNotes/fetchClinicalNotes",l)},openClinicalNotesModal(){this.addModal=!0},formatCurrentClinicalNote(e){const l={id:e[0].id,name:e[0].name,description:e[0].name,clinicalCategory:e[0].clinical_category_code,active:e[0].active,code:e[0].code};this.currentClinicalNote=l}}});var se=t(4379),ne=t(8107),de=t(8886),re=t(4554),ue=t(6778);const me=(0,p.Z)(ce,[["render",c]]),pe=me;b()(ce,"components",{QPage:se.Z,QTable:ne.Z,QToggle:de.Z,QBtnGroup:y.Z,QBtn:g.Z,QInput:w.Z,QIcon:re.Z,QDialog:ue.Z})}}]);