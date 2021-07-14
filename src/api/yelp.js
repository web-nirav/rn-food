import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 
			"Bearer ITRKy-qsRHseYeHHeMjPufC7OMTAy99WUYMW_3v18s_f9iLdAzRIQyOBI_YZKAVfCCXpSBu8E3pnxqLIqS14o0Bl1GuY2l2eWCVbIwTNFwnwQhkQKUOsEs5E3ortYHYx"
	}
})

// Client ID
// ulJ-Q6afGlcSv33iRzX-Aw

// API Key
// ITRKy-qsRHseYeHHeMjPufC7OMTAy99WUYMW_3v18s_f9iLdAzRIQyOBI_YZKAVfCCXpSBu8E3pnxqLIqS14o0Bl1GuY2l2eWCVbIwTNFwnwQhkQKUOsEs5E3ortYHYx