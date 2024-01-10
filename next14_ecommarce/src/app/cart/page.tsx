import {Metadata} from 'next';
import { fetchBasicSettings } from '../../../lib/settings';
import CartBody from '../../../components/cart/cartBody';

export default async function CartPage() {
	const settings = await fetchBasicSettings();

	return (
		<div className={'container'}>
			<h1 className={'mb-4'}>Cart page</h1>
			<CartBody settings={settings} />
		</div>
	);
}

export const metadata: Metadata = {
	title: 'Cart'
};
