import React from 'react';
import {Widget as ChatWidget, addResponseMessage} from 'react-chat-widget';
import {Header, Footer,} from '.';

import 'react-chat-widget/lib/styles.css';

export function AppFrame({children, title, back = false, hideChat = false}: { children: any, title?: string, back?: boolean, hideChat?: boolean }) {
	return (<>
		<div className='container-fluid g-0 p-0 m-0'>
			<Header {...{title, back}}/>

			<main className='container py-4 border-left border-right bg-white min-vh-100'>
				<div className='mb-auto'/>
				{children}
				<div className='mt-auto'/>
			</main>

			<Footer/>

			{!hideChat && <ChatWidget
				title="Learnian ChatRoom"
				subtitle="Communicate with each other"
			/>}
		</div>
	</>);
}
