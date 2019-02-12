import React from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import './MainPage.css';

export default class MainPage extends React.Component{

	componentDidMount(){
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchText.toLowerCase());
		});
	}

	render(){
		const {onSearchChange, isPending} = this.props;

		if(isPending){
			return <h1>Loading...</h1>;
		}else{
			return (
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={this.filterRobots()}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
};
