import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import itinerariesActions from '../../redux/actions/itinerariesActions'

const Comment = (props) => {

    const {userComments} = props
    let token;
    if(props.userLogged) {
        token = props.userLogged.token;
    }
    const {_id, user, userImg, message} = props.comment
    const [updateMessage, setUpdateMessage] = useState(false)
    const [newMessage, setNewMessage] = useState(message)
    const [isOwner, setIsOwner] = useState(false)
    const [showModal, setShowModal] = useState(false);

    useEffect( () => {
        userComments.length > 0 && setIsOwner(userComments)
    }, [])

    let validateOwnerComment = userComments.some(id => id === _id)

    const handleNewMessage = (e) => {
        setNewMessage(e.target.value)
    }

    const sendNewMessage = async () => {
        if(props.userLogged) {
            if(message.length > 0) {
                const response = await props.updateComment(_id, token, newMessage)
                if(response.data.success) {
                    props.setComments(response.data.response)
                } else {
                    alert(response.data.error)
                }
                setUpdateMessage(!updateMessage)
            } else {
                alert('The message is empty')
            }
        } else {
            alert('You must be logged in to update a message')
        }
    }
    
    const removeComment = async () => {
        if(props.userLogged) {
            const response = await props.removeComment(_id, token)
            if(response.data.success) {
                toast.success('Message removed')
                props.setComments(response.data.response)
            } else {
                alert(response.data.error)
            }
        } else {
            alert('You must be logged in to remove a message')
        }
    }

    return (
        <View>
            
        </View>
    )
}

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    removeComment: itinerariesActions.removeComment,
    updateComment: itinerariesActions.updateComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);