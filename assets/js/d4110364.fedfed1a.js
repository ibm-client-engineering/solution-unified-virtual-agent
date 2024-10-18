"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8329],{5041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(5893),i=n(1151);const s={title:"GenAI Routing",sidebar_position:1,description:"How to setup the necessary components for genAI routing",custom_edit_url:null},r=void 0,a={id:"Create/GenAI_routing_create",title:"GenAI Routing",description:"How to setup the necessary components for genAI routing",source:"@site/docs/04-Create/07-GenAI_routing_create.mdx",sourceDirName:"04-Create",slug:"/Create/GenAI_routing_create",permalink:"/solution-unified-virtual-agent/Create/GenAI_routing_create",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GenAI Routing",sidebar_position:1,description:"How to setup the necessary components for genAI routing",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Static-webpage",permalink:"/solution-unified-virtual-agent/Create/Webchat Interface/Static-Webpage"},next:{title:"Watson Discovery",permalink:"/solution-unified-virtual-agent/Create/RAG Document Search/Watson_Discovery"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"watsonx.ai",id:"watsonxai",level:3},{value:"<strong>Create watsonx.ai custom extension</strong>",id:"create-watsonxai-custom-extension",level:4},{value:"<strong>Action configuration</strong>",id:"action-configuration",level:4},{value:"watsonx.gov Walkthrough",id:"watsonxgov-walkthrough",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"This documentation walks through how to leverage generative AI to route a user's request to the most appropriate action/workflow or perform RAG on the most relevant data corpuses. This generative AI routing can be carried out by one of two methods."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"watsonx.ai"}),"\n",(0,o.jsx)(t.li,{children:"watsonx.gov"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"watsonxai",children:"watsonx.ai"}),"\n",(0,o.jsx)(t.h4,{id:"create-watsonxai-custom-extension",children:(0,o.jsx)(t.strong,{children:"Create watsonx.ai custom extension"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:['In your assistant, navigate to Integrations page, click "Build custom extension" -> click "Next" -> Input Extension name ',(0,o.jsx)(t.code,{children:"watsonx"}),' -> click "Next" .']}),"\n",(0,o.jsxs)(t.li,{children:["download json file: ",(0,o.jsx)(t.a,{href:"https://github.com/watson-developer-cloud/assistant-toolkit/blob/master/integrations/extensions/starter-kits/language-model-watsonx/watsonx-openapi.json",children:"watsonx-openapi.json"})," and import file to WA"]}),"\n",(0,o.jsx)(t.li,{children:'click "Next" -> click "Finish"'}),"\n",(0,o.jsx)(t.li,{children:'Lower Right corner of the watsonx extension, click "Add" -> click "Add" -> click "Next"'}),"\n",(0,o.jsxs)(t.li,{children:['In Authentication page, in the Authentication type dropdown, select "OAuth 2.0"',"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["For Apikey, create and copy a new API key from ",(0,o.jsx)(t.a,{href:"https://cloud.ibm.com/iam/apikeys",children:"API key"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:'Click "Next", click "Finish", click "Close"'}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"action-configuration",children:(0,o.jsx)(t.strong,{children:"Action configuration"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Create a new action leveraging the extension created above"}),"\n",(0,o.jsx)(t.li,{children:"Configure the model parameters to the appropriate values for the desired use case"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"watsonxgov-walkthrough",children:"watsonx.gov Walkthrough"}),"\n",(0,o.jsxs)(t.p,{children:["Follow the instructions from ",(0,o.jsx)(t.a,{href:"/Create/Governance/watsonx_gov#create-custom-extension",children:"here"})]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);