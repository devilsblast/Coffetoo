"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9497],{50166:(B,w,s)=>{s.r(w),s.d(w,{default:()=>X});var e=s(67294),l=s(71893),o=s(95489),C=s(97132),S=s(80831),x=s(11700),M=s.n(x),E=s(23724),v=s(78718),f=s.n(v),m=s(15482),t=s(28702),u=s(41363),H=s(50592),Z=s(48474),U=s(57557),N=s.n(U);const O=async()=>{const{get:d}=(0,o.getFetchClient)(),{data:g}=await d("/admin/users/me");return g.data},D=async d=>{const g=N()(d,["confirmPassword","currentTheme"]),{put:h}=(0,o.getFetchClient)(),{data:b}=await h("/admin/users/me",g);return{...b.data,currentTheme:d.currentTheme}};var z=s(53209),Q=s(17405);const j=z.Ry().shape(Q.Rw);var G=s(38683);const W=l.default.a`
  color: ${({theme:d})=>d.colors.primary600};
`,P=(0,l.default)(t.TextInput)`
  ::-ms-reveal {
    display: none;
  }
`,L=(0,l.default)(t.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:d})=>d.colors.neutral600};
    }
  }
`,X=()=>{const[d,g]=(0,e.useState)(!1),[h,b]=(0,e.useState)(!1),[A,Y]=(0,e.useState)(!1),{changeLocale:$,localeNames:k}=(0,H.Z)(),{setUserDisplayName:V}=(0,o.useAppInfos)(),J=(0,E.useQueryClient)(),{formatMessage:a}=(0,C.useIntl)(),{trackUsage:K}=(0,o.useTracking)(),I=(0,o.useNotification)(),{lockApp:q,unlockApp:_}=(0,o.useOverlayBlocker)(),{notifyStatus:ee}=(0,t.useNotifyAT)(),{currentTheme:te,themes:F,onChangeTheme:ae}=(0,Z.M1)();(0,o.useFocusWhenNavigate)();const{status:re,data:y}=(0,E.useQuery)("user",()=>O(),{onSuccess(){ee(a({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),se=re!=="success",R=(0,E.useMutation)(r=>D(r),{async onSuccess(r){await J.invalidateQueries("user"),o.auth.setUserInfo(f()(r,["email","firstname","lastname","username","preferedLanguage"]));const i=r.username||(0,G.Pp)(r.firstname,r.lastname);V(i),$(r.preferedLanguage),ae(r.currentTheme),K("didChangeMode",{newMode:r.currentTheme}),I({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){_()},refetchActive:!0}),{isLoading:ne}=R,oe=async(r,{setErrors:i})=>{q();const c=r.username||null;R.mutate({...r,username:c},{onError(T){const n=T?.response?.data;return n?.data?i(n.data):I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},le=["currentTheme","email","firstname","lastname","username","preferedLanguage"],ie=f()({...y,currentTheme:te},le);if(se)return e.createElement(t.Main,{"aria-busy":"true"},e.createElement(m.Helmet,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(t.HeaderLayout,{title:a({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(t.ContentLayout,null,e.createElement(o.LoadingIndicatorPage,null)));const de=Object.keys(F).filter(r=>F[r]);return e.createElement(t.Main,{"aria-busy":ne},e.createElement(m.Helmet,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(S.Formik,{onSubmit:oe,initialValues:ie,validateOnChange:!1,validationSchema:j,enableReinitialize:!0},({errors:r,values:i,handleChange:c,isSubmitting:T})=>e.createElement(o.Form,null,e.createElement(t.HeaderLayout,{title:y.username||(0,G.Pp)(y.firstname,y.lastname),primaryAction:e.createElement(t.Button,{startIcon:e.createElement(u.Check,null),loading:T,type:"submit"},a({id:"global.save",defaultMessage:"Save"}))}),e.createElement(t.Box,{paddingBottom:10},e.createElement(t.ContentLayout,null,e.createElement(t.Stack,{spacing:6},e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Stack,{spacing:4},e.createElement(t.Typography,{variant:"delta",as:"h2"},a({id:"global.profile",defaultMessage:"Profile"})),e.createElement(t.Grid,{gap:5},e.createElement(t.GridItem,{s:12,col:6},e.createElement(o.GenericInput,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:r.firstname,onChange:c,value:i.firstname||"",type:"text",name:"firstname",required:!0})),e.createElement(t.GridItem,{s:12,col:6},e.createElement(o.GenericInput,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:r.lastname,onChange:c,value:i.lastname||"",type:"text",name:"lastname"})),e.createElement(t.GridItem,{s:12,col:6},e.createElement(o.GenericInput,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:r.email,onChange:c,value:i.email||"",type:"email",name:"email",required:!0})),e.createElement(t.GridItem,{s:12,col:6},e.createElement(o.GenericInput,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:r.username,onChange:c,value:i.username||"",type:"text",name:"username"}))))),e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Stack,{spacing:4},e.createElement(t.Typography,{variant:"delta",as:"h2"},a({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(t.Grid,{gap:5},e.createElement(t.GridItem,{s:12,col:6},e.createElement(P,{error:r.currentPassword?a({id:r.currentPassword,defaultMessage:r.currentPassword}):"",onChange:c,value:i.currentPassword||"",label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:A?"text":"password",endAction:e.createElement(L,{onClick:n=>{n.stopPropagation(),Y(p=>!p)},label:a(A?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},A?e.createElement(u.Eye,null):e.createElement(u.EyeStriked,null))}))),e.createElement(t.Grid,{gap:5},e.createElement(t.GridItem,{s:12,col:6},e.createElement(P,{error:r.password?a({id:r.password,defaultMessage:r.password}):"",onChange:c,value:i.password||"",label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:d?"text":"password",autoComplete:"new-password",endAction:e.createElement(L,{onClick:n=>{n.stopPropagation(),g(p=>!p)},label:a(d?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},d?e.createElement(u.Eye,null):e.createElement(u.EyeStriked,null))})),e.createElement(t.GridItem,{s:12,col:6},e.createElement(P,{error:r.confirmPassword?a({id:r.confirmPassword,defaultMessage:r.confirmPassword}):"",onChange:c,value:i.confirmPassword||"",label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:h?"text":"password",autoComplete:"new-password",endAction:e.createElement(L,{onClick:n=>{n.stopPropagation(),b(p=>!p)},label:a(h?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},h?e.createElement(u.Eye,null):e.createElement(u.EyeStriked,null))}))))),e.createElement(t.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(t.Stack,{spacing:4},e.createElement(t.Stack,{spacing:1},e.createElement(t.Typography,{variant:"delta",as:"h2"},a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(t.Typography,null,a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(W,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(t.Grid,{gap:5},e.createElement(t.GridItem,{s:12,col:6},e.createElement(t.Select,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{c({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:i.preferedLanguage,onChange:n=>{c({target:{name:"preferedLanguage",value:n}})}},Object.keys(k).map(n=>{const p=k[n];return e.createElement(t.Option,{value:n,key:n},p)}))),e.createElement(t.GridItem,{s:12,col:6},e.createElement(t.Select,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:i.currentTheme,onChange:n=>{c({target:{name:"currentTheme",value:n}})}},de.map(n=>e.createElement(t.Option,{value:n,key:n},a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:n,defaultMessage:M()(n)})}))))))))))))))}},17405:(B,w,s)=>{s.d(w,{YM:()=>v,Rw:()=>S});var e=s(53209),l=s(95489);const o={firstname:e.Z_().trim().required(l.translatedErrors.required),lastname:e.Z_(),email:e.Z_().email(l.translatedErrors.email).lowercase().required(l.translatedErrors.required),username:e.Z_().nullable(),password:e.Z_().min(8,l.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,l.translatedErrors.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(f,m)=>f?m.required(l.translatedErrors.required):m)},S={...o,currentPassword:e.Z_().when(["password","confirmPassword"],(f,m,t)=>f||m?t.required(l.translatedErrors.required):t),preferedLanguage:e.Z_().nullable()},M={roles:e.IX().min(1,l.translatedErrors.required).required(l.translatedErrors.required)},v=e.Ry().shape({...o,isActive:e.Xg(),...M})}}]);
