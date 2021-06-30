import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"                    alt=""
                />
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder='Search' type='text'/>
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize= 'large'/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize= 'large'/>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon fontSize= 'large'/>
                </div>
                <div className="header__option">
                    <StorefrontIcon fontSize= 'large'/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize= 'large'/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src = 'https://images4.fanpop.com/image/photos/18200000/Ted-Mosby-ted-mosby-18275839-426-640.jpg'/>
                    <h4>Ted</h4>
                </div>
                <IconButton>
                    <AddRoundedIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
