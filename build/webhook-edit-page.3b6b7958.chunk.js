"use strict";(self.webpackChunkgarage_management=self.webpackChunkgarage_management||[]).push([[5162],{40703:($,S,r)=>{r.d(S,{Z:()=>ie});var e=r(67294),o=r(95489),t=r(28702),y=r(23724),T=r(49656),D=r(48474),R=r(45697),i=r.n(R),M=r(41363),P=r(80831),I=r(97132),G=r(27821),j=r(11700),N=r.n(j);const L=({disabledEvents:a,name:n,events:s,inputValue:l,handleChange:c,handleChangeAll:p})=>{const d=s.filter(m=>!a.includes(m)),u=l.length===d.length,h=l.length>0,f=({target:{name:m}})=>{p({target:{name:m,value:!u}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(t.Checkbox,{indeterminate:h&&!u,"aria-label":"Select all entries",name:n,onChange:f,value:u},N()(n))),s.map(m=>e.createElement("td",{key:m},e.createElement(t.BaseCheckbox,{disabled:a.includes(m),"aria-label":m,name:m,value:l.includes(m),onValueChange:E=>c({target:{name:m,value:E}})}))))};L.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},L.propTypes={disabledEvents:i().array,events:i().array,inputValue:i().array,handleChange:i().func,handleChangeAll:i().func,name:i().string.isRequired};const X=L,Q=a=>a.reduce((n,s)=>{const l=s.split(".")[0];return n[l]||(n[l]=[]),n[l].push(s),n},{}),J=G.default.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:a})=>a.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:a})=>a.spaces[7]};
  }
`,x={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},K=({isDraftAndPublish:a})=>{const n=a?x.headers.draftAndPublish:x.headers.default,s=a?x.events.draftAndPublish:x.events.default,{formatMessage:l}=(0,I.useIntl)(),{values:c,handleChange:p}=(0,P.useFormikContext)(),d="events",u=c.events,h=[],f=Q(u),m=({target:{name:g,value:w}})=>{let C=new Set(u);w?C.add(g):C.delete(g),p({target:{name:d,value:Array.from(C)}})},E=({target:{name:g,value:w}})=>{let C=new Set(u);w?s[g].forEach(A=>{h.includes(A)||C.add(A)}):s[g].forEach(A=>C.delete(A)),p({target:{name:d,value:Array.from(C)}})};return e.createElement(t.Stack,{spacing:1},e.createElement(t.FieldLabel,null,l({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(J,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),n.map(g=>g==="app.utils.publish"||g==="app.utils.unpublish"?e.createElement("td",{key:g.id,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},l(g))):e.createElement("td",{key:g.id},e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},l(g)))))),e.createElement("tbody",null,Object.keys(s).map(g=>e.createElement(X,{disabledEvents:h,key:g,name:g,events:s[g],inputValue:f[g],handleChange:m,handleChangeAll:E})))))};K.propTypes={isDraftAndPublish:i().bool.isRequired};const Y=K,z=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],F=({name:a,onChange:n,value:s,...l})=>{const[c,p]=(0,e.useState)(s?[...z,s]:z),d=h=>{n({target:{name:a,value:h}})},u=h=>{p(f=>[...f,h]),n({target:{name:a,value:h}})};return e.createElement(t.CreatableCombobox,{...l,onChange:d,onCreateOption:u,placeholder:"",value:s},c.map(h=>e.createElement(t.ComboboxOption,{value:h,key:h},h)))};F.defaultProps={value:void 0},F.propTypes={name:i().string.isRequired,onChange:i().func.isRequired,value:i().string};const q=F,_=()=>{const{formatMessage:a}=(0,I.useIntl)(),{values:n,errors:s}=(0,P.useFormikContext)();return e.createElement(t.Stack,{spacing:1},e.createElement(t.FieldLabel,null,a({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(t.Box,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(P.FieldArray,{validateOnChange:!1,name:"headers",render:({push:l,remove:c})=>e.createElement(t.Grid,{gap:4},n.headers?.map((p,d)=>e.createElement(e.Fragment,{key:d},e.createElement(t.GridItem,{col:6},e.createElement(P.Field,{as:q,name:`headers.${d}.key`,"aria-label":`row ${d+1} key`,label:a({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:s.headers?.[d]?.key&&a({id:s.headers[d]?.key,defaultMessage:s.headers[d]?.key})})),e.createElement(t.GridItem,{col:6},e.createElement(t.Flex,{alignItems:"flex-end"},e.createElement(t.Box,{style:{flex:1}},e.createElement(P.Field,{as:t.TextInput,"aria-label":`row ${d+1} value`,label:a({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${d}.value`,error:s.headers?.[d]?.value&&a({id:s.headers[d]?.value,defaultMessage:s.headers[d]?.value})})),e.createElement(t.Flex,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:s.headers?.[d]?.value?0:5},e.createElement(o.RemoveRoundedButton,{onClick:()=>n.headers.length!==1&&c(d),label:a({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:d+1})})))))),e.createElement(t.GridItem,{col:12},e.createElement(t.TextButton,{type:"button",onClick:()=>{l({key:"",value:""})},startIcon:e.createElement(M.Plus,null)},a({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))},O=G.default.svg(({theme:a,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${a.colors[n]};
  }
`),B=({isPending:a,statusCode:n})=>{const{formatMessage:s}=(0,I.useIntl)();return a?e.createElement(t.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(O,{as:M.Loader}),e.createElement(t.Typography,null,s({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):n>=200&&n<300?e.createElement(t.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(O,{as:M.Check,color:"success700"}),e.createElement(t.Typography,null,s({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):n>=300?e.createElement(t.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(O,{as:M.Cross,color:"danger700"}),e.createElement(t.Typography,null,s({id:"Settings.error",defaultMessage:"error"})," ",n)):null};B.propTypes={isPending:i().bool.isRequired,statusCode:i().number},B.defaultProps={statusCode:void 0};const W=({statusCode:a,message:n})=>{const{formatMessage:s}=(0,I.useIntl)();return a>=200&&a<300?e.createElement(t.Flex,{justifyContent:"flex-end"},e.createElement(t.Typography,{textColor:"neutral600",ellipsis:!0},s({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):a>=300?e.createElement(t.Flex,{justifyContent:"flex-end"},e.createElement(t.Flex,{maxWidth:(0,o.pxToRem)(250),justifyContent:"flex-end",title:n},e.createElement(t.Typography,{ellipsis:!0,textColor:"neutral600"},n))):null};W.propTypes={statusCode:i().number,message:i().string},W.defaultProps={statusCode:void 0,message:void 0};const H=({onCancel:a})=>{const{formatMessage:n}=(0,I.useIntl)();return e.createElement(t.Flex,{justifyContent:"flex-end"},e.createElement("button",{onClick:a,type:"button"},e.createElement(t.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(t.Typography,{textColor:"neutral400"},n({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(O,{as:M.Cross,color:"neutral400"}))))};H.propTypes={onCancel:i().func.isRequired};const U=({isPending:a,onCancel:n,response:s})=>{const{statusCode:l,message:c}=s,{formatMessage:p}=(0,I.useIntl)();return e.createElement(t.Box,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(t.Grid,{gap:4,style:{alignItems:"center"}},e.createElement(t.GridItem,{col:3},e.createElement(t.Typography,null,p({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(t.GridItem,{col:3},e.createElement(B,{isPending:a,statusCode:l})),e.createElement(t.GridItem,{col:6},a?e.createElement(H,{onCancel:n}):e.createElement(W,{statusCode:l,message:c}))))};U.defaultProps={isPending:!1,onCancel(){},response:{}},U.propTypes={isPending:i().bool,onCancel:i().func,response:i().object};const ee=U;var v=r(53209);const te=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,ae=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,ne=v.Ry().shape({name:v.Z_(o.translatedErrors.string).required(o.translatedErrors.required).matches(te,o.translatedErrors.regex),url:v.Z_(o.translatedErrors.string).required(o.translatedErrors.required).matches(ae,o.translatedErrors.regex),headers:v.Vo(a=>{let n=v.IX();if(a.length===1){const{key:s,value:l}=a[0];if(!s&&!l)return n}return n.of(v.Ry().shape({key:v.Z_().required(o.translatedErrors.required),value:v.Z_().required(o.translatedErrors.required)}))}),events:v.IX()}),V=({handleSubmit:a,data:n,triggerWebhook:s,isCreating:l,isTriggering:c,triggerResponse:p,isDraftAndPublishEvents:d})=>{const{formatMessage:u}=(0,I.useIntl)(),[h,f]=(0,e.useState)(!1);return e.createElement(P.Formik,{onSubmit:a,initialValues:{name:n?.name||"",url:n?.url||"",headers:Object.keys(n?.headers||[]).length?Object.entries(n.headers).map(([m,E])=>({key:m,value:E})):[{key:"",value:""}],events:n?.events||[]},validationSchema:ne,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:m,errors:E})=>e.createElement(o.Form,{noValidate:!0},e.createElement(t.HeaderLayout,{primaryAction:e.createElement(t.Stack,{horizontal:!0,spacing:2},e.createElement(t.Button,{onClick:()=>{s(),f(!0)},variant:"tertiary",startIcon:e.createElement(M.Play,null),disabled:l||c,size:"L"},u({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(t.Button,{startIcon:e.createElement(M.Check,null),onClick:m,type:"submit",size:"L"},u({id:"global.save",defaultMessage:"Save"}))),title:l?u({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):n?.name,navigationAction:e.createElement(o.Link,{startIcon:e.createElement(M.ArrowLeft,null),to:"/settings/webhooks"},u({id:"global.back",defaultMessage:"Back"}))}),e.createElement(t.ContentLayout,null,e.createElement(t.Stack,{spacing:4},h&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(ee,{isPending:c,response:p,onCancel:()=>f(!1)})),e.createElement(t.Box,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(t.Stack,{spacing:6},e.createElement(t.Grid,{gap:6},e.createElement(t.GridItem,{col:6},e.createElement(P.Field,{as:t.TextInput,name:"name",error:E.name&&u({id:E.name}),label:u({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(t.GridItem,{col:12},e.createElement(P.Field,{as:t.TextInput,name:"url",error:E.url&&u({id:E.url}),label:u({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(_,null),e.createElement(Y,{isDraftAndPublish:d})))))))};V.propTypes={data:i().object,handleSubmit:i().func.isRequired,triggerWebhook:i().func.isRequired,isCreating:i().bool.isRequired,isDraftAndPublishEvents:i().bool.isRequired,isTriggering:i().bool.isRequired,triggerResponse:i().object},V.defaultProps={data:void 0,triggerResponse:void 0};const se=V;var re=r(96486);const le=a=>{const n={...a};return(0,re.set)(n,"headers",oe(a.headers)),n},oe=a=>a.reduce((n,s)=>{const{key:l,value:c}=s;return l!==""?{...n,[l]:c}:n},{}),Z=le,ie=()=>{const{params:{id:a}}=(0,T.useRouteMatch)("/settings/webhooks/:id"),{replace:n}=(0,T.useHistory)(),{lockApp:s,unlockApp:l}=(0,o.useOverlayBlocker)(),c=(0,o.useNotification)(),p=(0,y.useQueryClient)(),{isLoading:d,collectionTypes:u}=(0,D.bP)(),{post:h}=(0,o.useFetchClient)(),f=a==="create",m=(0,e.useCallback)(async b=>{const[k,{data:pe}]=await(0,o.to)((0,o.request)(`/admin/webhooks/${b}`,{method:"GET"}));return k?(c({type:"warning",message:{id:"notification.error"}}),null):pe},[c]),{isLoading:E,data:g}=(0,y.useQuery)(["get-webhook",a],()=>m(a),{enabled:!f}),{isLoading:w,data:C,isIdle:A,mutate:de}=(0,y.useMutation)(()=>h(`/admin/webhooks/${a}/trigger`)),ce=()=>de(null,{onError(){c({type:"warning",message:{id:"notification.error"}})}}),ue=(0,y.useMutation)(b=>(0,o.request)("/admin/webhooks",{method:"POST",body:b})),ge=(0,y.useMutation)(({id:b,body:k})=>(0,o.request)(`/admin/webhooks/${b}`,{method:"PUT",body:k})),me=async b=>{f?(s(),ue.mutate(Z(b),{onSuccess(k){c({type:"success",message:{id:"Settings.webhooks.created"}}),n(`/settings/webhooks/${k.data.id}`),l()},onError(k){c({type:"warning",message:{id:"notification.error"}}),console.log(k),l()}})):(s(),ge.mutate({id:a,body:Z(b)},{onSuccess(){p.invalidateQueries(["get-webhook",a]),c({type:"success",message:{id:"notification.form.success.fields"}}),l()},onError(k){c({type:"warning",message:{id:"notification.error"}}),console.log(k),l()}}))},he=(0,e.useMemo)(()=>u.some(b=>b.options.draftAndPublish===!0),[u]);return E||d?e.createElement(o.LoadingIndicatorPage,null):e.createElement(t.Main,null,e.createElement(o.SettingsPageTitle,{name:"Webhooks"}),e.createElement(se,{handleSubmit:me,data:g,triggerWebhook:ce,isCreating:f,isTriggering:w,isTriggerIdle:A,triggerResponse:C?.data.data,isDraftAndPublishEvents:he}))}},3672:($,S,r)=>{r.r(S),r.d(S,{default:()=>R});var e=r(67294),o=r(95489),t=r.n(o),y=r(87751),T=r(40703);const R=()=>e.createElement(o.CheckPagePermissions,{permissions:y.Z.settings.webhooks.create},e.createElement(T.Z,null))},9311:($,S,r)=>{r.r(S),r.d(S,{default:()=>R});var e=r(67294),o=r(95489),t=r.n(o),y=r(87751),T=r(40703);const R=()=>e.createElement(o.CheckPagePermissions,{permissions:y.Z.settings.webhooks.update},e.createElement(T.Z,null))}}]);
