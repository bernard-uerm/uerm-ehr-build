(()=>{var e={4001:(e,t,n)=>{"use strict";n(5363),n(71);var a=n(8880),o=n(9592),i=n(3673);function r(e,t,n,a,o,r){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(c)}const c=(0,i.aZ)({name:"App"});var s=n(4260);const l=(0,s.Z)(c,[["render",r]]),p=l;var u=n(7679),h=n(7083),d=n(9582);const m=[{path:"/",component:()=>Promise.all([n.e(736),n.e(249)]).then(n.bind(n,1249)),children:[{name:"dashboard",path:"",component:()=>Promise.all([n.e(736),n.e(733)]).then(n.bind(n,2733))}]},{path:"/admin",component:()=>Promise.all([n.e(736),n.e(341)]).then(n.bind(n,2341)),children:[{name:"ClinicalNotes",path:"clinical-notes",component:()=>Promise.all([n.e(736),n.e(64),n.e(478)]).then(n.bind(n,3478))},{name:"Template",path:"template",component:()=>Promise.all([n.e(736),n.e(64),n.e(24)]).then(n.bind(n,2616)),children:[{name:"NewTemplate",path:"new",component:()=>Promise.all([n.e(736),n.e(64)]).then(n.bind(n,3756))},{name:"EditTemplate",path:"edit/:id",component:()=>Promise.all([n.e(736),n.e(64)]).then(n.bind(n,2080))}]}]},{path:"/patient-dashboard",component:()=>Promise.all([n.e(736),n.e(249)]).then(n.bind(n,1249)),children:[{path:":patientno",component:()=>Promise.all([n.e(736),n.e(64),n.e(59)]).then(n.bind(n,59))}]},{path:"/patient-record",component:()=>Promise.all([n.e(736),n.e(249)]).then(n.bind(n,1249)),children:[{path:"imaging/:patientno",component:()=>Promise.all([n.e(736),n.e(64),n.e(513)]).then(n.bind(n,3513))},{path:"laboratories/:patientno",component:()=>Promise.all([n.e(736),n.e(64),n.e(548)]).then(n.bind(n,7548))},{path:"consultation/:patientno",component:()=>Promise.all([n.e(736),n.e(386)]).then(n.bind(n,5386))}]},{path:"/doctors",component:()=>Promise.all([n.e(736),n.e(249)]).then(n.bind(n,1249)),children:[{name:"doctors",path:"/doctors/:routes",component:()=>Promise.all([n.e(736),n.e(64),n.e(526)]).then(n.bind(n,7585))}]},{path:"/nurses",component:()=>Promise.all([n.e(736),n.e(249)]).then(n.bind(n,1249)),children:[{name:"nurses",path:"/nurses/:routes",component:()=>Promise.all([n.e(736),n.e(64),n.e(430)]).then(n.bind(n,4543))}]},{path:"/emr",component:()=>Promise.all([n.e(736),n.e(249)]).then(n.bind(n,1249)),children:[{name:"emr",path:"/emr/case/:caseNo",component:()=>Promise.all([n.e(736),n.e(64),n.e(525)]).then(n.bind(n,9525))},{name:"emr-checked",path:"/emr/case/:caseNo/checked",component:()=>Promise.all([n.e(736),n.e(64),n.e(525)]).then(n.bind(n,9525))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(614)]).then(n.bind(n,5614))}],f=m,y=(0,h.BC)((function(){const e=d.r5,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/vue/ehr/")});return t}));async function g(e,t){const a="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:i}=await Promise.resolve().then(n.bind(n,7679)),r="function"===typeof y?await y({store:a}):y;a.$router=r;const c=e(p);return c.use(o.Z,t),{app:c,store:a,storeKey:i,router:r}}var C=n(4434);const T={config:{notify:{}},plugins:{Notify:C.Z}},N="/vue/ehr/",v=/\/\//,b=e=>(N+e).replace(v,"/");async function w({app:e,router:t,store:n,storeKey:a},o){let i=!1;const r=e=>{try{return b(t.resolve(e).href)}catch(n){}return Object(e)===e?null:e},c=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let p=0;!1===i&&p<o.length;p++)try{await o[p]({app:e,router:t,store:n,ssrContext:null,redirect:c,urlPath:s,publicPath:N})}catch(l){return l&&l.url?void c(l.url):void console.error("[Quasar] boot error:",l)}!0!==i&&(e.use(t),e.use(n,a),e.mount("#q-app"))}g(a.ri,T).then((e=>Promise.all([Promise.resolve().then(n.bind(n,5474))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));w(e,n)}))))},5474:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c,api:()=>r});var a=n(7083),o=n(52),i=n.n(o);const r=i().create({baseURL:"https://api.example.com"}),c=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=r}))},7261:()=>{},7679:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Tt});var a={};n.r(a),n.d(a,{colorEMR:()=>P,drawerRight:()=>S,infiniteScroll:()=>j,mainNavigation:()=>b,patientEncounterInfoTab:()=>E,showClinicalNoteDetails:()=>D,templateFields:()=>O,userRole:()=>w});var o={};n.r(o),n.d(o,{openRightDrawer:()=>$,setColorEMR:()=>I,setInfiniteScroll:()=>J,setPatientEncounterInfoTab:()=>R,setShowClinicalNoteDetails:()=>F,setTemplateFields:()=>G});var i={};n.r(i),n.d(i,{decrypt:()=>k,encrypt:()=>B,getQnapAuth:()=>q,openRightDrawer:()=>x,searchIcd10:()=>W,setColorEMR:()=>M,setInfiniteScroll:()=>Y,setPatientEncounterInfoTab:()=>_,showClinicalNoteDetails:()=>A});var r={};n.r(r),n.d(r,{clinicalCategoryList:()=>X,clinicalCategoryNotes:()=>Q,clinicalInputTypes:()=>z,clinicalNoteCategories:()=>Z,clinicalNoteDetailValues:()=>K,clinicalNoteDetails:()=>H,clinicalNoteTemplateFormat:()=>te,clinicalNotes:()=>V,clinicalNotesGrouped:()=>ee});var c={};n.r(c),n.d(c,{removeTMPClinicalNotePanel:()=>he,removeTMPClinicalRecord:()=>ue,setClinicalCategoryNotes:()=>re,setClinicalInputTypes:()=>ce,setClinicalNoteCategories:()=>ne,setClinicalNoteDetailValues:()=>ie,setClinicalNoteDetails:()=>oe,setClinicalNoteTemplateFormat:()=>se,setClinicalNotes:()=>ae,setTMPClinicalNotePanel:()=>pe,setTMPClinicalRecord:()=>le});var s={};n.r(s),n.d(s,{fetchClinicalCategories:()=>de,fetchClinicalCategoryNotes:()=>me,fetchClinicalInputTypes:()=>Ce,fetchClinicalNoteDetailValues:()=>ge,fetchClinicalNoteDetails:()=>ye,fetchClinicalNotes:()=>fe,fetchTemplates:()=>we,getTemplateById:()=>Se,saveClinicalNoteFields:()=>be,saveClinicalNoteTemplate:()=>ve,saveClinicalNotes:()=>Te,updateClinicalNotes:()=>Ne});var l={};n.r(l),n.d(l,{active:()=>Re,patientDepts:()=>$e,patients:()=>De,patientsGrouped:()=>Oe,pxType:()=>je,searchList:()=>Ie});var p={};n.r(p),n.d(p,{populatePatientSearch:()=>Je,populatePatients:()=>Fe});var u={};n.r(u),n.d(u,{getActiveStat:()=>ke,getBasicInfo:()=>xe,getOPDPatients:()=>qe,getPatientsByDr:()=>Be,history:()=>Me,imagingResults:()=>_e,laboratoryResults:()=>Ae,search:()=>Ge});var h={};n.r(h),n.d(h,{accountType:()=>Le,credentials:()=>Ze,role:()=>Ue});var d={};n.r(d),n.d(d,{changeAccount:()=>Ve});var m={};n.r(m),n.d(m,{isPatientSearching:()=>ze});var f={};n.r(f),n.d(f,{isPatientSearching:()=>Xe});var y={};n.r(y),n.d(y,{clinicalEncounterDetails:()=>it,clinicalEncounters:()=>ot,clinicalEncountersPage:()=>rt,clinicalEncountersRows:()=>ct,encounterCases:()=>at});var g={};n.r(g),n.d(g,{setClinicalEncounterDetails:()=>lt,setClinicalEncounters:()=>pt,setEncounterCases:()=>st});var C={};n.r(C),n.d(C,{getCases:()=>ut,getClinicalEncounterDetails:()=>dt,getClinicalEncounters:()=>ht,saveClinicalEncounter:()=>mt,saveClinicalEncounterDetails:()=>ft,updateClinicalEncounter:()=>yt,updateClinicalEncounterDetails:()=>gt});var T=n(7083),N=n(3617);function v(){return{role:"nurses",drawerRight:!0,colorEMR:"primary",patientEncounterInfoTab:"otherInfo",showClinicalNoteDetails:!1,currentCNDDetails:null,clinicalNoteTitle:null,currentCNTab:null,userRole:"nurses",infiniteScroll:!0,templateFields:[],mainNavigation:[{name:"HOME",icon:"fa fa-hospital",route:"/"},{name:"TOOLS",icon:"fa fa-tools",route:"/role/tools"},{name:"ANALYTICS",icon:"fa fa-chart-line",route:"/role/analytics"}]}}function b(e){return e.mainNavigation}function w(e){return e.userRole}function S(e){return e.drawerRight}function P(e){return e.colorEMR}function E(e){return e.patientEncounterInfoTab}function D(e){return e.showClinicalNoteDetails}function j(e){return e.infiniteScroll}function O(e){return e.templateFields}function $(e,t){e.drawerRight=t}function I(e,t){e.colorEMR=t}function R(e,t){e.patientEncounterInfoTab=t}function F(e,t){e.showClinicalNoteDetails=t}function J(e,t){e.infiniteScroll=t}function G(e,t){e.templateFields=t}n(2100),n(71),n(246);function x(e,t){e.commit("openRightDrawer",t)}function M(e,t){e.commit("setColorEMR",t)}function _(e,t){e.commit("setPatientEncounterInfoTab",t)}function A(e,t){e.commit("setShowClinicalNoteDetails",t.show),e.commit("setCurrentCNDDetails",t.code)}async function B(e,t){const n="https://api.uerm.edu.ph/auth/encrypt?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({string:t.toString()})}).then((e=>e.json()));return a}async function k(e,t){const n="https://api.uerm.edu.ph/auth/decrypt?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({string:t.toString()})}).then((e=>e.json()));return a}async function q(e,t){const n="https://api.uerm.edu.ph/auth/qnap?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));return a}async function Y(e,t){e.commit("setInfiniteScroll",t)}async function W(e,t){const n=`https://api.uerm.edu.ph/ehr/search-icd-10/${t.search}/${t.type}?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6`,a=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));for(var o of a)o.label=o.code,o.value=o.description;return a}const U={namespaced:!0,getters:a,mutations:o,actions:i,state:v};function L(){return{tmpClinicalRecord:[],tmpClinicalNote:[],clinicalNoteCategories:[],clinicalNotes:[],clinicalNoteDetails:[],clinicalNoteDetailValues:[],clinicalInputTypes:[],clinicalCategoryNotes:[],clinicalNoteTemplateFormat:[]}}function Z(e){return e.clinicalNoteCategories}function V(e){return e.clinicalNotes}function H(e){return e.clinicalNoteDetails}function K(e){return e.clinicalNoteDetailValues}function Q(e){return e.clinicalCategoryNotes}function z(e){return e.clinicalInputTypes}function X(e){let t=e.clinicalNoteCategories.map((e=>({label:e.name,value:e.code})));return t=[...new Set(t)],t}function ee(e){let t=e.clinicalNotes.map((e=>({code:e.code,name:e.name,label:e.name,value:e.code})));return t=[...new Set(t)],{categories:t,notes:e.clinicalNotes}}function te(e){return e.clinicalNoteTemplateFormat}function ne(e,t){e.clinicalNoteCategories=t}function ae(e,t){e.clinicalNotes=t}function oe(e,t){e.clinicalNoteDetails=t}function ie(e,t){e.clinicalNoteDetailValues=t}function re(e,t){e.clinicalCategoryNotes=t}function ce(e,t){e.clinicalInputTypes=t}function se(e,t){e.clinicalNoteTemplateFormat=t}function le(e,t){if(e.tmpClinicalRecord.length>0){var n=e.tmpClinicalRecord.filter((e=>e.name.includes(t.name)));0===n.length&&e.tmpClinicalRecord.push(t)}else e.tmpClinicalRecord.push(t)}function pe(e,t){if(e.tmpClinicalNote.length>0){var n=e.tmpClinicalNote.filter((e=>e.name.includes(t.name)));0===n.length&&e.tmpClinicalNote.push(t)}else e.tmpClinicalNote.push(t)}function ue(e,t){const n=Array.from(e.tmpClinicalRecord);n.splice(t,1),e.tmpClinicalRecord=n}function he(e){e.tmpClinicalNote=[]}n(5363);async function de(e,t){const n=await fetch("https://api.uerm.edu.ph/health-records/clinical-note-categories",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(n.length>0){for(var a of n)a.filterName=a.name.toUpperCase(),a.label=a.name.toUpperCase();e.commit("setClinicalNoteCategories",n)}}async function me(e,t){const n=await fetch("https://api.uerm.edu.ph/health-records/clinical-category-notes",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(n.length>0){var a=[],o=[];for(var i of n){i.filterName=i.category_name.toUpperCase();const e={label:i.category_name.toUpperCase()};a.push(e)}for(var r of(a=a.filter(((e,t,n)=>t===n.findIndex((t=>t.label===e.label)))),a)){var c=n.filter((e=>e.category_name.toUpperCase()===r.label));for(var s of c)s.label=s.clinical_note_name.toUpperCase();const e={label:r.label,children:c};o.push(e)}console.log(o),e.commit("setClinicalCategoryNotes",o)}}async function fe(e,t){let n="";n=t?`https://api.uerm.edu.ph/health-records/clinical-notes?clinicalCategoryCode=${t}`:"https://api.uerm.edu.ph/health-records/clinical-notes";const a=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(a.length>0){for(let e of a){const t=e.datetime_created.replace(/T/," ").replace(/Z/," ").substr("0","16"),n=new Date(`${t}`),a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),o=new Intl.DateTimeFormat("en",{month:"long"}).format(n),i=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(n);let r=n.getMinutes(),c=n.getHours();r<10&&(r="0"+r);let s="AM";c>12&&(c-=12,s="PM");const l=`${c}:${r} ${s}`;e.datetime_created=`${o} ${i}, ${a} ${l}`;const p=e.datetime_updated.replace(/T/," ").replace(/Z/," ").substr("0","16"),u=new Date(`${p}`),h=new Intl.DateTimeFormat("en",{year:"numeric"}).format(u),d=new Intl.DateTimeFormat("en",{month:"long"}).format(u),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(u);let f=u.getMinutes(),y=u.getHours();f<10&&(f="0"+f);let g="AM";y>12&&(y-=12,g="PM");const C=`${y}:${f} ${g}`;e.datetime_updated=`${d} ${m}, ${h} ${C}`,e.filterName=e.name.toUpperCase()}return e.commit("setClinicalNotes",a),a}e.commit("setClinicalNotes",[])}async function ye(e,t){const n=await fetch(`https://api.uerm.edu.ph/health-records/clinical-note-details?clinicalNoteCode=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(n),n.length>0){this.state.clinicalNotes.clinicalNotes.filter((e=>e.code===t));for(var a of n)a.template_json=JSON.parse(a.template_format);console.log(n),e.commit("setClinicalNoteTemplateFormat",n[0].template_json),e.commit("setClinicalNoteDetails",n)}else e.commit("setClinicalNoteDetails",[])}async function ge(e,t){const n=await fetch(`https://api.uerm.edu.ph/health-records/clinical-note-detail-values?clinicalFieldCode=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));n.length>0?e.commit("setClinicalNoteDetailValues",n):e.commit("setClinicalNoteDetailValues",[])}async function Ce(e,t){const n=await fetch(`https://api.uerm.edu.ph/health-records/clinical-input-types?clinicalFieldCode=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(n.length>0){for(var a of n)a.type=name.toLowerCase();e.commit("setClinicalInputTypes",n)}else e.commit("setClinicalInputTypes",[])}async function Te(e,t){try{const e=await fetch("https://api.uerm.edu.ph/health-records/save-clinical-notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return e[0].ERR?{message:e[0].MSG,error:e[0].ERR}:{success:e[0].MSG}}catch(n){return console.log(n),{error:n}}}async function Ne(e,t){try{const e=await fetch("https://api.uerm.edu.ph/health-records/update-clinical-notes",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return console.log(e),e[0].ERR?{message:e[0].MSG,error:e[0].ERR}:{success:e[0].MSG}}catch(n){return console.log(n),{error:n}}}async function ve(e,t){try{const e=await fetch("https://api.uerm.edu.ph/health-records/save-clinical-note-template",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return console.log(e),e[0].ERR?{message:e[0].MSG,error:e[0].ERR}:{success:e[0].MSG}}catch(n){return console.log(n),{error:n}}}async function be(e,t){try{const e=await fetch("https://api.uerm.edu.ph/health-records/save-clinical-note-fields",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return console.log(e),e[0].ERR?{message:e[0].MSG,error:e[0].ERR}:{success:e[0].MSG}}catch(n){return console.log(n),{error:n}}}async function we(e,t){const n="https://api.uerm.edu.ph/ehr/clinical-note-templates?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));return a}async function Se(e,t){const n="https://api.uerm.edu.ph/ehr/template?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6";console.log(n);const a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((e=>e.json()));return a}const Pe={namespaced:!0,getters:r,mutations:c,actions:s,state:L};function Ee(){return{px:[],pxSearch:[],pxType:null,showDrPatients:!1,drCode:"476",activePatientsByDr:[]}}function De(e){return e.px}function je(e){return e.pxType}function Oe(e){const t={},n=e.showDrPatients?e.px.filter((t=>t.drCode==e.drCode)):e.px;let a=[];a=n.map((e=>e.caseDept)),a=[...new Set(a)];for(let o of a)t[o]=[];for(let o of n)t[o.caseDept].push({...o,patientName:`${o.lastname}, ${o.firstname} ${o.middlename}`,birthDate:new Date(o.birthDate).toISOString().split("T")[0]});return t}function $e(e){let t=[],n=[];const a=e.showDrPatients?e.px.filter((t=>t.drCode==e.drCode)):e.px;n=a.map((e=>e.caseDept)),n=[...new Set(n)];for(let o of n)t.push({description:o,qty:a.filter((e=>e.caseDept==o)).length});return t}function Ie(e){return e.pxSearch}function Re(e){return e.activePatientsByDr}function Fe(e,t){e.px=t}function Je(e,t){e.pxSearch=t}async function Ge(e,t){const n="https://api.uerm.edu.ph/ehr/search-name?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({search:t})}).then((e=>e.json()));e.commit("populatePatientSearch",a)}async function xe(e,t){const n="https://api.uerm.edu.ph/ehr/basic-info?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patientno:t})}).then((e=>e.json()));return a}async function Me(e,t){const n="https://api.uerm.edu.ph/ehr/consultation-history?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patientno:t})}).then((e=>e.json()));return a}async function _e(e,t){const n="https://api.uerm.edu.ph/ehr/imaging-results?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patientno:t.patientno,fetchAll:t.fetchAll})}).then((e=>e.json()));return a}async function Ae(e,t){const n="https://api.uerm.edu.ph/ehr/lab-results?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patientno:t.patientno,fetchAll:t.fetchAll})}).then((e=>e.json()));return a}async function Be(e,t){const n="https://api.uerm.edu.ph/ehr/active-patients-dr?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:t})}).then((e=>e.json()));return a}async function ke(e,t){const n="https://api.uerm.edu.ph/ehr/active-cases-stat?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",a=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));return a}async function qe(e){const t="https://api.uerm.edu.ph/ehr/active-patients-opd?auth=qG7JotCSrFJO2eSW4RdaIPYx33ECiBs6",n=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));return n}const Ye={namespaced:!0,getters:l,mutations:p,actions:u,state:Ee};function We(){return{role:"nurses",credentials:{code:"100",accountType:"DR",userID:"1"}}}function Ue(e){return e.role}function Le(e){return e.credentials.accountType}function Ze(e){return e.credentials}function Ve(e,t){e.credentials.accountType=t.code,e.role=t.role}var He=n(9441);const Ke={namespaced:!0,state:We,getters:h,mutations:d,actions:He};function Qe(){return{isPatientSearching:!1}}function ze(e){return e.isPatientSearching}function Xe(e,t){e.isPatientSearching=t}var et=n(7261);const tt={namespaced:!0,state:Qe,getters:m,mutations:f,actions:et};function nt(){return{encounterCases:[],clinicalEncounters:[],clinicalEncounterDetails:[],clinicalEncountersPage:1,clinicalEncountersRows:5}}function at(e){return e.encounterCases}function ot(e){return e.clinicalEncounters}function it(e){return e.clinicalEncounterDetails}function rt(e){return e.clinicalEncountersPage}function ct(e){return e.clinicalEncountersRows}function st(e,t){e.encounterCases=t}function lt(e,t){e.clinicalEncounterDetails=t}function pt(e,t){e.clinicalEncounters=t}async function ut(e,t){var n="";"active"===t.type?n=`https://api.uerm.edu.ph/health-records/encounter-cases?active=1&dateFrom=${t.dateFrom}&dateTo=${t.dateTo}`:"forDischarge"===t.type?n=`https://api.uerm.edu.ph/health-records/encounter-cases?forDischarge=1&dateFrom=${t.dateFrom}&dateTo=${t.dateTo}`:"discharged"===t.type?n=`https://api.uerm.edu.ph/health-records/encounter-cases?discharged=1&dateFrom=${t.dateFrom}&dateTo=${t.dateTo}`:"checking"===t.type&&(n=`https://api.uerm.edu.ph/health-records/encounter-cases?caseNo=${t.caseNo}`);const a=await fetch(`${n}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log("asd",n),a.length>0){var o="";for(var i of(o="checking"===t.type?a:a.filter((e=>e.patient_type===t.patientType)),o)){const n=await e.dispatch("helpers/encrypt",i.case_no,{root:!0});i.encryptedCaseNo=n.encrypted;const a=await e.dispatch("helpers/encrypt",i.patient_no,{root:!0});i.encryptedPatientNo=a.encrypted,i.name=`${i.last_name}, ${i.first_name} ${i.middle_name}`,"E"===t.patientType?i.colorIndicator="red":"O"===t.patientType?i.colorIndicator="light-green":"I"===t.patientType&&(i.colorIndicator="light-blue"),i.caseNumber=i.case_no,i.patientID=i.patient_no;const o=i.datetime_admitted.replace(/T/," ").replace(/Z/," ").substr("0","16"),l=new Date(`${o}`),p=new Intl.DateTimeFormat("en",{year:"numeric"}).format(l),u=new Intl.DateTimeFormat("en",{month:"long"}).format(l),h=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(l);var r=l.getMinutes(),c=l.getHours();r<10&&(r="0"+r);var s="AM";c>12&&(c-=12,s="PM");const d=`${c}:${r} ${s}`;i.admission=`${u} ${h}, ${p} ${d}`;const m=i.date_of_birth.replace(/T/," ").replace(/Z/," ").substr("0","16"),f=new Date(`${m}`),y=new Intl.DateTimeFormat("en",{year:"numeric"}).format(f),g=new Intl.DateTimeFormat("en",{month:"long"}).format(f),C=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(f);i.birthDate=`${g} ${C}, ${y}`}e.commit("setEncounterCases",o)}else e.commit("setEncounterCases",[])}async function ht(e,t){let n="";n=t.paginated?`https://api.uerm.edu.ph/health-records/clinical-encounters/?caseNo=${t.caseNo}&patientNo=${t.patientNo}&paginated=${t.paginated}&pageNo=${t.pageNo}&rowsPage=${t.rowsPage}`:t.checking?`https://api.uerm.edu.ph/health-records/clinical-encounters/?patientNo=${t.patientNo}&checking=true`:`https://api.uerm.edu.ph/health-records/clinical-encounters/?caseNo=${t.caseNo}&clinicalNotecode=${t.clinicalNotecode}`;const a=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(a,n,"wehgh"),a.length>0){for(var o of a){const e=o.update_datetime.replace(/T/," ").replace(/Z/," ").substr("0","16"),t=new Date(`${e}`),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),a=new Intl.DateTimeFormat("en",{month:"long"}).format(t),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);var i=t.getMinutes(),r=t.getHours();i<10&&(i="0"+i);var c="AM";r>12&&(r-=12,c="PM");const l=`${r}:${i} ${c}`;o.formattedUpdateDatetime=`${a} ${s}, ${n} ${l}`,o.result_format=JSON.parse(o.result_format)}e.commit("setClinicalEncounters",a)}else e.commit("setClinicalEncounters",[]),await e.dispatch("helpers/setInfiniteScroll",!1,{root:!0})}async function dt(e,t){let n=`https://api.uerm.edu.ph/health-records/clinical-encounter-details/?clinicalEncounterID=${t.clinicalEncounterID}`;const a=await fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));a.length>0&&e.commit("setClinicalEncounterDetails",a),console.log(a,"dsfsfs")}async function mt(e,t){let n="https://api.uerm.edu.ph/health-records/save-clinical-encounter";const a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return a}async function ft(e,t){let n="https://api.uerm.edu.ph/health-records/save-clinical-encounter-details";const a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return a}async function yt(e,t){let n="https://api.uerm.edu.ph/health-records/update-clinical-encounter";const a=await fetch(n,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return a}async function gt(e,t){let n="https://api.uerm.edu.ph/health-records/update-clinical-encounter-details";const a=await fetch(n,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return a}const Ct={namespaced:!0,getters:y,mutations:g,actions:C,state:nt},Tt=(0,T.h)((function(){const e=(0,N.MT)({modules:{helpers:U,clinicalNotes:Pe,patients:Ye,user:Ke,bools:tt,encounters:Ct},strict:!1});return e}))},9441:()=>{}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,a,o,i)=>{if(!a){var r=1/0;for(p=0;p<e.length;p++){for(var[a,o,i]=e[p],c=!0,s=0;s<a.length;s++)(!1&i||r>=i)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(c=!1,i<r&&(r=i));if(c){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[a,o,i]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{24:"6bab3b2c",59:"70c66b25",64:"698d7a39",249:"2f0b6eec",341:"5083f6fb",386:"f54d41fd",430:"5883b8e5",478:"f0310491",513:"0d3ffa9f",525:"19a18b1f",526:"fd482c0f",548:"2d6ba235",614:"d2cb4aee",733:"eae74d81"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"25c9bb49",430:"e2d37627",526:"e2d37627",733:"659a2831",736:"759c7fc2"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="uerm-ehr:";n.l=(a,o,i,r)=>{if(e[a])e[a].push(o);else{var c,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var u=l[p];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+i){c=u;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=a),e[a]=[o];var h=(t,n)=>{c.onerror=c.onload=null,clearTimeout(d);var o=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/vue/ehr/"})(),(()=>{var e=(e,t,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var r=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=c,o.parentNode.removeChild(o),a(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){o=r[a],i=o.getAttribute("data-href");if(i===e||i===t)return o}},a=a=>new Promise(((o,i)=>{var r=n.miniCssF(a),c=n.p+r;if(t(r,c))return o();e(a,c,o,i)})),o={143:0};n.f.miniCss=(e,t)=>{var n={430:1,526:1,733:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,a)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise(((n,a)=>o=e[t]=[n,a]));a.push(o[2]=i);var r=n.p+n.u(t),c=new Error,s=a=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,o[1](c)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var o,i,[r,c,s]=a,l=0;if(r.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var p=s(n)}for(t&&t(a);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},a=self["webpackChunkuerm_ehr"]=self["webpackChunkuerm_ehr"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[736],(()=>n(4001)));a=n.O(a)})();