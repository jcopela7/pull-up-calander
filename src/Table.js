import React, { Component } from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import './table.css';
import Moment from 'moment';

class Table extends Component{
	constructor(props){
		super(props);
	}



	render(){
		const data =this.props.data;
		
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
				id: 'jon',
				accessor: d => {
					if (d.jon===-1){
						return("R.C")
					}
					else{
						return(d.jon)
					}
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[0]}
					</span>
					)
			},
			{
				Header:'Brandon',
				id: 'brandon',
				accessor: d => {
					if (d.brandon===-1){
						return("R.C")
					}
					else{
						return(d.brandon)
					}
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[1]}
					</span>
					)
			},
			{
				Header:'Paul',
				id: 'paul',
				accessor: d => {
					if (d.paul===-1){
						return("R.C")
					}
					else{
						return(d.paul)
					}
				},
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