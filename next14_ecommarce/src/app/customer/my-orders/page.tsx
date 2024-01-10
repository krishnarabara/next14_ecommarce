import {Metadata} from 'next';
import { fetchBasicSettings } from '../../../../lib/settings';
import MyOrders from '../../../../components/myOrders';

export default async function MyOrdersPage() {
	const settings = await fetchBasicSettings();

	return (
		<MyOrders settings={settings} />
	);
}

export const metadata: Metadata = {
	title: 'My Orders',
	robots: 'noindex',
};

