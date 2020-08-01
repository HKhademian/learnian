import React from 'react';
import {Widget as ChatWidget, addResponseMessage} from 'react-chat-widget';
import {Header, Footer,} from '.';

import 'react-chat-widget/lib/styles.css';

export function AppFrame({children, title, back = false, hideChat = false}: { children: any, title?: string, back?: boolean, hideChat?: boolean }) {
	return (<>
		<div className='container-fluid p-0 m-0'>
			<Header {...{title, back}}/>

			<main className='container border-left border-right py-4 bg-white' {...{children}}/>

			{!hideChat && <ChatWidget
				title="Learnian ChatRoom"
				subtitle="Communicate with each other"
			/>}

			<Footer/>
		</div>
	</>);
}
