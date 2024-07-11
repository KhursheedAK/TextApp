import React from 'react'

export default function Alert(props) {

    const Capital = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

  return (
    props.alert && <div class="alert alert-success" role="alert">
        <strong> {Capital(props.alert.type)} </strong> : {props.alert.msg}
    </div>
  )
}
