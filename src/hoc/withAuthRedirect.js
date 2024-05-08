import React from 'react'
import { Navigate } from 'react-router-dom';

export const withAuthRedirect = () => {
    class RedirectComponent extends React.Component {
        render() {
            return <Navigate to={'/Admin'}/>
        }
    }

    return RedirectComponent
}