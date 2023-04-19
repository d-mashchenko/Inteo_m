import{a as h,j as f}from"./jsx-runtime-9a6f6fa0.js";import{p as o}from"./index-4d501b15.js";import{r as e}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const x=s=>e.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},e.createElement("g",{clipPath:"url(#clip0_2989_196)"},e.createElement("path",{d:"M14.1663 5.83337L5.83301 14.1667",stroke:"current",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M6.66699 5.83337H14.167V13.3334",stroke:"current",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_2989_196"},e.createElement("rect",{width:20,height:20,fill:"white"}))));const d={normal:"Button",big:"Button Button--big"},n=({text:s,size:g="normal",utilityClasses:a})=>h("button",{className:`${d[g]} ${a||""}`,children:[s,f(x,{stroke:"white"})]});n.propTypes={text:o.string.isRequired,size:o.oneOf(Object.keys(d)),utilityClasses:o.string};n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:'"normal"',computed:!1},{value:'"big"',computed:!1}]},required:!1,description:"Button size"},text:{type:{name:"string"},required:!0,description:"Button contents"},utilityClasses:{type:{name:"string"},required:!1,description:"Some additional classes like margin, padding e.g."}}};const _={component:n,tags:["autodocs"]},t={args:{text:"contact us",size:"normal"}},r={args:{...t.args,size:"big"}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'contact us',
    size: 'normal'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    size: 'big'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["Normal","Big"];export{r as Big,t as Normal,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=Button.stories-316e2d2b.js.map
