import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';

/**
 * Data gotched by MapStateToProps
 */
interface StateProps {
    repositories: Repository[];
}

/**
 * Data gotched by MapDispatchToProps from Redux
 */
interface DispatchProps {
    loadRequest(): void;
}

/**
 * Data from own component
 */
// interface OwnProps{

// }
/**
 * Union of all types to an unique, called Props
 */
type Props = StateProps & DispatchProps; // & OwnProps;

class RepositoryList extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    render() {
        const { repositories } = this.props;
        return (
                <ul>    
                    {repositories.map((repository) =>(
                        <RepositoryItem key={repository.id} repository={repository} />
                    ))}
                </ul>
);
    }
}
const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
