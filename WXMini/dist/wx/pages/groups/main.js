require("../../common/manifest.js")
require("../../debug/GenerateTestUserSig.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{"5fEd":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("5nAL"),a=e.n(r),o=e("6p5+");a.a.config.errorHandler=function(t){console&&console.error&&console.error(t)},new a.a(o.a).$mount()},"6p5+":function(t,n,e){"use strict";var r=e("PK/g"),a=e("iP/B");var o=function(t){e("pzEP")},s=e("ybqe")(r.a,a.a,o,"data-v-78596bc6",null);n.a=s.exports},"PK/g":function(t,n,e){"use strict";var r=e("Dd8w"),a=e.n(r),o=e("NYxO");n.a={data:function(){return{}},computed:a()({},Object(o.c)({groupList:function(t){return t.group.groupList}})),methods:{startConversation:function(t){var n=this;this.$store.commit("resetCurrentConversation"),this.$store.commit("resetGroup");var e=this.TIM.TYPES.CONV_GROUP+t.groupID;wx.$app.setMessageRead({conversationID:e}),wx.$app.getConversationProfile(e).then(function(t){var e=t.data.conversation;if(n.$store.commit("updateCurrentConversation",e),n.$store.dispatch("getMessageList",e.conversationID),e.type===n.TIM.TYPES.CONV_GROUP){var r=e.conversationID.substring(5);wx.$app.getGroupProfile({groupID:r}).then(function(t){n.$store.commit("updateCurrentGroupProfile",t.data.group)})}});var r="../chat/main?toAccount="+t.name;wx.navigateTo({url:r})}}}},"iP/B":function(t,n,e){"use strict";var r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},t._l(t.groupList,function(n,r){return e("div",{key:n.groupID,staticClass:"group",attrs:{eventid:"0_"+r},on:{click:function(e){t.startConversation(n)}}},[e("div",{staticClass:"avatar"},[e("image",{staticClass:"img",attrs:{src:n.avatar||"/static/images/groups.png"}})]),t._v(" "),e("div",{staticClass:"name"},[t._v("\n      "+t._s(n.name)+"\n    ")]),t._v(" "),e("div",{staticClass:"type"},[t._v("\n      "+t._s(n.type)+"\n    ")])])}))},staticRenderFns:[]};n.a=r},pzEP:function(t,n){}},["5fEd"]);