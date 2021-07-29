import{g as e,U as t,M as n,k as r,R as i,l as s,t as o}from"./vendor.283f92f9.js";var a,u,l,c=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},p=function(){function t(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},t.prototype._updateExtraLibs=function(){return c(this,void 0,void 0,(function(){var e,t;return d(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},t.prototype._getClient=function(){var t=this;if(!this._client){this._worker=e.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var n=this._worker.getProxy();this._defaults.getEagerModelSync()&&(n=n.then((function(n){return t._worker?t._worker.withSyncedResources(e.getModels().filter((function(e){return e.getModeId()===t._modeId})).map((function(e){return e.uri}))):n}))),this._client=n}return this._client},t.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},t}(),f={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.sharedmemory.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es2021.d.ts":!0,"lib.es2021.full.d.ts":!0,"lib.es2021.promise.d.ts":!0,"lib.es2021.string.d.ts":!0,"lib.es2021.weakref.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.esnext.weakref.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0,"lib.webworker.iterable.d.ts":!0},g=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function a(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}u((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};function b(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var s=0,o=e.next;s<o.length;s++){r+=b(o[s],t,n)}return r}function v(e){return e?e.map((function(e){return e.text})).join(""):""}(l=u||(u={}))[l.None=0]="None",l[l.Block=1]="Block",l[l.Smart=2]="Smart";var y,_,w=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),S=function(){function t(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return t.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!f[e.path.slice(1)])},t.prototype.getOrCreateModel=function(t){var n=e.getModel(t);return n||(this.isLibFile(t)&&this._hasFetchedLibFiles?e.createModel(this._libFiles[t.path.slice(1)],"typescript",t):null)},t.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},t.prototype.fetchLibFilesIfNecessary=function(e){return h(this,void 0,void 0,(function(){return m(this,(function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}}))}))},t.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise},t}();(_=y||(y={}))[_.Warning=0]="Warning",_[_.Error=1]="Error",_[_.Suggestion=2]="Suggestion",_[_.Message=3]="Message";var x=function(i){function s(t,n,r,s){var o=i.call(this,s)||this;o._libFiles=t,o._defaults=n,o._selector=r,o._disposables=[],o._listener=Object.create(null);var a=function(t){if(t.getModeId()===r){var n,i=function(){o._defaults.getDiagnosticsOptions().onlyVisible?t.isAttachedToEditor()&&o._doValidate(t):o._doValidate(t)},s=t.onDidChangeContent((function(){clearTimeout(n),n=setTimeout(i,500)})),a=t.onDidChangeAttached((function(){o._defaults.getDiagnosticsOptions().onlyVisible&&(t.isAttachedToEditor()?i():e.setModelMarkers(t,o._selector,[]))}));o._listener[t.uri.toString()]={dispose:function(){s.dispose(),a.dispose(),clearTimeout(n)}},i()}},u=function(t){e.setModelMarkers(t,o._selector,[]);var n=t.uri.toString();o._listener[n]&&(o._listener[n].dispose(),delete o._listener[n])};o._disposables.push(e.onDidCreateModel((function(e){return a(e)}))),o._disposables.push(e.onWillDisposeModel(u)),o._disposables.push(e.onDidChangeModelLanguage((function(e){u(e.model),a(e.model)}))),o._disposables.push({dispose:function(){for(var t=0,n=e.getModels();t<n.length;t++){var r=n[t];u(r)}}});var l=function(){for(var t=0,n=e.getModels();t<n.length;t++){var r=n[t];u(r),a(r)}};return o._disposables.push(o._defaults.onDidChange(l)),o._disposables.push(o._defaults.onDidExtraLibsChange(l)),e.getModels().forEach((function(e){return a(e)})),o}return g(s,i),s.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},s.prototype._doValidate=function(n){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u,l,c,d,p=this;return m(this,(function(f){switch(f.label){case 0:return[4,this._worker(n.uri)];case 1:return r=f.sent(),n.isDisposed()?[2]:(i=[],s=this._defaults.getDiagnosticsOptions(),o=s.noSyntaxValidation,a=s.noSemanticValidation,u=s.noSuggestionDiagnostics,o||i.push(r.getSyntacticDiagnostics(n.uri.toString())),a||i.push(r.getSemanticDiagnostics(n.uri.toString())),u||i.push(r.getSuggestionDiagnostics(n.uri.toString())),[4,Promise.all(i)]);case 2:return!(l=f.sent())||n.isDisposed()?[2]:(c=l.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(p._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),d=c.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?t.parse(e.file.fileName):null})),[4,this._libFiles.fetchLibFilesIfNecessary(d)]);case 3:return f.sent(),n.isDisposed()?[2]:(e.setModelMarkers(n,this._selector,c.map((function(e){return p._convertDiagnostics(n,e)}))),[2])}}))}))},s.prototype._convertDiagnostics=function(e,t){var r=t.start||0,i=t.length||1,s=e.getPositionAt(r),o=s.lineNumber,a=s.column,u=e.getPositionAt(r+i),l=u.lineNumber,c=u.column,d=[];return t.reportsUnnecessary&&d.push(n.Unnecessary),t.reportsDeprecated&&d.push(n.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:a,endLineNumber:l,endColumn:c,message:b(t.messageText,"\n"),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},s.prototype._convertRelatedInformation=function(e,n){var r=this;if(!n)return[];var i=[];return n.forEach((function(n){var s=e;if(n.file){var o=t.parse(n.file.fileName);s=r._libFiles.getOrCreateModel(o)}if(s){var a=n.start||0,u=n.length||1,l=s.getPositionAt(a),c=l.lineNumber,d=l.column,p=s.getPositionAt(a+u),f=p.lineNumber,g=p.column;i.push({resource:s.uri,startLineNumber:c,startColumn:d,endLineNumber:f,endColumn:g,message:b(n.messageText,"\n")})}})),i},s.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case y.Error:return r.Error;case y.Message:return r.Info;case y.Warning:return r.Warning;case y.Suggestion:return r.Hint}return r.Info},s}(w),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,o){return h(this,void 0,void 0,(function(){var r,o,a,u,l,c;return m(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),o=new i(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),a=e.uri,u=e.getOffsetAt(n),[4,this._worker(a)];case 1:return l=d.sent(),e.isDisposed()?[2]:[4,l.getCompletionsAtPosition(a.toString(),u)];case 2:return!(c=d.sent())||e.isDisposed()?[2]:[2,{suggestions:c.entries.map((function(r){var l,c=o;if(r.replacementSpan){var d=e.getPositionAt(r.replacementSpan.start),p=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);c=new i(d.lineNumber,d.column,p.lineNumber,p.column)}var f=[];return-1!==(null===(l=r.kindModifiers)||void 0===l?void 0:l.indexOf("deprecated"))&&f.push(s.CompletionItemTag.Deprecated),{uri:a,position:n,offset:u,range:c,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:f}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,n){return h(this,void 0,void 0,(function(){var n,r,i,s,o;return m(this,(function(a){switch(a.label){case 0:return r=(n=e).uri,i=n.position,s=n.offset,[4,this._worker(r)];case 1:return[4,a.sent().getCompletionEntryDetails(r.toString(),s,n.label)];case 2:return(o=a.sent())?[2,{uri:r,position:i,label:o.name,kind:t.convertKind(o.kind),detail:v(o.displayParts),documentation:{value:t.createDocumentationString(o)}}]:[2,n]}}))}))},t.convertKind=function(e){switch(e){case L.primitiveType:case L.keyword:return s.CompletionItemKind.Keyword;case L.variable:case L.localVariable:return s.CompletionItemKind.Variable;case L.memberVariable:case L.memberGetAccessor:case L.memberSetAccessor:return s.CompletionItemKind.Field;case L.function:case L.memberFunction:case L.constructSignature:case L.callSignature:case L.indexSignature:return s.CompletionItemKind.Function;case L.enum:return s.CompletionItemKind.Enum;case L.module:return s.CompletionItemKind.Module;case L.class:return s.CompletionItemKind.Class;case L.interface:return s.CompletionItemKind.Interface;case L.warning:return s.CompletionItemKind.File}return s.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=v(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){t+="\n\n"+C(r[n])}return t},t}(w);function C(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text,r=n[0],i=n.slice(1);t+="`"+r.text+"`",i.length>0&&(t+=" — "+i.map((function(e){return e.text})).join(" "))}else Array.isArray(e.text)?t+=" — "+e.text.map((function(e){return e.text})).join(" "):e.text&&(t+=" — "+e.text);return t}var D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return g(t,e),t._toSignatureHelpTriggerReason=function(e){switch(e.triggerKind){case s.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case s.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case s.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}},t.prototype.provideSignatureHelp=function(e,n,r,i){return h(this,void 0,void 0,(function(){var r,s,o,a,u;return m(this,(function(l){switch(l.label){case 0:return r=e.uri,s=e.getOffsetAt(n),[4,this._worker(r)];case 1:return o=l.sent(),e.isDisposed()?[2]:[4,o.getSignatureHelpItems(r.toString(),s,{triggerReason:t._toSignatureHelpTriggerReason(i)})];case 2:return!(a=l.sent())||e.isDisposed()?[2]:(u={activeSignature:a.selectedItemIndex,activeParameter:a.argumentIndex,signatures:[]},a.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:v(e.documentation)},t.label+=v(e.prefixDisplayParts),e.parameters.forEach((function(n,r,i){var s=v(n.displayParts),o={label:s,documentation:{value:v(n.documentation)}};t.label+=s,t.parameters.push(o),r<i.length-1&&(t.label+=v(e.separatorDisplayParts))})),t.label+=v(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))},t}(w),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideHover=function(e,t,n){return h(this,void 0,void 0,(function(){var n,r,i,s,o,a,u;return m(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=l.sent(),e.isDisposed()?[2]:[4,i.getQuickInfoAtPosition(n.toString(),r)];case 2:return!(s=l.sent())||e.isDisposed()?[2]:(o=v(s.documentation),a=s.tags?s.tags.map((function(e){return C(e)})).join("  \n\n"):"",u=v(s.displayParts),[2,{range:this._textSpanToRange(e,s.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:o+(a?"\n\n"+a:"")}]}])}}))}))},t}(w),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return h(this,void 0,void 0,(function(){var n,r,i,o,a=this;return m(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return i=u.sent(),e.isDisposed()?[2]:[4,i.getOccurrencesAtPosition(n.toString(),r)];case 2:return!(o=u.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return{range:a._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?s.DocumentHighlightKind.Write:s.DocumentHighlightKind.Text}}))]}}))}))},t}(w),A=function(n){function r(e,t){var r=n.call(this,t)||this;return r._libFiles=e,r}return g(r,n),r.prototype.provideDefinition=function(n,r,i){return h(this,void 0,void 0,(function(){var i,s,a,u,l,c,d,p,f,g,h,b;return m(this,(function(m){switch(m.label){case 0:return i=n.uri,s=n.getOffsetAt(r),[4,this._worker(i)];case 1:return a=m.sent(),n.isDisposed()?[2]:[4,a.getDefinitionAtPosition(i.toString(),s)];case 2:return!(u=m.sent())||n.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(u.map((function(e){return t.parse(e.fileName)})))];case 3:if(m.sent(),n.isDisposed())return[2];for(l=[],c=0,d=u;c<d.length;c++)if(p=d[c],f=t.parse(p.fileName),g=this._libFiles.getOrCreateModel(f))l.push({uri:f,range:this._textSpanToRange(g,p.textSpan)});else if(h=o.getExtraLibs()[p.fileName])return b=e.createModel(h.content,"typescript",f),[2,{uri:f,range:this._textSpanToRange(b,p.textSpan)}];return[2,l]}}))}))},r}(w),P=function(e){function n(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return g(n,e),n.prototype.provideReferences=function(e,n,r,i){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u,l,c,d,p;return m(this,(function(f){switch(f.label){case 0:return r=e.uri,i=e.getOffsetAt(n),[4,this._worker(r)];case 1:return s=f.sent(),e.isDisposed()?[2]:[4,s.getReferencesAtPosition(r.toString(),i)];case 2:return!(o=f.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return t.parse(e.fileName)})))];case 3:if(f.sent(),e.isDisposed())return[2];for(a=[],u=0,l=o;u<l.length;u++)c=l[u],d=t.parse(c.fileName),(p=this._libFiles.getOrCreateModel(d))&&a.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,a]}}))}))},n}(w),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentSymbols=function(e,t){return h(this,void 0,void 0,(function(){var t,n,r,i,o,a=this;return m(this,(function(u){switch(u.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return n=u.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(t.toString())];case 2:return!(r=u.sent())||e.isDisposed()?[2]:(i=function(t,n,r){var o={name:n.text,detail:"",kind:O[n.kind]||s.SymbolKind.Variable,range:a._textSpanToRange(e,n.spans[0]),selectionRange:a._textSpanToRange(e,n.spans[0]),tags:[]};if(r&&(o.containerName=r),n.childItems&&n.childItems.length>0)for(var u=0,l=n.childItems;u<l.length;u++){var c=l[u];i(t,c,o.name)}t.push(o)},o=[],r.forEach((function(e){return i(o,e)})),[2,o])}}))}))},t}(w),L=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),O=Object.create(null);O[L.module]=s.SymbolKind.Module,O[L.class]=s.SymbolKind.Class,O[L.enum]=s.SymbolKind.Enum,O[L.interface]=s.SymbolKind.Interface,O[L.memberFunction]=s.SymbolKind.Method,O[L.memberVariable]=s.SymbolKind.Property,O[L.memberGetAccessor]=s.SymbolKind.Property,O[L.memberSetAccessor]=s.SymbolKind.Property,O[L.variable]=s.SymbolKind.Variable,O[L.const]=s.SymbolKind.Variable,O[L.localVariable]=s.SymbolKind.Variable,O[L.variable]=s.SymbolKind.Variable,O[L.function]=s.SymbolKind.Function,O[L.localFunction]=s.SymbolKind.Function;var N,E,K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:u.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(w),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u=this;return m(this,(function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return o=l.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsForRange(r.toString(),i,s,K._convertOptions(n))];case 2:return!(a=l.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(K),R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return h(this,void 0,void 0,(function(){var i,s,o,a,u=this;return m(this,(function(l){switch(l.label){case 0:return i=e.uri,s=e.getOffsetAt(t),[4,this._worker(i)];case 1:return o=l.sent(),e.isDisposed()?[2]:[4,o.getFormattingEditsAfterKeystroke(i.toString(),s,n,K._convertOptions(r))];case 2:return!(a=l.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return u._convertTextChanges(e,t)}))]}}))}))},t}(K),V=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return h(this,void 0,void 0,(function(){var r,i,s,o,a,u,l,c=this;return m(this,(function(d){switch(d.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),s=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=K._convertOptions(e.getOptions()),a=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return u=d.sent(),e.isDisposed()?[2]:[4,u.getCodeFixesAtPosition(r.toString(),i,s,a,o)];case 2:return!(l=d.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:l.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return c._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,s=n.changes;i<s.length;i++)for(var o=0,a=s[i].textChanges;o<a.length;o++){var u=a[o];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(K),W=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return g(r,n),r.prototype.provideRenameEdits=function(n,r,i,s){return h(this,void 0,void 0,(function(){var s,o,a,u,l,c,d,p,f,g,h,b;return m(this,(function(m){switch(m.label){case 0:return s=n.uri,o=s.toString(),a=n.getOffsetAt(r),[4,this._worker(s)];case 1:return u=m.sent(),n.isDisposed()?[2]:[4,u.getRenameInfo(o,a,{allowRenameOfImportPath:!1})];case 2:if(!1===(l=m.sent()).canRename)return[2,{edits:[],rejectReason:l.localizedErrorMessage}];if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");return[4,u.findRenameLocations(o,a,!1,!1,!1)];case 3:if(!(c=m.sent())||n.isDisposed())return[2];for(d=[],p=0,f=c;p<f.length;p++){if(g=f[p],h=t.parse(g.fileName),!(b=e.getModel(h)))throw new Error("Unknown URI "+h+".");d.push({resource:h,edit:{range:this._textSpanToRange(b,g.textSpan),text:i}})}return[2,{edits:d}]}}))}))},r}(w);function j(e){E=z(e,"typescript")}function H(e){N=z(e,"javascript")}function B(){return new Promise((function(e,t){if(!N)return t("JavaScript not registered!");e(N)}))}function U(){return new Promise((function(e,t){if(!E)return t("TypeScript not registered!");e(E)}))}function z(e,t){var n=new p(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=new S(r);return s.registerCompletionItemProvider(t,new k(r)),s.registerSignatureHelpProvider(t,new D(r)),s.registerHoverProvider(t,new F(r)),s.registerDocumentHighlightProvider(t,new I(r)),s.registerDefinitionProvider(t,new A(i,r)),s.registerReferenceProvider(t,new P(i,r)),s.registerDocumentSymbolProvider(t,new T(r)),s.registerDocumentRangeFormattingEditProvider(t,new M(r)),s.registerOnTypeFormattingEditProvider(t,new R(r)),s.registerCodeActionProvider(t,new V(r)),s.registerRenameProvider(t,new W(r)),new x(i,e,t,r),r}export{B as getJavaScriptWorker,U as getTypeScriptWorker,H as setupJavaScript,j as setupTypeScript};
