# kubernetes-dashboard-browser-extensions

Uses the client-go Credential Plugins framework to provide authentication tokens to communicate with kubernetes dashboard.

Now support:
* AWS EKS


echo '   {"command": "aws eks get-token --region ap-east-1 --cluster-name dragonplus-eks-hk-01"}' | ./wrapper

--region ap-east-1 --cluster-name dragonplus-eks-hk-01
