export const deviceConstants = {
    DEVICE_DATA_REQUEST: 'DEVICE_DATA_FETCH_REQUEST',
    DEVICE_DATA_SUCCESS: 'DEVICE_DATA_FETCH_SUCCESS',
    DEVICE_DATA_FAILURE: 'DEVICE_DATA_FETCH_FAILURE',
    DEVICE_DATA_CLEAR: 'DEVICE_DATA_CLEAR',
};

export const systemNameConstants = {
    'EC2-AWS':'instance_name',
    'S3-AWS': 'bucket_name',
    'Ticketing-ServiceNow': 'engineer_name',
    'DLPDiscover-Symantec': 'incident_id',
    'DLPEndpoint-Symantec': 'incident_id',
    'People-People': 'username',
    'DLP-Symantec': 'ip_address',
    'AV-McAfee': 'nodename',
    'CMDB-ServiceNow': 'name',
    'HIPS-McAfee': 'system_name',
    'Monitoring-Solarwinds': 'system_name',
    'FirewallAnalyzer-Firemon': 'system_name',
    'Antivirus-Symantec': 'system_name',
    'LoadBalancer-F5': 'system_name',
};