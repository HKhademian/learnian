import React from 'react';
import {useHistory} from "react-router-dom";
import {Footer, Header,} from '../components';

import img1 from '../assets/boy.png';

export const HomePage = () => {
	const history = useHistory();
	const onAction = () => history.push('/account');

	const customers = [
		{
			title: 'D-Link',
			imgTop: 'https://www.digitalsamba.com/hs-fs/hubfs/slider_oem.png?width=800&name=slider_oem.png',
			imgLogo: 'https://www.digitalsamba.com/hs-fs/hubfs/2_dlink_transparent.png?noresize&width=240&name=2_dlink_transparent.png',
			story: 'Our key people need lots of interactive features for things like sales training. Digital Samba is the only single platform that somehow fits our very distinct user-behaviors.'
		},
		{
			title: 'SEAS',
			imgTop: 'https://www.digitalsamba.com/hs-fs/hubfs/slider_education.png?noresize&width=800&name=slider_education.png',
			imgLogo: 'https://www.digitalsamba.com/hs-fs/hubfs/6_seas.png?noresize&width=216&name=6_seas.png',
			story: 'We have adapted Digital Samba’s software to serve specific needs and it works perfectly for our meetings and teaching intercontinental classes. It’s universal and growing in adoption in our organization.'
		},
		{
			title: 'SkyMeeting',
			imgTop: 'https://www.digitalsamba.com/hs-fs/hubfs/slider_cloud.png?width=800&name=slider_cloud.png',
			imgLogo: 'https://www.digitalsamba.com/hs-fs/hubfs/10_skymeeting.png?noresize&width=250&name=10_skymeeting.png',
			story: 'With Digital Samba we achieved a massive growth of 30% — we went from 300 customers to more than 1,000 within a year. 88% of our customers renew their subscription.'
		},
	];

	return (<>
		<div className='container-fluid g-0 p-0 m-0 min-vh-100 bg-white'>
			<Header/>

			<main className='container-fluid g-0 p-0 m-0 min-vh-100 d-flex flex-column align-items-stretch'>

				<div className='row g-0'>
					<div className='col-md m-auto p-5 text-center'>
						<h1>Easily manage your class rooms</h1>
						<h5>Interactive lessons, "on-the-go" practice, peer support.</h5>
						<button type='button' className='btn btn-primary' onClick={onAction}>Start Now</button>
					</div>
					<div className='col-md-6'>
						<img className='img-fluid' src={img1}/>
					</div>
				</div>

				<div className='bg-dark g-0 p-5 text-center'>
					<div className='display-3 text-light'>Grow your business</div>
					<div className='display-5 text-secondary'>Reach new customers at a fast pace</div>
				</div>

				<div className='bg-gradient g-0 m-0 p-5 text-center'>
					<div className='display-3 mb-5'>Customer Success Stories</div>
					<div className='row g-5'>
						{/*https://www.digitalsamba.com/*/}
						{customers.map(it => (<>
							<div className='col-xlg-3 col-lg-4 col-md-6'>
								<div className='d-flex flex-column border rounded shadow bg-white'>
									<img className='img-fluid' src={it.imgTop}/>
									<img className='img-fluid my-2 mx-auto' src={it.imgLogo}/>
									<h3 className='h3'>{it.title}</h3>
									<span className='text-center m-2'>{it.story}</span>
								</div>
							</div>
						</>))}

					</div>
				</div>

				{/*https://www.sololearn.com/*/}
				<div className='bg-info g-0 p-5 text-center'>
					<div className='display-3 text-light'>You are in good company.</div>
					<div className='display-5 text-white'>Over 35,000,000 learners all over the world</div>
					<div className='display-5 text-white'>use our apps on all types of devices.</div>
				</div>


			</main>

			<Footer/>
		</div>
	</>);
}
