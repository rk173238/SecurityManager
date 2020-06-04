import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react';
import L from 'leaflet';
const LLmap=()=>{
    return {
        "ap-southeast-1a":[15.476150, -88.016750],
        "ap-southeast-1":[-20.434811, -54.528179],
        "us-east-2":[26.712379,-81.822350],
        "us-east-1":[26.712931,-81.822594]
    }
}
const defineRadius=(total,locationCount)=>{
        return (locationCount*100/total)*20000
}
class Map extends Component{

    componentDidMount() {
        // create map
        this.drawMap()
    }
    drawMap=()=>{
        var mymap = L.map('map').setView([22.5726, 88.3639], 4);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Made With <span style="color:blue;font-size:20px"/>&#9829</span> For SMC3.0',
		id: 'mapbox/streets-v11'
        }).addTo(mymap);

        let data=this.props.data
        var totalCount=0;
        Object.keys(data).map(l=>{
            totalCount+=data[l].ec2+data[l].s3
        })
        console.log(data)
        Object.keys(data).map(location=>{
            L.circle(LLmap('LL',0)[location], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: defineRadius(totalCount,data[location].ec2+data[location].s3)
                }).addTo(mymap);
        })

        var circle2 = L.circle([12.9716, 77.5946], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50000
            }).addTo(mymap);
    }
    
      render() {
        return <div id="map" style={{height:'100%',width:'100%'}}></div>
      }
}
export default Map;
