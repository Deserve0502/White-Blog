import React, { Component, useState } from 'react'
//import ReactDom from 'react-dom'
//import PropTypes from 'prop-types'
import axios from 'axios'
//import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import '../Style/indexHeader.module.css'

import { Affix, Button } from 'antd';
const Demo = () => {
    let [top, setTop] = useState(0);

    return (
        <>
            <Affix
                offsetTop={top}
                style={{
                    position: 'absolute',
                    top: '36px',
                }}
            >
                <div className='headerContain'>
                <div className='headerMind'>
                    <img src="../headerImg/logo.png"
                        style={{ width: '200px', marginLeft: '36px' }}
                    />

                </div>
</div>
            </Affix>

        </>
    )
}


export default class indexHeader extends Component {
    componentDidMount() {
        const url = "/api/user"
        axios.get(url).then(response => {
            if (!response) {
                console.log('Loading')
            } else {
                console.log(response)
            }
        })
    }

    render() {
        return (
            <div>
                <Demo></Demo>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
                <li>6666</li>
            </div>
        )
    }

}


