require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{"N/V5":function(t,a,i){"use strict";var e=i("rkie"),n=i("YzKY");var o=function(t){i("NLu8")},c=i("ybqe")(e.a,n.a,o,null,null);a.a=c.exports},NLu8:function(t,a){},YzKY:function(t,a,i){"use strict";var e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"profile"},[i("div",{staticClass:"title"},[t._v("个人信息")]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"label"},[t._v("\n      昵称：\n    ")]),t._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model.lazy:value",value:t.nick,expression:"nick",modifiers:{"lazy:value":!0}}],staticClass:"input",attrs:{type:"text",placeholder:"请输入新昵称",eventid:"0"},domProps:{value:t.nick},on:{input:function(a){a.target.composing||(t.nick=a.target.value)}}})])]),t._v(" "),i("div",{staticClass:"title"},[t._v("头像")]),t._v(" "),i("div",{staticClass:"avatar"},[i("radio-group",{staticClass:"group",attrs:{eventid:"1",mpcomid:"0"},on:{change:t.onChange}},t._l(t.imgArr,function(a,e){return i("label",{key:e,staticClass:"label"},[i("image",{staticStyle:{width:"40px",height:"40px","border-radius":"8px"},attrs:{src:a}}),t._v(" "),i("div",{staticClass:"radio-wrapper"},[i("input",{attrs:{type:"radio",name:"list",value:a,checked:t.avatar===a}})])])}))],1),t._v(" "),i("i-row",{attrs:{mpcomid:"3"}},[i("i-col",{attrs:{span:"12",offset:"6",mpcomid:"2"}},[i("div",{staticStyle:{padding:"20px 0"}},[i("i-button",{attrs:{type:"primary",long:"true",shape:"circle",eventid:"2",mpcomid:"1"},on:{click:t.revise}},[t._v("修改资料")])],1)])],1)],1)},staticRenderFns:[]};a.a=e},eWRe:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("5nAL"),n=i.n(e),o=i("N/V5");new n.a(o.a).$mount()},rkie:function(t,a,i){"use strict";a.a={data:function(){return{nick:"",myInfo:{},gender:!1,imgArr:["http://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-1.png","http://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png","http://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-3.png","http://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-4.png","http://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-5.png"],avatar:""}},onShow:function(){this.myInfo=this.$store.state.user.myInfo},methods:{onChange:function(t){this.avatar=t.target.value},revise:function(){var t=this;this.nick||this.avatar?wx.$app.updateMyProfile({nick:this.nick||this.myInfo.nick,avatar:this.avatar||this.myInfo.avatar}).then(function(a){t.$store.commit("updateMyInfo",a.data),t.$store.commit("showToast",{title:"修改成功",icon:"success",duration:1500}),t.nick="",t.avatar="",wx.switchTab({url:"../own/main"})}).catch(function(){t.$store.commit("showToast",{title:"修改失败",icon:"none",duration:1500})}):this.$store.commit("showToast",{title:"你什么都还没填哦！"})}}}}},["eWRe"]);