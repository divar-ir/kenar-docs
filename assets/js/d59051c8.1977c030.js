"use strict";(self.webpackChunkkenar_docs=self.webpackChunkkenar_docs||[]).push([[4278],{4490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"post/edit_post","title":"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0622\u06af\u0647\u06cc","description":"| Edit Post   |                                                     |","source":"@site/docs/post/edit_post.md","sourceDirName":"post","slug":"/post/edit_post","permalink":"/kenar-docs/post/edit_post","draft":false,"unlisted":false,"editUrl":"https://github.com/divar-ir/kenar-docs/tree/main/docs/post/edit_post.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u0627\u0646\u062f\u067e\u0648\u06cc\u0646\u062a \u0648\u0644\u06cc\u062f\u06cc\u062a \u062a\u06cc\u06a9\u062a","permalink":"/kenar-docs/payment-ticket/validate"},"next":{"title":"\u062f\u0631\u06cc\u0627\u0641\u062a \u0644\u06cc\u0646\u06a9 \u0622\u067e\u0644\u0648\u062f \u0639\u06a9\u0633","permalink":"/kenar-docs/post/get_image_upload_url"}}');var r=n(4848),o=n(8453);const i={},d="\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0622\u06af\u0647\u06cc",a={},c=[{value:"\u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2},{value:"\u067e\u0627\u0633\u062e",id:"\u067e\u0627\u0633\u062e",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u0648\u06cc\u0631\u0627\u06cc\u0634-\u0622\u06af\u0647\u06cc",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0622\u06af\u0647\u06cc"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Edit Post"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OAUTH Scope"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{dir:"ltr",children:"POST_EDIT.<post_token>"})})]})})]}),"\n",(0,r.jsx)(t.p,{children:"\u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0622\u06af\u0647\u06cc \u0646\u0638\u06cc\u0631 \u0639\u0646\u0648\u0627\u0646\u060c \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0648 \u0639\u06a9\u0633 \u0647\u0627\u06cc \u0622\u06af\u0647\u06cc \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 \u0627\u06cc\u0646 \u0627\u0646\u062f\u067e\u0648\u06cc\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."}),"\n",(0,r.jsxs)(t.p,{children:["\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0627\u0646\u062f\u067e\u0648\u06cc\u0646\u062a \u0628\u0627\u06cc\u062f \u062f\u0633\u062a\u0631\u0633\u06cc ",(0,r.jsx)("code",{dir:"ltr",children:"POST_EDIT.<post_token>"})," \u0631\u0627 \u062f\u0631 \u0641\u0631\u0622\u06cc\u0646\u062f \u0627\u062d\u0631\u0627\u0632 \u0628\u0627\u0632 \u0627\u0632 \u06a9\u0627\u0628\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"\u062f\u0631\u062e\u0648\u0627\u0633\u062a",children:"\u062f\u0631\u062e\u0648\u0627\u0633\u062a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",metastring:"request",children:'PUT https://api.divar.ir/v1/open-platform/post/<token>\nx-access-token: {{access_token_with_oauth_scope_POST_EDIT.<post_token>}}\nx-api-key: {{apikey}}\n{\n    "title": "\u0639\u0646\u0648\u0627\u0646 \u0645\u062f \u0646\u0638\u0631 \u0628\u0631\u0627\u06cc \u0622\u06af\u0647\u06cc",\n    "description": "\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0645\u062f \u0646\u0638\u0631 \u0628\u0631\u0627\u06cc \u0622\u06af\u0647\u06cc",\n    "image_paths": [\n        "{{image_path1}}",\n        "{{image_path2}}",\n        "{{image_path3}}",\n        ...\n    ]\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u067e\u0627\u0633\u062e",children:"\u067e\u0627\u0633\u062e"}),"\n",(0,r.jsx)(t.p,{children:"\u062f\u0631 \u0635\u0648\u0631\u062a \u0645\u0648\u0641\u0642 \u0628\u0648\u062f\u0646 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0622\u06af\u0647\u06cc\u060c \u067e\u0627\u0633\u062e\u06cc \u062e\u0627\u0644\u06cc \u0628\u0627 \u06a9\u062f 200 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc\u0634\u0648\u062f"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"{}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u0647\u0645\u0686\u0646\u06cc\u0646 \u0628\u0631\u0627\u06cc \u0622\u067e\u0644\u0648\u062f \u0639\u06a9\u0633 \u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0648 \u06af\u0631\u0641\u062a\u0646 image_path \u0622\u0646\u0647\u0627 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 ",(0,r.jsx)(t.a,{href:"/kenar-docs/post/get_image_upload_url",children:"\u0627\u06cc\u0646"})," \u0627\u0646\u062f\u067e\u0648\u06cc\u0646\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);