
 import React from 'react';
 import ReactDOM from 'react-dom/client';
import * as RN from 'react-native';
 
 const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(
   <React.StrictMode>
     <div>Olá Mundo 4!</div>
   </React.StrictMode>
 )


RN.AppRegistry.registerComponent('App', () => App);

RN.AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
