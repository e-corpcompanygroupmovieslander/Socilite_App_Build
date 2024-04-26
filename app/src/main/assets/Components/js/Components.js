const WIDGET=(e,A)=>{DISPLAY("",` <div id='${A}' class='ScrollView'></div>`),DECLARATION(".ScrollView",(A)=>{CONDITION(e,()=>DISPLAY(A,e),()=>LOADER(A,"HomeLoader"))})};
const BACKHEADERWIDGET=(e,A,o,n)=>{DISPLAY("",` <header class='Header'><img class='BackIcon' src='${WHITEBACKICON}' alt="Back"><div class='AppHeader'></div></header><div id='${n}' class='NavigatorDiv'></div>`),CLICKED(".BackIcon",()=>{e()}),DECLARATION(".AppHeader",(e)=>{CONDITION(A,()=>DISPLAY(e,A),()=>DISPLAY(e,""))}),DECLARATION(".NavigatorDiv",(e)=>{CONDITION(o,()=>DISPLAY(e,o),()=>LOADER(e,"HomeLoader"))})}; 
const BACKFOOTERWIDGET=(e,A,o,n)=>{DISPLAY("",` <footer class='Header'><img class='BackIcon' src='${WHITEBACKICON}' alt="Back"><div class='AppHeader'></div></footer><div class='FooterNavigatorDiv' id='${n}'></div>`),CLICKED(".BackIcon",()=>{e()}),DECLARATION(".AppHeader",(e)=>{CONDITION(A,()=>DISPLAY(e,A),()=>DISPLAY(e,""))}),DECLARATION(".FooterNavigatorDiv",(e)=>{CONDITION(o,()=>DISPLAY(e,o),()=>LOADER(e,"HomeLoader"))})};FOOTERWIDGET=(e,A,o)=>{DISPLAY("",` <footer class='Header'></footer><div id='${o}' class='FooterNavigatorDiv'></div>`),DECLARATION(".Header",(e)=>{CONDITION(A,()=>DISPLAY(e,A),()=>DISPLAY(e,""))}),DECLARATION(".FooterNavigatorDiv",(A)=>{CONDITION(e,()=>DISPLAY(A,e),()=>LOADER(A,"HomeLoader"))})};
const ROUNDFOOTERWIDGET=(e,A,o)=>{DISPLAY("",` <div id='${o}' class='ScrollView'></div><footer class='RoundFooter'></footer>`),DECLARATION(".ScrollView",(A)=>{CONDITION(e,()=>DISPLAY(A,e),()=>LOADER(A,"HomeLoader"))}),DECLARATION(".RoundFooter",(e)=>{CONDITION(A,()=>DISPLAY(e,A),()=>DISPLAY(e))})};
const HEADERWIDGET=(e,A,o)=>{DISPLAY("",` <header class='Header'></header><div id='${o}' class='NavigatorDiv'></div>`),DECLARATION(".Header",(A)=>{CONDITION(e,()=>DISPLAY(A,e),()=>DISPLAY(A,""))}),DECLARATION(".NavigatorDiv",(e)=>{CONDITION(A,()=>DISPLAY(e,A),()=>LOADER(e,"HomeLoader"))})};
const MESSAGE=(e)=>{VIBRATION(500),CREATEELEMENT("div","MessageDiv",(A)=>{DISPLAY(A,` <h2 class='MessageTitle'>${e}</h2>`),setTimeout(()=>{STYLED(A,"display","none")},2e3),ADD("",A)})};
const LOADER=(e,A)=>{DISPLAY(e,` <img id='${A}' src='${LOADERICON}' class='LoadingIcon' />`)};
const ORIGIN=(e,A)=>{DISPLAY(e,A)};
const ALERTBOX=(e)=>{VIBRATION(500),CREATEELEMENT("div","AlertBox",(A)=>{STYLED(A,"background",localStorage.getItem("AppColour")),DISPLAY(A,` <h1 class='AlertTitle'>Alert</h1><h2 id='AlertMessage' class='MessageTitle'>${e}</h2><div class='AlertBoxOptions'><h2 onclick='CloseAlert()' class='MessageTitle'>Cancel</h2><h2 onclick='CloseAlert()' class='MessageTitle'>Agree</h2></div>`),(CloseAlert=()=>{STYLED(A,"display","none")}),ADD("",A)})};
const CONFIRMBOX=(e,A)=>{VIBRATION(500),CREATEELEMENT("div","AlertBox",(o)=>{STYLED(o,"background",localStorage.getItem("AppColour")),DISPLAY(o,` <h1 class='AlertTitle'>Confirm</h1><h2 id='AlertMessage' class='MessageTitle'>${e}</h2><div class='AlertBoxOptions'><h2 onclick='CloseAlert()' class='MessageTitle'>Cancel</h2><h2 onclick='ConfirmAlert()' class='MessageTitle'>Agree</h2></div>`),(CloseAlert=()=>(STYLED(o,"display","none"),A(!1))),(ConfirmAlert=()=>(STYLED(o,"display","none"),A(!0))),ADD("",o)})}; 
const PROMPTBOX=(e,A)=>{VIBRATION(500),CREATEELEMENT("div","AlertBox",(o)=>{STYLED(o,"background",localStorage.getItem("AppColour")),DISPLAY(o,` <h1 class='AlertTitle'>Prompt</h1><h2 id='AlertMessage' class='MessageTitle'>${e}</h2><input class='PromptboxInput' type='text' placeholder='Enter Your Option' /><div class='AlertBoxOptions'><h2 onclick='CloseAlert()' class='MessageTitle'>Cancel</h2><h2 onclick='ConfirmAlert()' class='MessageTitle'>Agree</h2></div>`),(CloseAlert=()=>(STYLED(o,"display","none"),A(!1))),(ConfirmAlert=()=>{const e=document.querySelector(".PromptboxInput");return STYLED(o,"display","none"),A(e.value)}),ADD("",o)})}