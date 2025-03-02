"use strict";(self.webpackChunkkenar_docs=self.webpackChunkkenar_docs||[]).push([[6808],{6965:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"addons/list","title":"\u0644\u06cc\u0633\u062a \u0627\u0641\u0632\u0648\u0646\u0647\u200c\u0647\u0627\u06cc \u0622\u06af\u0647\u06cc","description":"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0641\u0632\u0648\u0646\u0647\u200c\u0647\u0627\u06cc \u06cc\u06a9 \u0622\u06af\u0647\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 API \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.","source":"@site/docs/addons/list.md","sourceDirName":"addons","slug":"/addons/list","permalink":"/addons/list","draft":false,"unlisted":false,"editUrl":"https://github.com/divar-ir/kenar-docs/tree/main/docs/docs/addons/list.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u0627\u0641\u0632\u0648\u0646\u0647\u200c\u0647\u0627\u06cc \u0628\u06cc\u0646\u0646\u062f\u06af\u0627\u0646 \u0622\u06af\u0647\u06cc","permalink":"/addons/demand_addon"},"next":{"title":"\u0645\u062d\u06cc\u0637 \u062a\u0633\u062a \u0648 \u062a\u0648\u0633\u0639\u0647","permalink":"/addons/test_environment"}}');var s=t(4848),a=t(8453);const r={},d="\u0644\u06cc\u0633\u062a \u0627\u0641\u0632\u0648\u0646\u0647\u200c\u0647\u0627\u06cc \u0622\u06af\u0647\u06cc",i={},c=[{value:"\u0631\u06cc\u06a9\u0648\u0626\u0633\u062a",id:"\u0631\u06cc\u06a9\u0648\u0626\u0633\u062a",level:2},{value:"\u0631\u06cc\u0633\u067e\u0627\u0646\u0633",id:"\u0631\u06cc\u0633\u067e\u0627\u0646\u0633",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u0644\u06cc\u0633\u062a-\u0627\u0641\u0632\u0648\u0646\u0647\u0647\u0627\u06cc-\u0622\u06af\u0647\u06cc",children:"\u0644\u06cc\u0633\u062a \u0627\u0641\u0632\u0648\u0646\u0647\u200c\u0647\u0627\u06cc \u0622\u06af\u0647\u06cc"})}),"\n",(0,s.jsx)(e.p,{children:"\u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0641\u0632\u0648\u0646\u0647\u200c\u0647\u0627\u06cc \u06cc\u06a9 \u0622\u06af\u0647\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0632 API \u0632\u06cc\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(e.p,{children:["\u0644\u06cc\u0646\u06a9 \u0627\u06cc\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062f\u0631 ",(0,s.jsx)(e.a,{href:"https://divar.ir/kenar/api-doc#tag/addons/GET/v1/open-platform/add-ons/post/%7Btoken%7D",children:"\u0641\u0647\u0631\u0633\u062a API-\u0647\u0627"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u0631\u06cc\u06a9\u0648\u0626\u0633\u062a",children:"\u0631\u06cc\u06a9\u0648\u0626\u0633\u062a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-http",metastring:"request",children:"GET https://api.divar.ir/v1/open-platform/add-ons/post/{{post_token}}\nContent-Type: application/json\n\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u0631\u06cc\u0633\u067e\u0627\u0646\u0633",children:"\u0631\u06cc\u0633\u067e\u0627\u0646\u0633"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json5",children:'{\n  "addons": [\n    {\n      "meta_data": {\n        "id": "123456",\n        "app": {\n          "slug": "app_slug",\n          "service_type": "REPORT_PRICE_EVALUATION"\n        },\n        "created_at": "2024-10-01T17:01:08.793398Z",\n        "last_modified": "2024-10-01T17:01:08.793398Z",\n        "status": "ACTIVE"\n      },\n      "token": "gZ7nvW21",\n      "widgets": {\n        "widget_list": [\n          {\n            "widget_type": "EVALUATION_ROW",\n            "data": {\n              "@type": "type.googleapis.com/widgets.EvaluationRowData",\n              "indicator_text": "\u0642\u06cc\u0645\u062a \u0645\u0644\u06a9",\n              "indicator_percentage": "69",\n              "indicator_icon": {\n                "icon_name": "REAL_ESTATE",\n                "icon_color": "ICON_SECONDARY"\n              },\n              "indicator_color": "BRAND_PRIMARY",\n              "left": {\n                "text": "\u067e\u0627\u06cc\u06cc\u0646",\n                "text_color": "WHITE_PRIMARY",\n                "section_color": "SUCCESS_PRIMARY"\n              },\n              "middle": {\n                "text": "\u0645\u062a\u0648\u0633\u0637",\n                "text_color": "WHITE_PRIMARY",\n                "section_color": "SUCCESS_SECONDARY"\n              },\n              "right": {\n                "text": "\u0628\u0627\u0644\u0627",\n                "text_color": "WHITE_PRIMARY",\n                "section_color": "WARNING_SECONDARY"\n              }\n            }\n          }\n          // ...\n        ]\n      },\n    }\n    // ...\n  ]\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>d});var o=t(6540);const s={},a=o.createContext(s);function r(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);