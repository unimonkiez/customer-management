import nodeActions from '../action/node';
import { getListByParentId } from '../common/node-api';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const { Component } = React;

interface props {
    store: any,
    actions: any,
    id: string,
    onIsOpenChange?: Function
}

export default WrappedComponent => connect(
    store => ({
        store: store.node
    }),
    dispatch => ({
        actions: bindActionCreators(nodeActions, dispatch)
    })
)(
    ({ store, actions, id, onIsOpenChange, ...otherProps }: props) => {
        const currentNodeStore = store[id] || {} ;

        const { open: isOpen, childIds, inProgress } = currentNodeStore;
        const { open, close, getChildIds, getChildIdsSuccess, getChildIdsFailure } = actions;

        const handleIsOpenChange = () => {
            if (isOpen) {
                close(id);
            } else {
                if (!inProgress && !childIds) {
                    getListByParentId(id)
                    .then(data => {
                        getChildIdsSuccess(id, data);
                    })
                    .catch(err => {
                        getChildIdsFailure(id, err);
                    });
                    getChildIds(id);
                }
                open(id);
            }
            if (onIsOpenChange) {
                onIsOpenChange();
            }
        };

        return (
            <WrappedComponent {...otherProps} id={id} childIds={childIds} isOpen={isOpen} onIsOpenChange={handleIsOpenChange} isFetchingChildIds={inProgress} />
        )
    }
);
