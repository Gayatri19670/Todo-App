import React from 'react'

export const Footer = () => {
    let footerStyle = {
        // position:"relative",
        top: "100vh",
        // width: "1160px"
       
    }
    return (
        <footer className="bg-dark text-light my-5" style={footerStyle}>
            <p>
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
