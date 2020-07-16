const config = require('./config.json');
const axios = require('axios');
const qs = require('qs');

// axios({
// 	method: 'get',
// 	url: 'https://www.linkedin.com/oauth/v2/authorization',
// 	data: qs.stringify({
// 		response_type: 'code',
// 		client_id: '77blt2z10qlm2c',
// 		redirect_uri: 'https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftornado2020',
// 		state: 'dFEeFwf45A93Slffef424',
// 		scope: 'r_emailaddress&r_ads&w_organization_social&rw_ads&r_basicprofile&r_liteprofile&r_ads_reporting&r_organization_social&rw_organization_admin&w_member_social&r_1st_connections_size'
// 	})		
// }).then(result => {
// 	console.log(result.data.access);
// }).catch(error => {
// 	console.log("error");
// });

axios({
	method: 'post',
	url: 'https://www.linkedin.com/oauth/v2/accessToken',	
	data: qs.stringify({
		'grant_type': 'authorization_code',
		'code': 'AQSow7V6s2F2koWzIsnVKcQGt_cHtsM1F3FHZOrEV0UY1KIFkWiFJpi8dt1NtjuZMOO6-NStoCjTG58ywq6GBcH2XQRctt7IBtel4Oeop5yVIBqiedk8qxlIlbkMxlfGg1gCVoupXL6xUc3-jegKYDPSe0rl4KyGdpIzGdej2_hhJ827vJcojtvaMXCCGw',
		'redirect_uri': 'https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftornado2020',
		'client_id': '77blt2z10qlm2c',
		'client_secret': 'eIIPdpqcx5c3cRzW'		
	}),
	headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }	
	}).then(result => {	
		console.log(result.data);
	}).catch(error => {	
		console.log(error);
	});

// 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77blt2z10qlm2c&redirect_uri=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftornado2020&state=dFEeFwf45A93Slffef424&scope=r_emailaddress&r_ads&w_organization_social&rw_ads&r_basicprofile&r_liteprofile&r_ads_reporting&r_organization_social&rw_organization_admin&w_member_social&r_1st_connections_size'

// curl -ik -X POST https://www.linkedin.com/oauth/v2/accessToken \
// -d grant_type=authorization_code \
// -d code=AQSow7V6s2F2koWzIsnVKcQGt_cHtsM1F3FHZOrEV0UY1KIFkWiFJpi8dt1NtjuZMOO6-NStoCjTG58ywq6GBcH2XQRctt7IBtel4Oeop5yVIBqiedk8qxlIlbkMxlfGg1gCVoupXL6xUc3-jegKYDPSe0rl4KyGdpIzGdej2_hhJ827vJcojtvaMXCCGw \
// -d redirect_uri=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftornado2020 \
// -d client_id=77blt2z10qlm2c \
// -d client_secret=eIIPdpqcx5c3cRzW