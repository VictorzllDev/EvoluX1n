// Função para alternar entre os modos escuro e claro
function toggleDarkLightMode() {
    const iframeContent = document.querySelector('iframe').contentDocument;
    const fundo = iframeContent.querySelector('.reveal');
    
    fundo.style.transition = 'background 1s';

    if (fundo.style.background === '#141414' || fundo.style.background === 'rgb(20, 20, 20)') {
        fundo.style.background = '#FFFFFF';
    } else { 
        fundo.style.background = '#141414'; 
    }
}

// Função para avançar para o próximo momento
function goToNextMoment() {
    const iframeContent = document.querySelector('iframe').contentDocument;
    const btnIframe = iframeContent.querySelector('.btn-avanca-momento');
    
    btnIframe.click();
}

// Adicionar evento de clique para alternar entre modos escuro e claro
const btnDarkLight = document.querySelector('.dark-light');
btnDarkLight.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleDarkLightMode
    });
});

// Adicionar evento de clique para avançar para o próximo momento
const btnPM = document.querySelector('.PM');
btnPM.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: goToNextMoment
    });
});

// Avançar para o próximo momento com seta direita
addEventListener("keydown", async (e) => {
  if (e.key == "ArrowRight") {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: goToNextMoment
    })
  }
});
