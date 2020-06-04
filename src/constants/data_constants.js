export const dataConstants = {
  DATA_REQUEST: 'DATA_FETCH_REQUEST',
  DATA_SUCCESS: 'DATA_FETCH_SUCCESS',
  DATA_FAILURE: 'DATA_FETCH_FAILURE',
  WEIGHTAGE_SET_REQUEST: 'WEIGHTAGE_SET_REQUEST',
  WEIGHTAGE_SET_SUCCESS: 'WEIGHTAGE_SET_SUCCESS',
  WEIGHTAGE_SET_FAILURE: 'WEIGHTAGE_SET_FAILURE',
  WEIGHTAGE_GET_REQUEST: 'WEIGHTAGE_GET_REQUEST',
  WEIGHTAGE_GET_SUCCESS: 'WEIGHTAGE_GET_SUCCESS',
  WEIGHTAGE_GET_FAILURE: 'WEIGHTAGE_GET_FAILURE',
  USECASE_DATA_REQUEST:'USECASE_DATA_REQUEST',
  USECASE_DATA_SUCCESS:'USECASE_DATA_SUCCESS',
  USECASE_DATA_FAILURE:'USECASE_DATA_FAILURE',
  FILTER_START_DATE:'startDate',
  FILTER_END_DATE:'endDate',
  FILTER_SYSTEM_NAME:'system_name',
  FILTER_NODE_NAME:'nodename',
  FILTER_INCIDENT_NAME:'incident_id',
  FILTER_LOCATION:'location',
  FILTER_INSTANCE_NAME:'instance_name',
  FILTER_BUCKET_NAME:'bucket_name',
  FILTER_ENGINEER_NAME:'engineerName',
  FILTER_CMDB_NAME:'name',
  locationList:["0"],
  useCaseFieldMapFull:[
    //Mcafee HIPS
    {
      "use_case": "HIPS Status",
      "use_case_field": "hips_status"
    },
    {
      "use_case": "IPS Audit Mode Status",
      "use_case_field": "ips_audit_mode_status"
    },
    {
      "use_case": "NIPS Status",
      "use_case_field": "nips_status"
    },
    {
      "use_case": "Product Version",
      "use_case_field": "product_version"
    },
    {
      "use_case": "Blocked Attackers",
      "use_case_field": "blocked_attackers"
    },
    {
      "use_case": "Content Version",
      "use_case_field": "content_version"
    },
    {
      "use_case": "Firewall Audit Mode Status",
      "use_case_field": "fw_audit_mode_status"
    },
    {
      "use_case": "Firewall Fault",
      "use_case_field": "fw_fault"
    },
    {
      "use_case": "Firewall Status",
      "use_case_field": "fw_status"
    },
    {
      "use_case": "Service Running",
      "use_case_field": "service_running"
    },
    {
      "use_case": "Reboot Required",
      "use_case_field": "reboot_required"
    },
    {
      "use_case": "Product Status",
      "use_case_field": "product_status"
    },
    //Solarwinds
    {
      "use_case": "Node Status",
      "use_case_field": "node_status"
    },
    {
      "use_case": "Node Availability",
      "use_case_field": "node_availability"
    },
    {
      "use_case": "Average Response Time",
      "use_case_field": "average_response_time"
    },
    {
      "use_case": "Memory Usage",
      "use_case_field": "memory_usage"
    },
    {
      "use_case": "Peak CPU Usage",
      "use_case_field": "peak_cpu_usage"
    },
    {
      "use_case": "CPU Usage",
      "use_case_field": "cpu_usage"
    },
    //Mcafee AV
      {
        "use_case": "Agent Version",
        "use_case_field": "agent_version"
      },
      {
        "use_case": "Access Protection",
        "use_case_field": "ap_enabled"
      },
      {
        "use_case": "Engine Version",
        "use_case_field": "engine_ver"
      },
      {
        "use_case": "Managed Systems",
        "use_case_field": "managed_state"
      },
      {
        "use_case": "Last Communication",
        "use_case_field": "last_update"
      },
      {
        "use_case": "On Access Scanner",
        "use_case_field": "oas_enabled"
      },
      {
        "use_case": "DAT Version",
        "use_case_field": "dat_ver"
      },
      // Drive Encryption
      {
        "use_case": "Drive Encryption State",
        "use_case_field": "state_disk"
      },
      {
        "use_case": "DE Windows Version",
        "use_case_field": "product_version_windows"
      },
      {
        "use_case": "DE Agent Version",
        "use_case_field": "product_version_agent"
      },
      {
        "use_case": "Active Encryption Provider",
        "use_case_field": "encryption_provider"
      },
      // Firemon Firewall
      {
        "use_case": "Status",
        "use_case_field": "status"
      },
      {
        "use_case": "Deny Rule",
        "use_case_field": "deny_rule"
      },
      {
        "use_case": "Stealth Rule",
        "use_case_field": "stealth_rule"
      },
      {
        "use_case": "Unused Rules",
        "use_case_field": "unused_rules"
      },
      {
        "use_case": "Disabled Rules",
        "use_case_field": "disabled_rules"
      },
      {
        "use_case": "Shadowed Rules",
        "use_case_field": "shadowed_rules"
      },
      {
        "use_case": "Redundant Rules",
        "use_case_field": "redundant_rules"
      },
      {
        "use_case": "Snmp Compliance",
        "use_case_field": "snmp_compliance"
      },
      {
        "use_case": "Unsecured Features",
        "use_case_field": "unsecured_features"
      },
      {
        "use_case": "Unauthorized Changes",
        "use_case_field": "unauthorized_changes"
      },
      {
        "use_case": "Regulatory Compliance",
        "use_case_field": "regulatory_compliance"
      },
      {
        "use_case": "Security Concern Index",
        "use_case_field": "security_concern_index"
      },
      //Tufin Secure Track
      {
        "use_case": "Unattached Network Object",
        "use_case_field": "unattached_network_object"
      },
      {
        "use_case": "Disabled Rules",
        "use_case_field": "disabled_rules"
      },
      {
        "use_case": "Unused Rules",
        "use_case_field": "unused_rules"
      },
      {
        "use_case": "Shadowed Rules",
        "use_case_field": "shadowed_rules"
      },
      {
        "use_case": "Logging Disabled",
        "use_case_field": "logging_disabled"
      },
      {
        "use_case": "Risky Rules",
        "use_case_field": "risky_rules"
      },
      {
        "use_case": "SNMP Compliance",
        "use_case_field": "snmp_compliance"
      },
          //AWS-ec2
      {
        "use_case": "AWS Location",
        "use_case_field": "location"
      },
      {
        "use_case": "CPU Options",
        "use_case_field": "cpu_options"
      },
      {
        "use_case": "Monitoring",
        "use_case_field": "monitoring"
      },
      {
        "use_case": "Security Details",
        "use_case_field": "security_details"
      },
      {
        "use_case": "State",
        "use_case_field": "state"
      },
      {
        "use_case": "VPC Details",
        "use_case_field": "vpc_details"
      },
      //AWS-s3
      {
        "use_case": "Lifecycle",
        "use_case_field": "lifecycle"
      },
      {
        "use_case": "Policy",
        "use_case_field": "policy"
      },
      {
        "use_case": "Storage",
        "use_case_field": "storage"
      },
      {
        "use_case": "Encryption",
        "use_case_field": "encryption"
      },
      {
        "use_case": "Versioning",
        "use_case_field": "versioning"
      },
      {
        "use_case": "Replication",
        "use_case_field": "replication"
      },
      //Load Balancer_F5
      {
        "use_case": "Memory Used",
        "use_case_field": "memory_used"
      },
      {
        "use_case": "NAT Enabled",
        "use_case_field": "nat_enabled"
      },
      {
        "use_case": "NTP Service",
        "use_case_field": "ntp_service"
      },
      {
        "use_case": "SNAT Enabled",
        "use_case_field": "snat_enabled"
      },
      {
        "use_case": "Product Version",
        "use_case_field": "product_version"
      },
      {
        "use_case": "Available Disk Space",
        "use_case_field": "available_disk_space"
      },
      {
        "use_case": "Node Logging Disabled",
        "use_case_field": "node_logging_disabled"
      },
      {
        "use_case": "Queue On Connection Limit",
        "use_case_field": "queue_on_connection_limit"
      },
      //servicenow cmdb
    {
      "use_case": "Monitor",
      "use_case_field": "monitor"
    },
    {
      "use_case": "Unverified",
      "use_case_field": "unverified"
    },
    {
      "use_case": "Fault Count",
      "use_case_field": "fault_count"
    },
    {
      "use_case": "Install Status",
      "use_case_field": "install_status"
    },
    {
      "use_case": "Hardware Status",
      "use_case_field": "hardware_status"
    },
    {
      "use_case": "Operational Status",
      "use_case_field": "operational_status"
    },
    //ticketing
    {
      "use_case": "Open Tickets",
      "use_case_field": "number_of_tickets_open"
    },
    {
      "use_case": "Closed Tickets",
      "use_case_field": "number_of_tickets_closed"
    },
    {
      "use_case": "Total Resolution Time",
      "use_case_field": "total_resolution_time"
    },
    {
      "use_case": "Work Resolution Time",
      "use_case_field": "work_resolution_time"
    },
    //Mcafee DLP
     {
       "use_case": "Last Communicatoin",
       "use_case_field": "last_update"
     },
     {
       "use_case": "IPS Audit Mode Status",
       "use_case_field": "ips_audit_mode_status"
     },
     //Microsoft AV
    {
      "use_case": "Computer Status",
      "use_case_field": "computer_status"
    },
    {
      "use_case": "Pending Full Scan",
      "use_case_field": "pending_fullscan"
    },
    {
      "use_case": "Pending Reboot",
      "use_case_field": "pending_reboot"
    },
    {
      "use_case": "Pending Offline Scan",
      "use_case_field": "pending_offlinescan"
    },
    {
      "use_case": "MS-AV Product Version",
      "use_case_field": "version"
    },
    {
      "use_case": "Product Status",
      "use_case_field": "product_status"
    },
    {
      "use_case": "RTP Status",
      "use_case_field": "rtp_enabled"
    },
    {
      "use_case": "On Access Protection",
      "use_case_field": "onaccess_protection_enabled"
    },
    {
      "use_case": "IOAV Protection",
      "use_case_field": "ioav_protection_enabled"
    },
    {
      "use_case": "Behavior Monitor",
      "use_case_field": "behavior_monitor_enabled"
    },
    {
      "use_case": "Antivirus Status",
      "use_case_field": "antivirus_enabled"
    },
    {
      "use_case": "Antispyware Status",
      "use_case_field": "antispyware_enabled"
    },
    {
      "use_case": "MS-AV Engine Version",
      "use_case_field": "engine_version"
    },
    {
      "use_case": "Quick Scan",
      "use_case_field": "last_quickscan_age"
    },
    {
      "use_case": "MS-AV Signature Compliance",
      "use_case_field": "antivirus_signature_age"
    },
    {
      "use_case": "Antispyware Signature Compliance",
      "use_case_field": "antispyware_signature_age"
    },
    //Tenableio
    {
      "use_case": "Has Agent",
      "use_case_field": "has_agent"
    },
    {
      "use_case": "Last Scan Date",
      "use_case_field": "last_scan_date"
    },
    {
      "use_case": "Last Update Perform",
      "use_case_field": "last_update_performed"
    },
    {
      "use_case": "Vulnerability Severities",
      "use_case_field": "vulnerability_severities"
    },
    //Pan Firewall
    {
      "use_case": "DNS Config",
      "use_case_field": "dns_config"
    },
    {
      "use_case": "NTP Config",
      "use_case_field": "ntp_config"
    },
    {
      "use_case": "SW Version",
      "use_case_field": "sw_version"
    },
    {
      "use_case": "Risky Rules",
      "use_case_field": "risky_rules"
    },
    {
      "use_case": "Unused Rules",
      "use_case_field": "unused_rules"
    },
    {
      "use_case": "Banner Enabled",
      "use_case_field": "banner_enabled"
    },
    {
      "use_case": "Untagged Rules",
      "use_case_field": "untagged_rules"
    },
    {
      "use_case": "Threat Signature",
      "use_case_field": "threat_signature"
    },
    {
      "use_case": "App id Configuration",
      "use_case_field": "app_id_configuration"
    },
    {
      "use_case": "Firewall Availability",
      "use_case_field": "firewall_availability"
    },
    {
      "use_case": "Unsecured Admin Access",
      "use_case_field": "unsecured_admin_access"
    },
    {
      "use_case": "Threat Profiles Enabled",
      "use_case_field": "threat_profiles_enabled"
    },
    //Firewall Algosec
    {
      "use_case": "PCI",
      "use_case_field": "PCI"
    },
    {
      "use_case": "SOX",
      "use_case_field": "SOX"
    },
    {
      "use_case": "GLBA",
      "use_case_field": "GLBA"
    },
    {
      "use_case": "NERC",
      "use_case_field": "NERC"
    },
    {
      "use_case": "HIPAA",
      "use_case_field": "HIPAA"
    },
    {
      "use_case": "ISO27001",
      "use_case_field": "ISO27001"
    },
    {
      "use_case": "NIST 800 171",
      "use_case_field": "NIST_800_171"
    },
    {
      "use_case": "Unlogged Rules",
      "use_case_field": "unlogged_rules"
    },
    //Symantec Antivirus
    {
      "use_case": "Status",
      "use_case_field": "status"
    },
    {
      "use_case": "Infected",
      "use_case_field": "infected"
    },
    {
      "use_case": "Hi Status",
      "use_case_field": "hi_status"
    },
    {
      "use_case": "Da Enabled",
      "use_case_field": "da_enabled"
    },
    {
      "use_case": "Edr Status",
      "use_case_field": "edr_status"
    },
    {
      "use_case": "Ids Version",
      "use_case_field": "ids_version"
    },
    {
      "use_case": "ptp Enabled",
      "use_case_field": "ptp_enabled"
    },
    {
      "use_case": "Deploy Status",
      "use_case_field": "deploy_status"
    },
    {
      "use_case": "Last Scan Time",
      "use_case_field": "last_scan_time"
    },
    {
      "use_case": "Tamper Enabled",
      "use_case_field": "tamper_enabled"
    },
    {
      "use_case": "Profile Version",
      "use_case_field": "profile_version"
    },
    {
      "use_case": "Firewall Enabled",
      "use_case_field": "firewall_enabled"
    },
    {
      "use_case": "Avengine Enabled",
      "use_case_field": "avengine_enabled"
    },
    {
      "use_case": "Cids Drv Enabled",
      "use_case_field": "cids_drv_enabled"
    },
    {
      "use_case": "Last Update Time",
      "use_case_field": "last_update_time"
    },
    {
      "use_case": "Worstinfection Idx",
      "use_case_field": "worstinfection_idx"
    },
    //Antivirus TrendMicro
    {
      "use_case": "Rootkit",
      "use_case_field": "rootkit"
    },
    {
      "use_case": "Dlp Status",
      "use_case_field": "dlp_status"
    },
    {
      "use_case": "Agent Program",
      "use_case_field": "agent_program"
    },
    {
      "use_case": "Falcon Engine",
      "use_case_field": "falcon_engine"
    },
    {
      "use_case": "Virus Scan Engine",
      "use_case_field": "virus_scan_engine"
    },
    {
      "use_case": "Intelli Trap Pattern",
      "use_case_field": "intelli_trap_pattern"
    },
    {
      "use_case": "Data Protection Module",
      "use_case_field": "data_protection_module"
    },
    {
      "use_case": "Smart Scan Agent Pattern",
      "use_case_field": "smart_scan_agent_pattern"
    },
    {
      "use_case": "Advanced Threat Scan Engine",
      "use_case_field": "advanced_threat_scan_engine"
    },
    {
      "use_case": "Spyware Grayware Scan Engine",
      "use_case_field": "spyware_grayware_scan_engine"
    },
    {
      "use_case": "Web Reputation Service Status",
      "use_case_field": "web_reputation_service_status"
    },
    {
      "use_case": "File Reputation Service Status",
      "use_case_field": "file_reputation_service_status"
    },
    //"Load Balancer_Barracuda
    {
      "use_case": "Secure Cookie",
      "use_case_field": "secure_cookie"
    },
    {
      "use_case": "Request Limits",
      "use_case_field": "request_limits"
    },
    {
      "use_case": "Url Protection",
      "use_case_field": "url_protection"
    },
    {
      "use_case": "Double Decodeing",
      "use_case_field": "double_decodeing"
    },
    {
      "use_case": "Parameter Protection",
      "use_case_field": "parameter_protection"
    },
    {
      "use_case": "Suppress Return Code",
      "use_case_field": "suppress_return_code"
    },
    //"Firewall_Skybox_Security
    {
      "use_case": "Symmetric Rules",
      "use_case_field": "symmetric_rules"
    },
    {
      "use_case": "Bidirectional Rules",
      "use_case_field": "bidirectional_rules"
    },
  
  ],
  useCaseDescriptionMap:[
    {
      "Use Case": "AWS Location",
      "Description": "Checks data from the admin module and check if locations are in the designated area"
    },
    {
      "Use Case": "Encryption",
      "Description": "Checks whether encryption is available or not"
    },
    {
      "Use Case": "Lifecycle",
      "Description": "Checks if lifecycle is disabled or enabled"
    },
    {
      "Use Case": "Replication",
      "Description": "Checks if replication is enabled or disabled"
    },
    {
      "Use Case": "Versioning",
      "Description": "Checks if versioning is enabled or disabled"
    },
    {
      "Use Case": "Policy",
      "Description": "Checks whether policy is allowed or not, if the policy is available then it will check for the version of policy"
    },
    {
      "Use Case": "Storage",
      "Description": "Checks whether the size is not above the mentioned size from the admin value"
    },
    {
      "Use Case": "CPU Options",
      "Description": "Checks with the minimum number of cores an instance should have from the admin module"
    },
    {
      "Use Case": "Monitoring",
      "Description": "Checks if monitoring is disabled or enabled"
    },
    {
      "Use Case": "Security Details",
      "Description": "Checks if any unauthorised security group is added to the instance or not"
    },
    {
      "Use Case": "State",
      "Description": "Checks for the state whether it is running or stopped"
    },
    {
      "Use Case": "VPC Details",
      "Description": "Checks whether a matching VPC id is there in the admin center"
    },
    {
      "Use Case": "Policy",
      "Description": "Checks whether policy is allowed or not, if the policy is available then it will check for the version of policy"
    },
    {"Use Case":"Critical System Configuration", "Description":"Firewalls number of critical configurations. Like Interface details"},
    {"Use Case":"Old Version", "Description":"Checking the version from vendor site and compare the existing Device version."},
    {"Use Case":"Threat Signature Compliance", "Description":"Check the date of last update in system info"},
    {"Use Case":"Risky Rules", "Description":"Firewall rules with app and service set to any."},
    {"Use Case":"Unused rules", "Description":"Firewall Rules which are not in used."},
    {"Use Case":"Firewall availability", "Description":"Unknown and known shutdown or unavailability of firewall (Using show system info)"},
    {"Use Case":"Hi Status", "Description":"Firewall logs forwardedfgjhfdjhgjfmddhvhjdfvgfbvgjjhgjhbjkhgjkgfkjhghjhgjgfjhkjgfjhjbgjbfj\ngbjfjfjhfjffjgfjfhjhfhkfghjghjkghjgjh"},
//    // {"Use Case":"Logging Enabled", "Description":"Firewall logs forwarded"},
    {"Use Case":"Banner enabled", "Description":"Banner enabled"},
    //{"Use Case":"Unsecured Administrator Access", "Description":"To check if only secure protocols are enabled."},
    {"Use Case":"Untagged Rules", "Description":"Firewall are tagged and description is given about why and by whom Ticket created."},
    {"Use Case":"Threat profile Enabled", "Description":"Policy configured with Threat profile ( Applied on policy )"},
    {"Use Case":"App ID Configuration Enabled", "Description":"Policy configured with App ID"},
    {"Use Case":"Critical System Issues", "Description":"Check all critical system issue"},
    {"Use Case":"High Risk Applications", "Description":"All aps with risk 5 and 4 are high risk, 3and 2 are medium and 1 is low."},
  ],
  technologyList:[
                  'Antivirus_Mcafee',//TechC
                  'Antivirus_Microsoft',//TECHL
                  "Antivirus_Symantec",//TechO
                  "Antivirus_TrendMicro",//TechP
                  "Firewall_PAN",//TechN
                  "Firewall_Skybox_Security",//TechR
                  "Firewall_Algosec",//TechS
                  "Firewall_Tufin",//TechT
                  'Firewall_Firemon',//TechE
                  "Load Balancer_Barracuda",//TechQ
                  'Load Balancer_F5',//TechH
                  'HIPS_Mcafee',// TechA
                  'Systems Management_Solarwinds',//TechB
                  'Drive-Encryption_Mcafee',//TechD 
                  'AWS-ec2',//TechF
                  'AWS-s3',// TechG
                  'cmdb_ServiceNow',//TECHI
                  'Ticketing_Servicenow',//TechJ
                  'DLP_Mcafee',//TECH_K
                  'Vulnerability_Management_Tenableio',//TechM
                ],
  subCategoryUseCaseMapFull:[
    {
      "subCatName": "Baseline Configuration",
      "useCases": [
        "Service Running",
        "Managed Systems",
        "Last Communication",
        "Drive Encryption State",
        "Snmp Compliance",
        "Regulatory Compliance",
        "Status",
        "Security Concern Index",
        //AWS UCs
        "State",
        "Monitoring",
        "Lifecycle",
        "Policy",
        "Storage",
        "Versioning",
        "Replication",
        "Encryption",
        //LB-f5
        "NAT Enabled",
        "NTP Service",
        "SNAT Enabled",
        "Node Logging Disabled",
        //Microsoft Antivirus
        "Antivirus Status",
        "MS-AV Signature Compliance",
        "Antispyware Signature Compliance",
        //vulnerability_management_tenableio
        "Has Agent",
        "Last Scan Date",
        //Firewall Pan
        "DNS Config",
        "NTP Config",
        "Risky Rules",
        "Unused Rules",
        "Banner Enabled",
        "Untagged Rules",
        "Logging Disabled",
        "Threat Signature",
        "App id Configuration",
        "Unsecured Admin Access",
        "Threat Profiles Enabled",
        //Firewall Alogosec
        "PCI",
        "SOX",
        "GLBA",
        "NERC",
        "HIPAA",
        "ISO27001",
        "NIST 800 171",
        "Unlogged Rules",
        //Symantes Antivirus
        "Status",
        "Hi Status",
        "Edr Status",
        "Deploy Status",
        //Antivirus TrendMicro
        "Rootkit",
        "Dlp SStatus",
        "Agent Program",
        "Falcon Engine",
        "Virus Scan Engine",
        "Intelli Trap Pattern",
        "Data Protection Module",
        "Smart Scan Agent Pattern",
        "Advanced Threat Scan Engine",
        "Spyware Grayware Scan Engine",
        "Web Reputation Service Status",
        "File Reputation Service Status",
        //Load Balancer_Barracuda
        "Secure Cookie",
        "Url Protection",
        "Double Decodeing",
        "Parameter Protection",
        "Suppress Return Code",
        //Firewall_Skybox_Security
        "Symmetric Rules",
        "Bidirectional Rules",
        //Firewall Tufin
        "Unattached Network Object",
        "SNMP Compliance",
      ]
    },
    {
      "subCatName": "Repetitive Issues",
      "useCases": [
        "Blocked Attackers",
        "Pending Reboot",
      ]
    },
    {
      "subCatName": "Attack Surface",
      "useCases": [
        "Reboot Required",
        "Vulnerability Severities",
        "On Access Protection",
        "Infected",
        "Last Scan Time",
        "Worstinfection Idx",
        "Last Update Time",//not sure
      ]
    },
    {
      "subCatName": "Critical Configuration",
      "useCases": [
        "Firewall Audit Mode Status",
        "IPS Audit Mode Status",
        "HIPS Status",
        "NIPS Status",
        "Firewall Status",
        "Product Status",
        "Access Protection",
        "On Access Scanner",
        "Active Encryption Provider",
        "Unused Rules",
        "Disabled Rules",
        "Shadowed Rules",
        "Redundant Rules",
        //AWS
        "CPU Options",
        "Security Details",
        "VPC Details",
        "AWS Location",
        //LB-f5
        "Queue On Connection Limit",
        //Symantec AV
        "Da Enabled",
        "ptp Enabled",
        "Tamper Enabled",
        "Firewall Enabled",
        "Avengine Enabled",
        "Cids Drv Enabled",
        "HIPS Status",
        "IPS Audit Mode Status",
        //Microsoft Antivirus
        "RTP Status",
        "Request Limits",
        "IOAV Protection",
        "Behavior Monitor",
        "Antispyware Status",
      ]
    },
    {
      "subCatName": "Version and Patch",
      "useCases": [
        "Content Version",
        "Product Version",
        "Agent Version",
        "DAT Version",
        "Engine Version",
        "DE Windows Version",
        "DE Agent Version",
        //"Product Version",
        //Microsoft Antivirus
        "MS-AV Product Version",
        "MS-AV Engine Version",
        "Last Update Perform",
        "Ids Version",
        "SW Version",
        "Profile Version",
      ]
    },
    {
      "subCatName": "Insider Threats",
      "useCases": [
        "Firewall Fault",
        "Deny Rule",
        "Stealth Rule",
        "Unauthorized Changes",
        "Unsecured Features",
        "Pending Full Scan",
        "Quick Scan",
        "Pending Offline Scan",
      ]
    },
    {
      "subCatName": "Service Availability",
      "useCases": [
        "Node Availability",
        "Firewall Availability",

      ]
    },
    {
      "subCatName": "Service Performance",
      "useCases": [
        "Memory Usage",
        "Peak CPU Usage",
        "CPU Usage",
        "Memory Used",
        "Available Disk Space"
      ]
    },
    {
      "subCatName": "Device Inventory",
      "useCases": [
        "Node Status",
      ]
    },
    {
      "subCatName": "Persistent Issues",
      "useCases": [
        "Average Response Time"
      ]
    },
    {
      "subCatName": "Capacity Management",
      "useCases": [
      ]
    },
    {
      "subCatName": "Protection Readiness",
      "useCases": [
      ]
    },
    {
      "subCatName": "Service SLA",
      "useCases": [
        
        "Closed Tickets",
        "Total Resolution Time",
        "Work Resolution Time",
        "Operational Status",
        "Unverified",
        "Hardware Status",
        "Fault Count",
        "Install Status",
        "Monitor",
      ]
    },
    {
      "subCatName": "Availability of Artifacts",
      "useCases": [
      ]
    },
    {
      "subCatName": "Improvement in Service",
      "useCases": [
        "Open Tickets",
      ]
    },
    {
      "subCatName": "Service Back Logs",
      "useCases": [
      ]
    },
    {
      "subCatName": "Resolution Effectiveness",
      "useCases": [
      ]
    },
  ],
  mainCategorySubCategoryMap:[
    {
      "name": "Operational Risk",
      "subCategoryList": [
        "Baseline Configuration",
        "Repetitive Issues",
        "Attack Surface",
        "Critical Configuration",
        "Version and Patch",
        "Insider Threats"
      ]
    },
    {
      "name": "Operational Reliability",
      "subCategoryList": [
        "Service Availability",
        "Service Performance",
        "Device Inventory",
        "Persistent Issues",
        "Capacity Management"
      ]
    },
    {
      "name": "Operational Efficiency",
      "subCategoryList": [
        "Protection Readiness",
        "Service SLA",
        "Availability of Artifacts",
        "Improvement in Service",
        "Service Back Logs",
        "Resolution Effectiveness"
      ]
    }
  ],
  infraMap:{
    "Antivirus":['av-mcafee','antivirus-symantec',"av-microsoft"],
    "FireWall Analyzer":["firewallanalyzer-firemon"],
    // "Firewall":["Palo Alto","Checkpoint","Cisco","Fortigate","Juniper"],
    // "Network":["Cisco Meraki"],
    "AWS":["s3-aws","ec2-aws"],
    // "Systems Management":["Solarwinds"],
    "Security Manager":["Firemon"],
    "HIPS":["hips-mcafee","Symantec"],
    "Network IPS":["Palo Alto","Checkpoint","Cisco"],
    "Loadbalancer":["loadbalancer-f5",'Radware','Barracuda'],
    "Network APT":["Palo Alto"],
    "Monitoring":['monitoring-solarwinds'],
    "Proxy":['Bluecoat','Trend Micro','Websense','Zscaler'],
    "Encryption":["McAfee","Symantec"],
    "DLP":["Mcafee","Websense","dlp-symantec",'dlpendpoint-symantec','dlpdiscover-symantec'],
    "FIM":["Trend Micro","Mcafee",],
    "NAC":["Cisco","Forescout"],
    "Email Gateway":['Symantec'],
    "Vulnerability Manage":["Qualys",'Tenable','Trustwave'],
    "Advances Antimalware":["Palo Alto"],
    "ATP":["Microsoft"],
    "Public Cloud":['AWS','Microsoft Azure']
  },
  imagePath: {
    "EC2-AWS": "/src/assets/aws-ec2.jpg"
  },
  usecaseNameMap : {
    hips_status: 'HIPS Status',
    ips_audit_mode_status: 'IPS Audit Mode Status',
    nips_status: 'NIPS Status',
    product_version: 'Product Version',
    blocked_attackers: 'Blocked Attackers',
    content_version: 'Content Version',
    fw_audit_mode_status: 'Firewall Audit Mode Status',
    fw_fault: 'Firewall Fault',
    fw_status: 'Firewall Status',
    service_running: 'Service Running',
    reboot_required: 'Reboot Required',
    product_status: 'Product Status',
    node_status: 'Node Status',
    node_availability: 'Node Availability',
    average_response_time: 'Average Response Time',
    memory_usage: 'Memory Usage',
    peak_cpu_usage: 'Peak CPU Usage',
    cpu_usage: 'CPU Usage',
    agent_version: 'Agent Version',
    ap_enabled: 'Access Protection',
    engine_ver: 'Engine Version',
    managed_state: 'Managed Systems',
    last_update: 'Last Communication',
    oas_enabled: 'On Access Scanner',
    dat_ver: 'Signature Compliance',
    state_disk: 'Drive Encryption State',
    product_version_windows: 'DE Windows Version',
    product_version_agent: 'DE Agent Version',
    encryption_provider: 'Active Encryption Provider',
    status: 'Status',
    deny_rule: 'Deny Rule',
    stealth_rule: 'Stealth Rule',
    unused_rules: 'Unused Rules',
    disabled_rules: 'Disabled Rules',
    shadowed_rules: 'Shadowed Rules',
    redundant_rules: 'Redundant Rules',
    snmp_compliance: 'Snmp Compliance',
    unsecured_features: 'Unsecured Features',
    unauthorized_changes: 'Unauthorized Changes',
    regulatory_compliance: 'Regulatory Compliance',
    security_concern_index: 'Security Concern Index',
    unattached_network_object: 'Unattached Network Object',
    logging_disabled: 'Logging Disabled',
    risky_rules: 'Risky Rules',
    location: 'AWS Location',
    cpu_options: 'CPU Options',
    monitoring: 'Monitoring',
    security_details: 'Security Details',
    state: 'State',
    vpc_details: 'VPC Details',
    lifecycle: 'Lifecycle',
    policy: 'Policy',
    storage: 'Storage',
    encryption: 'Encryption',
    versioning: 'Versioning',
    replication: 'Replication',
    memory_used: 'Memory Used',
    nat_enabled: 'NAT Enabled',
    ntp_service: 'NTP Service',
    snat_enabled: 'SNAT Enabled',
    available_disk_space: 'Available Disk Space',
    node_logging_disabled: 'Node Logging Disabled',
    queue_on_connection_limit: 'Queue On Connection Limit',
    monitor: 'Monitor',
    unverified: 'Unverified',
    fault_count: 'Fault Count',
    install_status: 'Install Status',
    hardware_status: 'Hardware Status',
    operational_status: 'Operational Status',
    number_of_tickets_open: 'Open Tickets',
    number_of_tickets_closed: 'Closed Tickets',
    total_resolution_time: 'Total Resolution Time',
    work_resolution_time: 'Work Resolution Time',
    computer_status: 'Computer Status',
    pending_fullscan: 'Pending Full Scan',
    pending_reboot: 'Pending Reboot',
    pending_offlinescan: 'Pending Offline Scan',
    version: 'MS-AV Product Version',
    rtp_enabled: 'RTP Status',
    onaccess_protection_enabled: 'On Access Protection',
    ioav_protection_enabled: 'IOAV Protection',
    behavior_monitor_enabled: 'Behavior Monitor',
    antivirus_enabled: 'Antivirus Status',
    antispyware_enabled: 'Antispyware Status',
    engine_version: 'MS-AV Engine Version',
    last_quickscan_age: 'Quick Scan',
    antivirus_signature_age: 'MS-AV Signature Compliance',
    antispyware_signature_age: 'Antispyware Signature Compliance',
    has_agent: 'Has Agent',
    last_scan_date: 'Last Scan Date',
    last_update_performed: 'Last Update Perform',
    vulnerability_severities: 'Vulnerability Severities',
    dns_config: 'DNS Config',
    ntp_config: 'NTP Config',
    sw_version: 'SW Version',
    banner_enabled: 'Banner Enabled',
    untagged_rules: 'Untagged Rules',
    threat_signature: 'Threat Signature',
    app_id_configuration: 'App id Configuration',
    firewall_availability: 'Firewall Availability',
    unsecured_admin_access: 'Unsecured Admin Access',
    threat_profiles_enabled: 'Threat Profiles Enabled',
    PCI: 'PCI',
    SOX: 'SOX',
    GLBA: 'GLBA',
    NERC: 'NERC',
    HIPAA: 'HIPAA',
    ISO27001: 'ISO27001',
    NIST_800_171: 'NIST 800 171',
    unlogged_rules: 'Unlogged Rules',
    infected: 'Infected',
    hi_status: 'Hi Status',
    da_enabled: 'Da Enabled',
    edr_status: 'Edr Status',
    ids_version: 'Ids Version',
    ptp_enabled: 'ptp Enabled',
    deploy_status: 'Deploy Status',
    last_scan_time: 'Last Scan Time',
    tamper_enabled: 'Tamper Enabled',
    profile_version: 'Profile Version',
    firewall_enabled: 'Firewall Enabled',
    avengine_enabled: 'Avengine Enabled',
    cids_drv_enabled: 'Cids Drv Enabled',
    last_update_time: 'Last Update Time',
    worstinfection_idx: 'Worstinfection Idx',
    rootkit: 'Rootkit',
    dlp_status: 'Dlp Status',
    agent_program: 'Agent Program',
    falcon_engine: 'Falcon Engine',
    virus_scan_engine: 'Virus Scan Engine',
    intelli_trap_pattern: 'Intelli Trap Pattern',
    data_protection_module: 'Data Protection Module',
    smart_scan_agent_pattern: 'Smart Scan Agent Pattern',
    advanced_threat_scan_engine: 'Advanced Threat Scan Engine',
    spyware_grayware_scan_engine: 'Spyware Grayware Scan Engine',
    web_reputation_service_status: 'Web Reputation Service Status',
    file_reputation_service_status: 'File Reputation Service Status',
    secure_cookie: 'Secure Cookie',
    request_limits: 'Request Limits',
    url_protection: 'Url Protection',
    double_decodeing: 'Double Decodeing',
    parameter_protection: 'Parameter Protection',
    suppress_return_code: 'Suppress Return Code',
    symmetric_rules: 'Symmetric Rules',
    bidirectional_rules: 'Bidirectional Rules',
    severity:"Severity",
    blocked_status:"Blocked Status",
    rule_violation_count:"Rule Violation Count",
    violated_policy_rule:"Violated Policy Rule",
    asset_non_compliance:"Aseset Non Compliance",
    asset_management_policy:"Asset Management Policy",
    security_policies:"Security Policies",
    security_team_enablement:"Security Team Enablement",
    incident_response_capability:"Incident Response Capability",
    regulatory_standards_enablement:'Regulatory Standards Enablement',
    awareness_campaign_attended:'Awareness Campaign Attended',
    periodic_quiz:'Periodic Quiz',
    impact_assessment:'Impact Assessment',
    data_leakage:'Data Leakage',
    policy_acceptance_by_user:'Policy Acceptance By User',
    regularity_on_policy_update:'Regularity On Policy Update',
    background_verified:'Background Verified',
    repeated_verification:'Repeated Verification',
    idle_users:'Idle Users',
    average_time:'Average Time',
    user_id:'User Id',
    privileged_user:'Privileged User',
    critical_system_review:'Critical System Review',
    anamolies_detected:'Anamolies Detected',
    
    


  }
  
  
};






