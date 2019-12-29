/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, Colors } from 'react-native';
import { Button } from 'react-native-elements'

import { connect } from 'react-redux'

import { StoreItem } from './redux_src/action'
import store from './redux_src/store'

class Home extends Component {

    constructor(props) {
        super(props)
        //...
    }

    render() {
        return (
            <>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>Selamat datang di TokoATK</Text>
                    <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
                        <Text style={{ textAlignVertical: "center" }}>Nama Barang: </Text>
                        <TextInput
                            placeholder="masukan nama barang"
                            onChangeText={(_) => {
                                this.setState({
                                    nama: _
                                })
                            }}
                        >
                        </TextInput>
                    </View>
                    <Button
                        title="Tambah Barang"
                        onPress={() => {
                            this.props.addItem(this.state.nama)
                        }}
                    />
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        title="Daftar Barang"
                        onPress={() => {
                            this.props.navigation.navigate('ListItem')
                        }}
                    />

                    <View style={{ padding: 20 }}>
                        <View style={{ width: '100%', height: 3, backgroundColor: 'black' }} />
                        <Text style={styles.list_barang}>Daftar Barang</Text>
                        <Text style={{ fontSize: 15 }}>{this.props.action.data}</Text>
                    </View>
                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        padding: 20,
    },
    list_barang: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        textDecorationLine: 'underline',
        marginTop:10
    }
});

// MENGUBAH STATE MENJADI PROPS
const mapStateToProps = (state) => {
    const { action, prevState } = state
    return { action }
}
/////////////////////////////////////


// DISPATCH KE PROPS 
const mapDispatchToProps = (dispatch) => ({
    addItem: (params) => dispatch(StoreItem(params))
})
////////////////////////////////////


export default connect(mapStateToProps, mapDispatchToProps)(Home)