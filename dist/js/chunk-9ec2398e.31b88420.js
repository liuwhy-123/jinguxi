(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ec2398e"],{"79d9":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test-page"},[s("el-page-header",{attrs:{content:e.$route.name},on:{back:function(t){return e.$router.back()}}}),s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[s("el-form-item",{staticClass:"right"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("新增")]),s("el-button",{attrs:{type:"success",icon:"el-icon-document-checked"},on:{click:e.exportClick}},[e._v("导出")])],1)],1),s("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[s("el-table-column",{attrs:{type:"index",label:"序号",width:"100",align:"center"}}),s("el-table-column",{attrs:{prop:"address",label:"区域名称",width:"280",align:"center"}}),s("el-table-column",{attrs:{prop:"map",label:"地址",width:"280",align:"center"}}),s("el-table-column",{attrs:{prop:"user",label:"创建人",width:"268",align:"center"}}),s("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"mini"},on:{click:function(s){return e.handleEdit(t.row)}}},[e._v("修改")]),s("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(s){return s.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],1),s("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{attrs:{model:e.form}},[s("el-form-item",{attrs:{label:"区域名称:",required:!0}},[s("el-input",{attrs:{placeholder:"区域名称",autocomplete:"off",clearable:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),s("el-form-item",{attrs:{label:"地址:",required:!0}},[s("el-input",{attrs:{placeholder:"地址",autocomplete:"off",clearable:""},model:{value:e.form.map,callback:function(t){e.$set(e.form,"map",t)},expression:"form.map"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.cancel}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary",plain:!0},on:{click:e.determine},nativeOn:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.submit(t):null}}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"修改",visible:e.modify},on:{"update:visible":function(t){e.modify=t}}},[s("el-form",{attrs:{model:e.form}},[s("el-form-item",{attrs:{label:"区域名称:",required:!0}},[s("el-input",{attrs:{placeholder:"区域名称",autocomplete:"off",clearable:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),s("el-form-item",{attrs:{label:"地址:",required:!0}},[s("el-input",{attrs:{placeholder:"地址",autocomplete:"off",clearable:""},model:{value:e.form.map,callback:function(t){e.$set(e.form,"map",t)},expression:"form.map"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.cancel}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary",plain:!0},on:{click:e.modifys},nativeOn:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.submits(t):null}}},[e._v("确 定")])],1)],1),s("el-pagination",{staticStyle:{"text-align":"center","margin-top":"16px"},attrs:{layout:"prev, pager, next",total:e.tableCount}})],1)},o=[],i=s("f75d"),r=s("21a6"),l=s.n(r),n=s("1146"),d=s.n(n),m={name:"setting",data(){return{title:"",formInline:{},index:{},dialogFormVisible:!1,modify:!1,form:{map:"",address:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}},computed:{tableData(){return this.$store.getters["test2/data"]},tableCount(){return this.$store.getters["test2/count"]}},mounted:function(){this.$store.commit("test2/pull",i["a"])},created(){var e=this;document.onkeydown=function(t){let s=window.event.keyCode;13===s&&1==e.dialogFormVisible?e.submit():13===s&&1==e.modify&&e.submits()}},methods:{deleteRow(e,t){this.$confirm("此操作将永久删除该区域设置, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{t.splice(e,1),this.$message({type:"success",message:"删除成功!",duration:1e3})}).catch(()=>{this.$message({type:"info",message:"已取消删除",duration:1e3})})},submit(){this.determine()},submits(){this.modifys()},exportClick(){let e=new Date,t=e.getFullYear(),s=e.getMonth()+1,a=e.getDate(),o="区域设置",i=e.getHours(),r=e.getMinutes(),n=o+" "+t+"-"+s+"-"+a+" "+i+"："+r;var m=d.a.utils.table_to_book(document.querySelector(".table")),c=d.a.write(m,{bookType:"xlsx",bookSST:!0,type:"array"});try{l.a.saveAs(new Blob([c],{type:"application/octet-stream"}),n+".xlsx")}catch(u){"undefined"!==typeof console&&console.log(u,c)}return c},handleEdit(e,t){this.modify=!0,console.log(e);const s=e;this.form.address=s.address,this.form.map=s.map,this.index=s},add(){this.dialogFormVisible=!0},cancel(){this.dialogFormVisible=!1,this.modify=!1,this.form.address="",this.form.map=""},modifys(){""===this.form.address||""===this.form.map?this.$message.error("操作失败！请将内容补充完整"):(this.$message({message:"操作成功",type:"success",duration:1e3}),console.log(this.index),this.index.address=this.form.address,this.index.map=this.form.map,setTimeout(()=>{this.modify=!1,this.form.address="",this.form.map=""},500))},determine(){""===this.form.address||""===this.form.map?this.$message.error("操作失败！请将内容补充完整"):(this.$message({message:"操作成功",type:"success",duration:1e3}),this.$store.commit("test2/add",{address:this.form.address,map:this.form.map,user:"系统管理员"}),setTimeout(()=>{this.dialogFormVisible=!1,this.form.address="",this.form.map=""},500))}}},c=m,u=(s("cb4f"),s("2877")),f=Object(u["a"])(c,a,o,!1,null,"534ca729",null);t["default"]=f.exports},afd7:function(e,t,s){},cb4f:function(e,t,s){"use strict";var a=s("afd7"),o=s.n(a);o.a}}]);
//# sourceMappingURL=chunk-9ec2398e.31b88420.js.map