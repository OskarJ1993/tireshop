import { Link } from 'react-router-dom';
import { tyres } from '../../data/tyres';

import Product from '../Product/index.jsx';
const Products = () => {
	return (
		<section className='py-24 md:px-4'>
			<h2 className='text-center mb-6 text-2xl text-gray-700'>Däck Topp 8</h2>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-9'>
				{tyres.map((p) => (
					<Link key={p.id} to={`/tyres/${p.id}`}>
						<Product tyre={p} key={p.id} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default Products;
