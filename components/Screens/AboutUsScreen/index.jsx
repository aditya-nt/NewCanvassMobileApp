// import { bindActionCreators } from "@reduxjs/toolkit";
import React, { Component, useEffect, useState } from "react";

import WebView from 'react-native-webview'


export default function AboutUsScreen({ navigation }) {


    return (<>

        <WebView source={{ uri: `https://newscanvassapp.web.app/aboutus#` }}></WebView>


    </>
    )
}

