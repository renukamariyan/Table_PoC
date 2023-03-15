import { useEffect, useState } from "react";
import TableCore from "../table/TableCore";

// export interface TableData {
//     providerAssetId: String,
//     providerName: String,
//     assetAccountName: String,
//     assetStartDate: String,
//     location: String,
//     assetSource: String,
//     assetType: String,
//     assetName:String,
//     operationalState: String,
//     utilizationScore: String,
//     ccCustomerTotalCost: Number,
//     allTags: Object
// }

const AssetDashboardCols = [
    {
        key: 'providerAssetId',
        header: 'Asset ID',
        sortState: 'NONE'
    },
    {
        key: 'providerName',
        header: 'Provider',
        sortState: 'NONE'
    },
    {
        key: 'assetAccountName',
        header: 'Asset Account Name',
        sortState: 'NONE'
    },
    {
        key: 'location',
        header: 'Location',
        sortState: 'NONE'
    },
    {
        key: 'assetStartDate',
        header: 'Provision Date',
        sortState: 'NONE'
    },
    {
        key: 'assetSource',
        header: 'Asset Source',
        sortState: 'NONE'
    },
    {
        key: 'assetType',
        header: 'Asset Type',
        sortState: 'NONE'
    },
    {
        key: 'assetName',
        header: 'Asset Name',
        sortState: 'NONE'
    },
    {
        key: 'operationalState',
        header: 'Asset Status',
        sortState: 'NONE'
    },
    {
        key: 'utilizationScore',
        header: 'Utilization',
        sortState: 'NONE'
    },
    {
        key: 'ccCustomerTotalCost',
        header: 'Customer Total Cost',
        sortState: 'NONE'
    },
    {
        key: 'allTags',
        header: 'Tags',
        sortState: 'NONE'
    }
]

const AssetDashboardData = [
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-aws-central-terraform-lock-1"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-11-23T11:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Amazon DynamoDB",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-aws-central-terraform-lock-1",
        "correlationAssetId": "aws-007645684656-arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-aws-central-terraform-lock-1",
        "assetName": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-aws-central-terraform-lock-1",
        "assetParentName": "",
        "category": "Database",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 96,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-aws-central-terraform-lock-1_202302",
        "cost": 0.40042928610000006,
        "ccCustomerTotalCost": 0.40042928610000006,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 0.40042928610000006,
        "pcProviderTotalCostConverted": 0.40042928610000006,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AmazonDynamoDB",
            "UsageType": "WriteCapacityUnit-Hrs"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-infra-aws-terraform-lock"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-22T11:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Amazon DynamoDB",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-infra-aws-terraform-lock",
        "correlationAssetId": "aws-007645684656-arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-infra-aws-terraform-lock",
        "assetName": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-infra-aws-terraform-lock",
        "assetParentName": "",
        "category": "Database",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 189,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-infra-aws-terraform-lock_202302",
        "cost": 0.401055936,
        "ccCustomerTotalCost": 0.401055936,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 0.401055936,
        "pcProviderTotalCostConverted": 0.401055936,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AmazonDynamoDB",
            "UsageType": "ReadCapacityUnit-Hrs"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:ec2:us-east-1:007645684656:natgateway/nat-0e8ce64d0f1e488c7"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Amazon Elastic Compute Cloud",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:ec2:us-east-1:007645684656:natgateway/nat-0e8ce64d0f1e488c7",
        "correlationAssetId": "aws-007645684656-arn:aws:ec2:us-east-1:007645684656:natgateway/nat-0e8ce64d0f1e488c7",
        "assetName": "monitoring-aws-central",
        "assetParentName": "",
        "category": "Compute",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 189,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:ec2:us-east-1:007645684656:natgateway/nat-0e8ce64d0f1e488c7_202302",
        "cost": 464.1114877879,
        "ccCustomerTotalCost": 464.1114877879,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 464.1114877879,
        "pcProviderTotalCostConverted": 464.1114877879,
        "allTags": [
            {
                "Name": "monitoring-aws-central"
            }
        ],
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AmazonEC2",
            "UsageType": "DataTransfer-Out-Bytes"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:ec2:us-east-1:007645684656:vpc-endpoint/vpce-0e0af387678019420"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-22T16:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Amazon Virtual Private Cloud",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:ec2:us-east-1:007645684656:vpc-endpoint/vpce-0e0af387678019420",
        "correlationAssetId": "aws-007645684656-arn:aws:ec2:us-east-1:007645684656:vpc-endpoint/vpce-0e0af387678019420",
        "assetName": "arn:aws:ec2:us-east-1:007645684656:vpc-endpoint/vpce-0e0af387678019420",
        "assetParentName": "",
        "category": "Compute",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 189,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:ec2:us-east-1:007645684656:vpc-endpoint/vpce-0e0af387678019420_202302",
        "cost": 12.78,
        "ccCustomerTotalCost": 12.78,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 12.78,
        "pcProviderTotalCostConverted": 12.78,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AmazonVPC",
            "UsageType": "USE1-VpcEndpoint-Hours"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:eks:us-east-1:007645684656:cluster/monitoring-aws-central"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Amazon Elastic Container Service for Kubernetes",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:eks:us-east-1:007645684656:cluster/monitoring-aws-central",
        "correlationAssetId": "aws-007645684656-arn:aws:eks:us-east-1:007645684656:cluster/monitoring-aws-central",
        "assetName": "arn:aws:eks:us-east-1:007645684656:cluster/monitoring-aws-central",
        "assetParentName": "",
        "category": "Compute",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 189,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:eks:us-east-1:007645684656:cluster/monitoring-aws-central_202302",
        "cost": 63.8,
        "ccCustomerTotalCost": 63.8,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 63.8,
        "pcProviderTotalCostConverted": 63.8,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AmazonEKS",
            "UsageType": "USE1-AmazonEKS-Hours:perCluster"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ab9264539ca0a4c8092f6d7ac2c04814"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-10-03T00:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Elastic Load Balancing",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ab9264539ca0a4c8092f6d7ac2c04814",
        "correlationAssetId": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ab9264539ca0a4c8092f6d7ac2c04814",
        "assetName": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ab9264539ca0a4c8092f6d7ac2c04814",
        "assetParentName": "",
        "category": "Compute",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 148,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ab9264539ca0a4c8092f6d7ac2c04814_202302",
        "cost": 15.8756208943,
        "ccCustomerTotalCost": 15.8756208943,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 15.8756208943,
        "pcProviderTotalCostConverted": 15.8756208943,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AWSELB",
            "UsageType": "USE1-APS3-AWS-Out-Bytes"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ae4e88cde39d04d3a8394ee93dfff821"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2023-01-26T19:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Elastic Load Balancing",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ae4e88cde39d04d3a8394ee93dfff821",
        "correlationAssetId": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ae4e88cde39d04d3a8394ee93dfff821",
        "assetName": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ae4e88cde39d04d3a8394ee93dfff821",
        "assetParentName": "",
        "category": "Compute",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 32,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ae4e88cde39d04d3a8394ee93dfff821_202302",
        "cost": 437.8314712838,
        "ccCustomerTotalCost": 437.8314712838,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 437.8314712838,
        "pcProviderTotalCostConverted": 437.8314712838,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AWSELB",
            "UsageType": "USE1-EUW3-AWS-Out-Bytes"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/app/k8s-monitoringawscent-7898e740c1/d20e587dddbb24ef"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-23T09:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "Elastic Load Balancing",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/app/k8s-monitoringawscent-7898e740c1/d20e587dddbb24ef",
        "correlationAssetId": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/app/k8s-monitoringawscent-7898e740c1/d20e587dddbb24ef",
        "assetName": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/app/k8s-monitoringawscent-7898e740c1/d20e587dddbb24ef",
        "assetParentName": "",
        "category": "Compute",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 188,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/app/k8s-monitoringawscent-7898e740c1/d20e587dddbb24ef_202302",
        "cost": 14.3410165035,
        "ccCustomerTotalCost": 14.3410165035,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 14.3410165035,
        "pcProviderTotalCostConverted": 14.3410165035,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AWSELB",
            "UsageType": "USE1-USE2-AWS-Out-Bytes"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:kms:us-east-1:007645684656:key/150991a1-d6fa-4889-9f4c-dd6c2edf0812"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "AWS Key Management Service",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:kms:us-east-1:007645684656:key/150991a1-d6fa-4889-9f4c-dd6c2edf0812",
        "correlationAssetId": "aws-007645684656-arn:aws:kms:us-east-1:007645684656:key/150991a1-d6fa-4889-9f4c-dd6c2edf0812",
        "assetName": "arn:aws:kms:us-east-1:007645684656:key/150991a1-d6fa-4889-9f4c-dd6c2edf0812",
        "assetParentName": "",
        "category": "Security",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 189,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:kms:us-east-1:007645684656:key/150991a1-d6fa-4889-9f4c-dd6c2edf0812_202302",
        "cost": 3.2199548328,
        "ccCustomerTotalCost": 3.2199548328,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 3.2199548328,
        "pcProviderTotalCostConverted": 3.2199548328,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "awskms",
            "UsageType": "us-east-1-KMS-Requests"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:kms:us-east-1:007645684656:key/6f9298a7-bd0f-4113-8867-46d5d0f3ad3e"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "AWS Key Management Service",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:kms:us-east-1:007645684656:key/6f9298a7-bd0f-4113-8867-46d5d0f3ad3e",
        "correlationAssetId": "aws-007645684656-arn:aws:kms:us-east-1:007645684656:key/6f9298a7-bd0f-4113-8867-46d5d0f3ad3e",
        "assetName": "arn:aws:kms:us-east-1:007645684656:key/6f9298a7-bd0f-4113-8867-46d5d0f3ad3e",
        "assetParentName": "",
        "category": "Security",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 189,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:kms:us-east-1:007645684656:key/6f9298a7-bd0f-4113-8867-46d5d0f3ad3e_202302",
        "cost": 0.017862,
        "ccCustomerTotalCost": 0.017862,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 0.017862,
        "pcProviderTotalCostConverted": 0.017862,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "awskms",
            "UsageType": "us-east-1-KMS-Requests"
        },
        "Metrics": [],
        "operatingSystem": ""
    },
    {
        "_id": {
            "period": 202302,
            "correlationAssetId": "aws-007645684656-arn:aws:logs:us-east-1:007645684656:log-group:/aws/eks/monitoring-aws-central/cluster"
        },
        "providerName": "aws",
        "billingAccountId": "608263488029",
        "billingAccountName": "608263488029Master",
        "assetAccountId": "007645684656",
        "assetAccountName": null,
        "assetSource": "cost",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "assetEndDate": null,
        "region": "US East",
        "country": "US",
        "subregion": "US Northeast",
        "location": "Virginia",
        "providerRegionCode": "us-east-1",
        "assetType": "AmazonCloudWatch",
        "resourceGroupId": null,
        "resourceGroupName": null,
        "providerAssetId": "arn:aws:logs:us-east-1:007645684656:log-group:/aws/eks/monitoring-aws-central/cluster",
        "correlationAssetId": "aws-007645684656-arn:aws:logs:us-east-1:007645684656:log-group:/aws/eks/monitoring-aws-central/cluster",
        "assetName": "arn:aws:logs:us-east-1:007645684656:log-group:/aws/eks/monitoring-aws-central/cluster",
        "assetParentName": "",
        "category": "Monitoring",
        "capacityText": null,
        "operationalState": "Unknown",
        "utilizationScore": null,
        "utilizationLevel": null,
        "ageDays": 189,
        "providerCurrency": "USD",
        "customerCurrency": "USD",
        "period": 202302,
        "ui_id": "aws-007645684656-arn:aws:logs:us-east-1:007645684656:log-group:/aws/eks/monitoring-aws-central/cluster_202302",
        "cost": 24.5012225396,
        "ccCustomerTotalCost": 24.5012225396,
        "count": 1,
        "corporateCurrency": "USD",
        "ccProviderTotalCostConverted": 24.5012225396,
        "pcProviderTotalCostConverted": 24.5012225396,
        "allTags": null,
        "attributes": {
            "LineItemType": "Usage",
            "ProductCode": "AmazonCloudWatch",
            "UsageType": "USE1-TimedStorage-ByteHrs"
        },
        "Metrics": [],
        "operatingSystem": ""
    }
]

// const rowData1 = [
//     {
//       id: 'load-balancer-1',
//       name: 'Load Balancer 1',
//       rule: 'Round robin',
//       status: 'Starting',
//       other: 'Test',
//       example: '212',
//     },
//     {
//       id: 'load-balancer-2',
//       name: 'Load Balancer 2',
//       rule: 'DNS delegation',
//       status: 'Active',
//       other: 'Test',
//       example: '45',
//     },
//     {
//       id: 'load-balancer-3',
//       name: 'Load Balancer 3',
//       rule: 'Round robin',
//       status: 'Disabled',
//       other: 'Test',
//       example: '92',
//     },
//     {
//       id: 'load-balancer-4',
//       name: 'Load Balancer 4',
//       rule: 'ARound robin',
//       status: 'Disabled',
//       other: 'Test',
//       example: '16',
//     },
//     {
//       id: 'load-balancer-5',
//       name: 'Load Balancer 5',
//       rule: 'Round robin',
//       status: 'Disabled',
//       other: 'Test',
//       example: '581',
//     },
//     {
//       id: 'load-balancer-6',
//       name: 'Load Balancer 6',
//       rule: 'Round robin',
//       status: 'Disabled 1',
//       other: 'Test',
//       example: '07',
//     },
//     {
//       id: 'load-balancer-7',
//       name: 'Load Balancer 7',
//       rule: 'Round robin',
//       status: 'Disabled 1011',
//       other: 'Test',
//       example: '48',
//     },
//     {
//       id: 'load-balancer-8',
//       name: 'Load Balancer 8',
//       rule: 'DNS delegation',
//       status: 'Active',
//       other: 'Test',
//       example: '145',
//     },
//     {
//       id: 'load-balancer-9',
//       name: 'Load Balancer 9',
//       rule: 'Round robin',
//       status: 'Disabled 100',
//       other: 'Test',
//       example: '927',
//     },
//     {
//       id: 'load-balancer-10',
//       name: 'Load Balancer 10',
//       rule: 'ARound robin',
//       status: 'Disabled 101',
//       other: 'Test',
//       example: '166',
//     },
//     {
//       id: 'load-balancer-11',
//       name: 'Load Balancer 11',
//       rule: 'Round robin',
//       status: 'Disabled',
//       other: 'Test',
//       example: '461',
//     },
//     {
//       id: 'load-balancer-12',
//       name: 'Load Balancer 12',
//       rule: 'Round robin',
//       status: 'Disabled',
//       other: 'Test',
//       example: '3012',
//     },
//     {
//       id: 'load-balancer-13',
//       name: 'Load Balancer 13',
//       rule: 'Round robin',
//       status: 'Disabled 203',
//       other: 'Test',
//       example: '107',
//     },
//   ];
  
//   const headerData = [
//     {
//       key:'name',
//       header:'Name',
//       sortState: 'NONE'
//     },
//     {
//       key:'rule',
//       header:'Rule',
//       sortState: 'NONE'
//     },
//     {
//       key:'status',
//       header:'Status',
//       sortState: 'NONE'
//     },
//     {
//       key:'other',
//       header:'Other',
//       sortState: 'NONE'
//     },
//     {
//       key:'example',
//       header:'Example',
//       sortState: 'NONE'
//     }
//   ]

const rowData2 = [
    {   
        "id": "1",
        "providerAssetId": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-aws-central-terraform-lock-1",
        "providerName": "aws",
        "assetStartDate": "2022-11-23T11:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Amazon DynamoDB",
        "assetName": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-aws-central-terraform-lock-1",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 0.40042928610000006,
        "allTags": null
    },
    {
        "id": "2",
        "providerAssetId": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-infra-aws-terraform-lock",
        "providerName": "aws",
        "assetStartDate": "2022-08-22T11:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Amazon DynamoDB",
        "assetName": "arn:aws:dynamodb:us-east-1:007645684656:table/monitoring-infra-aws-terraform-lock",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 0.401055936,
        "allTags": null
    },
    {
        "id": "3",
        "providerAssetId": "arn:aws:ec2:us-east-1:007645684656:natgateway/nat-0e8ce64d0f1e488c7",
        "providerName": "aws",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Amazon Elastic Compute Cloud",
        "assetName": "monitoring-aws-central",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 464.1114877879,
        "allTags": "monitoring-aws-central"
    },
    {
        "id": "4",
        "providerAssetId": "arn:aws:ec2:us-east-1:007645684656:vpc-endpoint/vpce-0e0af387678019420",
        "providerName": "aws",
        "assetStartDate": "2022-08-22T16:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Amazon Virtual Private Cloud",
        "assetName": "arn:aws:ec2:us-east-1:007645684656:vpc-endpoint/vpce-0e0af387678019420",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 12.78,
        "allTags": null
    },
    {
        "id": "5",
        "providerAssetId": "arn:aws:eks:us-east-1:007645684656:cluster/monitoring-aws-central",
        "providerName": "aws",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Amazon Elastic Container Service for Kubernetes",
        "assetName": "arn:aws:eks:us-east-1:007645684656:cluster/monitoring-aws-central",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 63.8,
        "allTags": null
    },
    {
        "id": "6",
        "providerAssetId": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ab9264539ca0a4c8092f6d7ac2c04814",
        "providerName": "aws",
        "assetStartDate": "2022-10-03T00:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Elastic Load Balancing",
        "assetName": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ab9264539ca0a4c8092f6d7ac2c04814",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 15.8756208943,
        "allTags": null
    },
    {
        "id": "7",
        "providerAssetId": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ae4e88cde39d04d3a8394ee93dfff821",
        "providerName": "aws",
        "assetStartDate": "2023-01-26T19:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Elastic Load Balancing",
        "assetName": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/ae4e88cde39d04d3a8394ee93dfff821",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 437.8314712838,
        "allTags": null
    },
    {
        "id": "8",
        "providerAssetId": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/app/k8s-monitoringawscent-7898e740c1/d20e587dddbb24ef",
        "providerName": "aws",
        "assetStartDate": "2022-08-23T09:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "Elastic Load Balancing",
        "assetName": "arn:aws:elasticloadbalancing:us-east-1:007645684656:loadbalancer/app/k8s-monitoringawscent-7898e740c1/d20e587dddbb24ef",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 14.3410165035,
        "allTags": null
    },
    {
        "id": "9",
        "providerAssetId": "arn:aws:kms:us-east-1:007645684656:key/150991a1-d6fa-4889-9f4c-dd6c2edf0812",
        "providerName": "aws",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "AWS Key Management Service",
        "assetName": "arn:aws:kms:us-east-1:007645684656:key/150991a1-d6fa-4889-9f4c-dd6c2edf0812",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 3.2199548328,
        "allTags": null
    },
    {
        "id": "10",
        "providerAssetId": "arn:aws:kms:us-east-1:007645684656:key/6f9298a7-bd0f-4113-8867-46d5d0f3ad3e",
        "providerName": "aws",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "AWS Key Management Service",
        "assetName": "arn:aws:kms:us-east-1:007645684656:key/6f9298a7-bd0f-4113-8867-46d5d0f3ad3e",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 0.017862,
        "allTags": null
    },
    {
        "id": "11",
        "providerAssetId": "arn:aws:logs:us-east-1:007645684656:log-group:/aws/eks/monitoring-aws-central/cluster",
        "providerName": "aws",
        "assetStartDate": "2022-08-22T13:00:00.000Z",
        "location": "Virginia",
        "assetSource": "cost",
        "assetType": "AmazonCloudWatch",
        "assetName": "arn:aws:logs:us-east-1:007645684656:log-group:/aws/eks/monitoring-aws-central/cluster",
        "operationalState": "Unknown",
        "ccCustomerTotalCost": 24.5012225396,
        "allTags": null
    }
]

function TableWrapper() {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        // updateHeaders()
        console.log('hello')
        console.log('wrapper')
    }, [])

    function updateHeaders() {
        
        const tableData = JSON.parse(JSON.stringify(rowData));
        AssetDashboardData.forEach(data => {
            let temp = {
                id: String,
                providerAssetId: String,
                providerName: String,
                assetAccountName: String,
                assetStartDate: String,
                location: String,
                assetSource: String,
                assetType: String,
                assetName:String,
                operationalState: String,
                utilizationScore: String,
                ccCustomerTotalCost: Number,
                allTags: Object
            };
            AssetDashboardCols.forEach(col => {
                if(data[col.key]){
                    const val = col.key;
                    temp[val] = data[col.key]
                }
                temp['id'] = data['providerAssetId']
            })
            rowData.push(temp);
        })
        // setRowData(null);
        // console.log(tableData);
        // setRowData(tableData);
        // console.log(rowData);
    }
    

    return (
        <TableCore headerData={AssetDashboardCols} rowData={rowData2} rowDataDefault={rowData2}></TableCore>
    )
}

export default TableWrapper;