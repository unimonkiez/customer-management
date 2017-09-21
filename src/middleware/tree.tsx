import rootActions from '../action/root';
import { getRoot } from '../common/node-api';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Component } = React;

interface props {
    store: any,
    actions: any
}

export default WrappedComponent => connect(
    store => ({
        store: store.root
    }),
    dispatch => ({
        actions: bindActionCreators(rootActions, dispatch)
    })
)(
    ({ store, actions, ...otherProps }: props) => {

        const { id, inProgress } = store;
        const { getId, getIdSuccess, getIdFailure } = actions;

        if (!id && !inProgress) {
            getRoot()
            .then(data => {
                getIdSuccess(data);
            })
            .catch(err => {
                getIdFailure(err);
            });
            getId();
        }

        return (
            <WrappedComponent {...otherProps} rootId={id} isFetchingRootId={inProgress} />
        )
    }
);
