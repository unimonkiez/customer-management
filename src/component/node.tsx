import * as React from 'react';
import ClosedFolderIcon from '../icon/closed-folder';
import ArrowRightIcon from '../icon/arrow-right';
import './node.css.js';

const { Component } = React;

interface props {
    isOpen?: boolean,
    title?: String
}

export default class Node extends Component<props> {
    static defaultProps = {
        isOpen: false
    };

    render() {
        const { isOpen } = this.props;
        return (
            <div className={`component-node${isOpen ? ' open' : ' closed'}`}>
                { this.renderArrow() }
                { this.renderIcon() }
                { this.renderTitle() }
                { this.renderContent() }
            </div>
        );
    }
    private renderArrow(): React.ReactNode {
        return (
            <div className="component-node-arrow">
                <ArrowRightIcon />
            </div>
        )
        
    }

    private renderIcon(): React.ReactNode {
        return (
            <div className="component-node-icon">
                <ClosedFolderIcon />
            </div>
        )
    }

    private renderContent(): React.ReactNode {
        const { isOpen, children } = this.props;

        if (isOpen) {
            return (
                <div className="component-node-content">
                    {children}
                </div>
            )
        } else {
            return null;
        }
    }

    private renderTitle() {
        const { title } = this.props;

        return <div className="component-node-title" data-unittest-id="title">
            {title}
        </div>;
    }
}
