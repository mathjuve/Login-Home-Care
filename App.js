import React from 'react'
import {StatusBar} from 'react-native'


import PageLogin from './src/pages/Login'

export default function App(){
  return (
<>
<StatusBar backgroundColor='#006557' barStyle="light-content"/>
    <PageLogin />
     </>
  );
}

