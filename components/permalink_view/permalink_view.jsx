// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import Constants from 'utils/constants';
import * as Utils from 'utils/utils';

export default class PermalinkView extends React.PureComponent {
    static propTypes = {
        channelId: PropTypes.string,

        /*
         * Object from react-router
         */
        match: PropTypes.shape({
            params: PropTypes.shape({
                postid: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        returnTo: PropTypes.string.isRequired,
        teamName: PropTypes.string,
        actions: PropTypes.shape({
            focusPost: PropTypes.func.isRequired,
        }).isRequired,
        currentUserId: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {valid: false};
    }

    componentDidMount() {
        this.mounted = true;
        this.doPermalinkEvent(this.props);
        document.body.classList.add('app__body');
    }

    componentDidUpdate(prevProps) {
        const prevPostid = prevProps.match.params.postid;
        const currPostid = this.props.match.params.postid;
        if (prevPostid !== currPostid) {
            this.doPermalinkEvent(this.props);
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    doPermalinkEvent = async (props) => {
        const postId = props.match.params.postid;
        await this.props.actions.focusPost(postId, this.props.returnTo, this.props.currentUserId);
        if (this.mounted) {
            this.setState({valid: true});
        }
    }

    isStateValid = () => {
        return this.state.valid && this.props.channelId && this.props.teamName;
    }

    onShortcutKeyDown = (e) => {
        if (e.shiftKey && Utils.cmdOrCtrlPressed(e) && Utils.isKeyPressed(e, Constants.KeyCodes.L) && this.permalink.current) {
            this.permalink.current.focus();
        }
    }

    render() {
        if (!this.isStateValid()) {
            return (
                <div
                    id='app-content'
                    className='app__content'
                />
            );
        }

        return null;
    }
}
