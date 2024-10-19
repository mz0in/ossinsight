"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6863],{8106:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010),i=n(95999),s=n(25108);const o={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function l(e){let{code:t,className:n}=e;const[l,p]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),m=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(s.error),p(!0),c.current=window.setTimeout((()=>{p(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":l?(0,i.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,i.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,o.copyButton,l&&o.copyButtonCopied),onClick:m},a.createElement("span",{className:o.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:o.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:o.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},39564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var a=n(87462),r=(n(67294),n(3905)),i=n(26389),s=n(94891),o=n(75190),l=n(47507),p=n(24310),c=n(63303),m=(n(75035),n(85162));const d={id:"list-organizations-of-stargazers",title:"List organizations of stargazers",description:"List organizations of stargazers for the specified repository.",sidebar_label:"List organizations of stargazers",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"list-organizations-of-stargazers",tags:["Stargazers"],description:"List organizations of stargazers for the specified repository. \n\n> **Notice**:\n> In the overall data, about **5.62%** of GitHub users provided valid organization information.\n\n> **Note**: \n> By default, the API does not count users without valid organization information. \n> If you need to count these users, you can set the `exclude_unknown` parameter to `false`.\n",parameters:[{schema:{type:"boolean",default:!0},in:"query",name:"exclude_unknown",required:!1,description:"Whether to exclude stargazers with unknown organization information"},{schema:{type:"string",default:"2000-01-01"},in:"query",name:"from",required:!1,description:"The start date of the range."},{schema:{type:"string",default:"2099-01-01"},in:"query",name:"to",required:!1,description:"The end date of the range."},{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}},additionalProperties:!0},example:[{col:"org_name",data_type:"VARCHAR",nullable:!0},{col:"stargazers",data_type:"BIGINT",nullable:!0},{col:"percentage",data_type:"DECIMAL",nullable:!0}]},rows:{type:"array",items:{type:"object",properties:{org_name:{type:"string",description:"Name of the organization"},percentage:{type:"string",description:"Percentage of stargazers from the organization"},stargazers:{type:"string",description:"Number of stargazers from the organization"}}},example:[{org_name:"tencent",percentage:"0.0217",stargazers:"199"},{org_name:"bytedance",percentage:"0.0192",stargazers:"176"},{org_name:"alibaba",percentage:"0.0162",stargazers:"148"},{org_name:"pingcap",percentage:"0.0119",stargazers:"109"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:4,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/repos/{owner}/{repo}/stargazers/organizations/",servers:[{url:"https://api.ossinsight.io/v1"}],info:{title:"OSSInsight Public API",description:'\nOSSInsight Public APIs (beta) provide a convenient way to access insight data for open source projects on GitHub, supplementing the existing GitHub API.\n\nIt provides data query in different dimensions, including:\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/v1\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit: 600\nx-ratelimit-remaining: 599\n```\n\nIn addition, we have also set up a global rate limit of up to **1000 requests per minute**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit-minute: 1000\nx-ratelimit-remaining-minute: 97\n```\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/v1/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"v1beta"},postman:{name:"List organizations of stargazers",description:{content:"List organizations of stargazers for the specified repository. \n\n> **Notice**:\n> In the overall data, about **5.62%** of GitHub users provided valid organization information.\n\n> **Note**: \n> By default, the API does not count users without valid organization information. \n> If you need to count these users, you can set the `exclude_unknown` parameter to `false`.\n",type:"text/plain"},url:{path:["repos",":owner",":repo","stargazers","organizations",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Whether to exclude stargazers with unknown organization information",type:"text/plain"},key:"exclude_unknown",value:""},{disabled:!1,description:{content:"The start date of the range.",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"The end date of the range.",type:"text/plain"},key:"to",value:""}],variable:[{disabled:!1,description:{content:"(Required) The owner of the repo.",type:"text/plain"},type:"any",value:"",key:"owner"},{disabled:!1,description:{content:"(Required) The name of the repo.",type:"text/plain"},type:"any",value:"",key:"repo"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},u=void 0,h={unversionedId:"api/list-organizations-of-stargazers",id:"api/list-organizations-of-stargazers",title:"List organizations of stargazers",description:"List organizations of stargazers for the specified repository.",source:"@site/docs/api/list-organizations-of-stargazers.api.mdx",sourceDirName:"api",slug:"/api/list-organizations-of-stargazers",permalink:"/docs/api/list-organizations-of-stargazers",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-organizations-of-stargazers",title:"List organizations of stargazers",description:"List organizations of stargazers for the specified repository.",sidebar_label:"List organizations of stargazers",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"list-organizations-of-stargazers",tags:["Stargazers"],description:"List organizations of stargazers for the specified repository. \n\n> **Notice**:\n> In the overall data, about **5.62%** of GitHub users provided valid organization information.\n\n> **Note**: \n> By default, the API does not count users without valid organization information. \n> If you need to count these users, you can set the `exclude_unknown` parameter to `false`.\n",parameters:[{schema:{type:"boolean",default:!0},in:"query",name:"exclude_unknown",required:!1,description:"Whether to exclude stargazers with unknown organization information"},{schema:{type:"string",default:"2000-01-01"},in:"query",name:"from",required:!1,description:"The start date of the range."},{schema:{type:"string",default:"2099-01-01"},in:"query",name:"to",required:!1,description:"The end date of the range."},{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."}],responses:{200:{description:"Default Response",content:{"application/json":{schema:{type:"object",required:["type","data"],properties:{type:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},data:{type:"object",required:["columns","rows","result"],properties:{columns:{type:"array",items:{type:"object",required:["col","data_type","nullable"],properties:{col:{type:"string",description:"The name of the column in the query result."},data_type:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},nullable:{type:"boolean",description:"Whether the column is nullable."}},additionalProperties:!0},example:[{col:"org_name",data_type:"VARCHAR",nullable:!0},{col:"stargazers",data_type:"BIGINT",nullable:!0},{col:"percentage",data_type:"DECIMAL",nullable:!0}]},rows:{type:"array",items:{type:"object",properties:{org_name:{type:"string",description:"Name of the organization"},percentage:{type:"string",description:"Percentage of stargazers from the organization"},stargazers:{type:"string",description:"Number of stargazers from the organization"}}},example:[{org_name:"tencent",percentage:"0.0217",stargazers:"199"},{org_name:"bytedance",percentage:"0.0192",stargazers:"176"},{org_name:"alibaba",percentage:"0.0162",stargazers:"148"},{org_name:"pingcap",percentage:"0.0119",stargazers:"109"}]},result:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:4,row_affect:0,limit:50,databases:["gharchive_dev"]}}}}}}}}}},method:"get",path:"/repos/{owner}/{repo}/stargazers/organizations/",servers:[{url:"https://api.ossinsight.io/v1"}],info:{title:"OSSInsight Public API",description:'\nOSSInsight Public APIs (beta) provide a convenient way to access insight data for open source projects on GitHub, supplementing the existing GitHub API.\n\nIt provides data query in different dimensions, including:\n\n```mdx-code-block\nimport DocCardList from \'@theme/DocCardList\';\nimport {useCurrentSidebarCategory} from \'@docusaurus/theme-common\';\n\n<DocCardList items={useCurrentSidebarCategory().items.filter((item) => {\n    // Exclude Introduction and Showcase pages\n    return item.docId !== \'api/showcase\' && item.docId !== \'api/ossinsight-public-api\';\n})}/>\n```\n\n## Usage\n\nThe OSSInsight Public API is designed to follow the OpenAPI specification and can be accessed by initiating HTTP requests using the command line `curl` or web request libraries in different programming languages.\n\n### Base URL\n\nAll API requests are based on the following URL:\n\n```shell\nhttps://api.ossinsight.io/v1\n```\n\n### Authentication\n\nNo authentication is required for beta version of public APIs, but there are [rate limits](#rate-limit) for API requests.\n\n> Note:\n> We will add authentication way for larger API requests in future releases.\n\n### Rate Limit\n\nFor each IP address, the rate limit allows for up to **600 requests per hour**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit: 600\nx-ratelimit-remaining: 599\n```\n\nIn addition, we have also set up a global rate limit of up to **1000 requests per minute**, which can be checked by the following fields in the Response Header to see the current usage:\n\n```\nx-ratelimit-limit-minute: 1000\nx-ratelimit-remaining-minute: 97\n```\n\n### Example\n\nFor example, if you want to know what countries the stargazers in the `pingcap/tidb` repository are located in, you can make a request using the curl command as follows:\n\n```shell\ncurl https://api.ossinsight.io/v1/repos/pingcap/tidb/stargazers/countries\n```\n\n<details>\n\n<summary>Example Response</summary>\n\n```json\n{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "country_or_area",\n        "data_type": "CHAR",\n        "nullable": true\n      },\n      {\n        "col": "count",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "count": "9183",\n        "country_or_area": "CN",\n        "percentage": "0.5936"\n      },\n      {\n        "count": "1542",\n        "country_or_area": "US",\n        "percentage": "0.0997"\n      },\n      {\n        "count": "471",\n        "country_or_area": "JP",\n        "percentage": "0.0304"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690351487809,\n      "end_ms": 1690351487930,\n      "latency": "121ms",\n      "row_count": 132,\n      "row_affect": 0,\n      "limit": 300,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}\n```\n\n</details>\n\n## Request New API \n\nIf the API in the documentation does not meet your query requirements, please contact us as follows:\n\n- Email us at ossinsight@pingcap.com\n- Open an issue in the [OSSInsight GitHub repository](https://github.com/pingcap/ossinsight/issues/new?assignees=&labels=type%2Ffeature&projects=&template=feature_request.md&title=New%20API)\n',version:"v1beta"},postman:{name:"List organizations of stargazers",description:{content:"List organizations of stargazers for the specified repository. \n\n> **Notice**:\n> In the overall data, about **5.62%** of GitHub users provided valid organization information.\n\n> **Note**: \n> By default, the API does not count users without valid organization information. \n> If you need to count these users, you can set the `exclude_unknown` parameter to `false`.\n",type:"text/plain"},url:{path:["repos",":owner",":repo","stargazers","organizations",""],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Whether to exclude stargazers with unknown organization information",type:"text/plain"},key:"exclude_unknown",value:""},{disabled:!1,description:{content:"The start date of the range.",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"The end date of the range.",type:"text/plain"},key:"to",value:""}],variable:[{disabled:!1,description:{content:"(Required) The owner of the repo.",type:"text/plain"},type:"any",value:"",key:"owner"},{disabled:!1,description:{content:"(Required) The name of the repo.",type:"text/plain"},type:"any",value:"",key:"repo"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/ossinsight-public-api",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Stargazers history",permalink:"/docs/api/stargazers-history"},next:{title:"Showcase",permalink:"/docs/api/showcase"}},y={},g=[{value:"List organizations of stargazers",id:"list-organizations-of-stargazers",level:2}],f={toc:g};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"list-organizations-of-stargazers"},"List organizations of stargazers"),(0,r.kt)("p",null,"List organizations of stargazers for the specified repository. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Notice"),":\nIn the overall data, about ",(0,r.kt)("strong",{parentName:"p"},"5.62%")," of GitHub users provided valid organization information.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),":\nBy default, the API does not count users without valid organization information.\nIf you need to count these users, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude_unknown")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string"},example:"pingcap",in:"path",name:"owner",required:!0,description:"The owner of the repo."},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string"},example:"tidb",in:"path",name:"repo",required:!0,description:"The name of the repo."},mdxType:"ParamsItem"})))),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"boolean",default:!0},in:"query",name:"exclude_unknown",required:!1,description:"Whether to exclude stargazers with unknown organization information"},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string",default:"2000-01-01"},in:"query",name:"from",required:!1,description:"The start date of the range."},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"string",default:"2099-01-01"},in:"query",name:"to",required:!1,description:"The end date of the range."},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Default Response")),(0,r.kt)("div",null,(0,r.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`sql_endpoint`]",schema:{type:"string",description:"The type of the endpoint.",enum:["sql_endpoint"],example:"sql_endpoint"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"columns"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"col",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The name of the column in the query result."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"data_type",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`CHAR`, `BIGINT`, `DECIMAL`, `INT`, `UNSIGNED BIGINT`, `TINYINT`, `TIMESTAMP`, `TEXT`, `VARCHAR`, `DATETIME`, `DOUBLE`, `FLOAT`, `DATE`, `TIME`, `YEAR`, `MEDIUMINT`, `SMALLINT`, `BIT`, `BINARY`, `VARBINARY`, `JSON`, `ENUM`, `SET`, `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT`, `TINYBLOB`, `MEDIUMBLOB`, `BLOB`, `LONGBLOB`]",schema:{type:"string",enum:["CHAR","BIGINT","DECIMAL","INT","UNSIGNED BIGINT","TINYINT","TIMESTAMP","TEXT","VARCHAR","DATETIME","DOUBLE","FLOAT","DATE","TIME","YEAR","MEDIUMINT","SMALLINT","BIT","BINARY","VARBINARY","JSON","ENUM","SET","TINYTEXT","MEDIUMTEXT","LONGTEXT","TINYBLOB","MEDIUMBLOB","BLOB","LONGBLOB"],description:"The data type of the column."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"nullable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the column is nullable."},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"rows"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(p.Z,{collapsible:!1,name:"org_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the organization"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"percentage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Percentage of stargazers from the organization"},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"stargazers",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Number of stargazers from the organization"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"result"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The code of the response."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The message of the response."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"start_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The start time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"end_ms",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The end time of the query in milliseconds."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"latency",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The latency of the query."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"row_count",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows in the query result."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"row_affect",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The number of rows affected by the query."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"limit",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The maximum number of rows in the query result."},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"databases",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"The databases used in the query.",items:{type:"string"}},mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{type:"object",properties:{code:{type:"number",description:"The code of the response."},message:{type:"string",description:"The message of the response."},start_ms:{type:"number",description:"The start time of the query in milliseconds."},end_ms:{type:"number",description:"The end time of the query in milliseconds."},latency:{type:"string",description:"The latency of the query."},row_count:{type:"number",description:"The number of rows in the query result."},row_affect:{type:"number",description:"The number of rows affected by the query."},limit:{type:"number",description:"The maximum number of rows in the query result."},databases:{type:"array",description:"The databases used in the query.",items:{type:"string"}}},additionalProperties:!0,example:{code:200,message:"Query OK!",start_ms:1690957407469,end_ms:1690957407499,latency:"30ms",row_count:4,row_affect:0,limit:50,databases:["gharchive_dev"]}},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "type": "sql_endpoint",\n  "data": {\n    "columns": [\n      {\n        "col": "org_name",\n        "data_type": "VARCHAR",\n        "nullable": true\n      },\n      {\n        "col": "stargazers",\n        "data_type": "BIGINT",\n        "nullable": true\n      },\n      {\n        "col": "percentage",\n        "data_type": "DECIMAL",\n        "nullable": true\n      }\n    ],\n    "rows": [\n      {\n        "org_name": "tencent",\n        "percentage": "0.0217",\n        "stargazers": "199"\n      },\n      {\n        "org_name": "bytedance",\n        "percentage": "0.0192",\n        "stargazers": "176"\n      },\n      {\n        "org_name": "alibaba",\n        "percentage": "0.0162",\n        "stargazers": "148"\n      },\n      {\n        "org_name": "pingcap",\n        "percentage": "0.0119",\n        "stargazers": "109"\n      }\n    ],\n    "result": {\n      "code": 200,\n      "message": "Query OK!",\n      "start_ms": 1690957407469,\n      "end_ms": 1690957407499,\n      "latency": "30ms",\n      "row_count": 4,\n      "row_affect": 0,\n      "limit": 50,\n      "databases": [\n        "gharchive_dev"\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);