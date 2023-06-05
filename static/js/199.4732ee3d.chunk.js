"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[199],{1199:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=n(2791),r=n(9434),o=function(e){return e.contacts.items},i=function(e){return e.contacts.isLoading},s=function(e){return e.filter},c=n(3634),d=n(4808),l=n(6731),u=n(3329),p=function(){var e=(0,r.I0)(),t=(0,r.v9)(s);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Z,{label:"Find contacts by name",id:"findName",type:"text",name:"filter",value:t,onChange:function(t){return e((0,d.m)(t.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})})},m=n(493),v=n(4942),y=n(3366),b=n(7462),g=n(8182),h=n(4419),Z=n(627),f=n(2065),x=n(6934),C=n(1402),I=n(3701),j=n(9103),S=n(162),A=n(2071),w=n(9480),N=n(5878),L=n(1217);function P(e){return(0,L.Z)("MuiListItem",e)}var k=(0,N.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var M=(0,N.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function F(e){return(0,L.Z)("MuiListItemSecondaryAction",e)}(0,N.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var G=["className"],R=(0,x.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,b.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),T=a.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,o=(0,y.Z)(n,G),i=a.useContext(w.Z),s=(0,b.Z)({},n,{disableGutters:i.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,h.Z)(a,F,n)}(s);return(0,u.jsx)(R,(0,b.Z)({className:(0,g.Z)(c.root,r),ownerState:s,ref:t},o))}));T.muiName="ListItemSecondaryAction";var O=T,z=["className"],_=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],V=(0,x.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,b.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,b.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,v.Z)({},"& > .".concat(M.root),{paddingRight:48}),(t={},(0,v.Z)(t,"&.".concat(k.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,v.Z)(t,"&.".concat(k.selected),(0,v.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,f.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(k.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,f.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,v.Z)(t,"&.".concat(k.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,v.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(k.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,f.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,f.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),q=(0,x.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),B=a.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,o=void 0===r?"center":r,i=n.autoFocus,s=void 0!==i&&i,c=n.button,d=void 0!==c&&c,l=n.children,p=n.className,m=n.component,v=n.components,f=void 0===v?{}:v,x=n.componentsProps,N=void 0===x?{}:x,L=n.ContainerComponent,M=void 0===L?"li":L,F=n.ContainerProps,G=(F=void 0===F?{}:F).className,R=n.dense,T=void 0!==R&&R,B=n.disabled,D=void 0!==B&&B,H=n.disableGutters,J=void 0!==H&&H,W=n.disablePadding,$=void 0!==W&&W,E=n.divider,K=void 0!==E&&E,U=n.focusVisibleClassName,Y=n.secondaryAction,Q=n.selected,X=void 0!==Q&&Q,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,re=(0,y.Z)(n.ContainerProps,z),oe=(0,y.Z)(n,_),ie=a.useContext(w.Z),se=a.useMemo((function(){return{dense:T||ie.dense||!1,alignItems:o,disableGutters:J}}),[o,ie.dense,T,J]),ce=a.useRef(null);(0,S.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var de=a.Children.toArray(l),le=de.length&&(0,j.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,b.Z)({},n,{alignItems:o,autoFocus:s,button:d,dense:se.dense,disabled:D,disableGutters:J,disablePadding:$,divider:K,hasSecondaryAction:le,selected:X}),pe=function(e){var t=e.alignItems,n=e.button,a=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,h.Z)(i,P,a)}(ue),me=(0,A.Z)(ce,t),ve=ae.root||f.Root||V,ye=te.root||N.root||{},be=(0,b.Z)({className:(0,g.Z)(pe.root,ye.className,p),disabled:D},oe),ge=m||"li";return d&&(be.component=m||"div",be.focusVisibleClassName=(0,g.Z)(k.focusVisible,U),ge=I.Z),le?(ge=be.component||m?ge:"div","li"===M&&("li"===ge?ge="div":"li"===be.component&&(be.component="div")),(0,u.jsx)(w.Z.Provider,{value:se,children:(0,u.jsxs)(q,(0,b.Z)({as:M,className:(0,g.Z)(pe.container,G),ref:me,ownerState:ue},re,{children:[(0,u.jsx)(ve,(0,b.Z)({},ye,!(0,Z.Z)(ve)&&{as:ge,ownerState:(0,b.Z)({},ue,ye.ownerState)},be,{children:de})),de.pop()]}))})):(0,u.jsx)(w.Z.Provider,{value:se,children:(0,u.jsxs)(ve,(0,b.Z)({},ye,{as:ge,ref:me},!(0,Z.Z)(ve)&&{ownerState:(0,b.Z)({},ue,ye.ownerState)},be,{children:[de,Y&&(0,u.jsx)(O,{children:Y})]}))})})),D=n(890);function H(e){return(0,L.Z)("MuiListItemText",e)}var J,W,$=(0,N.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),E=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],K=(0,x.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,v.Z)({},"& .".concat($.primary),t.primary),(0,v.Z)({},"& .".concat($.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,b.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),U=a.forwardRef((function(e,t){var n=(0,C.Z)({props:e,name:"MuiListItemText"}),r=n.children,o=n.className,i=n.disableTypography,s=void 0!==i&&i,c=n.inset,d=void 0!==c&&c,l=n.primary,p=n.primaryTypographyProps,m=n.secondary,v=n.secondaryTypographyProps,Z=(0,y.Z)(n,E),f=a.useContext(w.Z).dense,x=null!=l?l:r,I=m,j=(0,b.Z)({},n,{disableTypography:s,inset:d,primary:!!x,secondary:!!I,dense:f}),S=function(e){var t=e.classes,n=e.inset,a=e.primary,r=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,h.Z)(o,H,t)}(j);return null==x||x.type===D.Z||s||(x=(0,u.jsx)(D.Z,(0,b.Z)({variant:f?"body2":"body1",className:S.primary,component:null!=p&&p.variant?void 0:"span",display:"block"},p,{children:x}))),null==I||I.type===D.Z||s||(I=(0,u.jsx)(D.Z,(0,b.Z)({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},v,{children:I}))),(0,u.jsxs)(K,(0,b.Z)({className:(0,g.Z)(S.root,o),ownerState:j,ref:t},Z,{children:[x,I]}))})),Y=n(6151),Q=n(7247),X=function(){var e=(0,r.I0)(),t=(0,r.v9)(o),n=(0,r.v9)(s),a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:a.map((function(t){return(0,u.jsxs)(B,{contact:t,children:[(0,u.jsx)(U,{primary:t.name,secondary:t.number}),(0,u.jsx)(Y.Z,{startIcon:(0,u.jsx)(Q.Z,{}),id:t.id,onClick:function(){return e((0,c.GK)(t.id))},children:"Delete"})]},t.id)}))})})},ee=n(9439),te=n(168),ne=n(4554),ae=n(6088),re=(0,ae.Z)(l.Z)(J||(J=(0,te.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),oe=(0,ae.Z)(ne.Z)(W||(W=(0,te.Z)(["\n  width: 320px;\n  padding-bottom: 32px;\n"]))),ie=function(){var e=(0,a.useState)(""),t=(0,ee.Z)(e,2),n=t[0],i=t[1],s=(0,a.useState)(""),d=(0,ee.Z)(s,2),l=d[0],p=d[1],m=(0,r.I0)(),v=(0,r.v9)(o),y=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":p(a)}},b=function(e){e.preventDefault(),v.find((function(e){return e.name.toLowerCase()===n.toLowerCase()||e.number===l}))?alert("".concat(n," is already in contacts")):m((0,c.ky)({name:n,number:l})),g()},g=function(){i(""),p("")};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(oe,{component:"form",onSubmit:b,children:[(0,u.jsx)(re,{label:"Name",id:"inputName",type:"text",name:"name",value:n,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,u.jsx)(re,{label:"Number",id:"inputNumber",type:"tel",name:"number",value:l,onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,u.jsx)(Y.Z,{type:"submit",variant:"contained",onSubmit:b,children:"Add contact"})]})})},se="App_wrapper__oLZUe",ce=n(4270),de=n(1479);function le(){var e=(0,r.I0)(),t=(0,r.v9)(i);return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,u.jsxs)("div",{className:se,children:[(0,u.jsx)(ce.q,{children:(0,u.jsx)("title",{children:"Contacts"})}),(0,u.jsx)(ie,{}),(0,u.jsx)("div",{children:t&&(0,u.jsx)(de.a,{})}),(0,u.jsx)(p,{}),(0,u.jsx)(X,{})]})}},7247:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),o=n(3329),i=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i}}]);
//# sourceMappingURL=199.4732ee3d.chunk.js.map