(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19b344c2"],{2798:function(e,t,a){"use strict";t["a"]=[{date:"1",name:"东1门",codding:"CS0001",address:"数字产业园A1",user:"系统管理员",maps:"重庆市渝北区柳林",map:"重庆渝北区柳林"},{date:"2",name:"东2门",codding:"CS0002",address:"数字产业园A2",user:"系统管理员",maps:"重庆市渝北区柳林",map:"重庆渝北区柳林"},{date:"3",name:"东3门",codding:"CS0003",address:"数字产业园A3",user:"系统管理员",maps:"重庆市渝北区柳林",map:"重庆渝北区柳林"},{date:"4",name:"东4门",codding:"CS0004",address:"数字产业园A4",user:"系统管理员",maps:"重庆市渝北区柳林",map:"重庆渝北区柳林"},{date:"5",name:"东5门",codding:"CS0005",address:"数字产业园A5",user:"系统管理员",maps:"重庆市渝北区柳林",map:"重庆渝北区柳林"},{date:"6",name:"东6门",codding:"CS0006",address:"数字产业园A6",user:"系统管理员",maps:"重庆市渝北区柳林",map:"重庆渝北区柳林"}]},"6ccd":function(e,t,a){"use strict";var i=a("95ff"),n=a.n(i);n.a},"8e0e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"test-page"},[a("el-page-header",{attrs:{content:e.$route.name},on:{back:function(t){return e.$router.back()}}}),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"所属区域:"}},[a("el-select",{attrs:{placeholder:"所属区域",clearable:""},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},e._l(e.setData,(function(e,t){return a("el-option",{key:t,attrs:{label:e.address,value:e.address}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"info"},on:{click:e.onSubmit}},[e._v("查询")])],1),a("el-form-item",{staticClass:"right"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("新增")]),a("el-button",{attrs:{type:"success",icon:"el-icon-document-checked"},on:{click:e.exportClick}},[e._v("导出")])],1)],1),a("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"设备点位",width:"300",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"所属区域",width:"300",align:"center"}}),a("el-table-column",{attrs:{prop:"user",label:"创建人",width:"300",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"text-align":"center","margin-top":"16px"},attrs:{layout:"prev, pager, next",total:e.tableCount}}),a("el-dialog",{attrs:{title:"新增",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"设备点位:",required:!0}},[a("el-input",{attrs:{placeholder:"设备点位",autocomplete:"off",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"所属区域:",required:!0}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"所属区域",clearable:""},model:{value:e.formInline.add,callback:function(t){e.$set(e.formInline,"add",t)},expression:"formInline.add"}},e._l(e.setData,(function(e,t){return a("el-option",{key:t,attrs:{label:e.address,value:e.address}})})),1)],1),a("el-form-item",{attrs:{label:"坐标:",required:!0}},[a("el-button",{attrs:{type:"info",icon:"el-icon-plus",size:"small"},on:{click:e.addClick}},[e._v("添加")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",plain:!0},on:{click:e.determine},nativeOn:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.submit(t):null}}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改",visible:e.modify},on:{"update:visible":function(t){e.modify=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"设备点位:",required:!0}},[a("el-input",{attrs:{placeholder:"设备定点位",autocomplete:"off",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"所属区域:",required:!0}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"所属区域",clearable:""},model:{value:e.formInline.add,callback:function(t){e.$set(e.formInline,"add",t)},expression:"formInline.add"}},e._l(e.setData,(function(e,t){return a("el-option",{key:t,attrs:{label:e.address,value:e.address}})})),1)],1),a("el-form-item",{attrs:{label:"坐标:",required:!0}},[a("el-button",{attrs:{type:"info",icon:"el-icon-plus",size:"small"},on:{click:e.addClick}},[e._v("添加")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",plain:!0},on:{click:e.modifys},nativeOn:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.submits(t):null}}},[e._v("确 定")])],1)],1)],1)},n=[],s=a("2798"),o=a("f75d"),l=a("21a6"),r=a.n(l),d=a("1146"),m=a.n(d),c={name:"positioning",data(){return{data:"",index:{},formInline:{user:"",region:"",add:""},formQuery:{user:"",region:"",add:""},dialogFormVisible:!1,modify:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}},computed:{tableData(){const e=this.$store.getters["test/data"],t=this.formQuery.region,a=new RegExp(t);for(var i=0;i<e.length;i++)if(t===e[i].address)return e.filter((function(e){return Object.keys(e).some((function(t){return e.address.match(a)}))}));return e},tableCount(){return this.$store.getters["test/count"]},setData(){return this.$store.getters["test2/data"]}},created(){var e=this;document.onkeydown=function(t){let a=window.event.keyCode;13===a&&1==e.dialogFormVisible?e.submit():13===a&&1==e.modify&&e.submits()}},methods:{deleteRow(e,t){this.$confirm("此操作将永久删除该设备点位, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(()=>{t.splice(e,1),this.$message({type:"success",message:"删除成功!",duration:1e3})}).catch(()=>{this.$message({type:"info",message:"已取消删除",duration:1e3})})},onSubmit(){this.formQuery.region=this.formInline.region},add(){this.dialogFormVisible=!0},addClick(){this.$message({type:"success",message:"添加成功!",duration:500})},cancel(){this.dialogFormVisible=!1,this.modify=!1,this.form.name="",this.formInline.add=""},exportClick(){let e=new Date,t=e.getFullYear(),a=e.getMonth()+1,i=e.getDate(),n="设备点位",s=e.getHours(),o=e.getMinutes(),l=n+" "+t+"-"+a+"-"+i+" "+s+"："+o;var d=m.a.utils.table_to_book(document.querySelector(".table")),c=m.a.write(d,{bookType:"xlsx",bookSST:!0,type:"array"});try{r.a.saveAs(new Blob([c],{type:"application/octet-stream"}),l+".xlsx")}catch(u){"undefined"!==typeof console&&console.log(u,c)}return c},determine(){""===this.form.name||""===this.formInline.add?this.$message.error("添加失败！请将内容补充完整"):(this.$message({message:"添加成功",type:"success",duration:1e3}),this.$store.commit("test/add",{name:this.form.name,address:this.formInline.add,user:"系统管理员"}),setTimeout(()=>{this.dialogFormVisible=!1,this.form.name="",this.formInline.add=""},500)),console.log(this.formInline.add)},modifys(){""===this.form.name||""===this.formInline.add?this.$message.error("操作失败！请将内容补充完整"):(this.$message({message:"操作成功",type:"success",duration:1e3}),this.index.address=this.formInline.add,this.index.name=this.form.name,setTimeout(()=>{this.modify=!1,this.form.name="",this.formInline.add=""},500))},handleClick(e,t){this.modify=!0,console.log(e);const a=e;this.form.name=a.name,this.formInline.add=a.address,this.index=a},submit(){this.determine()},submits(){this.modifys()}},mounted:function(){this.$store.commit("test/pull",s["a"]),this.$store.commit("test2/pull",o["a"])}},u=c,f=(a("6ccd"),a("2877")),p=Object(f["a"])(u,i,n,!1,null,"2501de45",null);t["default"]=p.exports},"95ff":function(e,t,a){}}]);
//# sourceMappingURL=chunk-19b344c2.9d81feda.js.map