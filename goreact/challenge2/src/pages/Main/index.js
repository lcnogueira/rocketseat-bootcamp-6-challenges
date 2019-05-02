/* eslint-disable max-len */
import React, { Component } from 'react';
import { saveLocalRepos, getLocalRepos } from '../../utils/StorageUtils';
import { fromNow } from '../../utils/DateUtils';
import { fetchRepo } from '../../utils/ApiUtils';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  componentDidMount() {
    const repositories = getLocalRepos();
    this.setState({ repositories });
  }

  removeRepo = async (id) => {
    // Remove repo from the list
    const newList = this.state.repositories.filter(repo => repo.id !== id);

    // Save to localStorage
    saveLocalRepos(newList);

    this.setState({ repositories: newList });
  };

  updateRepo = async (id) => {
    const repository = this.state.repositories.find(repo => repo.id === id);

    try {
      // Fetch updated repo
      const updatedRepo = await fetchRepo(repository.full_name);

      // Format the date
      updatedRepo.lastCommit = fromNow(repository.pushed_at);

      // Update the repos list
      const updatedList = this.state.repositories.map(repo => (repo.id === updatedRepo.id ? updatedRepo : repo));

      // Save to localStorage
      saveLocalRepos(updatedList);

      this.setState({
        repositories: updatedList,
        repositoryInput: '',
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  addRepo = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      // Fetch the new repo
      const repository = await fetchRepo(this.state.repositoryInput);

      // Format the date before doing setState (performance)
      repository.lastCommit = fromNow(repository.pushed_at);

      // Get current repos from localStorage
      const localRepos = getLocalRepos();

      // Save to localStorage the new list
      saveLocalRepos([...localRepos, repository]);

      this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryInput: '',
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  onChange = e => this.setState({ repositoryInput: e.target.value, repositoryError: false });

  render() {
    const {
      repositoryError, repositoryInput, repositories, loading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.addRepo}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={this.onChange}
          />
          <button type="submit" className="bg-secondary">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>
        <CompareList
          repositories={repositories}
          removeRepo={this.removeRepo}
          updateRepo={this.updateRepo}
        />
      </Container>
    );
  }
}
