"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3546],{4807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(5893),i=t(1151);const o={title:"Watson Discovery",sidebar_position:1,description:"How to setup RAG with Watson Discovery",custom_edit_url:null},r=void 0,a={id:"Create/RAG Document Search/Watson_Discovery",title:"Watson Discovery",description:"How to setup RAG with Watson Discovery",source:"@site/docs/04-Create/02-RAG Document Search/01-Watson_Discovery.mdx",sourceDirName:"04-Create/02-RAG Document Search",slug:"/Create/RAG Document Search/Watson_Discovery",permalink:"/solution-unified-virtual-agent/Create/RAG Document Search/Watson_Discovery",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Watson Discovery",sidebar_position:1,description:"How to setup RAG with Watson Discovery",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GenAI Routing",permalink:"/solution-unified-virtual-agent/Create/GenAI_routing_create"},next:{title:"Watsonx Discovery",permalink:"/solution-unified-virtual-agent/Create/RAG Document Search/Watsonx_Discovery"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"1. Setup watson Discovery",id:"1-setup-watson-discovery",level:3},{value:"2. Create watsonx and watson Discovery Extensions",id:"2-create-watsonx-and-watson-discovery-extensions",level:3},{value:"<strong>2.1 Create watson Discovery custom extension</strong>",id:"21-create-watson-discovery-custom-extension",level:4},{value:"<strong>2.2 Create watsonx custom extension</strong>",id:"22-create-watsonx-custom-extension",level:4},{value:"<strong>2.3 Integrate watsonx Search using Watson Discovery to Assistant</strong>",id:"23-integrate-watsonx-search-using-watson-discovery-to-assistant",level:4},{value:"Upload Actions:",id:"upload-actions",level:5},{value:"No action matches Setup",id:"no-action-matches-setup",level:5}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("div",{style:{borderBottom:"1px solid #000",marginTop:"20px",marginBottom:"20px"}}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Prerequisite: ",(0,s.jsx)(n.a,{href:"/Prepare/Requirements#watson-discovery",children:"Watson Disovery Software Requirement"})]})}),"\n",(0,s.jsx)(n.p,{children:"This build consists of three main components:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#1-setup-watson-discovery",children:"Setup watson Discovery"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#2-create-watsonx-and-watson-discovery-extensions",children:"Create watsonx and Watson Discovery Extensions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#21-create-watson-discovery-custom-extension",children:"Create watson Discovery custom extension"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#22-create-watsonx-custom-extension",children:"Create watsonx custom extension"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#23-integrate-watsonx-search-using-watson-discovery-to-assistant",children:"Integrate watsonx Search using Watson Discovery to Assistant"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#3-setup-watson-assistant",children:"Setup Watson Assistant"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"1-setup-watson-discovery",children:"1. Setup watson Discovery"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'New projects, input Project Name, select an option "None of the above \u2014 I\u2019m working on a custom project", click "Next"'}),"\n",(0,s.jsx)(n.li,{children:'select the appropriatae method of upload, click "Next"'}),"\n",(0,s.jsx)(n.li,{children:"Input Collection Name"}),"\n",(0,s.jsx)(n.li,{children:"Upper left Hamburger icon -> Manage Collections -> New collections"}),"\n",(0,s.jsx)(n.li,{children:"Select data source"}),"\n",(0,s.jsx)(n.li,{children:'If webcrawl, input url links to "Starting URLs" and click "Add" -> Finish'}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"2-create-watsonx-and-watson-discovery-extensions",children:"2. Create watsonx and watson Discovery Extensions"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required Steps:"})}),"\n",(0,s.jsx)(n.h4,{id:"21-create-watson-discovery-custom-extension",children:(0,s.jsx)(n.strong,{children:"2.1 Create watson Discovery custom extension"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'In your assistant, navigate to "Integrations" page.'}),"\n",(0,s.jsxs)(n.li,{children:['Click "Build custom extensions" -> click "Next" -> Input Extension name ',(0,s.jsx)(n.code,{children:"Watson Discovery"}),' -> click "Next"']}),"\n",(0,s.jsxs)(n.li,{children:["download json file: ",(0,s.jsx)(n.a,{href:"https://github.com/watson-developer-cloud/assistant-toolkit/blob/master/integrations/extensions/starter-kits/watson-discovery/watson-discovery-query-openapi.json",children:"watson-discovery-query-openapi.json"})," and import file to WA"]}),"\n",(0,s.jsx)(n.li,{children:'click "Next" -> click "Finish"'}),"\n",(0,s.jsx)(n.li,{children:'Lower Right corner of the Watson Disovery extension, click "Add" -> click "Add" -> click "Next"'}),"\n",(0,s.jsxs)(n.li,{children:['In Authentication page, in the Authentication type dropdown, select "Basic auth"',"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["For Username enter ",(0,s.jsx)(n.code,{children:"apikey"})]}),"\n",(0,s.jsxs)(n.li,{children:["For password, create and copy a new API key from ",(0,s.jsx)(n.a,{href:"https://cloud.ibm.com/iam/apikeys",children:"API key"})]}),"\n",(0,s.jsx)(n.li,{children:"For discovery_url, within IBM Cloud -> resource list -> Watson Discovery Instance -> Manage -> Credentials -> URL"}),"\n",(0,s.jsxs)(n.li,{children:["Paste URL into discovery_url and remove ",(0,s.jsx)(n.code,{children:"https://"})," from the beginning of the string"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'Click "Next", click "Finish", click "Close"'}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Reference: ",(0,s.jsx)(n.a,{href:"https://github.com/watson-developer-cloud/assistant-toolkit/tree/master/integrations/extensions/starter-kits/watson-discovery",children:"starter kit for accessing the IBM Watson Discovery v2 search API via a custom extension to IBM Watson Assistant"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"22-create-watsonx-custom-extension",children:(0,s.jsx)(n.strong,{children:"2.2 Create watsonx custom extension"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:['In your assistant, navigate to Integrations page, click "Build custom extension" -> click "Next" -> Input Extension name ',(0,s.jsx)(n.code,{children:"watsonx"}),' -> click "Next" .']}),"\n",(0,s.jsxs)(n.li,{children:["download json file: ",(0,s.jsx)(n.a,{href:"https://github.com/watson-developer-cloud/assistant-toolkit/blob/master/integrations/extensions/starter-kits/language-model-watsonx/watsonx-openapi.json",children:"watsonx-openapi.json"})," and import file to WA"]}),"\n",(0,s.jsx)(n.li,{children:'click "Next" -> click "Finish"'}),"\n",(0,s.jsx)(n.li,{children:'Lower Right corner of the watsonx extension, click "Add" -> click "Add" -> click "Next"'}),"\n",(0,s.jsxs)(n.li,{children:['In Authentication page, in the Authentication type dropdown, select "OAuth 2.0"',"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["For Apikey, create and copy a new API key from ",(0,s.jsx)(n.a,{href:"https://cloud.ibm.com/iam/apikeys",children:"API key"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'Click "Next", click "Finish", click "Close"'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"23-integrate-watsonx-search-using-watson-discovery-to-assistant",children:(0,s.jsx)(n.strong,{children:"2.3 Integrate watsonx Search using Watson Discovery to Assistant"})}),"\n",(0,s.jsx)(n.h5,{id:"upload-actions",children:"Upload Actions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download ",(0,s.jsx)(n.a,{href:"https://github.com/watson-developer-cloud/assistant-toolkit/blob/master/integrations/extensions/starter-kits/language-model-conversational-search/discovery-watsonx-actions.json",children:"discovery-watsonx-actions.json"})]}),"\n",(0,s.jsx)(n.li,{children:'Navigate to "Actions" page, click "Global Settings" icon on the upper right corner'}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to Upload/Download tab, upload the downloaded JSON file ",(0,s.jsx)(n.a,{href:"https://github.com/watson-developer-cloud/assistant-toolkit/blob/master/integrations/extensions/starter-kits/language-model-conversational-search/discovery-watsonx-actions.json",children:"discovery-watsonx-actions.json"}),' onto the tab or click to select a file from your local system, then click "Upload", and "Uplaod and replace".']}),"\n",(0,s.jsxs)(n.li,{children:['within the Actions page, navigate to "Actions / Variables / Created by you". Set ',(0,s.jsx)(n.code,{children:"discovery_project_id"})," and ",(0,s.jsx)(n.code,{children:"watsonx_project_id"})," session variable","\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Where to get credentials"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"discovery_project_id"}),": within Watson Discovery: Upper left Hamburger icon -> Integrate and deploy -> API Information"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"watsonx_project_id"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://dataplatform.cloud.ibm.com/wx/home?context=wx",children:"watsonX Platform"})]}),"\n",(0,s.jsx)(n.li,{children:"Projects (click on project)-> Manage -> General -> Details -> Project ID"}),"\n"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"no-action-matches-setup",children:"No action matches Setup"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'Navigate to "All items" -> "Set by assistant" -> "No action matches".'}),"\n",(0,s.jsx)(n.li,{children:'Click on the "No action matches" action and delete the existing step 1 and step 2.'}),"\n",(0,s.jsx)(n.li,{children:'"New Step". In the "And then" section, select "go to a subaction"  -> select "Search" in the dropdown options -> "Apply".'}),"\n",(0,s.jsx)(n.li,{children:'"Save" and "Close"'}),"\n",(0,s.jsx)(n.li,{children:'You\'re all set. Navigate to "Preview" to test the integration!'}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);