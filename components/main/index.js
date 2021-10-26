import React, { Component } from 'react';
import {ScrollView, View, StyleSheet, FlatList } from 'react-native';
import Category from './category/index';

export default class Main extends Component {

    static navigationOptions = {
        title: 'Select Category',
        headerLeft: null
    };

    constructor(props) {
        super(props)

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.categories = [
            { text: "General Knowledge", image: "../../assets/gk.png", category: "9"},
            { text: "Books", image: "../../assets/book.png", category: "10" },
            { text: "Movies", image: "../../assets/movie.png", category: "11" },
            { text: "Music", image: "../../assets/music.png", category: "12" },
            { text: "Television", image: "../../assets/tv.png", category: "14" },
            { text: "Video Games", image: "../../assets/game.png", category: "15" },
            { text: "Science & Nature", image: "../../assets/nature.png", category: "17" },
            { text: "Computers", image: "../../assets/computer.png", category: "18" },
            { text: "Geography", image: "../../assets/earth.png", category: "22" },
            { text: "History", image: "../../assets/history.png", category: "23" },
            { text: "Art", image: "../../assets/art.png", category: "25" },
            { text: "Sport", image: "../../assets/sport.png", category: "21" },
            { text: "Animals", image: "../../assets/animal.png", category: "27" },
            { text: "Vehicles", image: "../../assets/car.png", category: "28" },];

        this.state = {
            dataSource: this.ds.cloneWithRows(this.categories),
        };

        this.renderRow = this.renderRow.bind(this)
    }

    componentDidMount() {
        console.log('asasasas')
        this.setState({
            dataSource: this.state.dataSource
        });
    }

    renderRow(rowData) {
        return <Category text={rowData.text} image={rowData.image} category={rowData.category} navigation={this.props.navigation}/>
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <FlatList
                        style={{ paddingBottom: 32, paddingTop: 32 }}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});