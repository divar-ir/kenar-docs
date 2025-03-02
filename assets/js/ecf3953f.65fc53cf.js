"use strict";(self.webpackChunkkenar_docs=self.webpackChunkkenar_docs||[]).push([[475],{3408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"oauth/get_user","title":"\u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u0628\u0631","description":"| GET USER          |                     |","source":"@site/docs/oauth/get_user.md","sourceDirName":"oauth","slug":"/oauth/get_user","permalink":"/kenar-docs/oauth/get_user","draft":false,"unlisted":false,"editUrl":"https://github.com/divar-ir/kenar-docs/tree/main/docs/docs/oauth/get_user.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u0627\u062d\u0631\u0627\u0632 \u0628\u0627\u0632","permalink":"/kenar-docs/oauth/"},"next":{"title":"\u0641\u0644\u0648\u06cc \u062a\u06cc\u06a9\u062a \u067e\u0631\u062f\u0627\u062e\u062a","permalink":"/kenar-docs/payment-ticket/"}}');var r=n(4848),c=n(8453);const d={},o="\u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u0628\u0631",i={},a=[];function h(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u062f\u0631\u06cc\u0627\u0641\u062a-\u0627\u0637\u0644\u0627\u0639\u0627\u062a-\u06a9\u0627\u0631\u0628\u0631",children:"\u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u0628\u0631"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"GET USER"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OAuth Permissions"}),(0,r.jsx)(t.td,{children:"USER_PHONE\u060c USER_ID"})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 ",(0,r.jsx)(t.code,{children:"access_token"})," \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0648 \u0634\u0646\u0627\u0633\u0647 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u06a9\u062a\u0627 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u06cc\u062f. \u06a9\u0627\u0641\u06cc\u0633\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u0641\u0631\u0645 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,r.jsxs)(t.p,{children:["\u0627\u06af\u0631 \u0647\u0631 \u062f\u0648 \u0627\u0633\u06a9\u0648\u067e OAuth ",(0,r.jsx)(t.code,{children:"USER_PHONE"})," \u0648 ",(0,r.jsx)(t.code,{children:"USER_ID"})," \u0631\u0627 \u062f\u0631 \u0627\u06a9\u0633\u0633 \u062a\u0648\u06a9\u0646 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f\u060c \u0647\u0631 \u062f\u0648 \u0641\u06cc\u0644\u062f \u0634\u0646\u0627\u0633\u0647 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u06a9\u062a\u0627 \u0648 \u0634\u0645\u0627\u0631\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f. \u062f\u0631 \u063a\u06cc\u0631 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a\u060c \u0641\u0642\u0637 \u0641\u06cc\u0644\u062f \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0627\u0633\u06a9\u0648\u067e\u06cc \u06a9\u0647 \u062f\u0631 \u0627\u06a9\u0633\u0633 \u062a\u0648\u06a9\u0646 \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0634\u0646\u0627\u0633\u0647 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u06a9 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06cc \u0627\u067e\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0645\u062a\u0641\u0627\u0648\u062a \u0645\u06cc\u200c\u0628\u0627\u0634\u062f\u060c \u0627\u0645\u0627 \u062a\u0636\u0645\u06cc\u0646 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0628\u0631\u0627\u06cc \u06cc\u06a9 \u06a9\u0627\u0631\u0628\u0631 \u062f\u06cc\u0648\u0627\u0631 (\u0628\u0631 \u0627\u0633\u0627\u0633 \u0634\u0645\u0627\u0631\u0647 \u06cc\u06a9\u062a\u0627) \u0648 \u06cc\u06a9 \u0627\u067e\u060c ",(0,r.jsx)(t.em,{children:"\u0647\u0645\u06cc\u0634\u0647"})," \u06cc\u06a9 \u0634\u0646\u0627\u0633\u0647\u200c \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u06a9\u062a\u0627 \u0627\u0631\u0627\u0626\u0647 \u0634\u0648\u062f."]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"FIELD"}),(0,r.jsx)(t.th,{children:"OAUTH_SCOPE"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"phone_number"}),(0,r.jsx)(t.td,{children:"USER_PHONE"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"user_id"}),(0,r.jsx)(t.td,{children:"USER_ID"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"GET https://api.divar.ir/v1/open-platform/users\nContent-Type: application/json\nx-api-key: {{apikey}}\nx-access-token: {{access_token}}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u0646\u0645\u0648\u0646\u0647 \u067e\u0627\u0633\u062e \u0646\u06cc\u0632 \u0628\u0647 \u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0627\u0633\u062a:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json5",children:'{\n  "phone_number": "09990000000", // \u062f\u0631 \u0635\u0648\u0631\u062a \u0648\u062c\u0648\u062f USER_PHONE\n  "user_id": "awoDdf1ecd2wac" // \u062f\u0631 \u0635\u0648\u0631\u062a \u0648\u062c\u0648\u062f USER_ID\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var s=n(6540);const r={},c=s.createContext(r);function d(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);