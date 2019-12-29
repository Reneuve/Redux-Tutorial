import React, { Component } from "react";
import { Text, StyleSheet,View } from "react-native";

import { connect } from 'react-redux'

class ListItem extends Component {
    render() {
        return (
            <>
                <View style={{ padding: 20 }}>
                    <View style={{ width: '100%', height: 3, backgroundColor: 'black' }} />
                    <Text style={styles.list_barang}>Daftar Barang</Text>
                    <Text style={{ fontSize: 15 }}>{this.props.action.data}</Text>
                </View>
            </>
        )
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
        marginTop: 10
    }
});

// MENGUBAH STATE MENJADI PROPS
const mapStateToProps = (state) => {
    const { action, prevState } = state
    return { action }
}
/////////////////////////////////////


export default connect(mapStateToProps)(ListItem)