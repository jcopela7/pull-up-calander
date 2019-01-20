import React, { Component } from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";

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
			<div>
			<ReactTable data={data} columns={[
			{
				Header:'Date',
				accessor: 'date',
				Footer:(
					<span>
					<strong> test </strong>
					</span>
					)
			},
			{
				Header:'Jon',
				accessor: 'jon',
				Footer:'Total: ' + sum[0]

			},
			{
				Header:'Brandon',
				accessor: 'brandon',
				Footer:'Total: ' + sum[1]
			},
			{
				Header:'Paul',
				accessor: 'paul',
				Footer:'Total: ' + sum[2]
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