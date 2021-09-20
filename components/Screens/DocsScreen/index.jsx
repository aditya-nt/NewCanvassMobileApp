// import { bindActionCreators } from "@reduxjs/toolkit";
import React, { Component, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { clat_doc, clat_sections } from "../../../slices";
import WebView from 'react-native-webview'


export default function DocsScreen({ navigation }) {


    const currentLink = useSelector(state => state.clat_doc.currentLink)

    console.log(currentLink)
    return (<>

        <WebView source={{ uri: `${currentLink}` }}></WebView>


    </>
    )
}

