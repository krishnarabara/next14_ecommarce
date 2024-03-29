'use client';

import { StarterWrapper } from 'boundless-checkout-react';
import { useParams } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { apiClient } from '../lib/api';  


export default function ThankYou() {
	const params = useParams();
	const checkoutStarter = useRef<StarterWrapper>();

	const checkoutRef = useCallback((node: HTMLDivElement) => {
		if (node && params.id) {
			checkoutStarter.current = startOrderInfo(node, {
				orderId: params.id as unknown as string,
				api: apiClient,
				onError: (error) => console.error('order info error:', error)
			});
		}
	}, [params.id]);

	if (!params.id) {
		return null;
	}                                

	return (
		<div>
			<h1 className={'mb-5'}>Thank you for your order!</h1>
			<div ref={checkoutRef} />
		</div>
	);
}
function startOrderInfo(node: HTMLDivElement, arg1: { orderId: string; api: any; onError: (error: any) => void; }): any {
	throw new Error('Function not implemented.');
}

