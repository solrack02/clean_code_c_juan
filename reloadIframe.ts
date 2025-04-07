
// Detecta se o iframe foi recarregado com novo timestamp
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const timestamp = urlParams.get('t');
  const lastTimestamp = window.localStorage.getItem('lastReloadTimestamp');

  if (timestamp && timestamp !== lastTimestamp) {
    console.log('[iframe] Novo timestamp detectado.');
    window.localStorage.setItem('lastReloadTimestamp', timestamp);
  }
});

// (Opcional) permite que o React envie mensagens via postMessage
window.addEventListener('message', event => {
  if (typeof event.data === 'string' && event.data === 'reload') {
    console.log('[iframe] postMessage: reload recebido.');
    window.location.reload();
  }
});
