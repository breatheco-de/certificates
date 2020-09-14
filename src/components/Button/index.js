import React,{useState, useEffect} from "react"
import { Button } from "react-bootstrap";
import Icon from "../Icon/index";
import { Link } from "react-router-dom";
import styles from './style.scss';
import PropTypes from 'prop-types';

const SmartButton = ({ children, variant, onClick, icon, to, className,onHover, ...rest }) => {
     
     return(
         <>
             {
                 to ? 
                    <Link to={to} className={`${!onHover ? "": "btn-outline-" + variant} shadow-one btn ${className}`} {...rest}>
                          {children}
                        {icon ? <Icon name={icon} size='md' /> : ""}
                    </Link> 
                   :
                <Button variant={`${!onHover ? "": "outline-" + variant} shadow-one btn ${className}`} onClick={onClick} {...rest}>
                    {children}
                    {icon ? <Icon name={icon} size='md' /> : ""}
                </Button> 
             }
         </>
        
    )
}

SmartButton.HoverLayer = ({children, variant = "", ...rest}) => <div className={`hover-layer ${variant}`} {...rest}>{children}</div>
SmartButton.Label = ({children, icon, variant = "", ...rest}) => <>{icon ? <div className={`label-content ${variant}`} {...rest}><div><Icon name={icon} size='md' /></div><label>{children}</label></div> : <label className={`button-label ${variant}`} {...rest}>{children}</label>}</>
SmartButton.Section = ({children, variant = "",className, ...rest}) => <div className={`button-section ${variant} ${className}`} {...rest}>{children}</div>

SmartButton.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
    onHover: PropTypes.bool
};

SmartButton.defaultProps = {
    variant: 'primary-light',
    children: null,
    icon: null,
    to:null,
    className: "",
    onHover: true
};

export default SmartButton;