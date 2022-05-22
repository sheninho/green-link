import * as React from 'react';
import { Appbar, Provider } from 'react-native-paper';
import styles from './Accueil.style';
import { View, Divider, Text } from 'react-native';
import { Menu } from 'react-native-paper'



const Accueil = () => {
    const [menuVisible, setMenuVisible] = React.useState(false);

    const openMenu = () => setMenuVisible(true);

    const closeMenu = () => setMenuVisible(false);

    return (
        <View>
            <Appbar.Header style={styles.actionBar}>
                <Appbar.Action icon="menu" onPress={openMenu} />
                <Appbar.Content style={styles.actionContent} title="GreenLink" />
                <Appbar.Action icon="magnify" onPress={() => { }} />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Appbar.Header>
            <Provider>
                <View
                    style={{
                        paddingTop: 50,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <Menu
                        visible={menuVisible}
                        onDismiss={closeMenu}
                        anchor={<Text></Text>}>
                        <Menu.Item onPress={() => { }} title="Item 1" />
                        <Menu.Item onPress={() => { }} title="Item 2" />
                        <Divider />
                        <Menu.Item onPress={() => { }} title="Item 3" />
                    </Menu>
                </View>
            </Provider>

        </View>
    );
};

export default Accueil;
