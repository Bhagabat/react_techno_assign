import axios from 'axios';

export const _getMarkList =(payload)=>{
	return {
		type:'GET_MARK_LIST',
		payload:payload
	}
}
export const getMarkList = ()=>{
	return (dispatch,getState) =>{
		var data = [
			{
			  "name": "rajiv",
			  "marks": {
				"Maths": 18,
				"English": 21,
				"Science": 45
			  },
			  "rollNumber": "KV2017-5A2"
			},
			{
			  "name": "abhishek",
			  "marks": {
				"Maths": 43,
				"English": 30,
				"Science": 37
			  },
			  "rollNumber": "KV2017-5A1"
			},
			{
			  "name": "zoya",
			  "marks": {
				"Maths": 42,
				"English": 31,
				"Science": 50
			  },
			  "rollNumber": "KV2017-5A3"
			}
		  ];
		  data = data.map(d=>{
			  var total = d.marks['Maths'] + d.marks['English'] +d.marks['Science'],
				status = d.marks['Maths'] < 20 || d.marks['English'] < 20 || d.marks['Science'] < 20 ? 'Fail':'Pass';
			  d.status = status;
			  d.total = total; 
			  return d;

		  });
		  data.sort((a,b)=>{
			  return a.total > b.total ? -1:1;
		  })
		  data[0].status = 'Topper';
		  data.sort((a,b)=>{
			  return a.name > b.name ? 1: -1;
		  })
		dispatch(_getMarkList(data));
	}
}
