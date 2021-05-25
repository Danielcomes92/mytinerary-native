import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import itinerariesActions from '../../redux/actions/itinerariesActions'
import Comment from './Comment'

const Comments = (props) => {
    const {userComments, renderUserLikesComments} = props
    const [message, setMessage] = useState({
        message: ''
    })

    const [comments, setComments] = useState(props.comments)

    const handleMessage = (e) => {
        setMessage({
            message: e.target.value
        })
    }
    
    const sendCommentObj = async (e) => {
        e.preventDefault();
        let commentObj;
        let response;

        if(props.userLogged) {
            if(message.message.length > 0) {
                commentObj = {
                    message: message.message,
                    itinerary_id: props.id,
                    token: props.userLogged.token
                }
                response = await props.handleComments(commentObj)
                setComments(response.data.response.comments)
                renderUserLikesComments()
                setMessage({message: ''})
            } else {
                alert('The message is empty')
            }
        } else {
            alert('You must be logged in to comment')
        }
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Reviews & Experiences</Text>

            {/* Chat */}
            <View style={styles.chatContainer}>
                {
                    comments.length > 0 && comments.map(comment => {
                        return <Comment key={comment._id} setComments={setComments} userComments={userComments} setMessage={setMessage} comment={comment} />
                    })
                }
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    chatContainer: {
        height: 250,
        width: '95%',
        backgroundColor: 'red'
    },
    mainContainer: {
        alignItems: 'center',
    },
    text: {
        color: '#cecece',
        marginHorizontal: 6
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20
    },
})


const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    handleComments: itinerariesActions.handleComments,
    getCityItineraries: itinerariesActions.getCityItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);