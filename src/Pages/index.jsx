import React,{Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import { NavLink,Switch,Route,Redirect } from 'react-router-dom'
import Header from '../Compontents/admission'
export default class Page extends Component{
    render(){
        return(
            <div>
           <Header></Header>
            </div>
         )
    }
}






