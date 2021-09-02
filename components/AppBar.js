import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = (props) => {
    const _goBack = () => props.navigation.goBack()

    const _handleSearch = () => props.navigation.openDrawer();

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={{ backgroundColor: '#000000' }}>
            {
                (props.back === "true") ?
                    <Appbar.BackAction onPress={_goBack} />
                    :
                    <Appbar.Action icon="menu" onPress={_handleSearch} />

            }

            <Appbar.Content title={props.title} />
            {/* <Appbar.Content title={props.title} subtitle={props.subtitle} /> */}
            {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
            {/* <Appbar.Action icon="dots-horizontal" onPress={_handleMore} /> */}
        </Appbar.Header>
    );
};

export default AppBar;