import React,{Component} from 'react'
import Scores from './Scores/Scores';
import Charts from './Charts/Charts';
import {reportService} from '../../../../services/report_service'
import Map from './Map/Map';
import {Container, Row} from 'react-bootstrap';
class CloudDashboard extends Component{

    state={
        data:''
    }
    componentWillMount=()=>{
        // reportService.fetchCloudData().then(res=>{
        //     console.log(res);
        //     this.setState({data:res})
        // })
        this.setState({data:res})
    }
    render(){
        return(
            <div style={{width:'98%',height:'100%',margin:"0 auto"}}>
                {this.state.data?
                    <Container style={{padding:0}} fluid>
                        <Row noGutters>
                            <Scores 
                                awsTotal={this.state.data.awsTotal}
                                ec2Total={this.state.data.ec2Total}
                                s3Total={this.state.data.s3Total}
                                monitoringScore={this.state.data.monitoring}
                                monitoringLow={this.state.data.monitoringLow}
                                storageScore={this.state.data.storage}
                                storageLow={this.state.data.storageLow}
                                encryptionScore={this.state.data.encryption}
                                encryptionLow={this.state.data.encryptionLow}
                            ></Scores>
                        </Row>
                        <Row noGutters>
                            <Charts barData={this.state.data.locationMap} pieData1={this.state.data.vpcDetails} pieData2={this.state.data.securityGroup}></Charts>
                        </Row>
                        <Row noGutters>
                            <div style={{width:'100%',marginTop:20,height:500}}>
                                <Map data={this.state.data.locationMap}></Map>
                            </div>
                        </Row>
                    </Container>
                :null}
                        
                
            </div>
        )
    }
}
export default CloudDashboard;

let res={
    "awsTotal": 54,
    "ec2Total": 46,
    "s3Total": 8,
    "encryption": 0,
    "encryptionLow": 0,
    "monitoring": 0,
    "monitoringLow": 0,
    "storage": 87.5,
    "storageLow": 7,
    "locationMap": {
      "ap-southeast-1a": {
        "ec2": 46,
        "s3": 0
      },
      "ap-southeast-1": {
        "ec2": 0,
        "s3": 5
      },
      "us-east-2": {
        "ec2": 0,
        "s3": 2
      },
      "us-east-1": {
        "ec2": 0,
        "s3": 1
      }
    },
    "vpcDetails": {
      "vpc-47347203": {
        "value": 28,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-22d1cf74cbc3675de",
            "instance_name": "CRS-MSS-TRAPS",
            "instance_details": {
              "image_id": "ami-00b2136b8cbdf7a54",
              "key_name": "SMCDemo",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC 2.0",
              "ena_support": true,
              "instance_id": "i-22d1cf74cbc3675de",
              "launch_time": "2019-06-20 05:47:08+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-025a4652dad7aeb3c",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-09-03 18:44:52+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2bc96b9f39b5a938e",
            "instance_name": "SMC Dev Server 1",
            "instance_details": {
              "image_id": "ami-fd95a081",
              "key_name": "Morphisec",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Morphisec",
              "ena_support": true,
              "instance_id": "i-2bc96b9f39b5a938e",
              "launch_time": "2018-05-30 10:50:24+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-013eeb5fca66184e9",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-05-30 10:50:24+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-27f5a63ef454caa93",
            "instance_name": "Linux Web Server",
            "instance_details": {
              "image_id": "ami-0afce41e503676765",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "FREE WIN 2019",
              "ena_support": true,
              "instance_id": "i-27f5a63ef454caa93",
              "launch_time": "2020-04-14 02:30:40+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.micro",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-03f61d1e7c21bb9a8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-05-21 10:21:48+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only For Win",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-2439d64aa386cebd2",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2439d64aa386cebd2",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2694b7bb17ac2963b",
            "instance_name": "Checkpoint Firewall",
            "instance_details": {
              "image_id": "ami-04385f3f533c85af7",
              "key_name": "PASMC",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "AWS NGFW",
              "ena_support": true,
              "instance_id": "i-2694b7bb17ac2963b",
              "launch_time": "2019-04-10 08:03:00+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-019401f3d4fe50935",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-01-15 09:07:12+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-21c1cc4c75514cc35",
            "instance_name": "PA_SMC",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-21c1cc4c75514cc35",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-05d79d9abf3da448f",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-04 17:12:33+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-26aed5dfea555dfa7",
            "instance_name": "DS-Symantec-2",
            "instance_details": {
              "image_id": "ami-0acd3f636f875f341",
              "key_name": "Qradar1",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Qradar1",
              "ena_support": true,
              "instance_id": "i-26aed5dfea555dfa7",
              "launch_time": "2020-01-07 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "157582262906681561",
              "instance_type": "m4.2xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-06c91ba109f8cac1d",
              "ebs_status": "attached",
              "device_name": "/dev/sdc",
              "attached time": "2019-12-08 16:30:31+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 2
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "7qbh6hc7qenu0b3ikqes7u3gu",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Qradar",
                "sgip_to_port": -1,
                "sgt_key_name": "",
                "sgip_protocol": "icmp",
                "sgt_key_value": "",
                "sgip_from_port": -1,
                "security_groups_id": "sg-2975c2c577ba2a223",
                "sgip_egress_to_port": "",
                "security_groups_name": "Qradar",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2975c2c577ba2a223",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e4c2e27a7bc4353b",
            "instance_name": "TUFIN Server",
            "instance_details": {
              "image_id": "ami-06fdec358a7e119fc",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "DS-VORMETRIC TOKENIZATION SERVER",
              "ena_support": true,
              "instance_id": "i-2e4c2e27a7bc4353b",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-067ad8ce081a14ef5",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-17 08:12:56+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d75f53c5d37b4b68",
            "instance_name": "OpenVPN25",
            "instance_details": {
              "image_id": "ami-f36c568f",
              "key_name": "newsmc",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "EnvisionSMC",
              "ena_support": true,
              "instance_id": "i-2d75f53c5d37b4b68",
              "launch_time": "2018-09-03 18:59:31+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0b459174c221b96c1",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-06-07 05:16:12+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only HTTPS and Port8000",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-277d8f945be3bff34",
                "sgip_egress_to_port": "",
                "security_groups_name": "Envision-SG",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-277d8f945be3bff34",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2fb2ad9f9ac3f6653",
            "instance_name": "EnvisionSMC",
            "instance_details": {
              "image_id": "ami-077364905ac774d42",
              "key_name": "Debian",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC Linux",
              "ena_support": true,
              "instance_id": "i-2fb2ad9f9ac3f6653",
              "launch_time": "2020-01-16 10:56:58+00:00",
              "architecture": "x86_64",
              "client_token": "156318857261339704",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0bb5c2b328b888ef9",
              "ebs_status": "attached",
              "device_name": "/dev/sdb",
              "attached time": "2019-07-15 11:03:15+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "55q52qvgjfpdj2fpfy9mb1lo4",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Secure SG configuration for Linux instances (Default)",
                "sgip_to_port": -1,
                "sgt_key_name": "",
                "sgip_protocol": "icmp",
                "sgt_key_value": "",
                "sgip_from_port": -1,
                "security_groups_id": "sg-2f2f3348fbeb345ea",
                "sgip_egress_to_port": "",
                "security_groups_name": "Linux Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2f2f3348fbeb345ea",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2dcd559452fd458de",
            "instance_name": "SMC Linux",
            "instance_details": {
              "image_id": "ami-0fe0a34ed20d1e95f",
              "key_name": "epo",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Epo Final",
              "ena_support": true,
              "instance_id": "i-2dcd559452fd458de",
              "launch_time": "2020-03-27 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0bb3d7419c225db56",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-06-18 04:21:32+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2c2177995331b7958",
            "instance_name": "Epo Final",
            "instance_details": {
              "image_id": "ami-00acd62cf3bbe586e",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Schedule",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "IN-office-hours",
              "ena_support": true,
              "instance_id": "i-2c2177995331b7958",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-02e5b0761f339f751",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-04-10 13:47:41+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-23eb49748668a529f",
            "instance_name": "DS - Vormetric Key Management",
            "instance_details": {
              "image_id": "ami-053d3a79",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SOLARWINDS",
              "ena_support": true,
              "instance_id": "i-23eb49748668a529f",
              "launch_time": "2018-06-28 13:50:22+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0c8ade9a0a33d23b8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-06-28 13:50:23+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-296d6b1f99c846d3b",
            "instance_name": "Old SMC New Jump Server",
            "instance_details": {
              "image_id": "ami-012799a835ac6a1d0",
              "key_name": "Splunk",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Splunk",
              "ena_support": true,
              "instance_id": "i-296d6b1f99c846d3b",
              "launch_time": "2019-11-19 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-04c84177b4b217a8e",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-05-10 08:34:05+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2171878f53c12b5f2",
            "instance_name": "Splunk",
            "instance_details": {
              "image_id": "ami-de2a2da2",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Trend Micro™ InterScan™ Web Security Virtual Appliance",
              "ena_support": true,
              "instance_id": "i-2171878f53c12b5f2",
              "launch_time": "2018-07-03 07:48:53+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.2xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0149957dda13b9b71",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-07-03 07:48:53+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 8,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2ef5e4ef1fa5bcd1d",
            "instance_name": "IWSVA TREND-MICRO",
            "instance_details": {
              "image_id": "ami-01247b8894d425ad8",
              "key_name": "Qradar2",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "QRadar2",
              "ena_support": true,
              "instance_id": "i-2ef5e4ef1fa5bcd1d",
              "launch_time": "2020-01-07 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0937e85666fdf3c1a",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-12-08 16:36:25+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Qradar",
                "sgip_to_port": -1,
                "sgt_key_name": "",
                "sgip_protocol": "icmp",
                "sgt_key_value": "",
                "sgip_from_port": -1,
                "security_groups_id": "sg-2975c2c577ba2a223",
                "sgip_egress_to_port": "",
                "security_groups_name": "Qradar",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2975c2c577ba2a223",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-27a23399937786eeb",
            "instance_name": "QRadar2",
            "instance_details": {
              "image_id": "ami-0b4dd9d65556cac22",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-27a23399937786eeb",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "158219830343323767",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0cbe04b8e2e89794e",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-20 11:31:47+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "aw0evgkw8e5c1q413zgy5pjce",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-231fe6cc319743786",
            "instance_name": "SOLARWINDS",
            "instance_details": {
              "image_id": "ami-c87c19ab",
              "key_name": "mcafee",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "CRS-MSS-DCS",
              "ena_support": true,
              "instance_id": "i-231fe6cc319743786",
              "launch_time": "2018-05-03 05:04:50+00:00",
              "architecture": "x86_64",
              "client_token": "Rbvpr1503324767874",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0ab4c432b15ed441c",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2017-08-21 14:12:49+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2871c23b13789ff3e",
            "instance_name": "CRS-MSS-DCS",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2871c23b13789ff3e",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0f1028d1dcb5901c3",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-04 07:48:31+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e697a5ac332c39a4",
            "instance_name": "Algosec",
            "instance_details": {
              "image_id": "ami-003dd6755e36b54de",
              "key_name": "forcepoint",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "DS - Forcepoint_1",
              "ena_support": true,
              "instance_id": "i-2e697a5ac332c39a4",
              "launch_time": "2020-02-10 11:10:29+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0cf674d0ffe38f5d6",
              "ebs_status": "attached",
              "device_name": "xvdc",
              "attached time": "2020-02-10 11:10:30+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-26727233eea22b1d1",
            "instance_name": "SMC Dev 2",
            "instance_details": {
              "image_id": "ami-02f8bb5d22d8a6f45",
              "key_name": "SMC_DEV",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC Dev 2",
              "ena_support": true,
              "instance_id": "i-26727233eea22b1d1",
              "launch_time": "2020-02-22 05:00:29+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0fa6857b51e3b03bc",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-01-29 08:30:03+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2c4b74d937286b59c",
            "instance_name": "Sailpoint",
            "instance_details": {
              "image_id": "ami-069532b1546ad2d5b",
              "key_name": "sailpoint",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Sailpoint",
              "ena_support": true,
              "instance_id": "i-2c4b74d937286b59c",
              "launch_time": "2019-08-16 13:28:19+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0c5b1bb4133f089fc",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-07-30 08:38:56+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-25ea3b37f11fa6d13",
            "instance_name": "DS-Forcepoint OCR Server",
            "instance_details": {
              "image_id": "ami-0c898f8cf1a4ae1f5",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Schedule",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "IN-office-hours",
              "ena_support": true,
              "instance_id": "i-25ea3b37f11fa6d13",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-03f62460ce90d7643",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-03-12 09:52:44+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-24bfbf5f4c33133c6",
            "instance_name": "DS-Symantec-1",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "DS-Symantec-1",
              "ena_support": true,
              "instance_id": "i-24bfbf5f4c33133c6",
              "launch_time": "2020-03-25 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-00182e31092aa8c26",
              "ebs_status": "attached",
              "device_name": "xvdc",
              "attached time": "2020-02-04 17:10:55+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d8d552f937ff6a7f",
            "instance_name": "DS-VORMETRIC TOKENIZATION NEW-SERVER",
            "instance_details": {
              "image_id": "ami-06fdec358a7e119fc",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2d8d552f937ff6a7f",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0dd468a0622b2ded8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-03-23 06:42:34+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2b519465de3f3356e",
            "instance_name": "SMC Testing",
            "instance_details": {
              "image_id": "ami-002eb167ffe22436a",
              "key_name": "PASMC",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC Testing",
              "ena_support": true,
              "instance_id": "i-2b519465de3f3356e",
              "launch_time": "2020-03-11 08:49:30+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0019b8982d995e42b",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-07-31 10:27:27+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2491c6ac145d343d4",
            "instance_name": "DS-VORMETRIC DATA SECURITY MANAGER (DSM)",
            "instance_details": {
              "image_id": "ami-0caf76f46730d1590",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2491c6ac145d343d4",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-095d9e03c51b1538f",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-17 07:54:19+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-25bc69c99e34c6f6a",
            "instance_name": "Automation - Siva",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "auto",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Automation - Siva",
              "ena_support": true,
              "instance_id": "i-25bc69c99e34c6f6a",
              "launch_time": "2020-02-14 03:23:03+00:00",
              "architecture": "x86_64",
              "client_token": "158165057930650922",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0ea17d4f28a86c6e8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-14 03:23:04+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for Microsoft Windows Server 2012 R2 version 2020.01.15 provided by Amazon Web Services",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-27337457542ed6a65",
                "sgip_egress_to_port": "",
                "security_groups_name": "Automation-Siva",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-27337457542ed6a65",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-213e78d9932794a5c",
            "instance_name": "Test SMC",
            "instance_details": {
              "image_id": "ami-098731bcd06ea9ca6",
              "key_name": "SMC_Test",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Test SMC",
              "ena_support": true,
              "instance_id": "i-213e78d9932794a5c",
              "launch_time": "2020-03-11 07:45:44+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-08e4884a9b54d7da2",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-11-08 10:03:09+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "vpc-748e1433": {
        "value": 18,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-24eb423df3ca71368",
            "instance_name": "Morphisec",
            "instance_details": {
              "image_id": "ami-b7f388cb",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-c9aaf4ae",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Linux Web Server",
              "ena_support": true,
              "instance_id": "i-24eb423df3ca71368",
              "launch_time": "2019-11-19 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-WebVM-L5DZXF7FE154",
              "instance_type": "t2.micro",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJ24WFGFRMLASPYUFI",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-EnvironmentBootInstanceProfile-QOGR6SOASVWN"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-08d65a177561a2fce",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-17 15:38:05+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-243635b67f2b13d92",
            "instance_name": "FREE WIN 2019",
            "instance_details": {
              "image_id": "ami-0996ff24ed47fa1aa",
              "key_name": "CHKPT",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Checkpoint Firewall",
              "ena_support": true,
              "instance_id": "i-243635b67f2b13d92",
              "launch_time": "2019-12-04 11:41:23+00:00",
              "architecture": "x86_64",
              "client_token": "157545964559313708",
              "instance_type": "c5.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0545b61c0aed41d26",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-12-04 11:41:23+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "263gtcd87e2xefwbacsdwvorx",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for CloudGuard IaaS Next-Gen Firewall w. Threat Prevention & SandBlast BYOL version R80.30-273.494 provided by Check Point Software Technologies, Inc.",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-262c939bcac923945",
                "sgip_egress_to_port": "",
                "security_groups_name": "CloudGuard IaaS Next-Gen Firewall w- Threat Prevention - SandBlast BYOL-R80-30-273-494-AutogenByAWSMP-",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-262c939bcac923945",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-246f93949756946ca",
            "instance_name": "Qradar1",
            "instance_details": {
              "image_id": "ami-017b041b78402f10d",
              "key_name": "CHKPT",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Checkpoint Management",
              "ena_support": true,
              "instance_id": "i-246f93949756946ca",
              "launch_time": "2019-12-04 11:49:28+00:00",
              "architecture": "x86_64",
              "client_token": "157546012952079962",
              "instance_type": "m5.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0539b3a5697541662",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-12-04 11:49:28+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "5y97v3ikpvbmnkbdfpuw4fdra",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Security Management (BYOL) version R80.30-200.520",
                "sgip_to_port": 257,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 257,
                "security_groups_id": "sg-265522c68f3fcb3b2",
                "sgip_egress_to_port": "",
                "security_groups_name": "CloudGuard IaaS Security Management -BYOL--R80-30-200-520",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-265522c68f3fcb3b2",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2c4636129c5c18e7b",
            "instance_name": "Checkpoint Management",
            "instance_details": {
              "image_id": "ami-39ce075a",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "TUFIN Server",
              "ena_support": null,
              "instance_id": "i-2c4636129c5c18e7b",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "152588443514612091",
              "instance_type": "m4.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0129f4def3a94b903",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-05-09 16:47:19+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Access allowed to Linux server",
                "sgip_to_port": 514,
                "sgt_key_name": "",
                "sgip_protocol": "udp",
                "sgt_key_value": "",
                "sgip_from_port": 514,
                "security_groups_id": "sg-7235642b",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only SSH and HTTPS",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-7235642b",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d32c4c73c345ab74",
            "instance_name": "DS-VORMETRIC TOKENIZATION SERVER",
            "instance_details": {
              "image_id": "ami-06392b43220ba520b",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2d32c4c73c345ab74",
              "launch_time": "2020-02-20 14:31:56+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "m3.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-01b9a8894cb0a368b",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-12-12 11:33:01+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "22vojj0fp2kwh56g4ax2u8buj",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Access Server (25 Connected Devices) version 2.7.5 provided by OpenVPN Inc",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-2d4c6f7a3b94a2c96",
                "sgip_egress_to_port": "",
                "security_groups_name": "OpenVPN25",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2d4c6f7a3b94a2c96",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 272,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-21b4d339f693a56a6",
            "instance_name": "SOLARWINDS",
            "instance_details": {
              "image_id": "ami-05ea891d728058367",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Skybox",
              "ena_support": false,
              "instance_id": "i-21b4d339f693a56a6",
              "launch_time": "2019-08-28 15:47:30+00:00",
              "architecture": "x86_64",
              "client_token": "156216206515368327",
              "instance_type": "m4.4xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-07ce78c6991e827f6",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-07-03 13:54:50+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 8,
                "ThreadsPerCore": 2
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "cuxjzadw8h4qjvl0kjpl6sfaj",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for Skybox Security Suite version 9.0.508 provided by Skybox Security",
                "sgip_to_port": 8443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 8443,
                "security_groups_id": "sg-244cb2cf78276f8ce",
                "sgip_egress_to_port": "",
                "security_groups_name": "Skybox Security Suite-9-0-508",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-244cb2cf78276f8ce",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e769b7f72b912847",
            "instance_name": "Skybox",
            "instance_details": {
              "image_id": "ami-b294cbce",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Schedule",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "IN-office-hours",
              "ena_support": true,
              "instance_id": "i-2e769b7f72b912847",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-06e115dca55069dc3",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-18 05:50:18+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-25265a7c",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-25265a7c",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e3eab33d7fb343c9",
            "instance_name": "DS-Log Server",
            "instance_details": {
              "image_id": "ami-053d3a79",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2e3eab33d7fb343c9",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-02c119a011a6ffb63",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-06-28 06:27:03+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-25265a7c",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-25265a7c",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2b83464434a94e133",
            "instance_name": "DS-FORCEPOINT-2 DLP",
            "instance_details": {
              "image_id": "ami-096d7698c78794469",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "OpenVPN",
              "ena_support": false,
              "instance_id": "i-2b83464434a94e133",
              "launch_time": "2020-03-18 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "156077377857097631",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-00bcba80b015ce3ae",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-06-17 12:16:22+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "3ihdqli79gl9v2jnlzs6nq60h",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for OpenVPN Access Server (5 Connected Devices) version 2.6.1 provided by OpenVPN Technologies, Inc.",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-2c3a46e32743335bb",
                "sgip_egress_to_port": "",
                "security_groups_name": "OpenVPN Access Server -5 Connected Devices",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2c3a46e32743335bb",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-22e29827e4f8832ef",
            "instance_name": "OpenVPN",
            "instance_details": {
              "image_id": "ami-0732ce3bf80a626b2",
              "key_name": "Algosec",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Algosec",
              "ena_support": true,
              "instance_id": "i-22e29827e4f8832ef",
              "launch_time": "2019-07-15 10:12:12+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0253337dadb1d3611",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-01-28 06:59:55+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only https and ssh for Internal",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-223622f7de595942b",
                "sgip_egress_to_port": "",
                "security_groups_name": "SG - Algosec",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-223622f7de595942b",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d953677ae41e53f3",
            "instance_name": "DS - Forcepoint_1",
            "instance_details": {
              "image_id": "ami-27baeb5b",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "2nd PA FW",
              "ena_support": true,
              "instance_id": "i-2d953677ae41e53f3",
              "launch_time": "2019-06-19 02:30:36+00:00",
              "architecture": "x86_64",
              "client_token": "152482688732727333",
              "instance_type": "c4.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0cd0f0b0757b9d6a0",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2018-04-27 11:01:32+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "6njl1pau431dv1qxipg63mvah",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-29a58648eb148d9bf",
            "instance_name": "2nd PA FW",
            "instance_details": {
              "image_id": "ami-0dad20bd1b9c8c004",
              "key_name": "PASMC",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Cortex-AUTH",
              "ena_support": true,
              "instance_id": "i-29a58648eb148d9bf",
              "launch_time": "2019-04-16 06:09:17+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-04e3735fd3fc4b9b2",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-04-10 10:29:31+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only HTTPS access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-2cd623597d7d98249",
                "sgip_egress_to_port": "",
                "security_groups_name": "Cortex Auth SG Rule",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2cd623597d7d98249",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2bd34433d325fadbb",
            "instance_name": "Cortex-AUTH",
            "instance_details": {
              "image_id": "ami-02f8bb5d22d8a6f45",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "",
              "kernel_id": null,
              "subnet_id": "subnet-c9aaf4ae",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "",
              "ena_support": true,
              "instance_id": "i-2bd34433d325fadbb",
              "launch_time": "2020-01-29 05:25:29+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-04578aa92ac9799d4",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-01-29 05:25:30+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-25265a7c",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-25265a7c",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-215a28e4c493a3ae8",
            "instance_name": "API Explorer VM",
            "instance_details": {
              "image_id": "ami-5ae89f26",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "API Explorer VM",
              "ena_support": true,
              "instance_id": "i-215a28e4c493a3ae8",
              "launch_time": "2019-11-19 02:30:36+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-APIEx-8766VVLBTICN",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJ24WFGFRMLASPYUFI",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-EnvironmentBootInstanceProfile-QOGR6SOASVWN"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0af346bdd3dbebd69",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-17 15:38:05+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "API Explorer",
                "sgip_to_port": -1,
                "sgt_key_name": "aws:cloudformation:logical-id",
                "sgip_protocol": "icmp",
                "sgt_key_value": "sgAPIExplorer",
                "sgip_from_port": -1,
                "security_groups_id": "sg-cbccbeb2",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgAPIExplorer-1IZTPTDOMO6IJ",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-cbccbeb2",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2dd2b99a2eab4e35d",
            "instance_name": "PA-Panorama",
            "instance_details": {
              "image_id": "ami-fec88814",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2dd2b99a2eab4e35d",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "154779836592597350",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0adbb7bbf96107eb0",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-01-18 07:59:30+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "eclz7j04vu9lf8ont8ta3n17o",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Panorama",
                "sgip_to_port": 443,
                "sgt_key_name": "aws:cloudformation:stack-name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "PaloAltoWiproLab1",
                "sgip_from_port": 443,
                "security_groups_id": "sg-caccbeb3",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgPanorama-2ZD8WNVWRMBH",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-caccbeb3",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2576ca6517288ff98",
            "instance_name": "AWS NGFW",
            "instance_details": {
              "image_id": "ami-27baeb5b",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "aws:cloudformation:stack-id",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "arn:aws:cloudformation:ap-southeast-1:622463821500:stack/PaloAltoWiproLab1/f65c4b90-4254-11e8-97d2-500caff24462",
              "ena_support": true,
              "instance_id": "i-2576ca6517288ff98",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-FWIns-UAWZLB2HUW8T",
              "instance_type": "m4.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJAPRJUU7AH7ALNCZY",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-BootstrapInstanceProfile-CMHOKDVL5TNQ"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0fa6cbbdc6b4bf08e",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2018-04-17 15:38:06+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "6njl1pau431dv1qxipg63mvah",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d63c15fbbab23632",
            "instance_name": "DC1",
            "instance_details": {
              "image_id": "ami-5265312e",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "aws:cloudformation:stack-name",
              "kernel_id": null,
              "subnet_id": "subnet-c9aaf4ae",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "PaloAltoWiproLab1-DomainControllerTemplate-X6E8D5F2FTJV",
              "ena_support": true,
              "instance_id": "i-2d63c15fbbab23632",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-Domai-T9FGMRPPESQD",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJV7DE2EDWKFHN3E44",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-DomainControllerTemplate-X6E8D5F2FTJV-ADServerProfile-1IDMUDAR46NRL"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-030102116e1ab81b7",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-17 15:39:17+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2ade68199f8333d6c",
            "instance_name": "Panorama",
            "instance_details": {
              "image_id": "ami-aaedbcd6",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2ade68199f8333d6c",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-Panor-WGW6T9GVSXZB",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0526bed0c6bb63ab8",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2018-04-17 15:36:42+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "eclz7j04vu9lf8ont8ta3n17o",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      }
    },
    "securityGroup": {
      "sg-ef7d2496": {
        "value": 6,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-22d1cf74cbc3675de",
            "instance_name": "CRS-MSS-TRAPS",
            "instance_details": {
              "image_id": "ami-00b2136b8cbdf7a54",
              "key_name": "SMCDemo",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC 2.0",
              "ena_support": true,
              "instance_id": "i-22d1cf74cbc3675de",
              "launch_time": "2019-06-20 05:47:08+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-025a4652dad7aeb3c",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-09-03 18:44:52+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2bc96b9f39b5a938e",
            "instance_name": "SMC Dev Server 1",
            "instance_details": {
              "image_id": "ami-fd95a081",
              "key_name": "Morphisec",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Morphisec",
              "ena_support": true,
              "instance_id": "i-2bc96b9f39b5a938e",
              "launch_time": "2018-05-30 10:50:24+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-013eeb5fca66184e9",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-05-30 10:50:24+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2694b7bb17ac2963b",
            "instance_name": "Checkpoint Firewall",
            "instance_details": {
              "image_id": "ami-04385f3f533c85af7",
              "key_name": "PASMC",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "AWS NGFW",
              "ena_support": true,
              "instance_id": "i-2694b7bb17ac2963b",
              "launch_time": "2019-04-10 08:03:00+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-019401f3d4fe50935",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-01-15 09:07:12+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-23eb49748668a529f",
            "instance_name": "DS - Vormetric Key Management",
            "instance_details": {
              "image_id": "ami-053d3a79",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SOLARWINDS",
              "ena_support": true,
              "instance_id": "i-23eb49748668a529f",
              "launch_time": "2018-06-28 13:50:22+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0c8ade9a0a33d23b8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-06-28 13:50:23+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2171878f53c12b5f2",
            "instance_name": "Splunk",
            "instance_details": {
              "image_id": "ami-de2a2da2",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Trend Micro™ InterScan™ Web Security Virtual Appliance",
              "ena_support": true,
              "instance_id": "i-2171878f53c12b5f2",
              "launch_time": "2018-07-03 07:48:53+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.2xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0149957dda13b9b71",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-07-03 07:48:53+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 8,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-231fe6cc319743786",
            "instance_name": "SOLARWINDS",
            "instance_details": {
              "image_id": "ami-c87c19ab",
              "key_name": "mcafee",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "CRS-MSS-DCS",
              "ena_support": true,
              "instance_id": "i-231fe6cc319743786",
              "launch_time": "2018-05-03 05:04:50+00:00",
              "architecture": "x86_64",
              "client_token": "Rbvpr1503324767874",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0ab4c432b15ed441c",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2017-08-21 14:12:49+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "RDP Access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-ef7d2496",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-ef7d2496",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "sg-88cdbff4": {
        "value": 5,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-24eb423df3ca71368",
            "instance_name": "Morphisec",
            "instance_details": {
              "image_id": "ami-b7f388cb",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-c9aaf4ae",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Linux Web Server",
              "ena_support": true,
              "instance_id": "i-24eb423df3ca71368",
              "launch_time": "2019-11-19 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-WebVM-L5DZXF7FE154",
              "instance_type": "t2.micro",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJ24WFGFRMLASPYUFI",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-EnvironmentBootInstanceProfile-QOGR6SOASVWN"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-08d65a177561a2fce",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-17 15:38:05+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d953677ae41e53f3",
            "instance_name": "DS - Forcepoint_1",
            "instance_details": {
              "image_id": "ami-27baeb5b",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "2nd PA FW",
              "ena_support": true,
              "instance_id": "i-2d953677ae41e53f3",
              "launch_time": "2019-06-19 02:30:36+00:00",
              "architecture": "x86_64",
              "client_token": "152482688732727333",
              "instance_type": "c4.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0cd0f0b0757b9d6a0",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2018-04-27 11:01:32+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "6njl1pau431dv1qxipg63mvah",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2576ca6517288ff98",
            "instance_name": "AWS NGFW",
            "instance_details": {
              "image_id": "ami-27baeb5b",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "aws:cloudformation:stack-id",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "arn:aws:cloudformation:ap-southeast-1:622463821500:stack/PaloAltoWiproLab1/f65c4b90-4254-11e8-97d2-500caff24462",
              "ena_support": true,
              "instance_id": "i-2576ca6517288ff98",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-FWIns-UAWZLB2HUW8T",
              "instance_type": "m4.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJAPRJUU7AH7ALNCZY",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-BootstrapInstanceProfile-CMHOKDVL5TNQ"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0fa6cbbdc6b4bf08e",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2018-04-17 15:38:06+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "6njl1pau431dv1qxipg63mvah",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d63c15fbbab23632",
            "instance_name": "DC1",
            "instance_details": {
              "image_id": "ami-5265312e",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "aws:cloudformation:stack-name",
              "kernel_id": null,
              "subnet_id": "subnet-c9aaf4ae",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "PaloAltoWiproLab1-DomainControllerTemplate-X6E8D5F2FTJV",
              "ena_support": true,
              "instance_id": "i-2d63c15fbbab23632",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-Domai-T9FGMRPPESQD",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJV7DE2EDWKFHN3E44",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-DomainControllerTemplate-X6E8D5F2FTJV-ADServerProfile-1IDMUDAR46NRL"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-030102116e1ab81b7",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-17 15:39:17+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2ade68199f8333d6c",
            "instance_name": "Panorama",
            "instance_details": {
              "image_id": "ami-aaedbcd6",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2ade68199f8333d6c",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-Panor-WGW6T9GVSXZB",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0526bed0c6bb63ab8",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2018-04-17 15:36:42+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "eclz7j04vu9lf8ont8ta3n17o",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Wide open security group",
                "sgip_to_port": 443,
                "sgt_key_name": "Name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "Lab External SG",
                "sgip_from_port": 443,
                "security_groups_id": "sg-88cdbff4",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgWideOpen-TJ3ZDRO51TLV",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-88cdbff4",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-2439d64aa386cebd2": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-27f5a63ef454caa93",
            "instance_name": "Linux Web Server",
            "instance_details": {
              "image_id": "ami-0afce41e503676765",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "FREE WIN 2019",
              "ena_support": true,
              "instance_id": "i-27f5a63ef454caa93",
              "launch_time": "2020-04-14 02:30:40+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.micro",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-03f61d1e7c21bb9a8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-05-21 10:21:48+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only For Win",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-2439d64aa386cebd2",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2439d64aa386cebd2",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "sg-262c939bcac923945": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-243635b67f2b13d92",
            "instance_name": "FREE WIN 2019",
            "instance_details": {
              "image_id": "ami-0996ff24ed47fa1aa",
              "key_name": "CHKPT",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Checkpoint Firewall",
              "ena_support": true,
              "instance_id": "i-243635b67f2b13d92",
              "launch_time": "2019-12-04 11:41:23+00:00",
              "architecture": "x86_64",
              "client_token": "157545964559313708",
              "instance_type": "c5.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0545b61c0aed41d26",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-12-04 11:41:23+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "263gtcd87e2xefwbacsdwvorx",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for CloudGuard IaaS Next-Gen Firewall w. Threat Prevention & SandBlast BYOL version R80.30-273.494 provided by Check Point Software Technologies, Inc.",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-262c939bcac923945",
                "sgip_egress_to_port": "",
                "security_groups_name": "CloudGuard IaaS Next-Gen Firewall w- Threat Prevention - SandBlast BYOL-R80-30-273-494-AutogenByAWSMP-",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-262c939bcac923945",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-22233e9df33ffa42d": {
        "value": 10,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-21c1cc4c75514cc35",
            "instance_name": "PA_SMC",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-21c1cc4c75514cc35",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-05d79d9abf3da448f",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-04 17:12:33+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e4c2e27a7bc4353b",
            "instance_name": "TUFIN Server",
            "instance_details": {
              "image_id": "ami-06fdec358a7e119fc",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "DS-VORMETRIC TOKENIZATION SERVER",
              "ena_support": true,
              "instance_id": "i-2e4c2e27a7bc4353b",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-067ad8ce081a14ef5",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-17 08:12:56+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2c2177995331b7958",
            "instance_name": "Epo Final",
            "instance_details": {
              "image_id": "ami-00acd62cf3bbe586e",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Schedule",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "IN-office-hours",
              "ena_support": true,
              "instance_id": "i-2c2177995331b7958",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-02e5b0761f339f751",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-04-10 13:47:41+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-27a23399937786eeb",
            "instance_name": "QRadar2",
            "instance_details": {
              "image_id": "ami-0b4dd9d65556cac22",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-27a23399937786eeb",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "158219830343323767",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0cbe04b8e2e89794e",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-20 11:31:47+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "aw0evgkw8e5c1q413zgy5pjce",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2871c23b13789ff3e",
            "instance_name": "CRS-MSS-DCS",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2871c23b13789ff3e",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0f1028d1dcb5901c3",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-04 07:48:31+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e697a5ac332c39a4",
            "instance_name": "Algosec",
            "instance_details": {
              "image_id": "ami-003dd6755e36b54de",
              "key_name": "forcepoint",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "DS - Forcepoint_1",
              "ena_support": true,
              "instance_id": "i-2e697a5ac332c39a4",
              "launch_time": "2020-02-10 11:10:29+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0cf674d0ffe38f5d6",
              "ebs_status": "attached",
              "device_name": "xvdc",
              "attached time": "2020-02-10 11:10:30+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-25ea3b37f11fa6d13",
            "instance_name": "DS-Forcepoint OCR Server",
            "instance_details": {
              "image_id": "ami-0c898f8cf1a4ae1f5",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Schedule",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "IN-office-hours",
              "ena_support": true,
              "instance_id": "i-25ea3b37f11fa6d13",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-03f62460ce90d7643",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-03-12 09:52:44+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-24bfbf5f4c33133c6",
            "instance_name": "DS-Symantec-1",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "DS-Symantec-1",
              "ena_support": true,
              "instance_id": "i-24bfbf5f4c33133c6",
              "launch_time": "2020-03-25 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-00182e31092aa8c26",
              "ebs_status": "attached",
              "device_name": "xvdc",
              "attached time": "2020-02-04 17:10:55+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d8d552f937ff6a7f",
            "instance_name": "DS-VORMETRIC TOKENIZATION NEW-SERVER",
            "instance_details": {
              "image_id": "ami-06fdec358a7e119fc",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2d8d552f937ff6a7f",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0dd468a0622b2ded8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-03-23 06:42:34+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2491c6ac145d343d4",
            "instance_name": "DS-VORMETRIC DATA SECURITY MANAGER (DSM)",
            "instance_details": {
              "image_id": "ami-0caf76f46730d1590",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2491c6ac145d343d4",
              "launch_time": "2020-04-14 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-095d9e03c51b1538f",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-17 07:54:19+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Data- Center Access (Srinivas)",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-22233e9df33ffa42d",
                "sgip_egress_to_port": "",
                "security_groups_name": "Data- Center Access (Srinivas)",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-22233e9df33ffa42d",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "sg-2975c2c577ba2a223": {
        "value": 2,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-26aed5dfea555dfa7",
            "instance_name": "DS-Symantec-2",
            "instance_details": {
              "image_id": "ami-0acd3f636f875f341",
              "key_name": "Qradar1",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Qradar1",
              "ena_support": true,
              "instance_id": "i-26aed5dfea555dfa7",
              "launch_time": "2020-01-07 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "157582262906681561",
              "instance_type": "m4.2xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-06c91ba109f8cac1d",
              "ebs_status": "attached",
              "device_name": "/dev/sdc",
              "attached time": "2019-12-08 16:30:31+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 2
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "7qbh6hc7qenu0b3ikqes7u3gu",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Qradar",
                "sgip_to_port": -1,
                "sgt_key_name": "",
                "sgip_protocol": "icmp",
                "sgt_key_value": "",
                "sgip_from_port": -1,
                "security_groups_id": "sg-2975c2c577ba2a223",
                "sgip_egress_to_port": "",
                "security_groups_name": "Qradar",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2975c2c577ba2a223",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2ef5e4ef1fa5bcd1d",
            "instance_name": "IWSVA TREND-MICRO",
            "instance_details": {
              "image_id": "ami-01247b8894d425ad8",
              "key_name": "Qradar2",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "QRadar2",
              "ena_support": true,
              "instance_id": "i-2ef5e4ef1fa5bcd1d",
              "launch_time": "2020-01-07 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0937e85666fdf3c1a",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-12-08 16:36:25+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Qradar",
                "sgip_to_port": -1,
                "sgt_key_name": "",
                "sgip_protocol": "icmp",
                "sgt_key_value": "",
                "sgip_from_port": -1,
                "security_groups_id": "sg-2975c2c577ba2a223",
                "sgip_egress_to_port": "",
                "security_groups_name": "Qradar",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2975c2c577ba2a223",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "sg-265522c68f3fcb3b2": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-246f93949756946ca",
            "instance_name": "Qradar1",
            "instance_details": {
              "image_id": "ami-017b041b78402f10d",
              "key_name": "CHKPT",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Checkpoint Management",
              "ena_support": true,
              "instance_id": "i-246f93949756946ca",
              "launch_time": "2019-12-04 11:49:28+00:00",
              "architecture": "x86_64",
              "client_token": "157546012952079962",
              "instance_type": "m5.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0539b3a5697541662",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-12-04 11:49:28+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "5y97v3ikpvbmnkbdfpuw4fdra",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Security Management (BYOL) version R80.30-200.520",
                "sgip_to_port": 257,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 257,
                "security_groups_id": "sg-265522c68f3fcb3b2",
                "sgip_egress_to_port": "",
                "security_groups_name": "CloudGuard IaaS Security Management -BYOL--R80-30-200-520",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-265522c68f3fcb3b2",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-7235642b": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2c4636129c5c18e7b",
            "instance_name": "Checkpoint Management",
            "instance_details": {
              "image_id": "ami-39ce075a",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "TUFIN Server",
              "ena_support": null,
              "instance_id": "i-2c4636129c5c18e7b",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "152588443514612091",
              "instance_type": "m4.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0129f4def3a94b903",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-05-09 16:47:19+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 2
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Access allowed to Linux server",
                "sgip_to_port": 514,
                "sgt_key_name": "",
                "sgip_protocol": "udp",
                "sgt_key_value": "",
                "sgip_from_port": 514,
                "security_groups_id": "sg-7235642b",
                "sgip_egress_to_port": "",
                "security_groups_name": "Only SSH and HTTPS",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-7235642b",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-2d4c6f7a3b94a2c96": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d32c4c73c345ab74",
            "instance_name": "DS-VORMETRIC TOKENIZATION SERVER",
            "instance_details": {
              "image_id": "ami-06392b43220ba520b",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2d32c4c73c345ab74",
              "launch_time": "2020-02-20 14:31:56+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "m3.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-01b9a8894cb0a368b",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-12-12 11:33:01+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "22vojj0fp2kwh56g4ax2u8buj",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Access Server (25 Connected Devices) version 2.7.5 provided by OpenVPN Inc",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-2d4c6f7a3b94a2c96",
                "sgip_egress_to_port": "",
                "security_groups_name": "OpenVPN25",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2d4c6f7a3b94a2c96",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 272,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-277d8f945be3bff34": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2d75f53c5d37b4b68",
            "instance_name": "OpenVPN25",
            "instance_details": {
              "image_id": "ami-f36c568f",
              "key_name": "newsmc",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "NAME",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "EnvisionSMC",
              "ena_support": true,
              "instance_id": "i-2d75f53c5d37b4b68",
              "launch_time": "2018-09-03 18:59:31+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0b459174c221b96c1",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-06-07 05:16:12+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only HTTPS and Port8000",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-277d8f945be3bff34",
                "sgip_egress_to_port": "",
                "security_groups_name": "Envision-SG",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-277d8f945be3bff34",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "sg-2f2f3348fbeb345ea": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2fb2ad9f9ac3f6653",
            "instance_name": "EnvisionSMC",
            "instance_details": {
              "image_id": "ami-077364905ac774d42",
              "key_name": "Debian",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC Linux",
              "ena_support": true,
              "instance_id": "i-2fb2ad9f9ac3f6653",
              "launch_time": "2020-01-16 10:56:58+00:00",
              "architecture": "x86_64",
              "client_token": "156318857261339704",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0bb5c2b328b888ef9",
              "ebs_status": "attached",
              "device_name": "/dev/sdb",
              "attached time": "2019-07-15 11:03:15+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "55q52qvgjfpdj2fpfy9mb1lo4",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Secure SG configuration for Linux instances (Default)",
                "sgip_to_port": -1,
                "sgt_key_name": "",
                "sgip_protocol": "icmp",
                "sgt_key_value": "",
                "sgip_from_port": -1,
                "security_groups_id": "sg-2f2f3348fbeb345ea",
                "sgip_egress_to_port": "",
                "security_groups_name": "Linux Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2f2f3348fbeb345ea",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "sg-292744d8254c64c86": {
        "value": 6,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2dcd559452fd458de",
            "instance_name": "SMC Linux",
            "instance_details": {
              "image_id": "ami-0fe0a34ed20d1e95f",
              "key_name": "epo",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Epo Final",
              "ena_support": true,
              "instance_id": "i-2dcd559452fd458de",
              "launch_time": "2020-03-27 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0bb3d7419c225db56",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-06-18 04:21:32+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-296d6b1f99c846d3b",
            "instance_name": "Old SMC New Jump Server",
            "instance_details": {
              "image_id": "ami-012799a835ac6a1d0",
              "key_name": "Splunk",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Splunk",
              "ena_support": true,
              "instance_id": "i-296d6b1f99c846d3b",
              "launch_time": "2019-11-19 02:30:37+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-04c84177b4b217a8e",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-05-10 08:34:05+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-26727233eea22b1d1",
            "instance_name": "SMC Dev 2",
            "instance_details": {
              "image_id": "ami-02f8bb5d22d8a6f45",
              "key_name": "SMC_DEV",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC Dev 2",
              "ena_support": true,
              "instance_id": "i-26727233eea22b1d1",
              "launch_time": "2020-02-22 05:00:29+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0fa6857b51e3b03bc",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-01-29 08:30:03+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2c4b74d937286b59c",
            "instance_name": "Sailpoint",
            "instance_details": {
              "image_id": "ami-069532b1546ad2d5b",
              "key_name": "sailpoint",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Sailpoint",
              "ena_support": true,
              "instance_id": "i-2c4b74d937286b59c",
              "launch_time": "2019-08-16 13:28:19+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0c5b1bb4133f089fc",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-07-30 08:38:56+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2b519465de3f3356e",
            "instance_name": "SMC Testing",
            "instance_details": {
              "image_id": "ami-002eb167ffe22436a",
              "key_name": "PASMC",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "SMC Testing",
              "ena_support": true,
              "instance_id": "i-2b519465de3f3356e",
              "launch_time": "2020-03-11 08:49:30+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0019b8982d995e42b",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-07-31 10:27:27+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-213e78d9932794a5c",
            "instance_name": "Test SMC",
            "instance_details": {
              "image_id": "ami-098731bcd06ea9ca6",
              "key_name": "SMC_Test",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Test SMC",
              "ena_support": true,
              "instance_id": "i-213e78d9932794a5c",
              "launch_time": "2020-03-11 07:45:44+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-08e4884a9b54d7da2",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-11-08 10:03:09+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Traps RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-292744d8254c64c86",
                "sgip_egress_to_port": "",
                "security_groups_name": "TRAPS RDP",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-292744d8254c64c86",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      },
      "sg-244cb2cf78276f8ce": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-21b4d339f693a56a6",
            "instance_name": "SOLARWINDS",
            "instance_details": {
              "image_id": "ami-05ea891d728058367",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Skybox",
              "ena_support": false,
              "instance_id": "i-21b4d339f693a56a6",
              "launch_time": "2019-08-28 15:47:30+00:00",
              "architecture": "x86_64",
              "client_token": "156216206515368327",
              "instance_type": "m4.4xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-07ce78c6991e827f6",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-07-03 13:54:50+00:00",
              "ebs_optimized": true,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 8,
                "ThreadsPerCore": 2
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "cuxjzadw8h4qjvl0kjpl6sfaj",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for Skybox Security Suite version 9.0.508 provided by Skybox Security",
                "sgip_to_port": 8443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 8443,
                "security_groups_id": "sg-244cb2cf78276f8ce",
                "sgip_egress_to_port": "",
                "security_groups_name": "Skybox Security Suite-9-0-508",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-244cb2cf78276f8ce",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-25265a7c": {
        "value": 3,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e769b7f72b912847",
            "instance_name": "Skybox",
            "instance_details": {
              "image_id": "ami-b294cbce",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Schedule",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "IN-office-hours",
              "ena_support": true,
              "instance_id": "i-2e769b7f72b912847",
              "launch_time": "2020-04-14 02:30:39+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-06e115dca55069dc3",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-18 05:50:18+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-25265a7c",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-25265a7c",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2e3eab33d7fb343c9",
            "instance_name": "DS-Log Server",
            "instance_details": {
              "image_id": "ami-053d3a79",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2e3eab33d7fb343c9",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-02c119a011a6ffb63",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-06-28 06:27:03+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-25265a7c",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-25265a7c",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          },
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2bd34433d325fadbb",
            "instance_name": "Cortex-AUTH",
            "instance_details": {
              "image_id": "ami-02f8bb5d22d8a6f45",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "",
              "kernel_id": null,
              "subnet_id": "subnet-c9aaf4ae",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "",
              "ena_support": true,
              "instance_id": "i-2bd34433d325fadbb",
              "launch_time": "2020-01-29 05:25:29+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-04578aa92ac9799d4",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-01-29 05:25:30+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only RDP",
                "sgip_to_port": 3389,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 3389,
                "security_groups_id": "sg-25265a7c",
                "sgip_egress_to_port": "",
                "security_groups_name": "Windows RDP Access",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-25265a7c",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-2c3a46e32743335bb": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2b83464434a94e133",
            "instance_name": "DS-FORCEPOINT-2 DLP",
            "instance_details": {
              "image_id": "ami-096d7698c78794469",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "OpenVPN",
              "ena_support": false,
              "instance_id": "i-2b83464434a94e133",
              "launch_time": "2020-03-18 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "156077377857097631",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-00bcba80b015ce3ae",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-06-17 12:16:22+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "3ihdqli79gl9v2jnlzs6nq60h",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for OpenVPN Access Server (5 Connected Devices) version 2.6.1 provided by OpenVPN Technologies, Inc.",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-2c3a46e32743335bb",
                "sgip_egress_to_port": "",
                "security_groups_name": "OpenVPN Access Server -5 Connected Devices",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2c3a46e32743335bb",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-223622f7de595942b": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-22e29827e4f8832ef",
            "instance_name": "OpenVPN",
            "instance_details": {
              "image_id": "ami-0732ce3bf80a626b2",
              "key_name": "Algosec",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Algosec",
              "ena_support": true,
              "instance_id": "i-22e29827e4f8832ef",
              "launch_time": "2019-07-15 10:12:12+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0253337dadb1d3611",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-01-28 06:59:55+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only https and ssh for Internal",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-223622f7de595942b",
                "sgip_egress_to_port": "",
                "security_groups_name": "SG - Algosec",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-223622f7de595942b",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-2cd623597d7d98249": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-29a58648eb148d9bf",
            "instance_name": "2nd PA FW",
            "instance_details": {
              "image_id": "ami-0dad20bd1b9c8c004",
              "key_name": "PASMC",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Cortex-AUTH",
              "ena_support": true,
              "instance_id": "i-29a58648eb148d9bf",
              "launch_time": "2019-04-16 06:09:17+00:00",
              "architecture": "x86_64",
              "client_token": "",
              "instance_type": "t2.large",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-04e3735fd3fc4b9b2",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2019-04-10 10:29:31+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "Only HTTPS access",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-2cd623597d7d98249",
                "sgip_egress_to_port": "",
                "security_groups_name": "Cortex Auth SG Rule",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-2cd623597d7d98249",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-cbccbeb2": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-215a28e4c493a3ae8",
            "instance_name": "API Explorer VM",
            "instance_details": {
              "image_id": "ami-5ae89f26",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "API Explorer VM",
              "ena_support": true,
              "instance_id": "i-215a28e4c493a3ae8",
              "launch_time": "2019-11-19 02:30:36+00:00",
              "architecture": "x86_64",
              "client_token": "PaloA-APIEx-8766VVLBTICN",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": {
                "Id": "AIPAJ24WFGFRMLASPYUFI",
                "Arn": "arn:aws:iam::622463821500:instance-profile/PaloAltoWiproLab1-EnvironmentBootInstanceProfile-QOGR6SOASVWN"
              },
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0af346bdd3dbebd69",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2018-04-17 15:38:05+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "API Explorer",
                "sgip_to_port": -1,
                "sgt_key_name": "aws:cloudformation:logical-id",
                "sgip_protocol": "icmp",
                "sgt_key_value": "sgAPIExplorer",
                "sgip_from_port": -1,
                "security_groups_id": "sg-cbccbeb2",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgAPIExplorer-1IZTPTDOMO6IJ",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-cbccbeb2",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-caccbeb3": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-2dd2b99a2eab4e35d",
            "instance_name": "PA-Panorama",
            "instance_details": {
              "image_id": "ami-fec88814",
              "key_name": "PA",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": null,
              "tags_key": "State",
              "kernel_id": null,
              "subnet_id": "subnet-94b0eef3",
              "hypervisor": "xen",
              "is_default": false,
              "ramdisk_id": null,
              "tags_value": "Stopped",
              "ena_support": true,
              "instance_id": "i-2dd2b99a2eab4e35d",
              "launch_time": "2020-04-14 02:30:38+00:00",
              "architecture": "x86_64",
              "client_token": "154779836592597350",
              "instance_type": "t2.xlarge",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/xvda",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0adbb7bbf96107eb0",
              "ebs_status": "attached",
              "device_name": "/dev/xvda",
              "attached time": "2019-01-18 07:59:30+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": false
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 4,
                "ThreadsPerCore": 1
              },
              "compliance_score": 100
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "eclz7j04vu9lf8ont8ta3n17o",
            "product_code_type": "marketplace",
            "security_details": {
              "data": {
                "description": "Panorama",
                "sgip_to_port": 443,
                "sgt_key_name": "aws:cloudformation:stack-name",
                "sgip_protocol": "tcp",
                "sgt_key_value": "PaloAltoWiproLab1",
                "sgip_from_port": 443,
                "security_groups_id": "sg-caccbeb3",
                "sgip_egress_to_port": "",
                "security_groups_name": "PaloAltoWiproLab1-sgPanorama-2ZD8WNVWRMBH",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-548e1633",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-caccbeb3",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 80,
                "Name": "stopped"
              },
              "compliance_score": 0
            },
            "state_reason": {
              "Code": "Client.UserInitiatedShutdown",
              "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
            },
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-748e1433",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "aws:cloudformation:stack-name",
                "cbas_block_id": "10.0.0.0/16",
                "vpc_tags_value": "PaloAltoWiproLab1",
                "dhcp_options_id": "dopt-7fc45318",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-fcfed294",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-748e1433"
          }
        ]
      },
      "sg-27337457542ed6a65": {
        "value": 1,
        "deviceData": [
          {
            "time": "2020-04-15T00:00:01Z",
            "location": {
              "data": "ap-southeast-1a",
              "compliance_score": 0
            },
            "instance_id": "i-25bc69c99e34c6f6a",
            "instance_name": "Automation - Siva",
            "instance_details": {
              "image_id": "ami-0331be4a84b3b2e75",
              "key_name": "auto",
              "licenses": null,
              "location": "ap-southeast-1a",
              "platform": "windows",
              "tags_key": "Name",
              "kernel_id": null,
              "subnet_id": "subnet-16111f72",
              "hypervisor": "xen",
              "is_default": true,
              "ramdisk_id": null,
              "tags_value": "Automation - Siva",
              "ena_support": true,
              "instance_id": "i-25bc69c99e34c6f6a",
              "launch_time": "2020-02-14 03:23:03+00:00",
              "architecture": "x86_64",
              "client_token": "158165057930650922",
              "instance_type": "t2.medium",
              "ami_launch_index": 0,
              "instance_tenancy": "default",
              "root_device_name": "/dev/sda1",
              "root_device_type": "ebs",
              "instance_lifecycle": null,
              "virtualization_type": "hvm",
              "iam_instance_profile": null,
              "elastic_gpu_associations": null,
              "elastic_inference_accelerator_associations": null
            },
            "ebs_details": {
              "volume_id": "vol-0ea17d4f28a86c6e8",
              "ebs_status": "attached",
              "device_name": "/dev/sda1",
              "attached time": "2020-02-14 03:23:04+00:00",
              "ebs_optimized": false,
              "deletetion_on_termination_status": true
            },
            "capacity_reservation_id": null,
            "capacity_reservation_specification": {
              "CapacityReservationPreference": "open"
            },
            "cpu_options": {
              "data": {
                "CoreCount": 2,
                "ThreadsPerCore": 1
              },
              "compliance_score": 0
            },
            "hibernation_options": "false",
            "monitoring": {
              "data": "disabled",
              "compliance_score": 0
            },
            "elastic_details": {
              "gpu_associations": null,
              "inference_accelerator_associations": null
            },
            "network_details": {},
            "placement": {
              "Tenancy": "default",
              "GroupName": "",
              "AvailabilityZone": "ap-southeast-1a"
            },
            "ip_address_details": {},
            "product_code_id": "",
            "product_code_type": "",
            "security_details": {
              "data": {
                "description": "This security group was generated by AWS Marketplace and is based on recommended settings for Microsoft Windows Server 2012 R2 version 2020.01.15 provided by Amazon Web Services",
                "sgip_to_port": 443,
                "sgt_key_name": "",
                "sgip_protocol": "tcp",
                "sgt_key_value": "",
                "sgip_from_port": 443,
                "security_groups_id": "sg-27337457542ed6a65",
                "sgip_egress_to_port": "",
                "security_groups_name": "Automation-Siva",
                "sgip_egress_from_port": "",
                "security_groups_vpc_id": "vpc-67347203",
                "sgip_egress_ip_protocol": "-1",
                "security_groups_owner_id": "622463821500"
              },
              "compliance_score": 0
            },
            "security_groups_id": "sg-27337457542ed6a65",
            "spot_instance_request_id": null,
            "sriov_net_support": null,
            "state": {
              "data": {
                "Code": 16,
                "Name": "running"
              },
              "compliance_score": 100
            },
            "state_reason": null,
            "vpc_details": {
              "data": {
                "vpc_id": "vpc-47347203",
                "vpc_state": "available",
                "vpc_owner_id": "622463821500",
                "vpc_tags_key": "",
                "cbas_block_id": "172.31.0.0/16",
                "vpc_tags_value": "",
                "dhcp_options_id": "dopt-34492c50",
                "cbas_block_state": "associated",
                "cbas_association_id": "vpc-cidr-assoc-4273482b",
                "ipv6_cidr_block_association_set": null
              },
              "compliance_score": 0
            },
            "vpc_id": "vpc-47347203"
          }
        ]
      }
    }
  }