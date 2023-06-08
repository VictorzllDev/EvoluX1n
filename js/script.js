const btnDarkLight = document.querySelector('.dark-light');
// DARK MODE
btnDarkLight.addEventListener('click', async ()=>{
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: darkLightMode
    });
});

function darkLightMode(){
    const fundo = document.querySelector('iframe').contentDocument.querySelector('.reveal');
    fundo.style.transition = 'background 1s'
    if ( fundo.style.background == '#141414' || fundo.style.background == 'rgb(20, 20, 20)' ) {
        fundo.style.background = '#FFFFFF';
    }
    else{ 
        fundo.style.background = '#141414'; 
    }
};

// PROXIMO MOMENTO
const btnPM = document.querySelector('.PM');
btnPM.addEventListener('click', async ()=>{
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: proximoMomento
    });
});

function proximoMomento(){
    const btnIframe = document.querySelector('iframe').contentDocument.querySelector('.btn-avanca-momento');
    btnIframe.click();
}