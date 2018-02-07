import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View,
    Alert
} from 'react-native'

import styleUtils from '../../Styles'
import NavbarComp from '../../Components/NavBar'
import Editor from '../../Components/Editor'

export default class FeedbackView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    
    componentWillMount() {
        this.props.route.sendFeedback = this.sendFeedback.bind(this)
    }

    render() {
        return (
            <View style={[styles.container, styleUtils.containerShadow]}>
                <NavbarComp route={this.props.route} navigator={this.props.navigator}/>  
                <Editor
                    enableTools={'emotion'}
                    onChangeText={this.onChangeText.bind(this)} 
                    placeholder={'Hi, Any suggestion to tell us?'}
                    text={this.state.text}/>    
            </View> 
        )
    }
    
    sendFeedback() {
        Alert.alert(
            'Thank your for your feedback',
            this.state.text,
            [
                {text: 'OK', onPress: () => this.props.navigator.pop()}
            ]
        )
    }
    
    onChangeText(text) {
        this.setState({    
            text: text
        })
    }
}

const styles = StyleSheet.create({
    container: {
        ...styleUtils.containerBg,
        flexGrow: 1
    }
})