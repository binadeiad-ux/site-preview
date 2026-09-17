import{o as Xp,R as Ra}from"./vendor-wddqAaEv.js";const Zp=()=>{};var Fu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},em=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(E=64)),r.push(t[f],t[m],t[E],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ph(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):em(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new tm;const E=i<<2|c>>4;if(r.push(E),h!==64){const b=c<<4&240|h>>2;if(r.push(b),m!==64){const V=h<<6&192|m;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nm=function(n){const e=ph(n);return mh.encodeByteArray(e,!0)},yi=function(n){return nm(n).replace(/\./g,"")},gh=function(n){try{return mh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=()=>rm().__FIREBASE_DEFAULTS__,im=()=>{if(typeof process>"u"||typeof Fu>"u")return;const n=Fu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},om=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gh(n[1]);return e&&JSON.parse(e)},Fi=()=>{try{return Zp()||sm()||im()||om()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_h=n=>{var e,t;return(t=(e=Fi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},yh=n=>{const e=_h(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Eh=()=>{var n;return(n=Fi())==null?void 0:n.config},wh=n=>{var e;return(e=Fi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yi(JSON.stringify(t)),yi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function am(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function cm(){var e;const n=(e=Fi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function um(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dm(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fm(){return!cm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pm(){try{return typeof indexedDB=="object"}catch{return!1}}function mm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="FirebaseError";class It extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gm,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?_m(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new It(s,c,r)}}function _m(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const a=n.substring(s+2,i),c=e[a];r+=n.substring(t,s)+(c!=null?String(c):`<${a}?>`),t=i+1}return r}catch{return n}}function ym(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Bu(i)&&Bu(a)){if(!xn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Bu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ur(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Fr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Em(n,e){const t=new wm(n,e);return t.subscribe.bind(t)}class wm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Tm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=qo),s.error===void 0&&(s.error=qo),s.complete===void 0&&(s.complete=qo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pa(n){return(await fetch(n,{credentials:"include"})).ok}class rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Th;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Am(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vm(n){return n===An?void 0:n}function Am(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Im(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Pm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},bm=Y.INFO,Sm={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Cm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Sm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ba{constructor(e){this.name=e,this._logLevel=bm,this._logHandler=Cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Nm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Nm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ta="@firebase/app",$u="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new ba("@firebase/app"),km="@firebase/app-compat",Dm="@firebase/analytics-compat",xm="@firebase/analytics",Om="@firebase/app-check-compat",Lm="@firebase/app-check",Mm="@firebase/auth",Um="@firebase/auth-compat",Fm="@firebase/database",Bm="@firebase/data-connect",$m="@firebase/database-compat",qm="@firebase/functions",jm="@firebase/functions-compat",zm="@firebase/installations",Hm="@firebase/installations-compat",Wm="@firebase/messaging",Gm="@firebase/messaging-compat",Km="@firebase/performance",Qm="@firebase/performance-compat",Ym="@firebase/remote-config",Jm="@firebase/remote-config-compat",Xm="@firebase/storage",Zm="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/ai",ng="@firebase/firestore-compat",rg="firebase",sg="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="[DEFAULT]",ig={[ta]:"fire-core",[km]:"fire-core-compat",[xm]:"fire-analytics",[Dm]:"fire-analytics-compat",[Lm]:"fire-app-check",[Om]:"fire-app-check-compat",[Mm]:"fire-auth",[Um]:"fire-auth-compat",[Fm]:"fire-rtdb",[Bm]:"fire-data-connect",[$m]:"fire-rtdb-compat",[qm]:"fire-fn",[jm]:"fire-fn-compat",[zm]:"fire-iid",[Hm]:"fire-iid-compat",[Wm]:"fire-fcm",[Gm]:"fire-fcm-compat",[Km]:"fire-perf",[Qm]:"fire-perf-compat",[Ym]:"fire-rc",[Jm]:"fire-rc-compat",[Xm]:"fire-gcs",[Zm]:"fire-gcs-compat",[eg]:"fire-fst",[ng]:"fire-fst-compat",[tg]:"fire-vertex","fire-js":"fire-js",[rg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Map,og=new Map,ra=new Map;function qu(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function On(n){const e=n.name;if(ra.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;ra.set(e,n);for(const t of es.values())qu(t,n);for(const t of og.values())qu(t,n);return!0}function Bi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new ws("app","Firebase",ag);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=sg;function ug(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:na,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(t||(t=Eh()),!t)throw Rt.create("no-options");const i=es.get(s);if(i)if(xn(t,i.options)){if(xn(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw Rt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const a=new Rm(s);for(const l of ra.values())a.addComponent(l);const c=new cg(t,r,a);return es.set(s,c),c}function Sa(n=na){const e=es.get(n);if(!e&&n===na&&Eh())return ug();if(!e)throw Rt.create("no-app",{appName:n});return e}function qA(){return Array.from(es.values())}function pt(n,e,t){let r=ig[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}On(new rn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="firebase-heartbeat-database",hg=1,ts="firebase-heartbeat-store";let jo=null;function vh(){return jo||(jo=Xp(lg,hg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ts)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),jo}async function dg(n){try{const t=(await vh()).transaction(ts),r=await t.objectStore(ts).get(Ah(n));return await t.done,r}catch(e){if(e instanceof It)kt.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(t.message)}}}async function ju(n,e){try{const r=(await vh()).transaction(ts,"readwrite");await r.objectStore(ts).put(e,Ah(n)),await r.done}catch(t){if(t instanceof It)kt.warn(t.message);else{const r=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kt.warn(r.message)}}}function Ah(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=1024,pg=30;class mg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _g(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>pg){const a=yg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zu(),{heartbeatsToSend:r,unsentEntries:s}=gg(this._heartbeatsCache.heartbeats),i=yi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function zu(){return new Date().toISOString().substring(0,10)}function gg(n,e=fg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Hu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Hu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pm()?mm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ju(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Hu(n){return yi(JSON.stringify({version:2,heartbeats:n})).length}function yg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){On(new rn("platform-logger",e=>new Vm(e),"PRIVATE")),On(new rn("heartbeat",e=>new mg(e),"PRIVATE")),pt(ta,$u,n),pt(ta,$u,"esm2020"),pt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eg("");function Rh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wg=Rh,Ph=new ws("auth","Firebase",Rh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new ba("@firebase/auth");function oi(n,...e){Ei.logLevel<=Y.WARN&&Ei.warn(`Auth (${$n}): ${n}`,...e)}function ai(n,...e){Ei.logLevel<=Y.ERROR&&Ei.error(`Auth (${$n}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw Ca(n,...e)}function st(n,...e){return Ca(n,...e)}function $i(n,e,t){const r={...wg(),[e]:t};return new ws("auth","Firebase",r).create(e,{appName:n.name})}function mt(n){return $i(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tg(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&tt(n,"argument-error"),$i(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ca(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ph.create(n,...e)}function B(n,e,...t){if(!n)throw Ca(e,...t)}function Pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ai(e),new Error(e)}function Dt(n,e){n||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ig(){return Wu()==="http:"||Wu()==="https:"}function Wu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ig()||lm()||"connection"in navigator)?navigator.onLine:!0}function Ag(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=am()||hm()}get(){return vg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n,e){Dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bg=new Is(3e4,6e4);function vt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function at(n,e,t,r,s={}){return Sh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ts({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return um()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Bn(n.emulatorConfig.host)&&(h.credentials="include"),bh.fetch()(await Ch(n,n.config.apiHost,t,c),h)})}async function Sh(n,e,t){n._canInitEmulator=!1;const r={...Rg,...e};try{const s=new Cg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Js(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Js(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Js(n,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw $i(n,f,h);tt(n,f)}}catch(s){if(s instanceof It)throw s;tt(n,"network-request-failed",{message:String(s)})}}async function vs(n,e,t,r,s={}){const i=await at(n,e,t,r,s);return"mfaPendingCredential"in i&&tt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ch(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Va(n.config,s):`${n.config.apiScheme}://${s}`;return Pg.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function Sg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),bg.get())})}}function Js(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=st(n,e,r);return s.customData._tokenResponse=t,s}function Gu(n){return n!==void 0&&n.enterprise!==void 0}class Vg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ng(n,e){return at(n,"GET","/v2/recaptchaConfig",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(n,e){return at(n,"POST","/v1/accounts:delete",e)}async function wi(n,e){return at(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dg(n,e=!1){const t=te(n),r=await t.getIdToken(e),s=Na(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zr(zo(s.auth_time)),issuedAtTime:zr(zo(s.iat)),expirationTime:zr(zo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zo(n){return Number(n)*1e3}function Na(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const s=gh(t);return s?JSON.parse(s):(ai("Failed to decode base64 JWT payload"),null)}catch(s){return ai("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ku(n){const e=Na(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof It&&xg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(n){var m;const e=n.auth,t=await n.getIdToken(),r=await rr(n,wi(e,{idToken:t}));B(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Vh(s.providerUserInfo):[],a=Mg(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ia(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Lg(n){const e=te(n);await ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(n,e){const t=await Sh(n,{},async()=>{const r=Ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Ch(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Bn(n.emulatorConfig.host)&&(l.credentials="include"),bh.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fg(n,e){return at(n,"POST","/v2/accounts:revokeToken",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ku(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Ku(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ug(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new er;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Og(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ia(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dg(this,e)}reload(){return Lg(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ns(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await rr(this,kg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:b,providerData:V,stsTokenManager:M}=t;B(m&&M,e,"internal-error");const D=er.fromJSON(this.name,M);B(typeof m=="string",e,"internal-error"),Ht(r,e.name),Ht(s,e.name),B(typeof E=="boolean",e,"internal-error"),B(typeof b=="boolean",e,"internal-error"),Ht(i,e.name),Ht(a,e.name),Ht(c,e.name),Ht(l,e.name),Ht(h,e.name),Ht(f,e.name);const j=new rt({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return V&&Array.isArray(V)&&(j.providerData=V.map(G=>({...G}))),l&&(j._redirectEventId=l),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new er;s.updateFromServerResponse(t);const i=new rt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ns(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Vh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new er;c.updateFromIdToken(r);const l=new rt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ia(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map;function bt(n){Dt(n instanceof Function,"Expected a class definition");let e=Qu.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nh.type="NONE";const Yu=Nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,e,t){return`firebase:${n}:${e}:${t}`}class Sn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ci(this.userKey,s.apiKey,i),this.fullPersistenceKey=ci("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await wi(this.auth,{idToken:e}).catch(()=>{});return t?rt._fromGetAccountInfoResponse(this.auth,t,e):null}return rt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,r="authUser"){if(!t.length)return new Sn(bt(Yu),e,r);const s=(await Promise.all(t.map(async h=>{try{if(await h._isAvailable())return h}catch{return}}))).filter(h=>h);let i=s[0]||bt(Yu);const a=ci(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const E=await wi(e,{idToken:f}).catch(()=>{});if(!E)break;m=await rt._fromGetAccountInfoResponse(e,E,f)}else m=rt._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Sn(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Sn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mh(e))return"Blackberry";if(Uh(e))return"Webos";if(Dh(e))return"Safari";if((e.includes("chrome/")||xh(e))&&!e.includes("edge/"))return"Chrome";if(Lh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kh(n=Ve()){return/firefox\//i.test(n)}function Dh(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xh(n=Ve()){return/crios\//i.test(n)}function Oh(n=Ve()){return/iemobile/i.test(n)}function Lh(n=Ve()){return/android/i.test(n)}function Mh(n=Ve()){return/blackberry/i.test(n)}function Uh(n=Ve()){return/webos/i.test(n)}function ka(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Bg(n=Ve()){var e;return ka(n)&&!!((e=window.navigator)!=null&&e.standalone)}function $g(){return dm()&&document.documentMode===10}function Fh(n=Ve()){return ka(n)||Lh(n)||Uh(n)||Mh(n)||/windows phone/i.test(n)||Oh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n,e=[]){let t;switch(n){case"Browser":t=Ju(Ve());break;case"Worker":t=`${Ju(Ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$n}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(n,e={}){return at(n,"GET","/v2/passwordPolicy",vt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=6;class Hg{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??zg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xu(this),this.idTokenSubscription=new Xu(this),this.beforeStateQueue=new qg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ph,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted){try{this.persistenceManager=await Sn.create(this,e)}catch(a){oi(`Failed to initialize persistence: ${a}`),this.persistenceManager=await Sn.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(a){oi(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wi(this,{idToken:e}),r=await rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Le(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ns(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ag()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(mt(this));const t=e?te(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jg(this),t=new Hg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}).catch(l=>{if(!a)if(typeof t!="function"&&t.error)t.error(l);else if(r)r(l);else throw l}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const r=(t==null?void 0:t.message)||String(t),s=$i(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&oi(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function At(n){return te(n)}class Xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Em(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gg(n){qi=n}function $h(n){return qi.loadJS(n)}function Kg(){return qi.recaptchaEnterpriseScript}function Qg(){return qi.gapiScript}function Yg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Jg{constructor(){this.enterprise=new Xg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Xg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="recaptcha-enterprise",qh="NO_RECAPTCHA",Zu="onFirebaseAuthREInstanceReady";class Wt{constructor(e){this.type=Zg,this.auth=At(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Ng(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Vg(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Gu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(qh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jg().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(async c=>{if(!t&&Gu(window.grecaptcha)&&Wt.scriptInjectionDeferred)await Wt.scriptInjectionDeferred.promise,s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Kg();l.length!==0&&(l+=c+`&onload=${Zu}`),Wt.scriptInjectionDeferred=new Th,window[Zu]=()=>{var h;(h=Wt.scriptInjectionDeferred)==null||h.resolve()},$h(l).then(()=>{var h;return(h=Wt.scriptInjectionDeferred)==null?void 0:h.promise}).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}Wt.scriptInjectionDeferred=null;async function el(n,e,t,r=!1,s=!1){const i=new Wt(n);let a;if(s)a=qh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ti(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await el(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await el(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(n,e){const t=Bi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(xn(i,e??{}))return s;tt(s,"already-initialized")}return t.initialize({options:e})}function t_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function n_(n,e,t){const r=At(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=jh(e),{host:a,port:c}=r_(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(xn(h,r.config.emulator)&&xn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Bn(a)?Pa(`${i}//${a}${l}`):s_()}function jh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function r_(n){const e=jh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:tl(a)}}}function tl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function s_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,e){return at(n,"POST","/v1/accounts:resetPassword",vt(n,e))}async function o_(n,e){return at(n,"POST","/v1/accounts:update",e)}async function a_(n,e){return at(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){return vs(n,"POST","/v1/accounts:signInWithPassword",vt(n,e))}async function u_(n,e){return at(n,"POST","/v1/accounts:sendOobCode",vt(n,e))}async function l_(n,e){return u_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(n,e){return vs(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}async function d_(n,e){return vs(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Da{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new rs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new rs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,t,"signInWithPassword",c_);case"emailLink":return h_(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ti(e,r,"signUpPassword",a_);case"emailLink":return d_(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(n,e){return vs(n,"POST","/v1/accounts:signInWithIdp",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="http://localhost";class Ln extends Da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Ln(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tr(e,t)}buildRequest(){const e={requestUri:f_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ts(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m_(n){const e=Ur(Fr(n)).link,t=e?Ur(Fr(e)).deep_link_id:null,r=Ur(Fr(n)).deep_link_id;return(r?Ur(Fr(r)).link:null)||r||t||e||n}class xa{constructor(e){const t=Ur(Fr(e)),r=t.apiKey??null,s=t.oobCode??null,i=p_(t.mode??null);B(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=m_(e);try{return new xa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(e,t){return rs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=xa.parseLink(t);return B(r,"argument-error"),rs._fromEmailAndCode(e,r.code,r.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Oa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends As{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Kt.credential(t,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends As{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends As{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yt.credential(t,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(n,e){return vs(n,"POST","/v1/accounts:signUp",vt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await rt._fromIdTokenResponse(e,r,s),a=nl(r);return new xt({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=nl(r);return new xt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function nl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(n){var s;if(Le(n.app))return Promise.reject(mt(n));const e=At(n);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new xt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await zh(e,{returnSecureToken:!0}),r=await xt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends It{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ii.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ii(e,t,r,s)}}function Hh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function Wh(n,e,t=!1){const r=await rr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xt._forOperation(n,"link",r)}async function __(n,e,t){await ns(e);const r=g_(e.providerData);B(r.has(t)===n,e.auth,"provider-already-linked")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(n,e,t=!1){const{auth:r}=n;if(Le(r.app))return Promise.reject(mt(r));const s="reauthenticate";try{const i=await rr(n,Hh(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=Na(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),xt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(n,e,t=!1){if(Le(n.app))return Promise.reject(mt(n));const r="signIn",s=await Hh(n,r,e),i=await xt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function E_(n,e){return Gh(At(n),e)}async function zA(n,e){const t=te(n);return await __(!1,t,e.providerId),Wh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n,e,t){var r;B(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),B(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),B(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(B(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(B(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(n){const e=At(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HA(n,e,t){const r=At(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&w_(r,s,t),await Ti(r,s,"getOobCode",l_)}async function WA(n,e,t){await i_(te(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&La(n),r})}async function GA(n,e,t){if(Le(n.app))return Promise.reject(mt(n));const r=At(n),a=await Ti(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zh).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&La(n),l}),c=await xt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function KA(n,e,t){return Le(n.app)?Promise.reject(mt(n)):E_(te(n),lr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&La(n),r})}function QA(n,e){return T_(te(n),null,e)}async function T_(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(i.password=t);const a=await rr(n,o_(r,i));await n._updateTokensIfNecessary(a,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(n,e){return te(n).setPersistence(e)}function I_(n,e,t,r){return te(n).onIdTokenChanged(e,t,r)}function v_(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function JA(n,e,t,r){return te(n).onAuthStateChanged(e,t,r)}function XA(n){return te(n).signOut()}async function ZA(n){return te(n).delete()}const vi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vi,"1"),this.storage.removeItem(vi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=1e3,R_=10;class Qh extends Kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);$g()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,R_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qh.type="LOCAL";const P_=Qh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends Kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yh.type="SESSION";const Jh=Yh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ji(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await b_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ji.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Ma("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function C_(n){gt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function k_(){return Xh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="firebaseLocalStorageDb",D_=1,Ai="firebaseLocalStorage",ed="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zi(n,e){return n.transaction([Ai],e?"readwrite":"readonly").objectStore(Ai)}function x_(){const n=indexedDB.deleteDatabase(Zh);return new Rs(n).toPromise()}function td(){const n=indexedDB.open(Zh,D_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ai,{keyPath:ed})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ai)?e(r):(r.close(),await x_(),e(await td()))})})}async function rl(n,e,t){const r=zi(n,!0).put({[ed]:e,value:t});return new Rs(r).toPromise()}async function O_(n,e){const t=zi(n,!1).get(e),r=await new Rs(t).toPromise();return r===void 0?null:r.value}function sl(n,e){const t=zi(n,!0).delete(e);return new Rs(t).toPromise()}const L_=800,M_=3;class nd{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=td(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>M_)throw r;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Xh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ji._getInstance(k_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new S_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await rl(e,vi,"1"),await sl(e,vi)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>O_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=zi(s,!1).getAll();return new Rs(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||oi(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),L_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}nd.type="LOCAL";const U_=nd;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n,e){return e?bt(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function F_(n){return Gh(n.auth,new Ua(n),n.bypassAuthState)}function B_(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),y_(t,new Ua(n),n.bypassAuthState)}async function $_(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Wh(t,new Ua(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F_;case"linkViaPopup":case"linkViaRedirect":return $_;case"reauthViaPopup":case"reauthViaRedirect":return B_;default:tt(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new Is(2e3,1e4);async function eR(n,e,t){if(Le(n.app))return Promise.reject(st(n,"operation-not-supported-in-this-environment"));const r=At(n);Tg(n,e,Oa);const s=rd(r,t);return new Pn(r,"signInViaPopup",e,s).executeNotNull()}class Pn extends sd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q_.get())};e()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="pendingRedirect",ui=new Map;class z_ extends sd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const r=await H_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H_(n,e){const t=K_(e),r=G_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function W_(n,e){ui.set(n._key(),e)}function G_(n){return bt(n._redirectPersistence)}function K_(n){return ci(j_,n.config.apiKey,n.name)}async function Q_(n,e,t=!1){if(Le(n.app))return Promise.reject(mt(n));const r=At(n),s=rd(r,e),a=await new z_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=600*1e3;class J_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!id(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(st(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y_&&this.cachedEventUids.clear(),this.cachedEventUids.has(il(e))}saveEventToCache(e){this.cachedEventUids.add(il(e)),this.lastProcessedEventTime=Date.now()}}function il(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function id({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return id(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e={}){return at(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ty=/^https?/;async function ny(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Z_(n);for(const t of e)try{if(ry(t))return}catch{}tt(n,"unauthorized-domain")}function ry(n){const e=sa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ty.test(t))return!1;if(ey.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Is(3e4,6e4);function ol(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iy(n){return new Promise((e,t)=>{var s,i,a;function r(){ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ol(),t(st(n,"network-request-failed"))},timeout:sy.get()})}if((i=(s=gt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=gt().gapi)!=null&&a.load)r();else{const c=Yg("iframefcb");return gt()[c]=()=>{gapi.load?r():t(st(n,"network-request-failed"))},$h(`${Qg()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw li=null,e})}let li=null;function oy(n){return li=li||iy(n),li}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Is(5e3,15e3),cy="__/auth/iframe",uy="emulator/auth/iframe",ly={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dy(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Va(e,uy):`https://${n.config.authDomain}/${cy}`,r={apiKey:e.apiKey,appName:n.name,v:$n},s=hy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ts(r).slice(1)}`}async function fy(n){const e=await oy(n),t=gt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:dy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ly,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=st(n,"network-request-failed"),c=gt().setTimeout(()=>{i(a)},ay.get());function l(){gt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},my=500,gy=600,_y="_blank",yy="http://localhost";class al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ey(n,e,t,r=my,s=gy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...py,width:r.toString(),height:s.toString(),top:i,left:a},h=Ve().toLowerCase();t&&(c=xh(h)?_y:t),kh(h)&&(e=e||yy,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[b,V])=>`${E}${b}=${V},`,"");if(Bg(h)&&c!=="_self")return wy(e||"",c),new al(null);const m=window.open(e||"",c,f);B(m,n,"popup-blocked");try{m.focus()}catch{}return new al(m)}function wy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="__/auth/handler",Iy="emulator/auth/handler",vy=encodeURIComponent("fac");async function cl(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$n,eventId:s};if(e instanceof Oa){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ym(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof As){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${vy}=${encodeURIComponent(l)}`:"";return`${Ay(n)}?${Ts(c).slice(1)}${h}`}function Ay({config:n}){return n.emulator?Va(n,Iy):`https://${n.authDomain}/${Ty}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="webStorageSupport";class Ry{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jh,this._completeRedirectFn=Q_,this._overrideRedirectResult=W_}async _openPopup(e,t,r,s){var a;Dt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await cl(e,t,r,sa(),s);return Ey(e,i,Ma())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await cl(e,t,r,sa(),s);return C_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fy(e),r=new J_(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ho,{type:Ho},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Ho];i!==void 0&&t(!!i),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ny(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fh()||Dh()||ka()}}const Py=Ry;var ul="@firebase/auth",ll="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cy(n){On(new rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bh(n)},h=new Wg(r,s,i,l);return t_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),On(new rn("auth-internal",e=>{const t=At(e.getProvider("auth").getImmediate());return(r=>new by(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(ul,ll,Sy(n)),pt(ul,ll,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=300,Ny=wh("authIdTokenMaxAge")||Vy;let hl=null;const ky=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ny)return;const s=t==null?void 0:t.token;hl!==s&&(hl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tR(n=Sa()){const e=Bi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=e_(n,{popupRedirectResolver:Py,persistence:[U_,P_,Jh]}),r=wh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ky(i.toString());v_(t,a,()=>a(t.currentUser)),I_(t,c=>a(c))}}const s=_h("auth");return s&&n_(t,`http://${s}`),t}function Dy(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Gg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=st("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Dy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cy("Browser");var dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,od;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.F=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.D=function(v,T,R){for(var _=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)_[Fe-2]=arguments[Fe];return g.prototype[T].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,y){y||(y=0);const v=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)v[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)v[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],T=I.g[2];let R=I.g[3],_;_=g+(R^y&(T^R))+v[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[2]+606105819&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[6]+2821735955&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[10]+4294925233&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+v[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+v[14]+2792965006&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+v[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^R&(y^T))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[11]+643717713&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[15]+3634488961&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[3]+4107603335&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+v[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+v[7]+1735328473&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+v[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^R)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[11]+1839030562&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[7]+4139469664&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[3]+3572445317&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+v[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+v[15]+530742520&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+v[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~R))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[14]+2878612391&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[10]+4293915773&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[6]+2734768916&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+v[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+v[2]+718787259&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const y=g-this.blockSize,v=this.C;let T=this.h,R=0;for(;R<g;){if(T==0)for(;R<=y;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<g;)if(v[T++]=I.charCodeAt(R++),T==this.blockSize){s(this,v),T=0;break}}else for(;R<g;)if(v[T++]=I[R++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var y=I.length-8;y<I.length;++y)I[y]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)I[g++]=this.g[y]>>>v&255;return I};function i(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;const y=[];let v=!0;for(let T=I.length-1;T>=0;T--){const R=I[T]|0;v&&R==g||(y[T]=R,v=!1)}this.g=y}var c={};function l(I){return-128<=I&&I<128?i(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(I<0)return D(h(-I));const g=[];let y=1;for(let v=0;I>=y;v++)g[v]=I/y|0,y*=4294967296;return new a(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return D(f(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(g,8));let v=m;for(let R=0;R<I.length;R+=8){var T=Math.min(8,I.length-R);const _=parseInt(I.substring(R,R+T),g);T<8?(T=h(Math.pow(g,T)),v=v.j(T).add(h(_))):(v=v.j(y),v=v.add(h(_)))}return v}var m=l(0),E=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-D(this).m();let I=0,g=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);I+=(v>=0?v:4294967296+v)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(M(this))return"-"+D(this).toString(I);const g=h(Math.pow(I,6));var y=this;let v="";for(;;){const T=ne(y,g).g;y=j(y,T.j(g));let R=((y.g.length>0?y.g[0]:y.h)>>>0).toString(I);if(y=T,V(y))return R+v;for(;R.length<6;)R="0"+R;v=R+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function M(I){return I.h==-1}n.l=function(I){return I=j(this,I),M(I)?-1:V(I)?0:1};function D(I){const g=I.g.length,y=[];for(let v=0;v<g;v++)y[v]=~I.g[v];return new a(y,~I.h).add(E)}n.abs=function(){return M(this)?D(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),y=[];let v=0;for(let T=0;T<=g;T++){let R=v+(this.i(T)&65535)+(I.i(T)&65535),_=(R>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=_>>>16,R&=65535,_&=65535,y[T]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(I,g){return I.add(D(g))}n.j=function(I){if(V(this)||V(I))return m;if(M(this))return M(I)?D(this).j(D(I)):D(D(this).j(I));if(M(I))return D(this.j(D(I)));if(this.l(b)<0&&I.l(b)<0)return h(this.m()*I.m());const g=this.g.length+I.g.length,y=[];for(var v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<I.g.length;T++){const R=this.i(v)>>>16,_=this.i(v)&65535,Fe=I.i(T)>>>16,yn=I.i(T)&65535;y[2*v+2*T]+=_*yn,G(y,2*v+2*T),y[2*v+2*T+1]+=R*yn,G(y,2*v+2*T+1),y[2*v+2*T+1]+=_*Fe,G(y,2*v+2*T+1),y[2*v+2*T+2]+=R*Fe,G(y,2*v+2*T+2)}for(I=0;I<g;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=g;I<2*g;I++)y[I]=0;return new a(y,0)};function G(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function X(I,g){this.g=I,this.h=g}function ne(I,g){if(V(g))throw Error("division by zero");if(V(I))return new X(m,m);if(M(I))return g=ne(D(I),g),new X(D(g.g),D(g.h));if(M(g))return g=ne(I,D(g)),new X(D(g.g),g.h);if(I.g.length>30){if(M(I)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var y=E,v=g;v.l(I)<=0;)y=he(y),v=he(v);var T=de(y,1),R=de(v,1);for(v=de(v,2),y=de(y,2);!V(v);){var _=R.add(v);_.l(I)<=0&&(T=T.add(y),R=_),v=de(v,1),y=de(y,1)}return g=j(I,T.j(g)),new X(T,g)}for(T=m;I.l(g)>=0;){for(y=Math.max(1,Math.floor(I.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),R=h(y),_=R.j(g);M(_)||_.l(I)>0;)y-=v,R=h(y),_=R.j(g);V(R)&&(R=E),T=T.add(R),I=j(I,_)}return new X(T,I)}n.B=function(I){return ne(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)&I.i(v);return new a(y,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)|I.i(v);return new a(y,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)^I.i(v);return new a(y,this.h^I.h)};function he(I){const g=I.g.length+1,y=[];for(let v=0;v<g;v++)y[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(y,I.h)}function de(I,g){const y=g>>5;g%=32;const v=I.g.length-y,T=[];for(let R=0;R<v;R++)T[R]=g>0?I.i(R+y)>>>g|I.i(R+y+1)<<32-g:I.i(R+y);return new a(T,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,od=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Zt=a}).apply(typeof dl<"u"?dl:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ad,Br,cd,hi,oa,ud,ld,hd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,A,P){for(var O=Array(arguments.length-2),W=2;W<arguments.length;W++)O[W-2]=arguments[W];return u.prototype[A].apply(p,O)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const u=o.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function V(o,u){for(let p=1;p<arguments.length;p++){const A=arguments[p];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const P=A.length||0;o.length=d+P;for(let O=0;O<P;O++)o[d+O]=A[O]}else o.push(A)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(o){a.setTimeout(()=>{throw o},0)}function j(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,d){const p=X.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var X=new M(()=>new ne,o=>o.reset());class ne{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let he,de=!1,I=new G,g=()=>{const o=Promise.resolve(void 0);he=()=>{o.then(y)}};function y(){for(var o;o=j();){try{o.h.call(o.g)}catch(d){D(d)}var u=X;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}de=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Fe(o,u){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(Fe,T),Fe.prototype.init=function(o,u){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Fe.Z.h.call(this)},Fe.prototype.h=function(){Fe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var yn="closure_listenable_"+(Math.random()*1e6|0),wp=0;function Tp(o,u,d,p,A){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=A,this.key=++wp,this.da=this.fa=!1}function Ls(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ms(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function Ip(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function Uc(o){const u={};for(const d in o)u[d]=o[d];return u}const Fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bc(o,u){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let P=0;P<Fc.length;P++)d=Fc[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function Us(o){this.src=o,this.g={},this.h=0}Us.prototype.add=function(o,u,d,p,A){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const O=Eo(o,u,p,A);return O>-1?(u=o[O],d||(u.fa=!1)):(u=new Tp(u,this.src,P,!!p,A),u.fa=d,o.push(u)),u};function yo(o,u){const d=u.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,u,void 0),P;(P=A>=0)&&Array.prototype.splice.call(p,A,1),P&&(Ls(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Eo(o,u,d,p){for(let A=0;A<o.length;++A){const P=o[A];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==p)return A}return-1}var wo="closure_lm_"+(Math.random()*1e6|0),To={};function $c(o,u,d,p,A){if(Array.isArray(u)){for(let P=0;P<u.length;P++)$c(o,u[P],d,p,A);return null}return d=zc(d),o&&o[yn]?o.J(u,d,c(p)?!!p.capture:!1,A):vp(o,u,d,!1,p,A)}function vp(o,u,d,p,A,P){if(!u)throw Error("Invalid event type");const O=c(A)?!!A.capture:!!A;let W=vo(o);if(W||(o[wo]=W=new Us(o)),d=W.add(u,d,p,O,P),d.proxy)return d;if(p=Ap(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)R||(A=O),A===void 0&&(A=!1),o.addEventListener(u.toString(),p,A);else if(o.attachEvent)o.attachEvent(jc(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ap(){function o(d){return u.call(o.src,o.listener,d)}const u=Rp;return o}function qc(o,u,d,p,A){if(Array.isArray(u))for(var P=0;P<u.length;P++)qc(o,u[P],d,p,A);else p=c(p)?!!p.capture:!!p,d=zc(d),o&&o[yn]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],d=Eo(u,d,p,A),d>-1&&(Ls(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=vo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Eo(u,d,p,A)),(d=o>-1?u[o]:null)&&Io(d))}function Io(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[yn])yo(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(jc(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=vo(u))?(yo(d,o),d.h==0&&(d.src=null,u[wo]=null)):Ls(o)}}}function jc(o){return o in To?To[o]:To[o]="on"+o}function Rp(o,u){if(o.da)o=!0;else{u=new Fe(u,this);const d=o.listener,p=o.ha||o.src;o.fa&&Io(o),o=d.call(p,u)}return o}function vo(o){return o=o[wo],o instanceof Us?o:null}var Ao="__closure_events_fn_"+(Math.random()*1e9>>>0);function zc(o){return typeof o=="function"?o:(o[Ao]||(o[Ao]=function(u){return o.handleEvent(u)}),o[Ao])}function Pe(){v.call(this),this.i=new Us(this),this.M=this,this.G=null}m(Pe,v),Pe.prototype[yn]=!0,Pe.prototype.removeEventListener=function(o,u,d,p){qc(this,o,u,d,p)};function ke(o,u){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new T(u,o);else if(u instanceof T)u.target=u.target||o;else{var A=u;u=new T(p,o),Bc(u,A)}A=!0;let P,O;if(d)for(O=d.length-1;O>=0;O--)P=u.g=d[O],A=Fs(P,p,!0,u)&&A;if(P=u.g=o,A=Fs(P,p,!0,u)&&A,A=Fs(P,p,!1,u)&&A,d)for(O=0;O<d.length;O++)P=u.g=d[O],A=Fs(P,p,!1,u)&&A}Pe.prototype.N=function(){if(Pe.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let p=0;p<d.length;p++)Ls(d[p]);delete o.g[u],o.h--}}this.G=null},Pe.prototype.J=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Pe.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function Fs(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let P=0;P<u.length;++P){const O=u[P];if(O&&!O.da&&O.capture==d){const W=O.listener,Ee=O.ha||O.src;O.fa&&yo(o.i,O),A=W.call(Ee,p)!==!1&&A}}return A&&!p.defaultPrevented}function Pp(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Hc(o){o.g=Pp(()=>{o.g=null,o.i&&(o.i=!1,Hc(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bp extends v{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Hc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(o){v.call(this),this.h=o,this.g={}}m(Er,v);var Wc=[];function Gc(o){Ms(o.g,function(u,d){this.g.hasOwnProperty(d)&&Io(u)},o),o.g={}}Er.prototype.N=function(){Er.Z.N.call(this),Gc(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=a.JSON.stringify,Sp=a.JSON.parse,Cp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Kc(){}function Qc(){}var wr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Po(){T.call(this,"d")}m(Po,T);function bo(){T.call(this,"c")}m(bo,T);var En={},Yc=null;function Bs(){return Yc=Yc||new Pe}En.Ia="serverreachability";function Jc(o){T.call(this,En.Ia,o)}m(Jc,T);function Tr(o){const u=Bs();ke(u,new Jc(u))}En.STAT_EVENT="statevent";function Xc(o,u){T.call(this,En.STAT_EVENT,o),this.stat=u}m(Xc,T);function De(o){const u=Bs();ke(u,new Xc(u,o))}En.Ja="timingevent";function Zc(o,u){T.call(this,En.Ja,o),this.size=u}m(Zc,T);function Ir(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function vr(){this.g=!0}vr.prototype.ua=function(){this.g=!1};function Vp(o,u,d,p,A,P){o.info(function(){if(o.g)if(P){var O="",W=P.split("&");for(let re=0;re<W.length;re++){var Ee=W[re].split("=");if(Ee.length>1){const Te=Ee[0];Ee=Ee[1];const ut=Te.split("_");O=ut.length>=2&&ut[1]=="type"?O+(Te+"="+Ee+"&"):O+(Te+"=redacted&")}}}else O=null;else O=P;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+u+`
`+d+`
`+O})}function Np(o,u,d,p,A,P,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+u+`
`+d+`
`+P+" "+O})}function Wn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Dp(o,d)+(p?" "+p:"")})}function kp(o,u){o.info(function(){return"TIMEOUT: "+u})}vr.prototype.info=function(){};function Dp(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var d=P[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<p.length;O++)p[O]=""}}}}return Ro(P)}catch{return u}}var $s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tu;function So(){}m(So,Kc),So.prototype.g=function(){return new XMLHttpRequest},tu=new So;function Ar(o){return encodeURIComponent(String(o))}function xp(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Ft(o,u,d,p){this.j=o,this.i=u,this.l=d,this.S=p||1,this.V=new Er(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},Co={};function Vo(o,u,d){o.M=1,o.A=js(ct(u)),o.u=d,o.R=!0,su(o,null)}function su(o,u){o.F=Date.now(),qs(o),o.B=ct(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),_u(d.i,"t",p),o.C=0,d=o.j.L,o.h=new nu,o.g=Ou(o.j,d?u:null,!o.u),o.P>0&&(o.O=new bp(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Wc[0]=A.toString()),A=Wc);for(let P=0;P<A.length;P++){const O=$c(d,A[P],p||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=o.J?Uc(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Tr(),Vp(o.i,o.v,o.B,o.l,o.S,o.u)}Ft.prototype.ba=function(o){o=o.target;const u=this.O;u&&qt(o)==3?u.j():this.Y(o)},Ft.prototype.Y=function(o){try{if(o==this.g)e:{const W=qt(this.g),Ee=this.g.ya(),re=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||Au(this.g)))){this.K||W!=4||Ee==7||(Ee==8||re<=0?Tr(3):Tr(2)),No(this);var u=this.g.ca();this.X=u;var d=Op(this);if(this.o=u==200,Np(this.i,this.v,this.B,this.l,this.S,W,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var P=p;break t}}P=null}if(o=P)Wn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ko(this,o);else{this.o=!1,this.m=3,De(12),wn(this),Rr(this);break e}}if(this.R){o=!0;let Te;for(;!this.K&&this.C<d.length;)if(Te=Lp(this,d),Te==Co){W==4&&(this.m=4,De(14),o=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==ru){this.m=4,De(15),Wn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Wn(this.i,this.l,Te,null),ko(this,Te);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||d.length!=0||this.h.h||(this.m=1,De(16),o=!1),this.o=this.o&&o,!o)Wn(this.i,this.l,d,"[Invalid Chunked Response]"),wn(this),Rr(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Bo(O),O.P=!0,De(11))}}else Wn(this.i,this.l,d,null),ko(this,d);W==4&&wn(this),this.o&&!this.K&&(W==4?Nu(this.j,this):(this.o=!1,qs(this)))}else Yp(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),wn(this),Rr(this)}}}catch{}finally{}};function Op(o){if(!iu(o))return o.g.la();const u=Au(o.g);if(u==="")return"";let d="";const p=u.length,A=qt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return wn(o),Rr(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<p;P++)o.h.h=!0,d+=o.h.i.decode(u[P],{stream:!(A&&P==p-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function iu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Lp(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Co:(d=Number(u.substring(d,p)),isNaN(d)?ru:(p+=1,p+d>u.length?Co:(u=u.slice(p,p+d),o.C=p+d,u)))}Ft.prototype.cancel=function(){this.K=!0,wn(this)};function qs(o){o.T=Date.now()+o.H,ou(o,o.H)}function ou(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ir(h(o.aa,o),u)}function No(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ft.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(kp(this.i,this.B),this.M!=2&&(Tr(),De(17)),wn(this),this.m=2,Rr(this)):ou(this,this.T-o)};function Rr(o){o.j.I==0||o.K||Nu(o.j,o)}function wn(o){No(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Gc(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function ko(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Do(d.h,o))){if(!o.L&&Do(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Ks(d),Ws(d);else break e;Fo(d),De(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ir(h(d.Va,d),6e3));uu(d.h)<=1&&d.ta&&(d.ta=void 0)}else In(d,11)}else if((o.L||d.g==o)&&Ks(d),!_(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let re=A[u];const Te=re[0];if(!(Te<=d.K))if(d.K=Te,re=re[1],d.I==2)if(re[0]=="c"){d.M=re[1],d.ba=re[2];const ut=re[3];ut!=null&&(d.ka=ut,d.j.info("VER="+d.ka));const vn=re[4];vn!=null&&(d.za=vn,d.j.info("SVER="+d.za));const jt=re[5];jt!=null&&typeof jt=="number"&&jt>0&&(p=1.5*jt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const zt=o.g;if(zt){const Ys=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var P=p.h;P.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(xo(P,P.h),P.h=null))}if(p.G){const $o=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(p.wa=$o,se(p.J,p.G,$o))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var O=o;if(p.na=xu(p,p.L?p.ba:null,p.W),O.L){lu(p.h,O);var W=O,Ee=p.O;Ee&&(W.H=Ee),W.D&&(No(W),qs(W)),p.g=O}else Cu(p);d.i.length>0&&Gs(d)}else re[0]!="stop"&&re[0]!="close"||In(d,7);else d.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?In(d,7):Uo(d):re[0]!="noop"&&d.l&&d.l.qa(re),d.A=0)}}Tr(4)}catch{}}var Mp=class{constructor(o,u){this.g=o,this.map=u}};function au(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function uu(o){return o.h?1:o.g?o.g.size:0}function Do(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xo(o,u){o.g?o.g.add(u):o.h=u}function lu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}au.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return b(o.i)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Up(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let A,P=null;p>=0?(A=o[d].substring(0,p),P=o[d].substring(p+1)):A=o[d],u(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Bt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Bt?(this.l=o.l,Pr(this,o.j),this.o=o.o,this.g=o.g,br(this,o.u),this.h=o.h,Oo(this,yu(o.i)),this.m=o.m):o&&(u=String(o).match(du))?(this.l=!1,Pr(this,u[1]||"",!0),this.o=Sr(u[2]||""),this.g=Sr(u[3]||"",!0),br(this,u[4]),this.h=Sr(u[5]||"",!0),Oo(this,u[6]||"",!0),this.m=Sr(u[7]||"")):(this.l=!1,this.i=new Vr(null,this.l))}Bt.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Cr(u,fu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Cr(u,fu,!0),"@"),o.push(Ar(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Cr(d,d.charAt(0)=="/"?$p:Bp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Cr(d,jp)),o.join("")},Bt.prototype.resolve=function(o){const u=ct(this);let d=!!o.j;d?Pr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var p=o.h;if(d)br(u,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=u.h.lastIndexOf("/");A!=-1&&(p=u.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let O=0;O<A.length;){const W=A[O++];W=="."?p&&O==A.length&&P.push(""):W==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),p&&O==A.length&&P.push("")):(P.push(W),p=!0)}p=P.join("/")}else p=A}return d?u.h=p:d=o.i.toString()!=="",d?Oo(u,yu(o.i)):d=!!o.m,d&&(u.m=o.m),u};function ct(o){return new Bt(o)}function Pr(o,u,d){o.j=d?Sr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function br(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Oo(o,u,d){u instanceof Vr?(o.i=u,zp(o.i,o.l)):(d||(u=Cr(u,qp)),o.i=new Vr(u,o.l))}function se(o,u,d){o.i.set(u,d)}function js(o){return se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Sr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Fp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Fp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fu=/[#\/\?@]/g,Bp=/[#\?:]/g,$p=/[#\?]/g,qp=/[#\?@]/g,jp=/#/g;function Vr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&Up(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Vr.prototype,n.add=function(o,u){Tn(this),this.i=null,o=Gn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function pu(o,u){Tn(o),u=Gn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function mu(o,u){return Tn(o),u=Gn(o,u),o.g.has(u)}n.forEach=function(o,u){Tn(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(u,A,p,this)},this)},this)};function gu(o,u){Tn(o);let d=[];if(typeof u=="string")mu(o,u)&&(d=d.concat(o.g.get(Gn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return Tn(this),this.i=null,o=Gn(this,o),mu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=gu(this,o),o.length>0?String(o[0]):u):u};function _u(o,u,d){pu(o,u),d.length>0&&(o.i=null,o.g.set(Gn(o,u),b(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const A=Ar(d);d=gu(this,d);for(let P=0;P<d.length;P++){let O=A;d[P]!==""&&(O+="="+Ar(d[P])),o.push(O)}}return this.i=o.join("&")};function yu(o){const u=new Vr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Gn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function zp(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(d,p){const A=p.toLowerCase();p!=A&&(pu(this,p),_u(this,A,d))},o)),o.j=u}function Hp(o,u){const d=new vr;if(a.Image){const p=new Image;p.onload=f($t,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f($t,d,"TestLoadImage: error",!1,u,p),p.onabort=f($t,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f($t,d,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Wp(o,u){const d=new vr,p=new AbortController,A=setTimeout(()=>{p.abort(),$t(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(A),P.ok?$t(d,"TestPingServer: ok",!0,u):$t(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),$t(d,"TestPingServer: error",!1,u)})}function $t(o,u,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Gp(){this.g=new Cp}function Lo(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Lo,Kc),Lo.prototype.g=function(){return new zs(this.i,this.h)};function zs(o,u){Pe.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(zs,Pe),n=zs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,kr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Nr(this):kr(this),this.readyState==3&&Eu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Nr(this))},n.Na=function(o){this.g&&(this.response=o,Nr(this))},n.ga=function(){this.g&&Nr(this)};function Nr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,kr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function kr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wu(o){let u="";return Ms(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Mo(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=wu(d),typeof o=="string"?d!=null&&Ar(d):se(o,u,d))}function ce(o){Pe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ce,Pe);var Kp=/^https?$/i,Qp=["POST","PUT"];n=ce.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tu.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Tu(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Qp,u,void 0)>=0)||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of d)this.g.setRequestHeader(P,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Tu(this,P)}};function Tu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Iu(o),Hs(o)}function Iu(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,ke(this,"complete"),ke(this,"abort"),Hs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?vu(this):this.Xa())},n.Xa=function(){vu(this)};function vu(o){if(o.h&&typeof i<"u"){if(o.v&&qt(o)==4)setTimeout(o.Ca.bind(o),0);else if(ke(o,"readystatechange"),qt(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=P===0){let O=String(o.D).match(du)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),p=!Kp.test(O?O.toLowerCase():"")}d=p}if(d)ke(o,"complete"),ke(o,"success");else{o.o=6;try{var A=qt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Iu(o)}}finally{Hs(o)}}}}function Hs(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||ke(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function qt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return qt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Sp(u)}};function Au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yp(o){const u={};o=(o.g&&qt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=xp(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[A]||[];u[A]=P,P.push(d)}Ip(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dr(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Ru(o){this.za=0,this.i=[],this.j=new vr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Dr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Dr("baseRetryDelayMs",5e3,o),this.Za=Dr("retryDelaySeedMs",1e4,o),this.Ta=Dr("forwardChannelMaxRetries",2,o),this.va=Dr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new au(o&&o.concurrentRequestLimit),this.Ba=new Gp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ru.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,p){De(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=xu(this,null,this.W),Gs(this)};function Uo(o){if(Pu(o),o.I==3){var u=o.V++,d=ct(o.J);if(se(d,"SID",o.M),se(d,"RID",u),se(d,"TYPE","terminate"),xr(o,d),u=new Ft(o,o.j,u),u.M=2,u.A=js(ct(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Ou(u.j,null),u.g.ea(u.A)),u.F=Date.now(),qs(u)}Du(o)}function Ws(o){o.g&&(Bo(o),o.g.cancel(),o.g=null)}function Pu(o){Ws(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ks(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Gs(o){if(!cu(o.h)&&!o.m){o.m=!0;var u=o.Ea;he||g(),de||(he(),de=!0),I.add(u,o),o.D=0}}function Jp(o,u){return uu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ir(h(o.Ea,o,u),ku(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Ft(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Uc(P),Bc(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Su(this,A,u),d=ct(this.J),se(d,"RID",o),se(d,"CVER",22),this.G&&se(d,"X-HTTP-Session-Id",this.G),xr(this,d),P&&(this.R?u="headers="+Ar(wu(P))+"&"+u:this.u&&Mo(d,this.u,P)),xo(this.h,A),this.Ra&&se(d,"TYPE","init"),this.S?(se(d,"$req",u),se(d,"SID","null"),A.U=!0,Vo(A,d,null)):Vo(A,d,u),this.I=2}}else this.I==3&&(o?bu(this,o):this.i.length==0||cu(this.h)||bu(this))};function bu(o,u){var d;u?d=u.l:d=o.V++;const p=ct(o.J);se(p,"SID",o.M),se(p,"RID",d),se(p,"AID",o.K),xr(o,p),o.u&&o.o&&Mo(p,o.u,o.o),d=new Ft(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Su(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),xo(o.h,d),Vo(d,p,u)}function xr(o,u){o.H&&Ms(o.H,function(d,p){se(u,p,d)}),o.l&&Ms({},function(d,p){se(u,p,d)})}function Su(o,u,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let W=-1;for(;;){const Ee=["count="+d];W==-1?d>0?(W=A[0].g,Ee.push("ofs="+W)):W=0:Ee.push("ofs="+W);let re=!0;for(let Te=0;Te<d;Te++){var P=A[Te].g;const ut=A[Te].map;if(P-=W,P<0)W=Math.max(0,A[Te].g-100),re=!1;else try{P="req"+P+"_"||"";try{var O=ut instanceof Map?ut:Object.entries(ut);for(const[vn,jt]of O){let zt=jt;c(jt)&&(zt=Ro(jt)),Ee.push(P+vn+"="+encodeURIComponent(zt))}}catch(vn){throw Ee.push(P+"type="+encodeURIComponent("_badmap")),vn}}catch{p&&p(ut)}}if(re){O=Ee.join("&");break e}}O=void 0}return o=o.i.splice(0,d),u.G=o,O}function Cu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;he||g(),de||(he(),de=!0),I.add(u,o),o.A=0}}function Fo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ir(h(o.Da,o),ku(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Vu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ir(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),Ws(this),Vu(this))};function Bo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Vu(o){o.g=new Ft(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=ct(o.na);se(u,"RID","rpc"),se(u,"SID",o.M),se(u,"AID",o.K),se(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&se(u,"TO",o.ia),se(u,"TYPE","xmlhttp"),xr(o,u),o.u&&o.o&&Mo(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=js(ct(u)),d.u=null,d.R=!0,su(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Ws(this),Fo(this),De(19))};function Ks(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Nu(o,u){var d=null;if(o.g==u){Ks(o),Bo(o),o.g=null;var p=2}else if(Do(o.h,u))d=u.G,lu(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;p=Bs(),ke(p,new Zc(p,d)),Gs(o)}else Cu(o);else if(A=u.m,A==3||A==0&&u.X>0||!(p==1&&Jp(o,u)||p==2&&Fo(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),A){case 1:In(o,5);break;case 4:In(o,10);break;case 3:In(o,6);break;default:In(o,2)}}}function ku(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function In(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),p=o.Ua;const A=!p;p=new Bt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pr(p,"https"),js(p),A?Hp(p.toString(),d):Wp(p.toString(),d)}else De(2);o.I=0,o.l&&o.l.pa(u),Du(o),Pu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Du(o){if(o.I=0,o.ja=[],o.l){const u=hu(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ja,u),V(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function xu(o,u,d){var p=d instanceof Bt?ct(d):new Bt(d);if(p.g!="")u&&(p.g=u+"."+p.g),br(p,p.u);else{var A=a.location;p=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const P=new Bt(null);p&&Pr(P,p),u&&(P.g=u),A&&br(P,A),d&&(P.h=d),p=P}return d=o.G,u=o.wa,d&&u&&se(p,d,u),se(p,"VER",o.ka),xr(o,p),p}function Ou(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new ce(new Lo({ab:d})):new ce(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}n=Lu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qs(){}Qs.prototype.g=function(o,u){return new We(o,u)};function We(o,u){Pe.call(this),this.g=new Ru(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Kn(this)}m(We,Pe),We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Uo(this.g)},We.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Ro(o),o=d);u.i.push(new Mp(u.Ya++,o)),u.I==3&&Gs(u)},We.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,We.Z.N.call(this)};function Mu(o){Po.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(Mu,Po);function Uu(){bo.call(this),this.status=1}m(Uu,bo);function Kn(o){this.g=o}m(Kn,Lu),Kn.prototype.ra=function(){ke(this.g,"a")},Kn.prototype.qa=function(o){ke(this.g,new Mu(o))},Kn.prototype.pa=function(o){ke(this.g,new Uu)},Kn.prototype.oa=function(){ke(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,hd=function(){return new Qs},ld=function(){return Bs()},ud=En,oa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,hi=$s,eu.COMPLETE="complete",cd=eu,Qc.EventType=wr,wr.OPEN="a",wr.CLOSE="b",wr.ERROR="c",wr.MESSAGE="d",Pe.prototype.listen=Pe.prototype.J,Br=Qc,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,ad=ce}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr="12.19.0";function xy(n){hr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new ba("@firebase/firestore");function Qn(){return Mn.logLevel}function L(n,...e){if(Mn.logLevel<=Y.DEBUG){const t=e.map(Fa);Mn.debug(`Firestore (${hr}): ${n}`,...t)}}function Ot(n,...e){if(Mn.logLevel<=Y.ERROR){const t=e.map(Fa);Mn.error(`Firestore (${hr}): ${n}`,...t)}}function it(n,...e){if(Mn.logLevel<=Y.WARN){const t=e.map(Fa);Mn.warn(`Firestore (${hr}): ${n}`,...t)}}function Fa(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,dd(n,r,t)}function dd(n,e,t){let r=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ot(r),new Error(r)}function U(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||dd(e,s,r)}function H(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Oy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function aa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Wo(s)===Wo(i)?Q(s,i):Wo(s)?1:-1}return Q(n.length,e.length)}const Ly=55296,My=57343;function Wo(n){const e=n.charCodeAt(0);return e>=Ly&&e<=My}function sr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zs(this.root,e,this.comparator,!0)}}class Zs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ae.RED,this.left=s??Ae.EMPTY,this.right=i??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ae(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fl(this.data.getIterator())}getIteratorFrom(e){return new fl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class fl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="__name__";class lt{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return lt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=lt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const r=lt.isNumericId(e),s=lt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?lt.extractNumericId(e).compare(lt.extractNumericId(t)):aa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zt.fromString(e.substring(4,e.length-2))}}class Z extends lt{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const Uy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Je=class Yn extends lt{construct(e,t,r){return new Yn(e,t,r)}static isValidIdentifier(e){return Uy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ht}static keyField(){return new Yn([ht])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Yn(t)}static emptyPath(){return new Yn([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new ge(Je.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fy(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function fd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(Z.fromString(e))}static fromName(e){return new F(Z.fromString(e).popFirst(5))}static empty(){return new F(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new Z(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n,e,t){if(!t)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function By(n,e,t,r){if(e===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pl(n){if(!F.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ml(n){if(F.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ps(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Hi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function Ue(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hi(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function bs(n,e){if(!Ps(n))throw new x(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new x(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=-62135596800,_l=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_l);return new ee(t,r)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new x(C.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return ee._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,r;if(e>=0n)t=Number(e/1000000000n),r=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),r=0):(t=Number(e/1000000000n-1n),r=Number(s+1000000000n))}return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gl)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_l}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new x(C.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bs(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:me("string",ee._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pd("Invalid base64 string: "+i):i}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const $y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sn(n){if(U(!!n,39018),typeof n=="string"){let e=0;const t=$y.exec(n);if(U(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="server_timestamp",gd="__type__",_d="__previous_value__",yd="__local_write_time__";function Wi(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[gd])==null?void 0:r.stringValue)===md}function Ss(n){const e=n.mapValue.fields[_d];return Wi(e)?Ss(e):e}function ir(n){const e=sn(n.mapValue.fields[yd].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,r,s,i,a,c,l,h,f,m,E,b){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m,this._customHeaders=E,this.grpcFlowControlWindow=b}}const Pi="(default)";class ss{constructor(e,t){this.projectId=e,this.database=t||Pi}static empty(){return new ss("","")}get isDefaultDatabase(){return this.database===Pi}isEqual(e){return e instanceof ss&&e.projectId===this.projectId&&e.database===this.database}}function jy(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ss(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=-1;function Gi(n){return n==null}function is(n){return n===0&&1/n==-1/0}function zy(n){return typeof n=="number"&&Number.isInteger(n)&&!is(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Hy(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="__type__",Wy="__max__",ei={mapValue:{}},wd="__vector__",os="value",or={nullValue:"NULL_VALUE"},je={booleanValue:!0},ve={booleanValue:!1};function ye(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wi(n)?4:Gy(n)?9007199254740991:bi(n)?10:11:$(28295,{value:n})}function nt(n,e,t){if(n===e)return!0;const r=ye(n);if(r!==ye(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ir(n).isEqual(ir(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=sn(i.timestampValue),l=sn(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return on(i.bytesValue).isEqual(on(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return oe(i.geoPointValue.latitude)===oe(a.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a,c){if("integerValue"in i&&"integerValue"in a)return oe(i.integerValue)===oe(a.integerValue);let l,h;if("doubleValue"in i&&"doubleValue"in a)l=oe(i.doubleValue),h=oe(a.doubleValue);else{if(!(c!=null&&c.i))return!1;l=oe(i.integerValue??i.doubleValue),h=oe(a.integerValue??a.doubleValue)}return l===h?!!(c!=null&&c.o)||is(l)===is(h):!!(c===void 0||c.u)&&isNaN(l)&&isNaN(h)})(n,e,t);case 9:return sr(n.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>nt(s,i,t)));case 10:case 11:return(function(i,a,c){const l=i.mapValue.fields||{},h=a.mapValue.fields||{};if(Ri(l)!==Ri(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!nt(l[f],h[f],c)))return!1;return!0})(n,e,t);default:return $(52216,{left:n})}}function as(n,e){return(n.values||[]).find((t=>nt(t,e)))!==void 0}function ze(n,e){if(n===e)return 0;const t=ye(n),r=ye(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=oe(i.integerValue||i.doubleValue),l=oe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return yl(n.timestampValue,e.timestampValue);case 4:return yl(ir(n),ir(e));case 5:return aa(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=on(i),l=on(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Q(c[h],l[h]);if(f!==0)return f}return Q(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=Q(oe(i.latitude),oe(a.latitude));return c!==0?c:Q(oe(i.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return El(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var E,b,V,M;const c=i.fields||{},l=a.fields||{},h=(E=c[os])==null?void 0:E.arrayValue,f=(b=l[os])==null?void 0:b.arrayValue,m=Q(((V=h==null?void 0:h.values)==null?void 0:V.length)||0,((M=f==null?void 0:f.values)==null?void 0:M.length)||0);return m!==0?m:El(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ei.mapValue&&a===ei.mapValue)return 0;if(i===ei.mapValue)return 1;if(a===ei.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const E=aa(l[m],f[m]);if(E!==0)return E;const b=ze(c[l[m]],h[f[m]]);if(b!==0)return b}return Q(l.length,f.length)})(n.mapValue,e.mapValue);default:throw $(23264,{l:t})}}function yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=sn(n),r=sn(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function El(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ze(t[s],r[s]);if(i!==void 0&&i!==0)return i}return Q(t.length,r.length)}function ar(n){return ca(n)}function ca(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=sn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return on(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return F.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ca(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ca(t.fields[a])}`;return s+"}"})(n.mapValue):$(61005,{value:n})}function di(n){switch(ye(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ss(n);return e?16+di(e):16;case 5:return 2*n.stringValue.length;case 6:return on(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+di(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return gn(r.fields,((i,a)=>{s+=i.length+di(a)})),s})(n.mapValue);default:throw $(13486,{value:n})}}function wl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function dt(n){return!!n&&"integerValue"in n}function bn(n){return!!n&&"doubleValue"in n}function an(n){return dt(n)||bn(n)}function cr(n){return!!n&&"arrayValue"in n}function Qe(n){return!!n&&"nullValue"in n}function He(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cn(n){return!!n&&"mapValue"in n}function bi(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ed])==null?void 0:r.stringValue)===wd}function ua(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[os])==null?void 0:t.arrayValue}function Hr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return gn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Hr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hr(n.arrayValue.values[t]);return e}return{...n}}function Gy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Cn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(t)}setAll(e){let t=Je.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Hr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Cn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Cn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){gn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Me(Hr(this.value))}}function Td(n){const e=[];return gn(n.fields,((t,r)=>{const s=new Je([t]);if(Cn(r)){const i=Td(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(e)?"-0":e}}function ja(n){return{integerValue:""+n}}function za(n,e,t){return zy(e)?ja(e):Ki(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this._=void 0}}function Ky(n,e,t){return n instanceof cs?(function(s,i){const a={fields:{[gd]:{stringValue:md},[yd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wi(i)&&(i=Ss(i)),i&&(a.fields[_d]=i),{mapValue:a}})(t,e):n instanceof us?vd(n,e):n instanceof ls?Ad(n,e):n instanceof hs?(function(s,i){const a=Id(s,i),c=Vi(a)+Vi(s.h);return dt(a)&&dt(s.h)?ja(c):Ki(s.serializer,c)})(n,e):n instanceof Si?(function(s,i){return Tl(s,i,Math.min)})(n,e):n instanceof Ci?(function(s,i){return Tl(s,i,Math.max)})(n,e):void 0}function Qy(n,e,t){return n instanceof us?vd(n,e):n instanceof ls?Ad(n,e):t}function Id(n,e){return n instanceof hs?an(e)?e:{integerValue:0}:null}class cs extends Qi{}class us extends Qi{constructor(e){super(),this.elements=e}}function vd(n,e){const t=Rd(e);for(const r of n.elements)t.some((s=>nt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ls extends Qi{constructor(e){super(),this.elements=e}}function Ad(n,e){let t=Rd(e);for(const r of n.elements)t=t.filter((s=>!nt(s,r)));return{arrayValue:{values:t}}}class Ha extends Qi{constructor(e,t){super(),this.serializer=e,this.h=t}}class hs extends Ha{}class Si extends Ha{}class Ci extends Ha{}function Tl(n,e,t){if(!an(e))return n.h;const r=t(Vi(e),Vi(n.h));return dt(e)&&dt(n.h)?ja(r):Ki(n.serializer,r)}function Vi(n){return oe(n.integerValue||n.doubleValue)}function Rd(n){return cr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t){this.field=e,this.transform=t}}function Jy(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof us&&s instanceof us||r instanceof ls&&s instanceof ls?sr(r.elements,s.elements,nt):r instanceof hs&&s instanceof hs||r instanceof Si&&s instanceof Si||r instanceof Ci&&s instanceof Ci?nt(r.h,s.h):r instanceof cs&&s instanceof cs})(n.transform,e.transform)}class Xy{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yi{}function Pd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wa(n.key,et.none()):new Cs(n.key,n.data,et.none());{const t=n.data,r=Me.empty();let s=new ge(Je.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new _n(n.key,r,new Ke(s.toArray()),et.none())}}function Zy(n,e,t){n instanceof Cs?(function(s,i,a){const c=s.value.clone(),l=vl(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof _n?(function(s,i,a){if(!fi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=vl(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(bd(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Wr(n,e,t,r){return n instanceof Cs?(function(i,a,c,l){if(!fi(i.precondition,a))return c;const h=i.value.clone(),f=Al(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof _n?(function(i,a,c,l){if(!fi(i.precondition,a))return c;const h=Al(i.fieldTransforms,l,a),f=a.data;return f.setAll(bd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,a,c){return fi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function eE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Id(r.transform,s||null);i!=null&&(t===null&&(t=Me.empty()),t.set(r.field,i))}return t||null}function Il(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sr(r,s,((i,a)=>Jy(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cs extends Yi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _n extends Yi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function vl(n,e,t){const r=new Map;U(n.length===t.length,32656,{T:t.length,P:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Qy(a,c,t[s]))}return r}function Al(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Ky(i,a,e))}return r}class Wa extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tE extends Yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){this.position=e,this.inclusive=t}}function Rl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=ze(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{}class pe extends Sd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new rE(e,t,r):t==="array-contains"?new oE(e,r):t==="in"?new aE(e,r):t==="not-in"?new cE(e,r):t==="array-contains-any"?new uE(e,r):new pe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new sE(e,r):new iE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ze(t,this.value)):t!==null&&ye(this.value)===ye(t)&&this.matchesComparison(ze(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends Sd{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new ot(e,t)}matches(e){return Cd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function Cd(n){return n.op==="and"}function Vd(n){return nE(n)&&Cd(n)}function nE(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function la(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+ar(n.value);if(Vd(n))return n.filters.map((e=>la(e))).join(",");{const e=n.filters.map((t=>la(t))).join(",");return`${n.op}(${e})`}}function Nd(n,e){return n instanceof pe?(function(r,s){return s instanceof pe&&r.op===s.op&&r.field.isEqual(s.field)&&nt(r.value,s.value)})(n,e):n instanceof ot?(function(r,s){return s instanceof ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Nd(a,s.filters[c])),!0):!1})(n,e):void $(19439)}function kd(n){return n instanceof pe?(function(t){return`${t.field.canonicalString()} ${t.op} ${ar(t.value)}`})(n):n instanceof ot?(function(t){return t.op.toString()+" {"+t.getFilters().map(kd).join(" ,")+"}"})(n):"Filter"}class rE extends pe{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class sE extends pe{constructor(e,t){super(e,"in",t),this.keys=Dd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class iE extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Dd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>F.fromName(r.referenceValue)))}class oE extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cr(t)&&as(t.arrayValue,this.value)}}class aE extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&as(this.value.arrayValue,t)}}class cE extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(as(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!as(this.value.arrayValue,t)}}class uE extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cr(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>as(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t="asc"){this.field=e,this.dir=t}}function lE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new ee(0,0))}static max(){return new z(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,z.min(),z.min(),z.min(),Me.empty(),0)}static newFoundDocument(e,t,r,s){return new Ce(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new Ce(e,2,t,z.min(),z.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,z.min(),z.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=-1;function hE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new cn(s,F.empty(),e)}function dE(n){return new cn(n.readTime,n.key,fs)}class cn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cn(z.min(),F.empty(),fs)}static max(){return new cn(z.max(),F.empty(),fs)}}function fE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.R=null}}function bl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new pE(n,e,t,r,s,i,a)}function xd(n){const e=H(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>la(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ar(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ar(r))).join(",")),e.R=t}return e.R}function Od(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pl(n.startAt,e.startAt)&&Pl(n.endAt,e.endAt)}function Rn(n){return!!n.isCorePipeline}function Ld(n){return!!n.path&&F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function mE(n,e,t,r,s,i,a,c){return new qn(n,e,t,r,s,i,a,c)}function Ji(n){return new qn(n)}function Sl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gE(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Md(n){return n.collectionGroup!==null}function Gr(n){const e=H(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ge(Je.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new ds(i,r))})),t.has(Je.keyField().canonicalString())||e.A.push(new ds(Je.keyField(),r))}return e.A}function _t(n){const e=H(n);return e.V||(e.V=_E(e,Gr(n))),e.V}function _E(n,e){if(n.limitType==="F")return bl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ds(s.field,i)}));const t=n.endAt?new Ni(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ni(n.startAt.position,n.startAt.inclusive):null;return bl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ha(n,e){const t=n.filters.concat([e]);return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function yE(n,e){const t=n.explicitOrderBy.concat([e]);return new qn(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function da(n,e,t){return new qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function EE(n,e){return Od(_t(n),_t(e))&&n.limitType===e.limitType}function Kr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>kd(s))).join(", ")}]`),Gi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ar(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ar(s))).join(",")),`Target(${r})`})(_t(n))}; limitType=${n.limitType})`}function Xi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Rl(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Gr(r),s)||r.endAt&&!(function(a,c,l){const h=Rl(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Gr(r),s))})(n,e)}function Ga(n){return(e,t)=>{let r=!1;for(const s of Gr(n)){const i=wE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wE(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ze(l,h):$(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,J;function IE(n){switch(n){case C.OK:return $(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function Ud(n){if(n===void 0)return Ot("GRPC error has no .code"),C.UNKNOWN;switch(n){case fe.OK:return C.OK;case fe.CANCELLED:return C.CANCELLED;case fe.UNKNOWN:return C.UNKNOWN;case fe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case fe.INTERNAL:return C.INTERNAL;case fe.UNAVAILABLE:return C.UNAVAILABLE;case fe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case fe.NOT_FOUND:return C.NOT_FOUND;case fe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case fe.ABORTED:return C.ABORTED;case fe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case fe.DATA_LOSS:return C.DATA_LOSS;default:return $(39323,{code:n})}}(J=fe||(fe={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new ie(F.comparator);function $e(){return vE}const Fd=new ie(F.comparator);function Jn(...n){let e=Fd;for(const t of n)e=e.insert(t.key,t);return e}function Bd(n){let e=Fd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Jt(){return Qr()}function $d(){return Qr()}function Qr(){return new jn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const AE=new ie(F.comparator),RE=new ge(F.comparator);function K(...n){let e=RE;for(const t of n)e=e.add(t);return e}const PE=new ge(Q);function bE(){return PE}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=new Zt([4294967295,4294967295],0);function Cl(n){const e=SE().encode(n),t=new od;return t.update(e),new Uint8Array(t.digest())}function Vl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zt([t,r],0),new Zt([s,i],0)]}class Ka{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $r(`Invalid padding: ${t}`);if(r<0)throw new $r(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $r(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=Zt.fromNumber(this.p)}v(e,t,r){let s=e.add(t.multiply(Zt.fromNumber(r)));return s.compare(CE)===1&&(s=new Zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=Cl(e),[r,s]=Vl(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);if(!this.D(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ka(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.p===0)return;const t=Cl(e),[r,s]=Vl(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);this.C(a)}}C(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vs(z.min(),s,new ie(Q),$e(),$e(),K())}}class Ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ns(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,r,s){this.F=e,this.removedTargetIds=t,this.key=r,this.O=s}}class qd{constructor(e,t){this.targetId=e,this.M=t}}class jd{constructor(e,t,r=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Nl{constructor(e){this.targetId=e,this.N=0,this.L=kl(),this.B=_e.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=K(),t=K(),r=K();return this.L.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}})),new Ns(this.B,this.U,e,t,r)}G(){this.k=!1,this.L=kl()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,U(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const Or="WatchChangeAggregator";class VE{constructor(e){this.X=e,this.ee=new Map,this.te=$e(),this.ne=ti(),this.re=$e(),this.ie=ti(),this.se=new ie(Q)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,(t=>{const r=this.ee.get(t);if(r)switch(e.state){case 0:this.ce(t)&&r.K(e.resumeToken);break;case 1:r.Y(),r.q||r.G(),r.K(e.resumeToken);break;case 2:r.Y(),r.q||this.removeTarget(t);break;case 3:this.ce(t)&&(r.Z(),r.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),r.K(e.resumeToken));break;default:$(56790,{state:e.state})}else L(Or,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach(((r,s)=>{this.ce(s)&&t(s)}))}Ee(e){var t;return Rn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Ld(e)}he(e){const t=e.targetId,r=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(r===0){const a=new F(Rn(i)?Z.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,a,Ce.newNoDocument(a,z.min()))}else U(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Pe(t);if(a!==r){const c=this.Ie(e),l=c?this.Re(c,e,a):1;if(l!==0){this.le(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,h)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=on(r).toUint8Array()}catch(l){if(l instanceof pd)return it("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ka(a,s,i)}catch(l){return it(l instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.p===0?null:c}Re(e,t,r){return t.M.count===r-this.de(e,t.targetId)?0:2}de(e,t){const r=this.X.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.X.Ve(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ae(t,i,null),s++)})),s}fe(e){const t=new Map;this.ee.forEach(((i,a)=>{const c=this.Te(a);if(c){if(i.current&&this.Ee(c.target)){const l=Rn(c.target)?Z.fromString(c.target.getPipelineDocuments()[0]):c.target.path,h=new F(l);this.me(h).has(a)||this.pe(a,h)||this.ae(a,h,Ce.newNoDocument(h,e))}i.$&&(t.set(a,i.W()),i.G())}}));let r=K();this.ie.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.Te(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.te.forEach(((i,a)=>a.setReadTime(e))),this.re.forEach(((i,a)=>a.setReadTime(e)));const s=new Vs(e,t,this.se,this.te,this.re,r);return this.te=$e(),this.ne=ti(),this.re=$e(),this.ie=ti(),this.se=new ie(Q),s}oe(e,t){const r=this.ee.get(e);if(!r||!this.ce(e))return void L(Or,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;r.j(t.key,s),Rn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,r){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),r&&(Rn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,r):this.te=this.te.insert(t,r))):L(Or,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const r=t.W();return this.X.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}J(e){let t=this.ee.get(e);t||(L(Or,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Nl(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new ge(Q),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new ge(Q),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||L(Or,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new Nl(e)),this.X.getRemoteKeysForTarget(e).forEach((t=>{this.ae(e,t,null)}))}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function ti(){return new ie(F.comparator)}function kl(){return new ie(F.comparator)}const NE={asc:"ASCENDING",desc:"DESCENDING"},kE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DE={and:"AND",or:"OR"};class xE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fa(n,e){return n.useProto3Json||Gi(e)?e:{value:e}}function Yr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qa(n){const e=sn(n);return new ee(e.seconds,e.nanos)}function zd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mi(n,e){return Yr(n,e.toTimestamp())}function yt(n){return U(!!n,49232),z.fromTimestamp(Qa(n))}function Ya(n,e){return pa(n,e).canonicalString()}function pa(n,e){const t=(function(s){return new Z(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Hd(n){const e=Z.fromString(n);return U(Yd(e),10190,{key:e.toString()}),e}function ki(n,e){return Ya(n.databaseId,e.path)}function Go(n,e){const t=Hd(e);if(t.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(Gd(t))}function Wd(n,e){return Ya(n.databaseId,e)}function OE(n){const e=Hd(n);return e.length===4?Z.emptyPath():Gd(e)}function ma(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gd(n){return U(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Dl(n,e,t){return{name:ki(n,e),fields:t.value.mapValue.fields}}function LE(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:$(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),_e.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),_e.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?C.UNKNOWN:Ud(h.code);return new x(f,h.message||"")})(a);t=new jd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Go(n,r.document.name),i=yt(r.document.updateTime),a=r.document.createTime?yt(r.document.createTime):z.min(),c=new Me({mapValue:{fields:r.document.fields}}),l=Ce.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new pi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Go(n,r.document),i=r.readTime?yt(r.readTime):z.min(),a=Ce.newNoDocument(s,i),c=r.removedTargetIds||[];t=new pi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Go(n,r.document),i=r.removedTargetIds||[];t=new pi([],i,s,null)}else{if(!("filter"in e))return $(11601,{we:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new TE(s,i),c=r.targetId;t=new qd(c,a)}}return t}function ME(n,e){let t;if(e instanceof Cs)t={update:Dl(n,e.key,e.value)};else if(e instanceof Wa)t={delete:ki(n,e.key)};else if(e instanceof _n)t={update:Dl(n,e.key,e.data),updateMask:GE(e.fieldMask)};else{if(!(e instanceof tE))return $(16599,{be:e.type});t={verify:ki(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof cs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof us)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ls)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hs)return{fieldPath:a.field.canonicalString(),increment:c.h};if(c instanceof Si)return{fieldPath:a.field.canonicalString(),minimum:c.h};if(c instanceof Ci)return{fieldPath:a.field.canonicalString(),maximum:c.h};throw $(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:mi(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)})(n,e.precondition)),t}function UE(n,e){return n&&n.length>0?(U(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?yt(s.updateTime):yt(i);return a.isEqual(z.min())&&(a=yt(i)),new Xy(a,s.transformResults||[])})(t,e)))):[]}function FE(n,e){return{documents:[Wd(n,e.path)]}}function BE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Wd(n,s);const i=(function(h){if(h.length!==0)return Qd(ot.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(E){return{field:Xn(E.field),direction:zE(E.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=fa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Se:t,parent:s}}function $E(n){let e=OE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){U(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(m){const E=Kd(m);return E instanceof ot&&Vd(E)?E.getFilters():[E]})(t.where));let a=[];t.orderBy&&(a=(function(m){return m.map((E=>(function(V){return new ds(Zn(V.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(E)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let E;return E=typeof m=="object"?m.value:m,Gi(E)?null:E})(t.limit));let l=null;t.startAt&&(l=(function(m){const E=!!m.before,b=m.values||[];return new Ni(b,E)})(t.startAt));let h=null;return t.endAt&&(h=(function(m){const E=!m.before,b=m.values||[];return new Ni(b,E)})(t.endAt)),mE(e,s,a,i,c,"F",l,h)}function qE(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jE(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function Kd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Zn(t.unaryFilter.field);return pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zn(t.unaryFilter.field);return pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zn(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Zn(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(t){return pe.create(Zn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ot.create(t.compositeFilter.filters.map((r=>Kd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(t.compositeFilter.op))})(n):$(30097,{filter:n})}function zE(n){return NE[n]}function HE(n){return kE[n]}function WE(n){return DE[n]}function Xn(n){return{fieldPath:n.canonicalString()}}function Zn(n){return Je.fromServerFormat(n.fieldPath)}function Qd(n){return n instanceof pe?(function(t){if(t.op==="=="){if(He(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NAN"}};if(Qe(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(He(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NAN"}};if(Qe(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(t.field),op:HE(t.op),value:t.value}}})(n):n instanceof ot?(function(t){const r=t.getFilters().map((s=>Qd(s)));return r.length===1?r[0]:{compositeFilter:{op:WE(t.op),filters:r}}})(n):$(54877,{filter:n})}function GE(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Yd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Jd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ps(n,e){const t={fields:{}};return e.forEach(((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)})),{mapValue:t}}function Xd(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){return new xE(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(_e.fromBase64String(e))}catch(t){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bs(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:me("string",Ze._jsonSchemaVersion),bytes:me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function KE(){return new eo(ht)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(bs(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:me("string",Et._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Se.UNAUTHENTICATED)))}shutdown(){}}class YE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class JE{constructor(e){this.De=e,this.currentUser=Se.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.Ce===void 0,42304);let r=this.xe;const s=l=>this.xe!==r?(r=this.xe,t(l)):Promise.resolve();let i=new Vt;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new Vt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),a())};this.De.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.De.getImmediate({optional:!0});l?c(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}}),0),a()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.xe!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string",31837,{Oe:r}),new Zd(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{Me:e}),new Se(e)}}class XE{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class ZE{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r}getToken(){return Promise.resolve(new XE(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(Se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ew{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,Le(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){U(this.Ce===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.$e;return this.$e=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new xl(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new xl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function ef(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="ConnectivityMonitor";class Ll{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){L(Ol,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){L(Ol,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni=null;function ga(){return ni===null?ni=(function(){return 268435456+Math.round(2147483648*Math.random())})():ni++,"0x"+ni.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="RestConnection",nw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class rw{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${r}/databases/${s}`,this.tt=this.databaseId.database===Pi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}nt(e,t,r,s,i){const a=ga(),c=this.rt(e,t.toUriEncodedString());L(Ko,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(l,s,i);const{host:h}=new URL(c),f=Bn(h);return this.st(e,c,l,r,f).then((m=>(L(Ko,`Received RPC '${e}' ${a}: `,m),m)),(m=>{throw it(Ko,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m}))}_t(e,t,r,s,i,a){return this.nt(e,t,r,s,i)}it(e,t,r){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+hr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const r=nw[e];let s=`${this.Xe}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection",Lr=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class nr extends rw{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!nr.yt){const e=ld();Lr(e,ud.STAT_EVENT,(t=>{t.stat===oa.PROXY?L(be,"STAT_EVENT: detected buffering proxy"):t.stat===oa.NOPROXY&&L(be,"STAT_EVENT: detected no buffering proxy")})),nr.yt=!0}}st(e,t,r,s,i){const a=ga();return new Promise(((c,l)=>{const h=new ad;h.setWithCredentials(!0),h.listenOnce(cd.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case hi.NO_ERROR:const m=h.getResponseJson();L(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case hi.TIMEOUT:L(be,`RPC '${e}' ${a} timed out`),l(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case hi.HTTP_ERROR:const E=h.getStatus();if(L(be,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const M=(function(j){const G=j.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN})(V.status);l(new x(M,V.message))}else l(new x(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new x(C.UNAVAILABLE,"Connection failed."));break;default:$(9055,{wt:e,streamId:a,bt:h.getLastErrorCode(),St:h.getLastError()})}}finally{L(be,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);L(be,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)}))}vt(e,t,r){const s=ga(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.it(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");L(be,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=a.createWebChannel(h,c);this.Dt(f);let m=!1,E=!1;const b=new sw({ot:V=>{E?L(be,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(L(be,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),L(be,`RPC '${e}' stream ${s} sending:`,V),f.send(V))},ut:()=>f.close()});return Lr(f,Br.EventType.OPEN,(()=>{E||(L(be,`RPC '${e}' stream ${s} transport opened.`),b.Rt())})),Lr(f,Br.EventType.CLOSE,(()=>{E||(E=!0,L(be,`RPC '${e}' stream ${s} transport closed`),b.Vt(),this.xt(f))})),Lr(f,Br.EventType.ERROR,(V=>{E||(E=!0,it(be,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),b.Vt(new x(C.UNAVAILABLE,"The operation could not be completed")))})),Lr(f,Br.EventType.MESSAGE,(V=>{var M;if(!E){const D=V.data[0];U(!!D,16349);const j=D,G=(j==null?void 0:j.error)||((M=j[0])==null?void 0:M.error);if(G){L(be,`RPC '${e}' stream ${s} received error:`,G);const X=G.status;let ne=(function(I){const g=fe[I];if(g!==void 0)return Ud(g)})(X),he=G.message;X==="NOT_FOUND"&&he.includes("database")&&he.includes("does not exist")&&he.includes(this.databaseId.database)&&it(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ne===void 0&&(ne=C.INTERNAL,he="Unknown error status: "+X+" with message "+G.message),E=!0,b.Vt(new x(ne,he)),f.close()}else L(be,`RPC '${e}' stream ${s} received:`,D),b.dt(D)}})),nr.gt(),setTimeout((()=>{b.At()}),0),b}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,r){super.it(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return hd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n){return new nr(n)}nr.yt=!1;class tf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=r,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),r=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="PersistentStream";class nf{constructor(e,t,r,s,i,a,c,l){this.Ct=e,this.Kt=r,this.Qt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new tf(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ot(t.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Wt===t&&this.un(r,s)}),(r=>{e((()=>{const s=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.cn(s)}))}))}un(e,t){const r=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{r((()=>this.listener.ct()))})),this.stream.Et((()=>{r((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((s=>{r((()=>this.cn(s)))})),this.stream.onMessage((s=>{r((()=>++this.jt==1?this.hn(s):this.onNext(s)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return L(Ml,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():(L(Ml,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ow extends nf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=LE(this.serializer,e),r=(function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?yt(a.readTime):z.min()})(e);return this.listener.Tn(t,r)}Pn(e){const t={};t.database=ma(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Rn(l)?{pipelineQuery:jE(i,l)}:Ld(l)?{documents:FE(i,l)}:{query:BE(i,l).Se},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=zd(i,a.resumeToken);const h=fa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=Yr(i,a.snapshotVersion.toTimestamp());const h=fa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=qE(this.serializer,e);r&&(t.labels=r),this.nn(t)}In(e){const t={};t.database=ma(this.serializer),t.removeTarget=e,this.nn(t)}}class aw extends nf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=UE(e.writeResults,e.commitTime),r=yt(e.commitTime);return this.listener.dn(r,t)}fn(){const e={};e.database=ma(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ME(this.serializer,r)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{}class uw extends cw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,r,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.nt(e,pa(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(C.UNKNOWN,i.toString())}))}_t(e,t,r,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection._t(e,pa(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function lw(n,e,t,r){return new uw(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="ComponentProvider",Ul=new Map;function dw(n,e,t,r,s){return new qy(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ef(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rf=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(rf,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.gn(r),this.yn=r=>t.writeSequenceNumber(r))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}no.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==fw)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,r)=>{t(e)}))}static reject(e){return new N(((t,r)=>{r(e)}))}static waitFor(e){return new N(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next((s=>s?N.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new N(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((f=>{a[h]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new N(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function mw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="LruGarbageCollector",gw=1048576;function $l([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class _w{constructor(e){this.Yn=e,this.buffer=new ge($l),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();$l(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){L(Bl,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fr(t)?L(Bl,"Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.nr(3e5)}))}}class Ew{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(no.wn);const r=new _w(t);return this.rr.forEachTarget(e,(s=>r.er(s.sequenceNumber))).next((()=>this.rr.sr(e,(s=>r.er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.rr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Fl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fl):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,c=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(h=Date.now(),Qn()<=Y.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function ww(n,e){return new Ew(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="firestore.googleapis.com",ql=!0;class jl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sf,this.ssl=ql}else this.host=e.host,this.ssl=e.ssl??ql;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=rf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gw)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(By("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ef(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new x(C.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const c of i)if(r[c]!==s[c])return!1;return!0})(this._customHeaders,e._customHeaders)}}let ks=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new QE;switch(r.type){case"firstParty":return new ZE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ul.get(t);r&&(L(hw,"Removing Datastore"),Ul.delete(t),r.terminate())})(this),Promise.resolve()}};function Tw(n,e,t,r={}){var h;n=Ue(n,ks);const s=Bn(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Pa(`https://${c}`),i.host!==sf&&i.host!==c&&it("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!xn(l,a)&&(n._setSettings(l),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Se.MOCK_USER;else{f=Ih(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Se(E)}n._authCredentials=new YE(new Zd(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ut(this.firestore,e,this._query)}}class ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(bs(t,ae._jsonSchema))return new ae(e,r||null,new F(Z.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:me("string",ae._jsonSchemaVersion),referencePath:me("string")};class en extends Ut{constructor(e,t,r){super(e,t,Ji(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new F(e))}withConverter(e){return new en(this.firestore,e,this._path)}}function sR(n,e,...t){if(n=te(n),$a("collection","path",e),n instanceof ks){const r=Z.fromString(e,...t);return ml(r),new en(n,null,r)}{if(!(n instanceof ae||n instanceof en))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return ml(r),new en(n.firestore,null,r)}}function iR(n,e){if(n=Ue(n,ks),$a("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ut(n,null,(function(r){return new qn(Z.emptyPath(),r)})(e))}function Iw(n,e,...t){if(n=te(n),arguments.length===1&&(e=Ba.newId()),$a("doc","path",e),n instanceof ks){const r=Z.fromString(e,...t);return pl(r),new ae(n,null,new F(r))}{if(!(n instanceof ae||n instanceof en))throw new x(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return pl(r),new ae(n.firestore,n instanceof en?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bs(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new qe(e.vectorValues);throw new x(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:me("string",qe._jsonSchemaVersion),vectorValues:me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=/^__.*__$/;class Aw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cs(e,this.data,t,this.fieldTransforms)}}class of{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new _n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function af(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{dataSource:n})}}class Ja{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ja({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Di(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(af(this.dataSource)&&vw.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Rw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zi(e)}createContext(e,t,r,s=!1){return new Ja({dataSource:e,methodName:t,targetDoc:r,path:Je.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ro(n){const e=n._freezeSettings(),t=Zi(n._databaseId);return new Rw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function cf(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Za("Data must be an object, but it was:",a,r);const c=uf(r,a);let l,h;if(i.merge)l=new Ke(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const E=ln(e,m,t);if(!a.contains(E))throw new x(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);ff(f,E)||f.push(E)}l=new Ke(f),h=a.fieldTransforms.filter((m=>l.covers(m.field)))}else l=null,h=a.fieldTransforms;return new Aw(new Me(c),l,h)}class so extends to{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof so}}class Xa extends to{_toFieldTransform(e){return new Yy(e.path,new cs)}isEqual(e){return e instanceof Xa}}function Pw(n,e,t,r){const s=n.createContext(1,e,t);Za("Data must be an object, but it was:",s,r);const i=[],a=Me.empty();gn(r,((l,h)=>{const f=df(e,l,t);h=te(h);const m=s.childContextForFieldPath(f);if(h instanceof so)i.push(f);else{const E=un(h,m);E!=null&&(i.push(f),a.set(f,E))}}));const c=new Ke(i);return new of(a,c,s.fieldTransforms)}function bw(n,e,t,r,s,i){const a=n.createContext(1,e,t),c=[ln(e,r,t)],l=[s];if(i.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(ln(e,i[E])),l.push(i[E+1]);const h=[],f=Me.empty();for(let E=c.length-1;E>=0;--E)if(!ff(h,c[E])){const b=c[E];let V=l[E];V=te(V);const M=a.childContextForFieldPath(b);if(V instanceof so)h.push(b);else{const D=un(V,M);D!=null&&(h.push(b),f.set(b,D))}}const m=new Ke(h);return new of(f,m,a.fieldTransforms)}function Sw(n,e,t,r=!1){return un(t,n.createContext(r?4:3,e))}function un(n,e,t){if(hf(n=te(n)))return Za("Unsupported field value:",e,n),uf(n,e);if(n instanceof to)return(function(s,i){if(!af(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const a=[];let c=0;for(const l of s){let h=un(l,i.childContextForArray(c));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),c++}return{arrayValue:{values:a}}})(n,e)}return(function(s,i,a){if((s=te(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return za(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=ee.fromDate(s);return{timestampValue:Yr(i.serializer,c)}}if(s instanceof ee){const c=new ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yr(i.serializer,c)}}if(lf(s)){const c=ee.fromInstant(s),l=new ee(c.seconds,1e3*Math.floor(c.nanoseconds/1e3));return{timestampValue:Yr(i.serializer,l)}}if(s instanceof Et)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ze)return{bytesValue:zd(i.serializer,s._byteString)};if(s instanceof ae){const c=i.databaseId,l=s.firestore._databaseId;if(!l.isEqual(c))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Ya(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof qe)return(function(l,h){const f=l instanceof qe?l.toArray():l;return{mapValue:{fields:{[Ed]:{stringValue:wd},[os]:{arrayValue:{values:f.map((E=>{if(typeof E!="number")throw h.createError("VectorValues must only contain numeric values.");return Ki(h.serializer,E)}))}}}}}})(s,i);if(Jd(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Hi(s)}`)})(n,e)}function uf(n,e){const t={};return fd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gn(n,((r,s)=>{const i=un(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function lf(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function hf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Et||n instanceof Ze||n instanceof ae||n instanceof to||n instanceof qe||lf(n)||Jd(n))}function Za(n,e,t){if(!hf(t)||!Ps(t)){const r=Hi(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function ln(n,e,t){if((e=te(e))instanceof eo)return e._internalPath;if(typeof e=="string")return df(n,e);throw Di("Field path arguments must be of type string or ",n,!1,void 0,t)}const Cw=new RegExp("[~\\*/\\[\\]]");function df(n,e,t){if(e.search(Cw)>=0)throw Di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new eo(...e.split("."))._internalPath}catch{throw Di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Di(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new x(C.INVALID_ARGUMENT,c+n+l)}function ff(n,e){return n.some((t=>t.isEqual(e)))}function pf(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=Me.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let c;i.nestedOptions&&Ps(a)?c={mapValue:{fields:new Ne(i.nestedOptions).getOptionsProto(t,a)}}:a&&(c=un(a,t)??void 0),c&&r.set(Je.fromServerFormat(i.serverName),c)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Fy(r,((a,c)=>[Je.fromServerFormat(c),a!==void 0?un(a,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Ps(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function oR(){return new Xa("serverTimestamp")}function Nw(n){return new qe(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n){let e;return n instanceof zn?n:(e=Ps(n)?Lw(n):n instanceof Array?Mw(n):mf(n,void 0),e)}function Qo(n){if(n instanceof zn)return n;if(n instanceof qe)return ms(n);if(Array.isArray(n))return ms(Nw(n));throw new Error("Unsupported value: "+typeof n)}function ec(n){return Hy(n)?gi(n):k(n)}class zn{constructor(){this._protoValueType="ProtoValue"}add(e){return new S("add",[this,k(e)],"add")}asBoolean(){if(this instanceof hn)return this;if(this instanceof mr)return new _f(this);if(this instanceof pr)return new Ow(this);if(this instanceof S)return new gf(this);throw new x("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new S("subtract",[this,k(e)],"subtract")}multiply(e){return new S("multiply",[this,k(e)],"multiply")}divide(e){return new S("divide",[this,k(e)],"divide")}mod(e){return new S("mod",[this,k(e)],"mod")}equal(e){return new S("equal",[this,k(e)],"equal").asBoolean()}notEqual(e){return new S("not_equal",[this,k(e)],"notEqual").asBoolean()}lessThan(e){return new S("less_than",[this,k(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new S("less_than_or_equal",[this,k(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new S("greater_than",[this,k(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new S("greater_than_or_equal",[this,k(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map((s=>k(s)));return new S("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new S("array_contains",[this,k(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new qr(e.map(k),"arrayContainsAll"):e;return new S("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new qr(e.map(k),"arrayContainsAny"):e;return new S("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new S("array_reverse",[this])}arrayLength(){return new S("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new qr(e.map(k),"equalAny"):e;return new S("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new qr(e.map(k),"notEqualAny"):e;return new S("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new S("exists",[this],"exists").asBoolean()}charLength(){return new S("char_length",[this],"charLength")}like(e){return new S("like",[this,k(e)],"like").asBoolean()}regexContains(e){return new S("regex_contains",[this,k(e)],"regexContains").asBoolean()}regexFind(e){return new S("regex_find",[this,k(e)],"regexFind")}regexFindAll(e){return new S("regex_find_all",[this,k(e)],"regexFindAll")}regexMatch(e){return new S("regex_match",[this,k(e)],"regexMatch").asBoolean()}stringContains(e){return new S("string_contains",[this,k(e)],"stringContains").asBoolean()}startsWith(e){return new S("starts_with",[this,k(e)],"startsWith").asBoolean()}endsWith(e){return new S("ends_with",[this,k(e)],"endsWith").asBoolean()}toLower(){return new S("to_lower",[this],"toLower")}toUpper(){return new S("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(k(e)),new S("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(k(e)),new S("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(k(e)),new S("rtrim",t,"rtrim")}type(){return new S("type",[this])}isType(e){return new S("is_type",[this,ms(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(k);return new S("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new S("string_index_of",[this,k(e)],"stringIndexOf")}stringRepeat(e){return new S("string_repeat",[this,k(e)],"stringRepeat")}stringReplaceAll(e,t){return new S("string_replace_all",[this,k(e),k(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new S("string_replace_one",[this,k(e),k(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(k);return new S("concat",[this,...r],"concat")}reverse(){return new S("reverse",[this],"reverse")}arrayFilter(e,t){return new S("array_filter",[this,k(e),t],"arrayFilter")}arrayTransform(e,t){return new S("array_transform",[this,k(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new S("array_transform",[this,k(e),k(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,k(e)];return t!==void 0&&r.push(k(t)),new S("array_slice",r,"arraySlice")}arrayFirst(){return new S("array_first",[this],"arrayFirst")}arrayFirstN(e){return new S("array_first_n",[this,k(e)],"arrayFirstN")}arrayLast(){return new S("array_last",[this],"arrayLast")}arrayLastN(e){return new S("array_last_n",[this,k(e)],"arrayLastN")}arrayMaximum(){return new S("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new S("maximum_n",[this,k(e)],"arrayMaximumN")}arrayMinimum(){return new S("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new S("minimum_n",[this,k(e)],"arrayMinimumN")}arrayIndexOf(e){return new S("array_index_of",[this,k(e),k("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new S("array_index_of",[this,k(e),k("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new S("array_index_of_all",[this,k(e)],"arrayIndexOfAll")}byteLength(){return new S("byte_length",[this],"byteLength")}ceil(){return new S("ceil",[this])}floor(){return new S("floor",[this])}abs(){return new S("abs",[this])}exp(){return new S("exp",[this])}mapGet(e){return new S("map_get",[this,ms(e)],"mapGet")}mapSet(e,t,...r){const s=[this,k(e),k(t),...r.map(k)];return new S("map_set",s,"mapSet")}mapKeys(){return new S("map_keys",[this],"mapKeys")}mapValues(){return new S("map_values",[this],"mapValues")}mapEntries(){return new S("map_entries",[this],"mapEntries")}getField(e){return new S("get_field",[this,k(e)],"get_field")}count(){return Ge._create("count",[this],"count")}sum(){return Ge._create("sum",[this],"sum")}average(){return Ge._create("average",[this],"average")}minimum(){return Ge._create("minimum",[this],"minimum")}maximum(){return Ge._create("maximum",[this],"maximum")}first(){return Ge._create("first",[this],"first")}last(){return Ge._create("last",[this],"last")}arrayAgg(){return Ge._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Ge._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Ge._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new S("maximum",[this,...r.map(k)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new S("minimum",[this,...r.map(k)],"minimum")}vectorLength(){return new S("vector_length",[this],"vectorLength")}cosineDistance(e){return new S("cosine_distance",[this,Qo(e)],"cosineDistance")}dotProduct(e){return new S("dot_product",[this,Qo(e)],"dotProduct")}euclideanDistance(e){return new S("euclidean_distance",[this,Qo(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new S("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new S("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new S("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new S("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new S("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new S("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new S("timestamp_add",[this,k(e),k(t)],"timestampAdd")}timestampSubtract(e,t){return new S("timestamp_subtract",[this,k(e),k(t)],"timestampSubtract")}timestampDiff(e,t){return new S("timestamp_diff",[this,ec(e),k(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,k(e)];return t&&r.push(k(t)),new S("timestamp_extract",r,"timestampExtract")}documentId(){return new S("document_id",[this],"documentId")}parent(){return new S("parent",[this],"parent")}substring(e,t){const r=k(e);return new S("substring",t===void 0?[this,r]:[this,r,k(t)],"substring")}arrayGet(e){return new S("array_get",[this,k(e)],"arrayGet")}isError(){return new S("is_error",[this],"isError").asBoolean()}ifError(e){const t=new S("if_error",[this,k(e)],"ifError");return e instanceof hn?t.asBoolean():t}isAbsent(){return new S("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new S("map_remove",[this,k(e)],"mapRemove")}mapMerge(e,...t){const r=k(e),s=t.map(k);return new S("map_merge",[this,r,...s],"mapMerge")}pow(e){return new S("pow",[this,k(e)])}trunc(e){return e===void 0?new S("trunc",[this]):new S("trunc",[this,k(e)],"trunc")}round(e){return e===void 0?new S("round",[this]):new S("round",[this,k(e)],"round")}collectionId(){return new S("collection_id",[this])}length(){return new S("length",[this])}ln(){return new S("ln",[this])}sqrt(){return new S("sqrt",[this])}stringReverse(){return new S("string_reverse",[this])}ifAbsent(e){return new S("if_absent",[this,k(e)],"ifAbsent")}ifNull(e){return new S("if_null",[this,k(e)],"ifNull")}coalesce(e,...t){return new S("coalesce",[this,k(e),...t.map(k)],"coalesce")}join(e){return new S("join",[this,k(e)],"join")}log10(){return new S("log10",[this])}arraySum(){return new S("sum",[this])}split(e){return new S("split",[this,k(e)])}timestampTruncate(e,t){const r=[this,k(e)];return t&&r.push(k(t)),new S("timestamp_trunc",r)}ascending(){return Uw(this)}descending(){return Fw(this)}as(e){return new Dw(this,e,"as")}}class Ge{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new Ge(e,t);return s._methodName=r,s}as(e){return new kw(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class kw{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Dw{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class qr extends zn{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class pr extends zn{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new S("geo_distance",[this,k(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function gi(n){return xw(n,"field")}function xw(n,e){return new pr(typeof n=="string"?ht===n?KE()._internalPath:ln("field",n):n._internalPath,e)}class mr extends zn{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new mr(e,void 0);return t._protoValue=e,t}_toProto(e){return U(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Vw(this._protoValue)||(this._protoValue=un(this.value,e))}}function ms(n,e){return mf(n,"constant")}function mf(n,e){const t=new mr(n,e);return typeof n=="boolean"?new _f(t):t}class S extends zn{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ne({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((r=>r._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class hn extends zn{get _methodName(){return this._expr._methodName}countIf(){return Ge._create("count_if",[this],"countIf")}not(){return new S("not",[this],"not").asBoolean()}conditional(e,t){return new S("conditional",[this,e,t],"conditional")}ifError(e){const t=k(e),r=new S("if_error",[this,t],"ifError");return t instanceof hn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class gf extends hn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class _f extends hn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Ow extends hn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Lw(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(ms(r)),t.push(k(s))}return new S("map",t,"map")}function Mw(n){return(function(t,r){return new S("array",t.map((s=>k(s))),r)})(n,"array")}function Uw(n){return new yf(ec(n),"ascending","ascending")}function Fw(n){return new yf(ec(n),"descending","descending")}class yf{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Xd(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Ef extends Xe{get _name(){return"add_fields"}get _optionsUtil(){return new Ne({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ps(e,this.fields)]}}_readUserData(e){super._readUserData(e),dn(this.fields,e)}}class wf extends Xe{get _name(){return"aggregate"}get _optionsUtil(){return new Ne({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ps(e,this.accumulators),ps(e,this.groups)]}}_readUserData(e){super._readUserData(e),dn(this.groups,e),dn(this.accumulators,e)}}class Tf extends Xe{get _name(){return"distinct"}get _optionsUtil(){return new Ne({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ps(e,this.groups)]}}_readUserData(e){super._readUserData(e),dn(this.groups,e)}}class io extends Xe{get _name(){return"collection"}get _optionsUtil(){return new Ne({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class oo extends Xe{get _name(){return"collection_group"}get _optionsUtil(){return new Ne({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class tc extends Xe{get _name(){return"database"}get _optionsUtil(){return new Ne({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class nc extends Xe{get _name(){return"documents"}get _optionsUtil(){return new Ne({})}constructor(e,t){if(super(t),!e||e.length===0)throw new x(C.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(r);if(s.size!==r.length)throw new x(C.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=r,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class ao extends Xe{get _name(){return"where"}get _optionsUtil(){return new Ne({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),dn(this.condition,e)}}class Un extends Xe{get _name(){return"limit"}get _optionsUtil(){return new Ne({})}constructor(e,t){U(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[za(e,this.limit)]}}}class zl extends Xe{get _name(){return"offset"}get _optionsUtil(){return new Ne({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[za(e,this.offset)]}}}class Bw extends Xe{get _name(){return"select"}get _optionsUtil(){return new Ne({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ps(e,this.selections)]}}_readUserData(e){super._readUserData(e),dn(this.selections,e)}}class St extends Xe{get _name(){return"sort"}get _optionsUtil(){return new Ne({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),dn(this.orderings,e)}}class rc extends Xe{get _name(){return"replace_with"}get _optionsUtil(){return new Ne({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Xd(rc.Ir)]}}_readUserData(e){super._readUserData(e),dn(this.map,e)}}rc.Ir="full_replace";function dn(n,e){return pf(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Vr(e,t){const r=this.userDataReader.createContext(3,e);return pf(t)?t._readUserData(r):Array.isArray(t)?t.forEach((s=>s._readUserData(r))):t.forEach((s=>s._readUserData(r))),t}where(e){const t=this.stages.map((r=>r));return this.Vr("where",e),t.push(new ao(e,{})),new Jr(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((r=>r));return t.push(new Un(e,{})),new Jr(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map((s=>s));return"orderings"in e?r.push(new St(this.Vr("sort",e.orderings),{})):r.push(new St(this.Vr("sort",[e,...t]),{})),new Jr(this._db,this.userDataReader,this._userDataWriter,r)}dr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class Oe{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return co(this)}getPipelineCollectionGroup(){return sc(this)}getPipelineCollectionId(){return $w(this)}getPipelineDocuments(){return _a(this)}getPipelineFlavor(){return(function(t){let r="exact";return t.stages.forEach(((s,i)=>{s._name!==Tf.name&&s._name!==wf.name||(r="keyless"),s._name===Bw.name&&r==="exact"&&(r="augmented"),s._name===Ef.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")})),r})(this)}getPipelineSourceType(){return tn(this)}}function tn(n){const e=n.stages[0];return e instanceof io||e instanceof oo||e instanceof tc||e instanceof nc?e._name:"unknown"}function co(n){if(tn(n)==="collection")return n.stages[0].hr}function sc(n){if(tn(n)==="collection_group")return n.stages[0].collectionId}function $w(n){switch(tn(n)){case"collection":return Z.fromString(co(n)).lastSegment();case"collection_group":return sc(n);default:return}}function _a(n){if(tn(n)==="documents")return n.stages[0].Tr}class w{constructor(e,t){this.type=e,this.value=t}static mr(){return new w("ERROR",void 0)}static pr(){return new w("UNSET",void 0)}static gr(){return new w("NULL",or)}static newValue(e){return Qe(e)?new w("NULL",or):(function(r){return!!r&&"booleanValue"in r})(e)?new w("BOOLEAN",e):dt(e)?new w("INT",e):bn(e)?new w("DOUBLE",e):(function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue})(e)?new w("TIMESTAMP",e):(function(r){return!!r&&"stringValue"in r})(e)?new w("STRING",e):(function(r){return!!r&&"bytesValue"in r})(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):cr(e)?new w("ARRAY",e):bi(e)?new w("VECTOR",e):Cn(e)?new w("MAP",e):new w("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Xr(n){if(!n.yr())return n.value}function If(n){return n instanceof hn?n._expr:n}function q(n){if((n=If(n))instanceof pr)return new qw(n);if(n instanceof mr)return new jw(n);if(n instanceof qr)return new zw(n);if(n instanceof S){if(n.name==="add")return new Gw(n);if(n.name==="subtract")return new Kw(n);if(n.name==="multiply")return new Qw(n);if(n.name==="divide")return new Yw(n);if(n.name==="mod")return new Jw(n);if(n.name==="and")return new Xw(n);if(n.name==="equal")return new lT(n);if(n.name==="not_equal")return new hT(n);if(n.name==="less_than")return new dT(n);if(n.name==="less_than_or_equal")return new fT(n);if(n.name==="greater_than")return new pT(n);if(n.name==="greater_than_or_equal")return new mT(n);if(n.name==="array_concat")return new gT(n);if(n.name==="array_reverse")return new _T(n);if(n.name==="array_contains")return new yT(n);if(n.name==="array_contains_all")return new ET(n);if(n.name==="array_contains_any")return new wT(n);if(n.name==="array_length")return new TT(n);if(n.name==="array_element")return new IT(n);if(n.name==="equal_any")return new vf(n);if(n.name==="not_equal_any")return new eT(n);if(n.name==="is_nan")return new tT(n);if(n.name==="is_not_nan")return new nT(n);if(n.name==="is_null")return new rT(n);if(n.name==="is_not_null")return new sT(n);if(n.name==="is_error")return new iT(n);if(n.name==="exists")return new oT(n);if(n.name==="not")return new uo(n);if(n.name==="or")return new Zw(n);if(n.name==="xor")return new ic(n);if(n.name==="conditional")return new aT(n);if(n.name==="maximum")return new cT(n);if(n.name==="minimum")return new uT(n);if(n.name==="reverse")return new vT(n);if(n.name==="replace_first")return new AT(n);if(n.name==="replace_all")return new RT(n);if(n.name==="char_length")return new PT(n);if(n.name==="byte_length")return new bT(n);if(n.name==="like")return new ST(n);if(n.name==="regex_contains")return new CT(n);if(n.name==="regex_match")return new VT(n);if(n.name==="string_contains")return new NT(n);if(n.name==="starts_with")return new kT(n);if(n.name==="ends_with")return new DT(n);if(n.name==="to_lower")return new xT(n);if(n.name==="to_upper")return new OT(n);if(n.name==="trim")return new LT(n);if(n.name==="string_concat")return new MT(n);if(n.name==="map_get")return new UT(n);if(n.name==="cosine_distance")return new FT(n);if(n.name==="dot_product")return new BT(n);if(n.name==="euclidean_distance")return new $T(n);if(n.name==="vector_length")return new qT(n);if(n.name==="unix_micros_to_timestamp")return new GT(n);if(n.name==="timestamp_to_unix_micros")return new YT(n);if(n.name==="unix_millis_to_timestamp")return new KT(n);if(n.name==="timestamp_to_unix_millis")return new JT(n);if(n.name==="unix_seconds_to_timestamp")return new QT(n);if(n.name==="timestamp_to_unix_seconds")return new XT(n);if(n.name==="timestamp_add")return new ZT(n);if(n.name==="timestamp_subtract")return new eI(n)}throw new Error(`Unknown Expr : ${n}`)}class qw{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===ht)return w.newValue({referenceValue:ki(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:mi(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:mi(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Wi(r)?w.newValue((function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:mi(i.serializer,z.fromTimestamp(ir(a)))};if(i.serverTimestampBehavior==="previous"){const c=Ss(a);if(c)return c}return{nullValue:"NULL_VALUE"}})(e,r)):w.newValue(r):w.pr()}}class jw{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class zw{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.cr.map((s=>q(s).evaluate(e,t)));return r.some((s=>s.yr()))?w.mr():w.newValue({arrayValue:{values:r.map((s=>s.value))}})}}function Re(n){return bn(n)?Number(n.doubleValue):Number(n.integerValue)}function wt(n){return BigInt(n.integerValue)}const Hw=BigInt("0x7fffffffffffffff"),Ww=-BigInt("0x8000000000000000");class Ds{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length>=2,24778);const r=q(this.expr.params[0]).evaluate(e,t),s=q(this.expr.params[1]).evaluate(e,t);let i=this.br(r,s);for(const a of this.expr.params.slice(2)){const c=q(a).evaluate(e,t);i=this.br(i,c)}return i}br(e,t){if(e.yr()||t.yr())return w.mr();if(e.wr()||t.wr())return w.gr();const r=e.value,s=t.value;if(!bn(r)&&!dt(r)||!bn(s)&&!dt(s))return w.mr();if(bn(r)||bn(s)){const i=this.Sr(r,s);return i?w.newValue(i):w.mr()}if(dt(r)&&dt(s)){const i=this.vr(r,s);return i===void 0?w.mr():typeof i=="number"?w.newValue({doubleValue:i}):i<Ww||i>Hw?w.mr():w.newValue({integerValue:`${i}`})}return w.mr()}}function Lt(n,e){return ye(n)!==ye(e)?"TYPE_MISMATCH":He(n)||He(e)?"NOT_EQ":Qe(n)&&Qe(e)?"EQ":Qe(n)||Qe(e)?"NULL":cr(n)&&cr(e)?(function(r,s){var a,c,l;if(((a=r.values)==null?void 0:a.length)!==((c=s.values)==null?void 0:c.length))return"NOT_EQ";let i=!1;for(let h=0;h<(((l=r.values)==null?void 0:l.length)??0);h++){const f=r.values[h],m=s.values[h];switch(Lt(f,m)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:$(44609,{Dr:f,Cr:m})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):bi(n)&&bi(e)||Cn(n)&&Cn(e)?(function(r,s){const i=r.fields||{},a=s.fields||{};if(Ri(i)!==Ri(a))return"NOT_EQ";let c=!1;for(const l in i)if(i.hasOwnProperty(l)){if(a[l]===void 0)return"NOT_EQ";switch(Lt(i[l],a[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(r,s){return nt(r,s,{u:!1,i:!0,o:!0})})(n,e)?"EQ":"NOT_EQ"}class Gw extends Ds{vr(e,t){return wt(e)+wt(t)}Sr(e,t){return{doubleValue:Re(e)+Re(t)}}}class Kw extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){return wt(e)-wt(t)}Sr(e,t){return{doubleValue:Re(e)-Re(t)}}}class Qw extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){return wt(e)*wt(t)}Sr(e,t){return{doubleValue:Re(e)*Re(t)}}}class Yw extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){const r=wt(t);if(r!==BigInt(0))return wt(e)/r}Sr(e,t){const r=Re(t);return r===0?{doubleValue:is(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Re(e)/r}}}class Jw extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){const r=wt(t);if(r!==BigInt(0))return wt(e)%r}Sr(e,t){const r=Re(t);if(r!==0)return{doubleValue:Re(e)%r}}}class Xw{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=q(a).evaluate(e,t);switch(c.type){case"BOOLEAN":if(!((i=c.value)!=null&&i.booleanValue))return w.newValue(ve);break;case"NULL":s=!0;break;default:r=!0}}return r?w.mr():s?w.gr():w.newValue(je)}}class uo{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===1,9634);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return w.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return w.gr();default:return w.mr()}}}class Zw{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=q(a).evaluate(e,t);switch(c.type){case"BOOLEAN":if((i=c.value)!=null&&i.booleanValue)return w.newValue(je);break;case"NULL":s=!0;break;default:r=!0}}return r?w.mr():s?w.gr():w.newValue(ve)}}class ic{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const c=q(a).evaluate(e,t);switch(c.type){case"BOOLEAN":r=ic.xor(r,!!((i=c.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return w.mr()}}return s?w.gr():w.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class vf{constructor(e){this.expr=e}evaluate(e,t){var a,c;U(this.expr.params.length===2,55094);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return w.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();for(const l of((c=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:c.values)??[])switch(Qe(s.value)&&Qe(l)?"EQ":Lt(s.value,l)){case"EQ":return w.newValue(je);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(44608,{value:s.value,candidate:l})}return r?w.gr():w.newValue(ve)}}class eT{constructor(e){this.expr=e}evaluate(e,t){return new uo(new S("not",[new S("equal_any",this.expr.params)])).evaluate(e,t)}}class tT{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,23322);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return w.newValue(ve);case"DOUBLE":return w.newValue({booleanValue:isNaN(Re(r.value))});case"NULL":return w.gr();default:return w.mr()}}}class nT{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,50406),new uo(new S("not",[new S("is_nan",this.expr.params)])).evaluate(e,t)}}class rT{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,23123),q(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(je);case"UNSET":case"ERROR":return w.mr();default:return w.newValue(ve)}}}class sT{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,23167),new uo(new S("not",[new S("is_null",this.expr.params)])).evaluate(e,t)}}class iT{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,5228),q(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(je):w.newValue(ve)}}class oT{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,6877),q(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.mr();case"UNSET":return w.newValue(ve);default:return w.newValue(je)}}}class aT{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===3,11706);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?q(this.expr.params[1]).evaluate(e,t):q(this.expr.params[2]).evaluate(e,t);case"NULL":return q(this.expr.params[2]).evaluate(e,t);default:return w.mr()}}}class cT{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>q(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ze(i.value,s.value)>0?i:s}return s===void 0?w.gr():s}}class uT{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>q(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ze(i.value,s.value)<0?i:s}return s===void 0?w.gr():s}}class gr{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return w.mr()}const s=q(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return w.mr()}return this.Fr(r,s)}}class lT extends gr{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return w.newValue(je);if(e.wr()||t.wr()||He(e.value)||He(t.value)||ye(e.value)!==ye(t.value))return w.newValue(ve);switch(Lt(e.value,t.value)){case"EQ":return w.newValue(je);case"NOT_EQ":return w.newValue(ve);case"NULL":return w.gr();default:$(44615,{left:e,right:t})}}}class hT extends gr{constructor(e){super(e),this.expr=e}Fr(e,t){switch(Lt(e.value,t.value)){case"EQ":return w.newValue(ve);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(je);case"NULL":return w.gr();default:$(44614,{left:e,right:t})}}}class dT extends gr{constructor(e){super(e),this.expr=e}Fr(e,t){return ye(e.value)!==ye(t.value)||He(e.value)||He(t.value)?w.newValue(ve):w.newValue({booleanValue:ze(e.value,t.value)<0})}}class fT extends gr{constructor(e){super(e),this.expr=e}Fr(e,t){return ye(e.value)!==ye(t.value)||He(e.value)||He(t.value)?w.newValue(ve):Lt(e.value,t.value)==="EQ"?w.newValue(je):w.newValue({booleanValue:ze(e.value,t.value)<0})}}class pT extends gr{constructor(e){super(e),this.expr=e}Fr(e,t){return ye(e.value)!==ye(t.value)||He(e.value)||He(t.value)?w.newValue(ve):w.newValue({booleanValue:ze(e.value,t.value)>0})}}class mT extends gr{constructor(e){super(e),this.expr=e}Fr(e,t){return ye(e.value)!==ye(t.value)||He(e.value)||He(t.value)?w.newValue(ve):Lt(e.value,t.value)==="EQ"?w.newValue(je):w.newValue({booleanValue:ze(e.value,t.value)>0})}}class gT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _T{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===1,216);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.mr()}}}class yT{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===2,52884),new vf(new S("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class ET{constructor(e){this.expr=e}evaluate(e,t){var l,h,f,m;U(this.expr.params.length===2,1392);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const a=((h=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:h.values)??[],c=((m=(f=s.value)==null?void 0:f.arrayValue)==null?void 0:m.values)??[];for(const E of a){let b=!1;r=!1;for(const V of c){switch(Qe(E)&&Qe(V)?"EQ":Lt(E,V)){case"EQ":b=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(44613,{value:V,search:E})}if(b)break}if(!b)return w.newValue(ve)}return w.newValue(je)}}class wT{constructor(e){this.expr=e}evaluate(e,t){var l,h,f,m;U(this.expr.params.length===2,2680);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const a=((h=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:h.values)??[],c=((m=(f=s.value)==null?void 0:f.arrayValue)==null?void 0:m.values)??[];for(const E of c)for(const b of a)switch(Qe(E)&&Qe(b)?"EQ":Lt(E,b)){case"EQ":return w.newValue(je);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:$(60403,{value:E,search:b})}return r?w.gr():w.newValue(ve)}}class TT{constructor(e){this.expr=e}evaluate(e,t){var s,i,a;U(this.expr.params.length===1,38605);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"ARRAY":return w.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return w.mr()}}}class IT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class vT{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,1508);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const c=_e.fromBase64String(a).toUint8Array();return c.reverse(),w.newValue({bytesValue:_e.fromUint8Array(c).toBase64()})}return w.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,c=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),l=Array.from(c,(h=>h.segment)).reverse();return w.newValue({stringValue:l.join("")})}default:return w.mr()}}}class AT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class RT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class PT{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,19400);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return w.gr();case"STRING":{const s=(function(a){let c=0;for(let l=0;l<a.length;l++){const h=a.codePointAt(l);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const f=a.codePointAt(l+1);f!==void 0&&f>=56320&&f<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(h<=1114111))return;c+=1,l++}}return c})(r.value.stringValue);return s===void 0?w.mr():w.newValue({integerValue:s})}default:return w.mr()}}}class bT{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,8486);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?w.newValue({integerValue:_e.fromBase64String(a).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=(function(l){let h=0;for(let f=0;f<l.length;f++){const m=l.codePointAt(f);if(m===void 0)return;if(m>=55296&&m<=57343){if(!(m<=56319))return;{const E=l.codePointAt(f+1);if(E===void 0||!(E>=56320&&E<=57343))return;h+=4,f++}}else if(m<=127)h+=1;else if(m<=2047)h+=2;else if(m<=65535)h+=3;else{if(!(m<=1114111))return;h+=4,f++}}return h})((i=r.value)==null?void 0:i.stringValue);return a===void 0?w.mr():w.newValue({integerValue:a})}case"NULL":return w.gr();default:return w.mr()}}}class _r{constructor(e){this.expr=e}evaluate(e,t){var a,c;U(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return w.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return w.mr()}return r?w.gr():this.Or((a=s.value)==null?void 0:a.stringValue,(c=i.value)==null?void 0:c.stringValue)}}class ST extends _r{Or(e,t){try{const r=(function(a){let c="";for(let l=0;l<a.length;l++){const h=a.charAt(l);switch(h){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+h;break;default:c+=h}}return"^"+c+"$"})(t),s=Ra.compile(r);return w.newValue({booleanValue:s.matches(e)})}catch(r){return it(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),w.mr()}}}class CT extends _r{Or(e,t){try{const r=Ra.compile(t);return w.newValue({booleanValue:r.test(e)})}catch{return it(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.mr()}}}class VT extends _r{Or(e,t){try{return w.newValue({booleanValue:Ra.compile(t).matches(e)})}catch{return it(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.mr()}}}class NT extends _r{Or(e,t){return w.newValue({booleanValue:e.includes(t)})}}class kT extends _r{Or(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class DT extends _r{Or(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class xT{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,29079);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.gr();default:return w.mr()}}}class OT{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,60487);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.gr();default:return w.mr()}}}class LT{constructor(e){this.expr=e}evaluate(e,t){var s,i;U(this.expr.params.length===1,28544);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return w.gr();default:return w.mr()}}}class MT{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((a=>q(a).evaluate(e,t)));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return w.mr()}return i?w.gr():w.newValue({stringValue:s})}}class UT{constructor(e){this.expr=e}evaluate(e,t){var a,c,l,h;U(this.expr.params.length===2,4483);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return w.pr();case"MAP":break;default:return w.mr()}const s=q(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return w.mr();const i=(h=(c=(a=r.value)==null?void 0:a.mapValue)==null?void 0:c.fields)==null?void 0:h[(l=s.value)==null?void 0:l.stringValue];return i===void 0?w.pr():w.newValue(i)}}class oc{constructor(e){this.expr=e}evaluate(e,t){var h,f;U(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.mr()}const i=q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const a=ua(s.value),c=ua(i.value);if(a===void 0||c===void 0||((h=a.values)==null?void 0:h.length)!==((f=c.values)==null?void 0:f.length))return w.mr();const l=this.Mr(a,c);return l===void 0||isNaN(l)?w.mr():w.newValue({doubleValue:l})}}class FT extends oc{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,a=0,c=0;for(let h=0;h<r.length;h++){if(!an(r[h])||!an(s[h]))return;const f=Re(r[h]),m=Re(s[h]);i+=f*m,a+=f*f,c+=m*m}const l=Math.sqrt(a)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class BT extends oc{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!an(r[a])||!an(s[a]))return;i+=Re(r[a])*Re(s[a])}return i}}class $T extends oc{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!an(r[a])||!an(s[a]))return;const c=Re(r[a]),l=Re(s[a]);i+=Math.pow(c-l,2)}return Math.sqrt(i)}}class qT{constructor(e){this.expr=e}evaluate(e,t){var s;U(this.expr.params.length===1,39044);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=ua(r.value);return w.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return w.gr();default:return w.mr()}}}const gs=BigInt(-62135596800),_s=BigInt(253402300799),xi=BigInt(1e3),nn=BigInt(1e6),jT=gs*xi,zT=_s*xi+BigInt(999),HT=gs*nn,WT=_s*nn+BigInt(999999);function ac(n){return n>=HT&&n<=WT}function Af(n){return n>=gs&&n<=_s}function ys(n,e){const t=BigInt(n);return!(t<gs||t>_s)&&!(e<0||e>=1e9)&&(t!==gs||e===0)&&!(t===_s&&e>999999999)}function Rf(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function cc(n){return BigInt(n.seconds)*nn+BigInt(Math.trunc(n.nanoseconds/1e3))}class uc{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return w.gr();default:return w.mr()}}}class GT extends uc{toTimestamp(e){if(!ac(e))return w.mr();let t=Number(e/nn),r=Number(e%nn*BigInt(1e3));const s=Rf(t,r);return t=s.seconds,r=s.nanos,ys(t,r)?w.newValue({timestampValue:{seconds:t,nanos:r}}):w.mr()}}class KT extends uc{toTimestamp(e){if(!(function(a){return a>=jT&&a<=zT})(e))return w.mr();let t=Number(e/xi),r=Number(e%xi*BigInt(1e6));const s=Rf(t,r);return t=s.seconds,r=s.nanos,ys(t,r)?w.newValue({timestampValue:{seconds:t,nanos:r}}):w.mr()}}class QT extends uc{toTimestamp(e){if(!Af(e))return w.mr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class lc{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return w.gr();default:return w.mr()}const s=Qa(r.value.timestampValue);return ys(s.seconds,s.nanoseconds)?this.Nr(s):w.mr()}}class YT extends lc{Nr(e){const t=cc(e);return ac(t)?w.newValue({integerValue:`${t.toString()}`}):w.mr()}}class JT extends lc{Nr(e){const t=cc(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?w.newValue({integerValue:r.toString()}):w.newValue({integerValue:(r-BigInt(1)).toString()})}}class XT extends lc{Nr(e){const t=BigInt(e.seconds);return Af(t)?w.newValue({integerValue:t.toString()}):w.mr()}}class Pf{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=q(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return w.mr()}const i=q(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=(function(G){switch(G){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),a===void 0)return w.mr();break;case"NULL":r=!0;break;default:return w.mr()}const c=q(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return w.mr()}if(r)return w.gr();const l=BigInt(c.value.integerValue);let h;try{switch(a){case"microsecond":h=l;break;case"millisecond":h=l*BigInt(1e3);break;case"second":h=l*BigInt(1e6);break;case"minute":h=l*BigInt(6e7);break;case"hour":h=l*BigInt(36e8);break;case"day":h=l*BigInt(864e8);break;default:return w.mr()}if(a!=="microsecond"&&l!==BigInt(0)&&h/l!==BigInt(this.Lr(a)))return w.mr()}catch(j){return it(`Error during timestamp arithmetic: ${j}`),w.mr()}const f=Qa(s.value.timestampValue);if(!ys(f.seconds,f.nanoseconds))return w.mr();const m=cc(f),E=this.Br(m,h);if(!ac(E))return w.mr();const b=Number(E/nn),V=E%nn,M=Number((V<0?V+nn:V)*BigInt(1e3)),D=V<0?b-1:b;return ys(D,M)?w.newValue({timestampValue:{seconds:D,nanos:M}}):w.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class ZT extends Pf{Br(e,t){return e+t}}class eI extends Pf{Br(e,t){return e-t}}function Es(n){if((n=If(n))instanceof pr)return`fld(${n.fieldName})`;if(n instanceof mr)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof ae?`ref(${t.path})`:t instanceof qe?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof S)return`fn(${n.name},[${n.params.map(Es).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(Es).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function tI(n){if(n instanceof Ef)return`${n._name}(${ri(n.fields)})`;if(n instanceof wf){let e=`${n._name}(${ri(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${ri(n.groups)})`),e}if(n instanceof Tf)return`${n._name}(${ri(n.groups)})`;if(n instanceof io)return`${n._name}(${n.hr})`;if(n instanceof oo)return`${n._name}(${n.collectionId})`;if(n instanceof tc)return`${n._name}()`;if(n instanceof nc)return`${n._name}(${n.Tr.sort()})`;if(n instanceof ao)return`${n._name}(${Es(n.condition)})`;if(n instanceof Un)return`${n._name}(${n.limit})`;if(n instanceof St)return`${n._name}(${(function(t){return t.map((r=>`${Es(r.expr)}${r.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function ri(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Es(t)}`)).join(",")}`}function Nt(n){return n.stages.map((e=>tI(e))).join("|")}function bf(n,e){return Nt(n)===Nt(e)}function we(n){return n instanceof Oe}function Hl(n){return we(n)?Nt(n):Kr(n)}function Sf(n){return we(n)?Nt(n):(function(t){return`${xd(_t(t))}|lt:${t.limitType}`})(n)}function lo(n,e){return n instanceof Oe&&e instanceof Oe?bf(n,e):!(n instanceof Oe&&!(e instanceof Oe)||!(n instanceof Oe)&&e instanceof Oe)&&EE(n,e)}function Cf(n){return Rn(n)?Nt(n):xd(n)}function Vf(n,e){return n instanceof Oe&&e instanceof Oe?bf(n,e):!(n instanceof Oe&&!(e instanceof Oe)||!(n instanceof Oe)&&e instanceof Oe)&&Od(n,e)}function nI(n,e){const t=(function(s){let i=!1;const a=[];for(const c of s)if(c instanceof St)if(i=!0,c.orderings.some((l=>l.expr instanceof pr&&l.expr.fieldName===ht)))a.push(c);else{const l=c.orderings.map((h=>h));l.push(gi(ht).ascending()),a.push(new St(l,{}))}else c instanceof Un&&(i||(a.push(new St([gi(ht).ascending()],{})),i=!0)),a.push(c);return i||a.push(new St([gi(ht).ascending()],{})),a})(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(r)))}return new Oe(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$d();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Pd(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,((t,r)=>Il(t,r)))&&sr(this.baseMutations,e.baseMutations,((t,r)=>Il(t,r)))}}class hc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){U(e.mutations.length===r.length,58842,{Ur:e.mutations.length,kr:r.length});let s=(function(){return AE})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new hc(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="";function sI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wl(e)),e=iI(n.get(t),e);return Wl(e)}function iI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Nf:t+="";break;default:t+=i}}return t}function Wl(n){return n+Nf+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,r,s,i=z.min(),a=z.min(),c=_e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.$r=e}}function cI(n){const e=$E({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?da(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.Zi=new lI}addToCollectionParentIndex(e,t){return this.Zi.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(cn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class lI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ge(Z.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ge(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new fn(0)}static bs(){return new fn(-1)}}// Copyright 2024 Google LLC* @license
function kf(n,e){var r;let t=e;for(const s of n.stages)t=dI({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function ho(n,e){return kf(n,[e]).length>0}function hI(n,e){return we(n)?ho(n,e):Xi(n,e)}function dI(n,e,t){if(e instanceof io)return(function(s,i,a){return a.filter((c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof ao)return(function(s,i,a){return a.filter((c=>{const l=Xr(q(i.condition).evaluate(s,c));return l!==void 0&&nt(l,je)}))})(n,e,t);if(e instanceof oo)return(function(s,i,a){return a.filter((c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof tc)return(function(s,i,a){return a.filter((c=>c.isFoundDocument()))})(0,0,t);if(e instanceof nc)return(function(s,i,a){return a.filter((c=>c.isFoundDocument()&&i.Pr.has(c.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Un)return(function(s,i,a){return a.slice(0,i.limit)})(0,e,t);if(e instanceof St)return(function(s,i,a){const c=i.orderings.map((l=>({Ms:q(l.expr),direction:l.direction})));return[...a].sort(((l,h)=>{for(const{Ms:f,direction:m}of c){const E=Xr(f.evaluate(s,l)),b=Xr(f.evaluate(s,h)),V=ze(E??or,b??or);if(V!==0)return m==="ascending"?V:-V}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function ya(n){const e=(function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof St)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,r)=>{for(const s of e){const i=Xr(q(s.expr).evaluate({serializer:n.serializer},t)),a=Xr(q(s.expr).evaluate({serializer:n.serializer},r)),c=ze(i||or,a||or);if(c!==0)return s.direction==="ascending"?c:-c}return 0}}function Yo(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Un)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.changes=new jn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Wr(r.mutation,s,Ke.empty(),ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,K()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=K()){const s=Jt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Jn();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Jt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,K())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=$e();const a=Qr(),c=(function(){return Qr()})();return t.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof _n)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Wr(f.mutation,h,f.mutation.getFieldMask(),ee.now())):a.set(h.key,Ke.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>c.set(h,new pI(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Qr();let s=new ie(((a,c)=>a-c)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||Ke.empty();f=c.applyToLocalView(h,f),r.set(l,f);const m=(s.get(c.batchId)||K()).add(l);s=s.insert(c.batchId,m)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=$d();f.forEach((E=>{if(!i.has(E)){const b=Pd(t.get(E),r.get(E));b!==null&&m.set(E,b),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return we(t)?this.getDocumentsMatchingPipeline(e,t,r,s):gE(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Md(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(Jt());let c=fs,l=i;return a.next((h=>N.forEach(h,((f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next((E=>{l=l.insert(f,E)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,K()))).next((f=>({batchId:c,changes:Bd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next((r=>{let s=Jn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Jn();return this.indexManager.getCollectionParents(e,i).next((c=>N.forEach(c,(l=>{const h=(function(m,E){return new qn(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((m,E)=>{a=a.insert(m,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>this.retrieveMatchingLocalDocuments(i,a,(c=>Xi(t,c)))))}getDocumentsMatchingPipeline(e,t,r,s){if(tn(t)==="collection_group"){const i=sc(t);let a=Jn();return this.indexManager.getCollectionParents(e,i).next((c=>N.forEach(c,(l=>{const h=(function(m,E){const b=m.stages.map((V=>V instanceof oo?new io(E.canonicalString(),{}):V));return new Oe(m.serializer,b)})(t,l.child(i));return this.getDocumentsMatchingPipeline(e,h,r,s).next((f=>{f.forEach(((m,E)=>{a=a.insert(m,E)}))}))})).next((()=>a))))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next((a=>{switch(i=a,tn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let c=K();for(const l of _a(t))c=c.add(F.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new x("invalid-argument",`Invalid pipeline source to execute offline: ${Nt(t)}`)}})).next((a=>this.retrieveMatchingLocalDocuments(i,a,(c=>ho(t,c)))))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach(((i,a)=>{const c=a.getKey();t.get(c)===null&&(t=t.insert(c,Ce.newInvalidDocument(c)))}));let s=Jn();return t.forEach(((i,a)=>{const c=e.get(i);c!==void 0&&Wr(c.mutation,a,Ke.empty(),ee.now()),r(a)&&(s=s.insert(i,a))})),s}getOverlaysForPipeline(e,t,r){switch(tn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Z.fromString(co(t)),r);case"collection_group":throw new x("invalid-argument",`Unexpected collection group pipeline: ${Nt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,_a(t).map((s=>F.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new x("invalid-argument",`Failed to get overlays for pipeline: ${Nt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return N.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:yt(s.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(s){return{name:s.name,query:cI(s.bundledQuery),readTime:yt(s.readTime)}})(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.overlays=new ie(F.comparator),this.Gs=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jt();return N.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(e,t){const r=Jt();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&r.set(s,i)})),N.resolve(r)}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.Zr(e,t,i)})),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Gs.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=Jt(),i=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ie(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Jt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Jt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return N.resolve(c)}Zr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Gs.get(s.largestBatchId).delete(r.key);this.Gs.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new oI(t,r));let i=this.Gs.get(t);i===void 0&&(i=K(),this.Gs.set(t,i)),this.Gs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.zs=new ge(Ie.js),this.Hs=new ge(Ie.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const r=new Ie(e,t);this.zs=this.zs.add(r),this.Hs=this.Hs.add(r)}Ys(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Zs(new Ie(e,t))}Xs(e,t){e.forEach((r=>this.removeReference(r,t)))}e_(e){const t=new F(new Z([])),r=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.Hs.forEachInRange([r,s],(a=>{this.Zs(a),i.push(a.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new F(new Z([])),r=new Ie(t,e),s=new Ie(t,e+1);let i=K();return this.Hs.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ie(e,0),r=this.zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return F.comparator(e.key,t.key)||Q(e.r_,t.r_)}static Js(e,t){return Q(e.r_,t.r_)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new ge(Ie.js)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.i_=this.i_.add(new Ie(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.__(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?qa:this.Gr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([r,s],(a=>{const c=this.s_(a.r_);i.push(c)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ge(Q);return t.forEach((s=>{const i=new Ie(s,0),a=new Ie(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,a],(c=>{r=r.add(c.r_)}))})),N.resolve(this.o_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new Ie(new F(i),0);let c=new ge(Q);return this.i_.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.r_)),!0)}),a),N.resolve(this.o_(c))}o_(e){const t=[];return e.forEach((r=>{const s=this.s_(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){U(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.i_;return N.forEach(t.mutations,(s=>{const i=new Ie(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.i_=r}))}Hr(e){}containsKey(e,t){const r=new Ie(t,0),s=this.i_.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.u_=e,this.docs=(function(){return new ie(F.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.u_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=$e();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ce.newInvalidDocument(s))})),N.resolve(r)}getAllEntries(e){let t=$e();return this.docs.forEach(((r,s)=>{t=t.insert(r,s.document)})),N.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;we(t)?(i=Z.fromString(co(t)),a=f=>ho(t,f)):(i=t.path,a=f=>Xi(t,f));let c=$e();const l=new F(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!i.isPrefixOf(f.path))break;f.path.length>i.length+1||fE(dE(m),r)<=0||(s.has(m.key)||a(m))&&(c=c.insert(m.key,m.mutableCopy()))}return N.resolve(c)}getAllFromCollectionGroup(e,t,r,s){$(9500)}c_(e,t){return N.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new TI(this)}getSize(e){return N.resolve(this.size)}}class TI extends fI{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(r)})),N.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.persistence=e,this.l_=new jn((t=>Cf(t)),Vf),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.E_=0,this.h_=new dc,this.targetCount=0,this.T_=fn.ws()}forEachTarget(e,t){return this.l_.forEach(((r,s)=>t(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.E_&&(this.E_=t),N.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new fn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Ds(t),N.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.l_.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.l_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.l_.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.h_.Ys(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.h_.Xs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.h_.n_(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t){this.P_={},this.overlays={},this.I_=new no(0),this.R_=!1,this.R_=!0,this.A_=new yI,this.referenceDelegate=e(this),this.V_=new II(this),this.indexManager=new uI,this.remoteDocumentCache=(function(s){return new wI(s)})((r=>this.referenceDelegate.d_(r))),this.serializer=new aI(t),this.f_=new gI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _I,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.P_[e.toKey()];return r||(r=new EI(t,this.referenceDelegate),this.P_[e.toKey()]=r),r}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new vI(this.I_.next());return this.referenceDelegate.m_(),r(s).next((i=>this.referenceDelegate.p_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}g_(e,t){return N.or(Object.values(this.P_).map((r=>()=>r.containsKey(e,t))))}}class vI extends pw{constructor(e){super(),this.currentSequenceNumber=e}}class fc{constructor(e){this.persistence=e,this.y_=new dc,this.w_=null}static b_(e){return new fc(e)}get S_(){if(this.w_)return this.w_;throw $(60996)}addReference(e,t,r){return this.y_.addReference(r,t),this.S_.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.y_.removeReference(r,t),this.S_.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),N.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((s=>this.S_.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.S_.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.S_,(r=>{const s=F.fromPath(r);return this.v_(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((r=>{r?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return N.or([()=>N.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class Oi{constructor(e,t){this.persistence=e,this.D_=new jn((r=>sI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=ww(this,t)}static b_(e,t){return new Oi(e,t)}m_(){}p_(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}Cs(e){let t=0;return this.sr(e,(r=>{t++})).next((()=>t))}sr(e,t){return N.forEach(this.D_,((r,s)=>this.Os(e,r,s).next((i=>i?N.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,(a=>this.Os(e,a,t).next((c=>{c||(r++,i.removeEntry(a,z.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),N.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=di(e.data.value)),t}Os(e,t,r){return N.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vo=r,this.fo=s}static mo(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(n,e){return F.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return fm()?8:mw(Ve())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Do(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new RI;return this.xo(e,t,a).next((c=>{if(i.result=c,this.yo)return this.Co(e,t,a,c.size)}))})).next((()=>i.result))}Co(e,t,r,s){return we(t)?N.resolve():r.documentReadCount<this.wo?(Qn()<=Y.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Kr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),N.resolve()):(Qn()<=Y.DEBUG&&L("QueryEngine","Query:",Kr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.bo*s?(Qn()<=Y.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Kr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):N.resolve())}vo(e,t){if(we(t))return N.resolve(null);let r=t;if(Sl(r))return N.resolve(null);let s=_t(r);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(r.limit!==null&&i===1&&(r=da(r,null,"F"),s=_t(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next((a=>{const c=K(...a);return this.So.getDocuments(e,c).next((l=>this.indexManager.getMinOffset(e,s).next((h=>{const f=this.Fo(r,l);return this.Oo(r,f,c,h.readTime)?this.vo(e,da(r,null,"F")):this.Mo(e,f,r,h)}))))})))))}Do(e,t,r,s){return(we(t)?(function(a){for(const c of a.stages){if(c instanceof Un||c instanceof zl)return!1;if(c instanceof ao){if(c.condition instanceof gf&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof pr&&c.condition._expr.params[0].fieldName===ht)continue;return!1}}return!0})(t):Sl(t))||s.isEqual(z.min())?N.resolve(null):this.So.getDocuments(e,r).next((i=>{const a=this.Fo(t,i);return this.Oo(t,a,r,s)?N.resolve(null):(Qn()<=Y.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hl(t)),this.Mo(e,a,t,hE(s,fs)).next((c=>c)))}))}Fo(e,t){let r,s;return we(e)?(r=new ge(AI),s=i=>ho(e,i)):(r=new ge(Ga(e)),s=i=>Xi(e,i)),t.forEach(((i,a)=>{s(a)&&(r=r.add(a))})),r}Oo(e,t,r,s){if(we(e))return(function(c){return c.stages.some((l=>l instanceof Un||l instanceof zl))})(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,r){return Qn()<=Y.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Hl(t)),this.So.getDocumentsMatchingQuery(e,t,cn.min(),r)}Mo(e,t,r,s){return this.So.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="LocalStore",bI=3e8;class SI{constructor(e,t,r,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new ie(Q),this.Bo=new jn((i=>Cf(i)),Vf),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(r)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mI(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function CI(n,e,t,r){return new SI(n,e,t,r)}async function xf(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=K();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next((h=>({$o:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function VI(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const m=h.batch,E=m.keys();let b=N.resolve();return E.forEach((V=>{b=b.next((()=>f.getEntry(l,V))).next((M=>{const D=h.docVersions.get(V);U(D!==null,48541),M.version.compareTo(D)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),f.addEntry(M)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Of(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function NI(n,e){const t=H(n),r=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const c=[];e.targetChanges.forEach(((f,m)=>{const E=s.get(m);if(!E)return;c.push(t.V_.removeMatchingKeys(i,f.removedDocuments,m).next((()=>t.V_.addMatchingKeys(i,f.addedDocuments,m))));let b=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(_e.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(m,b),(function(M,D,j){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=bI?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(E,b,f)&&c.push(t.V_.updateTargetData(i,b))}));let l=$e(),h=K();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(kI(i,a,e.documentUpdates).next((f=>{l=f.Ko,h=f.Qo}))),!r.isEqual(z.min())){const f=t.V_.getLastRemoteSnapshotVersion(i).next((m=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return N.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Lo=s,i)))}function kI(n,e,t){let r=K(),s=K();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=$e();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):L(mc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ko:a,Qo:s}}))}function DI(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=qa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function xI(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.V_.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):t.V_.allocateTargetId(r).next((a=>(s=new Ct(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.V_.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Lo.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(r.targetId,r),t.Bo.set(e,r.targetId)),r}))}async function Ea(n,e,t){const r=H(n),s=r.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!fr(a))throw a;L(mc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Lo=r.Lo.remove(e),r.Bo.delete(s.target)}function Gl(n,e,t){const r=H(n);let s=z.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,f){const m=H(l),E=m.Bo.get(f);return E!==void 0?N.resolve(m.Lo.get(E)):m.V_.getTargetData(h,f)})(r,a,we(e)?e:_t(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.V_.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.No.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?i:K()))).next((c=>(OI(r,c),{documents:c,Wo:i})))))}function OI(n,e){e.forEach(((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Uo.get(s)||z.min();r.readTime.compareTo(i)>0&&n.Uo.set(s,r.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(Ot(t),this.Xo=!1):L("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="RemoteStore";class MI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new fn(1e3),this.ca=new fn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((a=>{r.enqueueAndForget((async()=>{Hn(this)&&(L(Tt,"Restarting streams for network reachability change."),await(async function(l){const h=H(l);h.la.add(4),await xs(h),h.Ta.set("Unknown"),h.la.delete(4),await fo(h)})(this))}))})),this.Ta=new LI(r,s)}}async function fo(n){if(Hn(n))for(const e of n.Ea)await e(!0)}async function xs(n){for(const e of n.Ea)await e(!1)}function wa(n,e){return n.oa.get(e)||void 0}function Lf(n,e){const t=H(n),r=wa(t,e.targetId);if(r!==void 0&&t._a.has(r))return;const s=(function(c,l){const h=wa(c,l);h!==void 0&&c.aa.delete(h);const f=(function(E,b){return b%2!=0?E.ca.next():E.ua.next()})(c,l);return c.oa.set(l,f),c.aa.set(f,l),f})(t,e.targetId);L(Tt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Ct(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),Ec(t)?yc(t):yr(t).Yt()&&_c(t,i)}function gc(n,e){const t=H(n),r=yr(t),s=wa(t,e);L(Tt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),r.Yt()&&Mf(t,s),t._a.size===0&&(r.Yt()?r.en():Hn(t)&&t.Ta.set("Unknown"))}function _c(n,e){if(n.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.aa.get(e.targetId);if(t===void 0)return void L(Tt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}yr(n).Pn(e)}function Mf(n,e){n.Pa.J(e),yr(n).In(e)}function yc(n){n.Pa=new VE({getRemoteKeysForTarget:e=>{const t=n.aa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):K()},ye:e=>n._a.get(e)||null,Ve:()=>n.datastore.serializer.databaseId}),yr(n).start(),n.Ta.ea()}function Ec(n){return Hn(n)&&!yr(n).Jt()&&n._a.size>0}function Hn(n){return H(n).la.size===0}function Uf(n){n.Pa=void 0}async function UI(n){n.Ta.set("Online")}async function FI(n){n._a.forEach(((e,t)=>{_c(n,e)}))}async function BI(n,e){Uf(n),Ec(n)?(n.Ta.ra(e),yc(n)):n.Ta.set("Unknown")}async function $I(n,e,t){if(n.Ta.set("Online"),e instanceof jd&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds){if(s._a.has(c)){const l=s.aa.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,a),s.oa.delete(l),s.aa.delete(c)),s._a.delete(c)}s.Pa.removeTarget(c)}})(n,e)}catch(r){L(Tt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Li(n,r)}else if(e instanceof pi?n.Pa._e(e):e instanceof qd?n.Pa.he(e):n.Pa.ue(e),!t.isEqual(z.min()))try{const r=await Of(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Pa.fe(a);c.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i._a.get(f);m&&i._a.set(f,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,f)=>{const m=i._a.get(h);if(!m)return;i._a.set(h,m.withResumeToken(_e.EMPTY_BYTE_STRING,m.snapshotVersion)),Mf(i,h);const E=new Ct(m.target,h,f,m.sequenceNumber);_c(i,E)}));const l=(function(f,m){const E=new Map;m.targetChanges.forEach(((V,M)=>{const D=f.aa.get(M);D!==void 0&&E.set(D,V)}));let b=new ie(Q);return m.targetMismatches.forEach(((V,M)=>{const D=f.aa.get(V);D!==void 0&&(b=b.insert(D,M))})),new Vs(m.snapshotVersion,E,b,m.documentUpdates,m.augmentedDocumentUpdates,m.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){L(Tt,"Failed to raise snapshot:",r),await Li(n,r)}}async function Li(n,e,t){if(!fr(e))throw e;n.la.add(1),await xs(n),n.Ta.set("Offline"),t||(t=()=>Of(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(Tt,"Retrying IndexedDB access"),await t(),n.la.delete(1),await fo(n)}))}function Ff(n,e){return e().catch((t=>Li(n,t,e)))}async function po(n){const e=H(n),t=pn(e);let r=e.sa.length>0?e.sa[e.sa.length-1].batchId:qa;for(;qI(e);)try{const s=await DI(e.localStore,r);if(s===null){e.sa.length===0&&t.en();break}r=s.batchId,jI(e,s)}catch(s){await Li(e,s)}Bf(e)&&$f(e)}function qI(n){return Hn(n)&&n.sa.length<10}function jI(n,e){n.sa.push(e);const t=pn(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function Bf(n){return Hn(n)&&!pn(n).Jt()&&n.sa.length>0}function $f(n){pn(n).start()}async function zI(n){pn(n).fn()}async function HI(n){const e=pn(n);for(const t of n.sa)e.An(t.mutations)}async function WI(n,e,t){const r=n.sa.shift(),s=hc.from(r,e,t);await Ff(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await po(n)}async function GI(n,e){e&&pn(n).Rn&&await(async function(r,s){if((function(a){return IE(a)&&a!==C.ABORTED})(s.code)){const i=r.sa.shift();pn(r).Xt(),await Ff(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await po(r)}})(n,e),Bf(n)&&$f(n)}async function Kl(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),L(Tt,"RemoteStore received new credentials");const r=Hn(t);t.la.add(3),await xs(t),r&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await fo(t)}async function KI(n,e){const t=H(n);e?(t.la.delete(2),await fo(t)):e||(t.la.add(2),await xs(t),t.Ta.set("Unknown"))}function yr(n){return n.Ia||(n.Ia=(function(t,r,s){const i=H(t);return i.pn(),new ow(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{ct:UI.bind(null,n),Et:FI.bind(null,n),Tt:BI.bind(null,n),Tn:$I.bind(null,n)}),n.Ea.push((async e=>{e?(n.Ia.Xt(),Ec(n)?yc(n):n.Ta.set("Unknown")):(await n.Ia.stop(),Uf(n))}))),n.Ia}function pn(n){return n.Ra||(n.Ra=(function(t,r,s){const i=H(t);return i.pn(),new aw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:zI.bind(null,n),Tt:GI.bind(null,n),Vn:HI.bind(null,n),dn:WI.bind(null,n)}),n.Ea.push((async e=>{e?(n.Ra.Xt(),await po(n)):(await n.Ra.stop(),n.sa.length>0&&(L(Tt,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))}))),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):Ot("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Tc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ic(n,e){if(Ot("AsyncQueue",`${e}: ${n}`),fr(n))return new x(C.UNAVAILABLE,`${e}: ${n}`);throw n}class Ql{constructor(){this.activeTargetIds=bE()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QI{constructor(){this.fu=new Ql,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,r){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new Ql,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Jo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{static emptySet(e){return new Vn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=Jn(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.pu=new ie(F.comparator)}track(e){const t=e.doc.key,r=this.pu.get(t);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(t,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(t):e.type===1&&r.type===2?this.pu=this.pu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):$(63341,{we:e,gu:r}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ur{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new ur(e,t,Vn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some((e=>e.vu()))}}class JI{constructor(){this.queries=Jl(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,r){const s=H(t),i=s.queries;s.queries=Jl(),i.forEach(((a,c)=>{for(const l of c.bu)l.onError(r)}))})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Jl(){return new jn((n=>Sf(n)),lo)}async function vc(n,e){const t=H(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(r=2):(i=new YI,r=e.vu()?0:1);try{switch(r){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ic(a,`Initialization of query '${we(e.query)?Nt(e.query):Kr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&Rc(t)}async function Ac(n,e){const t=H(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.bu.indexOf(e);a>=0&&(i.bu.splice(a,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function XI(n,e){const t=H(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.bu)c.Cu(s)&&(r=!0);a.wu=s}}r&&Rc(t)}function ZI(n,e,t){const r=H(n),s=r.queries.get(e);if(s)for(const i of s.bu)i.onError(t);r.queries.delete(e)}function Rc(n){n.Du.forEach((e=>{e.next()}))}var Ta;(function(n){n.Default="default",n.Cache="cache"})(Ta||(Ta={}));class Pc{constructor(e,t,r){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=r||{}}Cu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==Ta.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.key=e}}class jf{constructor(e){this.key=e}}class ev{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=K(),this.mutatedKeys=K(),this.Ju=we(e)?ya(e):Ga(e),this.Yu=new Vn(this.Ju)}get Zu(){return this.zu}Xu(e,t){const r=t?t.ec:new Yl,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const[l,h]=this.tc(this.query,s);e.inorderTraversal(((m,E)=>{const b=s.get(m),V=hI(this.query,E)?E:null,M=!!b&&this.mutatedKeys.has(b.key),D=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let j=!1;b&&V?b.data.isEqual(V.data)?M!==D&&(r.track({type:3,doc:V}),j=!0):this.nc(b,V)||(r.track({type:2,doc:V}),j=!0,(l&&this.Ju(V,l)>0||h&&this.Ju(V,h)<0)&&(c=!0)):!b&&V?(r.track({type:0,doc:V}),j=!0):b&&!V&&(r.track({type:1,doc:b}),j=!0,(l||h)&&(c=!0)),j&&(V?(a=a.add(V),i=D?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}));const f=this.rc(this.query);if(f)if(we(this.query)){const m=[];a.forEach((V=>m.push(V)));const E=kf(this.query,m);let b=new Vn(ya(this.query));for(const V of E)b=b.add(V);a.forEach((V=>{b.has(V.key)||(i=i.delete(V.key),r.track({type:1,doc:V}))})),a=b}else{const m=this.sc(this.query);for(;a.size>f;){const E=m==="F"?a.last():a.first();a=a.delete(E.key),i=i.delete(E.key),r.track({type:1,doc:E})}}return{Yu:a,ec:r,Oo:c,mutatedKeys:i}}rc(e){var t;return we(e)?(t=Yo(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(we(e)){const t=Yo(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var r;if(we(e)){const s=(r=Yo(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const a=e.ec.yu();a.sort(((f,m)=>(function(b,V){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{we:D})}};return M(b)-M(V)})(f.type,m.type)||this.Ju(f.doc,m.doc))),this._c(r),s=s??!1;const c=t&&!s?this.oc():[],l=this.Hu.size===0&&this.current&&!s?1:0,h=l!==this.ju;return this.ju=l,a.length!==0||h?{snapshot:new ur(this.query,e.Yu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ac:c}:{ac:c}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new Yl,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach((t=>this.zu=this.zu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.zu=this.zu.delete(t))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=K(),this.Yu.forEach((r=>{this.uc(r.key)&&(this.Hu=this.Hu.add(r.key))}));const t=[];return e.forEach((r=>{this.Hu.has(r)||t.push(new jf(r))})),this.Hu.forEach((r=>{e.has(r)||t.push(new qf(r))})),t}cc(e){this.zu=e.Wo,this.Hu=K();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return ur.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const bc="SyncEngine";class tv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nv{constructor(e){this.key=e,this.Ec=!1}}class rv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hc={},this.Tc=new jn((c=>Sf(c)),lo),this.Pc=new Map,this.Ic=new Set,this.Rc=new ie(F.comparator),this.Ac=new Map,this.Vc=new dc,this.dc={},this.fc=new Map,this.mc=fn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function sv(n,e,t=!0){const r=Qf(n);let s;const i=r.Tc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await zf(r,e,t,!0),s}async function iv(n,e){const t=Qf(n);await zf(t,e,!0,!1)}async function zf(n,e,t,r){const s=await xI(n.localStore,we(e)?e:_t(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await ov(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Lf(n.remoteStore,s),c}async function ov(n,e,t,r,s){n.yc=(m,E,b)=>(async function(M,D,j,G){let X=D.view.Xu(j);X.Oo&&(X=await Gl(M.localStore,D.query,!1).then((({documents:I})=>D.view.Xu(I,X))));const ne=G&&G.targetChanges.get(D.targetId),he=G&&G.targetMismatches.get(D.targetId)!=null,de=D.view.applyChanges(X,M.isPrimaryClient,ne,he);return Zl(M,D.targetId,de.ac),de.snapshot})(n,m,E,b);const i=await Gl(n.localStore,e,!0),a=new ev(e,i.Wo),c=a.Xu(i.documents),l=Ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);Zl(n,t,h.ac);const f=new tv(e,t,a);return n.Tc.set(e,f),n.Pc.has(t)?n.Pc.get(t).push(e):n.Pc.set(t,[e]),h.snapshot}async function av(n,e,t){const r=H(n),s=r.Tc.get(e),i=r.Pc.get(s.targetId);if(i.length>1)return r.Pc.set(s.targetId,i.filter((a=>!lo(a,e)))),void r.Tc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ea(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&gc(r.remoteStore,s.targetId),Ia(r,s.targetId)})).catch(dr)):(Ia(r,s.targetId),await Ea(r.localStore,s.targetId,!0))}async function cv(n,e){const t=H(n),r=t.Tc.get(e),s=t.Pc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),gc(t.remoteStore,r.targetId))}async function uv(n,e,t){const r=gv(n);try{const s=await(function(a,c){const l=H(a),h=ee.now(),f=c.reduce(((b,V)=>b.add(V.key)),K());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=$e(),M=K();return l.ko.getEntries(b,f).next((D=>{V=D,V.forEach(((j,G)=>{G.isValidDocument()||(M=M.add(j))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((D=>{m=D;const j=[];for(const G of c){const X=eE(G,m.get(G.key).overlayedDocument);X!=null&&j.push(new _n(G.key,X,Td(X.value.mapValue),et.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,j,c)})).next((D=>{E=D;const j=D.applyToLocalDocumentSet(m,M);return l.documentOverlayCache.saveOverlays(b,D.batchId,j)}))})).then((()=>({batchId:E.batchId,changes:Bd(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.dc[a.currentUser.toKey()];h||(h=new ie(Q)),h=h.insert(c,l),a.dc[a.currentUser.toKey()]=h})(r,s.batchId,t),await Os(r,s.changes),await po(r.remoteStore)}catch(s){const i=Ic(s,"Failed to persist write");t.reject(i)}}async function Hf(n,e){const t=H(n);try{const r=await NI(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Ac.get(i);a&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Ec=!0:s.modifiedDocuments.size>0?U(a.Ec,14607):s.removedDocuments.size>0&&(U(a.Ec,42227),a.Ec=!1))})),await Os(t,r,e)}catch(r){await dr(r)}}function Xl(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tc.forEach(((i,a)=>{const c=a.view.xu(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=H(a);l.onlineState=c;let h=!1;l.queries.forEach(((f,m)=>{for(const E of m.bu)E.xu(c)&&(h=!0)})),h&&Rc(l)})(r.eventManager,e),s.length&&r.hc.Tn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lv(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ac.get(e),i=s&&s.key;if(i){let a=new ie(F.comparator);a=a.insert(i,Ce.newNoDocument(i,z.min()));const c=K().add(i),l=new Vs(z.min(),new Map,new ie(Q),a,$e(),c);await Hf(r,l),r.Rc=r.Rc.remove(i),r.Ac.delete(e),Sc(r)}else await Ea(r.localStore,e,!1).then((()=>Ia(r,e,t))).catch(dr)}async function hv(n,e){const t=H(n),r=e.batch.batchId;try{const s=await VI(t.localStore,e);Gf(t,r,null),Wf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Os(t,s)}catch(s){await dr(s)}}async function dv(n,e,t){const r=H(n);try{const s=await(function(a,c){const l=H(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((m=>(U(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);Gf(r,e,t),Wf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Os(r,s)}catch(s){await dr(s)}}function Wf(n,e){(n.fc.get(e)||[]).forEach((t=>{t.resolve()})),n.fc.delete(e)}function Gf(n,e,t){const r=H(n);let s=r.dc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.dc[r.currentUser.toKey()]=s}}function Ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pc.get(e))n.Tc.delete(r),t&&n.hc.wc(r,t);n.Pc.delete(e),n.isPrimaryClient&&n.Vc.e_(e).forEach((r=>{n.Vc.containsKey(r)||Kf(n,r)}))}function Kf(n,e){n.Ic.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(gc(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ac.delete(t),Sc(n))}function Zl(n,e,t){for(const r of t)r instanceof qf?(n.Vc.addReference(r.key,e),fv(n,r)):r instanceof jf?(L(bc,"Document no longer in limbo: "+r.key),n.Vc.removeReference(r.key,e),n.Vc.containsKey(r.key)||Kf(n,r.key)):$(19791,{bc:r})}function fv(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Ic.has(r)||(L(bc,"New document in limbo: "+t),n.Ic.add(r),Sc(n))}function Sc(n){for(;n.Ic.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Ic.values().next().value;n.Ic.delete(e);const t=new F(Z.fromString(e)),r=n.mc.next();n.Ac.set(r,new nv(t)),n.Rc=n.Rc.insert(t,r),Lf(n.remoteStore,new Ct(_t(Ji(t.path)),r,"TargetPurposeLimboResolution",no.wn))}}async function Os(n,e,t){const r=H(n),s=[],i=[],a=[];r.Tc.isEmpty()||(r.Tc.forEach(((c,l)=>{a.push(r.yc(l,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=pc.mo(l.targetId,h);i.push(m)}})))})),await Promise.all(a),r.hc.Tn(s),await(async function(l,h){const f=H(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>N.forEach(h,(E=>N.forEach(E.Vo,(b=>f.persistence.referenceDelegate.addReference(m,E.targetId,b))).next((()=>N.forEach(E.fo,(b=>f.persistence.referenceDelegate.removeReference(m,E.targetId,b)))))))))}catch(m){if(!fr(m))throw m;L(mc,"Failed to update sequence numbers: "+m)}for(const m of h){const E=m.targetId;if(!m.fromCache){const b=f.Lo.get(E),V=b.snapshotVersion,M=b.withLastLimboFreeSnapshotVersion(V);f.Lo=f.Lo.insert(E,M)}}})(r.localStore,i))}async function pv(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){L(bc,"User change. New user:",e.toKey());const r=await xf(t.localStore,e);t.currentUser=e,(function(i,a){i.fc.forEach((c=>{c.forEach((l=>{l.reject(new x(C.CANCELLED,a))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Os(t,r.$o)}}function mv(n,e){const t=H(n),r=t.Ac.get(e);if(r&&r.Ec)return K().add(r.key);{let s=K();const i=t.Pc.get(e);if(!i)return s;for(const a of i??[]){const c=t.Tc.get(a);s=s.unionWith(c.view.Zu)}return s}}function Qf(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lv.bind(null,e),e.hc.Tn=XI.bind(null,e.eventManager),e.hc.wc=ZI.bind(null,e.eventManager),e}function gv(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dv.bind(null,e),e}class Mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zi(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return CI(this.persistence,new PI,e.initialUser,this.serializer)}Dc(e){return new Df(fc.b_,this.serializer)}vc(e){return new QI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mi.provider={build:()=>new Mi};class _v extends Mi{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){U(this.persistence.referenceDelegate instanceof Oi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yw(r,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new Df((r=>Oi.b_(r,t)),this.serializer)}}class va{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pv.bind(null,this.syncEngine),await KI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new JI})()}createDatastore(e){const t=Zi(e.databaseInfo.databaseId),r=iw(e.databaseInfo);return lw(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new MI(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Xl(this.syncEngine,t,0)),(function(){return Ll.Ye()?new Ll:new tw})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,f){const m=new rv(s,i,a,c,l,h);return f&&(m.gc=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=H(s);L(Tt,"RemoteStore shutting down."),i.la.add(5),await xs(i),i.ha.shutdown(),i.Ta.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}va.provider={build:()=>new va};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="FirestoreClient";class yv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=Ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(mn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(mn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ic(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Xo(n,e){n.asyncQueue.verifyOperationInProgress(),L(mn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await xf(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function eh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ev(n);L(mn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Kl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Kl(e.remoteStore,s))),n._onlineComponents=e}async function Ev(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(mn,"Using user provided OfflineComponentProvider");try{await Xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;it("Error using user provided cache. Falling back to memory cache: "+t),await Xo(n,new Mi)}}else L(mn,"Using default OfflineComponentProvider"),await Xo(n,new _v(void 0));return n._offlineComponents}async function Yf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(mn,"Using user provided OnlineComponentProvider"),await eh(n,n._uninitializedComponentsProvider._online)):(L(mn,"Using default OnlineComponentProvider"),await eh(n,new va))),n._onlineComponents}function wv(n){return Yf(n).then((e=>e.syncEngine))}async function Ui(n){const e=await Yf(n),t=e.eventManager;return t.onListen=sv.bind(null,e.syncEngine),t.onUnlisten=av.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cv.bind(null,e.syncEngine),t}function Tv(n,e,t,r){const s=new wc(r),i=new Pc(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>vc(await Ui(n),i))),()=>{s.Va(),n.asyncQueue.enqueueAndForget((async()=>Ac(await Ui(n),i)))}}function Iv(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const f=new wc({next:E=>{f.Va(),a.enqueueAndForget((()=>Ac(i,m)));const b=E.docs.has(c);!b&&E.fromCache?h.reject(new x(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&E.fromCache&&l&&l.source==="server"?h.reject(new x(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new Pc(Ji(c.path),f,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return vc(i,m)})(await Ui(n),n.asyncQueue,e,t,r))),r.promise}function vv(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const f=new wc({next:E=>{f.Va(),a.enqueueAndForget((()=>Ac(i,m))),E.fromCache&&l.source==="server"?h.reject(new x(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new Pc(c instanceof Jr?nI(c):c,f,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return vc(i,m)})(await Ui(n),n.asyncQueue,e,t,r))),r.promise}function Av(n,e){const t=new Vt;return n.asyncQueue.enqueueAndForget((async()=>uv(await wv(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jf=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ln("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Rv=class extends Jf{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{convertValue(e,t="none"){switch(ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return gn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[os].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>oe(a.doubleValue)));return new qe(t)}convertGeoPoint(e){return new Et(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ss(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ir(e));default:return null}}convertTimestamp(e){const t=sn(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);U(Yd(r),9688,{name:e});const s=new ss(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||Ot(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="AsyncQueue";class nh{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new tf(this,"async_queue_retry"),this.Hc=()=>{const r=Jo();r&&L(th,"Visibility state changed to "+r.visibilityState),this.Ht.$t()},this.Jc=e;const t=Jo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Jo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new Vt;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!fr(e))throw e;L(th,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((r=>{throw this.Wc=r,this.Gc=!1,Ot("INTERNAL UNHANDLED ERROR: ",rh(r)),r})).then((r=>(this.Gc=!1,r))))));return this.Jc=t,t}enqueueAfterDelay(e,t,r){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=Tc.createAndSchedule(this,e,t,r,(i=>this.el(i)));return this.Qc.push(s),s}Yc(){this.Wc&&$(47125,{tl:rh(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function rh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Mt extends ks{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new nh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nh(e),this._firestoreClient=void 0,await e}}}function uR(n,e){const t=typeof n=="object"?n:Sa(),r=typeof n=="string"?n:Pi,s=Bi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yh("firestore");i&&Tw(s,...i)}return s}function mo(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bv(n),n._firestoreClient}function bv(n){var r,s,i,a;const e=n._freezeSettings(),t=dw(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new yv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Pv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}class jr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nn extends Jf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ln("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Nn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Nn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nn._jsonSchema={type:me("string",Nn._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class _i extends Nn{data(e={}){return super.data(e)}}class kn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new jr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new _i(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{we(s._snapshot.query)?ya(s._snapshot.query):Ga(s.query._query);const l=new _i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new jr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new _i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new jr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Sv(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=kn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ba.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Sv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn._jsonSchemaVersion="firestore/querySnapshot/1.0",kn._jsonSchema={type:me("string",kn._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vc{}class ep extends Vc{}function lR(n,e,...t){let r=[];e instanceof Vc&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof Nc)).length,c=i.filter((l=>l instanceof go)).length;if(a>1||a>0&&c>0)throw new x(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class go extends ep{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new go(e,t,r)}_apply(e){const t=this._parse(e);return tp(e._query,t),new Ut(e.firestore,e.converter,ha(e._query,t))}_parse(e){const t=ro(e.firestore);return(function(i,a,c,l,h,f,m){let E;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ih(m,f);const V=[];for(const M of m)V.push(sh(l,i,M));E={arrayValue:{values:V}}}else E=sh(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ih(m,f),E=Sw(c,a,m,f==="in"||f==="not-in");return pe.create(h,f,E)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function hR(n,e,t){const r=e,s=ln("where",n);return go._create(s,r,t)}class Nc extends Vc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)tp(a,l),a=ha(a,l)})(e._query,t),new Ut(e.firestore,e.converter,ha(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kc extends ep{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new kc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ds(i,a)})(e._query,this._field,this._direction);return new Ut(e.firestore,e.converter,yE(e._query,t))}}function dR(n,e="asc"){const t=e,r=ln("orderBy",n);return kc._create(r,t)}function sh(n,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new x(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Md(e)&&t.indexOf("/")!==-1)throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Z.fromString(t));if(!F.isDocumentKey(r))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wl(n,new F(r))}if(t instanceof ae)return wl(n,t._key);throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hi(t)}.`)}function ih(n,e){if(!Array.isArray(n)||n.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tp(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(n){n=Ue(n,ae);const e=Ue(n.firestore,Mt),t=mo(e);return Iv(t,n._key).then((r=>np(e,n,r)))}function pR(n){n=Ue(n,Ut);const e=Ue(n.firestore,Mt),t=mo(e),r=new Cc(e);return Zf(n._query),vv(t,n._query).then((s=>new kn(e,r,n,s)))}function mR(n,e,t){n=Ue(n,ae);const r=Ue(n.firestore,Mt),s=Xf(n.converter,e,t),i=ro(r);return _o(r,[cf(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,et.none())])}function gR(n,e,t,...r){n=Ue(n,ae);const s=Ue(n.firestore,Mt),i=ro(s);let a;return a=typeof(e=te(e))=="string"||e instanceof eo?bw(i,"updateDoc",n._key,e,t,r):Pw(i,"updateDoc",n._key,e),_o(s,[a.toMutation(n._key,et.exists(!0))])}function _R(n){return _o(Ue(n.firestore,Mt),[new Wa(n._key,et.none())])}function yR(n,e){const t=Ue(n.firestore,Mt),r=Iw(n),s=Xf(n.converter,e),i=ro(n.firestore);return _o(t,[cf(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,et.exists(!1))]).then((()=>r))}function ER(n,...e){var h,f,m;n=te(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||oh(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(oh(e[r])){const E=e[r];e[r]=(h=E.next)==null?void 0:h.bind(E),e[r+1]=(f=E.error)==null?void 0:f.bind(E),e[r+2]=(m=E.complete)==null?void 0:m.bind(E)}let i,a,c;if(n instanceof ae)a=Ue(n.firestore,Mt),c=Ji(n._key.path),i={next:E=>{e[r]&&e[r](np(a,n,E))},error:e[r+1],complete:e[r+2]};else{const E=Ue(n,Ut);a=Ue(E.firestore,Mt),c=E._query;const b=new Cc(a);i={next:V=>{e[r]&&e[r](new kn(a,b,E,V))},error:e[r+1],complete:e[r+2]},Zf(n._query)}const l=mo(a);return Tv(l,c,s,i)}function _o(n,e){const t=mo(n);return Av(t,e)}function np(n,e,t){const r=t.docs.get(e._key),s=new Cc(n);return new Nn(n,s,e._key,r,new jr(t.hasPendingWrites,t.fromCache),e.converter)}const ah="@firebase/firestore",ch="4.17.2";(function(e,t=!0){xy($n),On(new rn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Mt(new JE(r.getProvider("auth-internal")),new ew(a,r.getProvider("app-check-internal")),jy(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),pt(ah,ch,e),pt(ah,ch,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="firebasestorage.googleapis.com",sp="storageBucket",Cv=120*1e3,Vv=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends It{constructor(e,t,r=0){super(Zo(e),`Firebase Storage: ${t} (${Zo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Zo(n){return"storage/"+n}function Dc(){const n="An unknown error occurred, please check the error payload for server response.";return new le(ue.UNKNOWN,n)}function Nv(n){return new le(ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function kv(n){return new le(ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new le(ue.UNAUTHENTICATED,n)}function xv(){return new le(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ov(n){return new le(ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Lv(){return new le(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mv(){return new le(ue.CANCELED,"User canceled the upload/download.")}function Uv(n){return new le(ue.INVALID_URL,"Invalid URL '"+n+"'.")}function Fv(n){return new le(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Bv(){return new le(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sp+"' property when initializing the app?")}function $v(){return new le(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qv(){return new le(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jv(n){return new le(ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Aa(n){return new le(ue.INVALID_ARGUMENT,n)}function ip(){return new le(ue.APP_DELETED,"The Firebase app was deleted.")}function zv(n){return new le(ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zr(n,e){return new le(ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Mr(n){throw new le(ue.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ye.makeFromUrl(e,t)}catch{return new Ye(e,"")}if(r.path==="")return r;throw Fv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(ne){ne.path.charAt(ne.path.length-1)==="/"&&(ne.path_=ne.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function h(ne){ne.path_=decodeURIComponent(ne.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",b=new RegExp(`^https?://${m}/${f}/b/${s}/o${E}`,"i"),V={bucket:1,path:3},M=t===rp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",j=new RegExp(`^https?://${M}/${s}/${D}`,"i"),X=[{regex:c,indices:l,postModify:i},{regex:b,indices:V,postModify:h},{regex:j,indices:{bucket:1,path:2},postModify:h}];for(let ne=0;ne<X.length;ne++){const he=X[ne],de=he.regex.exec(e);if(de){const I=de[he.indices.bucket];let g=de[he.indices.path];g||(g=""),r=new Ye(I,g),he.postModify(r);break}}if(r==null)throw Uv(e);return r}}class Hv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let h=!1;function f(...D){h||(h=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,n(b,l())},D)}function E(){i&&clearTimeout(i)}function b(D,...j){if(h){E();return}if(D){E(),f.call(null,D,...j);return}if(l()||a){E(),f.call(null,D,...j);return}r<64&&(r*=2);let X;c===1?(c=2,X=0):X=(r+Math.random())*1e3,m(X)}let V=!1;function M(D){V||(V=!0,E(),!h&&(s!==null?(D||(c=2),clearTimeout(s),m(0)):D||(c=1)))}return m(0),i=setTimeout(()=>{a=!0,M(!0)},t),M}function Gv(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n){return n!==void 0}function Qv(n){return typeof n=="object"&&!Array.isArray(n)}function xc(n){return typeof n=="string"||n instanceof String}function uh(n){return Oc()&&n instanceof Blob}function Oc(){return typeof Blob<"u"}function lh(n,e,t,r){if(r<e)throw Aa(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Aa(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function op(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Dn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Dn||(Dn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,r,s,i,a,c,l,h,f,m,E=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((V,M)=>{this.resolve_=V,this.reject_=M,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new si(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Dn.NO_ERROR,l=i.getStatus();if(!c||Yv(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Dn.ABORT;r(!1,new si(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new si(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Kv(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=Dc();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?ip():Mv();a(l)}else{const l=Lv();a(l)}};this.canceled_?t(!1,new si(!1,null,!0)):this.backoffId_=Wv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class si{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Xv(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Zv(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function tA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function nA(n,e,t,r,s,i,a=!0,c=!1){const l=op(n.urlParams),h=n.url+l,f=Object.assign({},n.headers);return eA(f,e),Xv(f,t),Zv(f,i),tA(f,r),new Jv(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sA(...n){const e=rA();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Oc())return new Blob(n);throw new le(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iA(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n){if(typeof atob>"u")throw jv("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ea{constructor(e,t){this.data=e,this.contentType=t||null}}function aA(n,e){switch(n){case ft.RAW:return new ea(ap(e));case ft.BASE64:case ft.BASE64URL:return new ea(cp(n,e));case ft.DATA_URL:return new ea(uA(e),lA(e))}throw Dc()}function ap(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cA(n){let e;try{e=decodeURIComponent(n)}catch{throw Zr(ft.DATA_URL,"Malformed data URL.")}return ap(e)}function cp(n,e){switch(n){case ft.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Zr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ft.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Zr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=oA(e)}catch(s){throw s.message.includes("polyfill")?s:Zr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class up{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Zr(ft.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=hA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uA(n){const e=new up(n);return e.base64?cp(ft.BASE64,e.rest):cA(e.rest)}function lA(n){return new up(n).contentType}function hA(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){let r=0,s="";uh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(uh(this.data_)){const r=this.data_,s=iA(r,e,t);return s===null?null:new Xt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Xt(r,!0)}}static getBlob(...e){if(Oc()){const t=e.map(r=>r instanceof Xt?r.data_:r);return new Xt(sA.apply(null,t))}else{const t=e.map(a=>xc(a)?aA(ft.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new Xt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){let e;try{e=JSON.parse(n)}catch{return null}return Qv(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function fA(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function hp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n,e){return e}class xe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||pA}}let ii=null;function mA(n){return!xc(n)||n.length<2?n:hp(n)}function dp(){if(ii)return ii;const n=[];n.push(new xe("bucket")),n.push(new xe("generation")),n.push(new xe("metageneration")),n.push(new xe("name","fullPath",!0));function e(i,a){return mA(a)}const t=new xe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new xe("size");return s.xform=r,n.push(s),n.push(new xe("timeCreated")),n.push(new xe("updated")),n.push(new xe("md5Hash",null,!0)),n.push(new xe("cacheControl",null,!0)),n.push(new xe("contentDisposition",null,!0)),n.push(new xe("contentEncoding",null,!0)),n.push(new xe("contentLanguage",null,!0)),n.push(new xe("contentType",null,!0)),n.push(new xe("metadata","customMetadata",!0)),ii=n,ii}function gA(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Ye(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function _A(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return gA(r,n),r}function fp(n,e,t){const r=lp(e);return r===null?null:_A(n,r,t)}function yA(n,e,t,r){const s=lp(e);if(s===null||!xc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const f=n.bucket,m=n.fullPath,E="/b/"+a(f)+"/o/"+a(m),b=Lc(E,t,r),V=op({alt:"media",token:h});return b+V})[0]}function EA(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class pp{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n){if(!n)throw Dc()}function wA(n,e){function t(r,s){const i=fp(n,s,e);return mp(i!==null),i}return t}function TA(n,e){function t(r,s){const i=fp(n,s,e);return mp(i!==null),yA(i,s,n.host,n._protocol)}return t}function gp(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=xv():s=Dv():t.getStatus()===402?s=kv(n.bucket):t.getStatus()===403?s=Ov(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function IA(n){const e=gp(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Nv(n.path)),i.serverResponse=s.serverResponse,i}return t}function vA(n,e,t){const r=e.fullServerUrl(),s=Lc(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new pp(s,i,TA(n,t),a);return c.errorHandler=IA(e),c}function AA(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function RA(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=AA(null,e)),r}function PA(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let X="";for(let ne=0;ne<2;ne++)X=X+Math.random().toString().slice(2);return X}const l=c();a["Content-Type"]="multipart/related; boundary="+l;const h=RA(e,r,s),f=EA(h,t),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,E=`\r
--`+l+"--",b=Xt.getBlob(m,r,E);if(b===null)throw $v();const V={name:h.fullPath},M=Lc(i,n.host,n._protocol),D="POST",j=n.maxUploadRetryTime,G=new pp(M,D,wA(n,t),j);return G.urlParams=V,G.headers=a,G.body=b.uploadData(),G.errorHandler=gp(e),G}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Mr("cannot .send() more than once");if(Bn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SA extends bA{initXhr(){this.xhr_.responseType="text"}}function _p(){return new SA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this._service=e,t instanceof Ye?this._location=t:this._location=Ye.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Fn(e,t)}get root(){const e=new Ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hp(this._location.path)}get storage(){return this._service}get parent(){const e=dA(this._location.path);if(e===null)return null;const t=new Ye(this._location.bucket,e);return new Fn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw zv(e)}}function CA(n,e,t){n._throwIfRoot("uploadBytes");const r=PA(n.storage,n._location,dp(),new Xt(e,!0),t);return n.storage.makeRequestWithTokens(r,_p).then(s=>({metadata:s,ref:n}))}function VA(n){n._throwIfRoot("getDownloadURL");const e=vA(n.storage,n._location,dp());return n.storage.makeRequestWithTokens(e,_p).then(t=>{if(t===null)throw qv();return t})}function NA(n,e){const t=fA(n._location.path,e),r=new Ye(n._location.bucket,t);return new Fn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(n){return/^[A-Za-z]+:\/\//.test(n)}function DA(n,e){return new Fn(n,e)}function yp(n,e){if(n instanceof Mc){const t=n;if(t._bucket==null)throw Bv();const r=new Fn(t,t._bucket);return e!=null?yp(r,e):r}else return e!==void 0?NA(n,e):n}function xA(n,e){if(e&&kA(e)){if(n instanceof Mc)return DA(n,e);throw Aa("To use ref(service, url), the first argument must be a Storage instance.")}else return yp(n,e)}function hh(n,e){const t=e==null?void 0:e[sp];return t==null?null:Ye.makeFromBucketSpec(t,n)}function OA(n,e,t,r={}){n.host=`${e}:${t}`;const s=Bn(e);s&&Pa(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Ih(i,n.app.options.projectId))}class Mc{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=rp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cv,this._maxUploadRetryTime=Vv,this._requests=new Set,s!=null?this._bucket=Ye.makeFromBucketSpec(s,this._host):this._bucket=hh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,e):this._bucket=hh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Hv(ip());{const a=nA(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const dh="@firebase/storage",fh="0.14.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="storage";function wR(n,e,t){return n=te(n),CA(n,e,t)}function TR(n){return n=te(n),VA(n)}function IR(n,e){return n=te(n),xA(n,e)}function vR(n=Sa(),e){n=te(n);const r=Bi(n,Ep).getImmediate({identifier:e}),s=yh("storage");return s&&LA(r,...s),r}function LA(n,e,t,r={}){OA(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Mc(t,r,s,e,$n)}function UA(){On(new rn(Ep,MA,"PUBLIC").setMultipleInstances(!0)),pt(dh,fh,""),pt(dh,fh,"esm2020")}UA();var FA="firebase",BA="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt(FA,BA,"app");export{ug as A,Sa as B,tR as C,uR as D,lr as E,vR as F,Kt as G,QA as H,_R as I,dR as J,iR as K,ZA as L,WA as M,yR as a,TR as b,sR as c,HA as d,XA as e,eR as f,pR as g,fR as h,Iw as i,JA as j,YA as k,P_ as l,Jh as m,KA as n,ER as o,gR as p,lR as q,IR as r,jA as s,oR as t,wR as u,mR as v,hR as w,zA as x,GA as y,qA as z};
