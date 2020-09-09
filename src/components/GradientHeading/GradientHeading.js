import React, {Component} from 'react'
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'


class GradientHeading extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props, context) {
        super(props, context);
    }

    render(){
        const {children, className} = this.props
        return(
            <div className={styles.box}>
                <h1 className={`${styles.gradientText} ${className}`}>{children}</h1>
            </div>
        )
    }
}


export default withTranslation()(GradientHeading);
