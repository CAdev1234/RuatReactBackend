/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



import React, { Suspense } from 'react'
import { ReactDOM, render } from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import Main from './src/main'

render(
    // <SidebarProvider>
    //   <Suspense fallback={<ThemedSuspense />}>
    //     <Windmill usePreferences>
        //   <Main />
    //     </Windmill>
    //   </Suspense>
    // </SidebarProvider>,
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById('app')
)
