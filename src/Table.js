import React, { Component } from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import './table.css';
import Moment from 'moment';

class Table extends Component{
	constructor(props){
		super(props);
		this.state={
			data: [{
			date: "01-12-2019",
			jon: 100,
			brandon: 32,
			paul: 34
		},
		{
			date: "01-13-2019",
			jon: 100,
			brandon: 32,
			paul: 34
		},
		{
			date: "01-14-2019",
			jon: 100,
			brandon: 32,
			paul: 34
		}]
		
	};

	}

	componentDidMount(){
		fetch("/PullUps")
			.then(res => res.json())
			.then((data) => {
				this.setState({
					data: data
				});
			});
	}

	render(){
		const data =this.state.data;
		
		//calculate pull up sum
		let sum=[0,0,0];
		for (let i=0; i<data.length;i++){
			sum[0]+=data[i].jon
			sum[1]+=data[i].brandon
			sum[2]+=data[i].paul
		}



		return(
			<div className="Table">
			<ReactTable data={data} columns={[
			{
				Header:'Date',
				id: 'date',
				accessor: d => {
					return Moment(d.date)
						.format('MMMM Do YYYY')
				}

			},
			{
				Header:'Jon',
				accessor: 'jon',
				Footer:(
					<span>
					<strong> Total: </strong> {sum[0]}
					</span>
					)
			},
			{
				Header:'Brandon',
				accessor: 'brandon',
				Footer:(
					<span>
					<strong> Total: </strong> {sum[1]}
					</span>
					)
			},
			{
				Header:'Paul',
				accessor: 'paul',
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					)
			}
			]}
			defaultPageSize={30}
			className="-striped -highlight"
			/>
			
			</div>
		);
	}

}

export default Table;