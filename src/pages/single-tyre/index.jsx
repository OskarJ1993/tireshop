import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Layout from '../../layout';

import { tyres } from '../../data/tyres';
const SingleTyre = () => {
	const [numOfTyres, setNumOfTyres] = useState(1);
	const { id } = useParams();

	const [tyre, setTyre] = useState(null);

	const addToCart = () => {
		let existingCart = null;
		if (localStorage.getItem('cart')) {
			existingCart = JSON.parse(localStorage.getItem('cart'));

			if (existingCart.find((item) => item.id === +id)) {
				existingCart.map((item) => {
					if (item.id === +id) {
						item.count = item.count + parseInt(numOfTyres);
					}
					return item;
				});
			} else {
				existingCart.push({
					...tyre,
					count: +numOfTyres,
				});
			}

			localStorage.setItem('cart', JSON.stringify(existingCart));

			// total items
		}
	};

	useEffect(() => {
		const foundTyre = tyres.find((tyre) => tyre.id === +id);

		setTyre(foundTyre);
	}, []);

	if (tyre) {
		return (
			<Layout>
				<article className='mx-4 md:mx-auto lg:mx-auto container'>
					<div className='w-full object-cover bg-no-repeat flex justify-center'>
						<img src={tyre.imgUrlLarge} alt='' />
					</div>
					<h1 className='text-2xl text-center font-extrabold pb-3 border-b mb-2'>
						{tyre.name}
					</h1>

					<p className='text-base font-medium mb-2 text-center'>
						{tyre.description}
					</p>

					<p className='font-extrabold text-lg mb-4 text-center'>
						SEK {tyre.price}
					</p>

					<div className='flex items-center w-full mb-6 max-w-sm mx-auto md:ml-0 lg:mx-auto md:mx-auto '>
						<input
							type='number'
							className='w-4/5 p-2 border font-medium'
							onChange={(e) => setNumOfTyres(+e.target.value)}
							value={numOfTyres}
						/>
						<input
							type='button'
							onClick={addToCart}
							className='bg-green-700 font-medium cursor-pointer w-1/5 text-white border p-2 rounded-r-md rounded-b-md'
							value='Buy'
						/>
					</div>
				</article>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<h1>Loading...</h1>
				<p></p>
			</Layout>
		);
	}
};

export default SingleTyre;
