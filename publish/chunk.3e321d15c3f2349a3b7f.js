(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{387:function(e,t,o){"use strict";o.r(t);var n=o(25),r=o(33);const a=n.$ecomConfig.get("currency")||"BRL",c=e=>{const t={currency:a,content_ids:[e.sku],content_name:e.name,value:Object(r.a)(e),content_type:"product"};return e.categories&&e.categories.length&&(t.content_category=e.category_tree||e.categories[0].name),t};var s=e=>{const t=window.storefront&&window.storefront.context;t&&"products"===t.resource&&e("ViewContent",c(t.body))},i=(o(4),o(8)),d=o(27),u=(e,t)=>{const o=window.storefrontApp&&window.storefrontApp.router;if(o){let n,r,c;const s=e=>{const{amount:t}=e||window.storefrontApp,o={value:t&&t.total||i.a.data&&i.a.data.subtotal||0,currency:a,contents:[],content_type:"product"};return i.a.data&&Array.isArray(i.a.data.items)&&i.a.data.items.forEach((e=>{let{sku:t,quantity:n}=e;o.contents.push({id:t,quantity:n})})),o},u=(t,o)=>{const a=s(),c={...a,checkout_step:t,checkout_option:o};t<=1||!n?(e("InitiateCheckout",a),e("Checkout",c,!0),n=!0):r||(e("CheckoutOption",c,!0),r=!0)},l=(o,n)=>{if(!c&&window.localStorage.getItem("fbq.orderIdSent")!==o){let r,a;if(n)try{r=JSON.parse(n)}catch(e){r=null}a=r&&r.number?`${r.number}:r${parseInt(1e3*Math.random(),10)}`:o,!0!==t.disablePurchase&&e("Purchase",{...s(r),order_id:o,eventID:a}),d.a.requestApi(`/orders/${o}/metafields.json`,"POST",{namespace:"fb",field:"pixel",value:JSON.stringify({eventID:a,userAgent:navigator.userAgent})}),c=!0,window.localStorage.setItem("fbq.orderIdSent",o)}};let f;const p=e=>{let{name:t,params:o}=e;switch(t){case"cart":u(1,"Review Cart");break;case"checkout":u(2,"Confirm Purchase");break;case"confirmation":clearTimeout(f),o.json?l(o.id,decodeURIComponent(o.json)):f=setTimeout((()=>{o.json?l(o.id,decodeURIComponent(o.json)):l(o.id)}),o.json?1:1500)}};o.currentRoute&&p(o.currentRoute),o.afterEach(p)}},l=e=>{i.a.on("addItem",(t=>{let{item:o}=t;e("AddToCart",c(o))}))};t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof window.fbq){const t=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.debug&&console.log("fbq",t,o);const r=n?"trackCustom":"track";if(o.eventID){const e=o.eventID;delete o.eventID,window.fbq(r,t,o,{eventID:e})}else window.fbq(r,t,o)};s(t),u(t,e),l(t)}}}}]);