import React,{Component} from 'react'
import { connect } from './react-redux'
import PropTypes from 'prop-types'

class Header extends Component{
    static contextTypes = {
        themeColor: PropTypes.string
    }

   
    render(){
        return(
            <h1 style={{ color: this.props.themeColor }}>react</h1>
        )
    }
}

const mapStateToProps = (state) => {
    // 只需返回state中的themeColor
    return{
        themeColor:state.themeColor
    }
}

Header = connect(mapStateToProps)(Header)

export default Header