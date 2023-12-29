// /api/subscribe.js
import axios from "axios";

export default async (req, res) => {
	if (req.method === "POST") {
		const email = req.body.email;

		// Mailchimp API URL
		const url = `https://usX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members`;

		// Mailchimp API request data
		const data = {
			email_address: email,
			status: "subscribed",
		};

		// Mailchimp API request options
		const options = {
			auth: {
				username: "anystring",
				password: "YOUR_API_KEY",
			},
		};

		// Send a POST request to Mailchimp API
		const response = await axios.post(url, data, options);

		res.status(200).send("Email subscribed successfully");
	} else {
		res.status(405).send("Method not allowed");
	}
};
