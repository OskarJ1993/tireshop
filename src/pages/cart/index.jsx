import Layout from '../../layout';

const Cart = () => {
	const cartItems = [];

	for (let i = 1; i <= 2; i++) {
		cartItems.push({
			count: i + 1,
			name: 'Winter package 2. Tesla Model Y with Goodyear studded tires',
			imgUrl: '/img/tyre-large.png',
			price: 449,
		});
	}
	return (
		<Layout>
			<section>
				<div className='container mx-4 md:mx-auto lg:mx-auto'>
					<h1 className='py-2 text-center border-b text-xl font-medium'>
						Your Shopping Cart
					</h1>
					<ul className='flex flex-col gap-3 mb-5 pt-5 pb-5 border-b'>
						{cartItems.map((item) => (
							<li
								key={item.id}
								className='flex 
              flex-col md:flex-row md:justify-between'
							>
								<div className='flex items-center gap-2'>
									<div className='max-w-[80px]'>
										<img src={item.imgUrl} alt='' />
									</div>
									<h3>{item.name}</h3>
								</div>
								<div className='flex items-center justify-center'>
									<p>SEK {item.price}</p>
								</div>

								<div className='flex justify-center'>
									<input
										type='number'
										defaultValue={1}
										className='py-2 px-3 rounded-sm max-w-xs border md:self-center'
									/>
									<button>
										<img src='/img/delete.png' alt='remove item' />
									</button>
								</div>
							</li>
						))}
					</ul>

					<ul className='flex flex-col gap-1 text-base w-full overflow-hidden mb-5'>
						<li className='flex items-center justify-between'>
							<span>Total ex. VAT</span>
							<span>SEK 19,152</span>
						</li>
						<li className='flex items-center justify-between'>
							<span>VAT</span>
							<span>SEK 4788</span>
						</li>
						<li className='flex items-center justify-between'>
							<span>Shipping</span>
							<span>SEK 0</span>
						</li>
					</ul>

					<p className='flex items-center font-extrabold text-lg bg-gray-300 p-5 justify-between mb-10'>
						<span>To pay</span>
						<span>SEK 23,940</span>
					</p>
					<div className='mb-10'>
						<label
							htmlFor='choose-delivery'
							className='text-xl font-medium text-center block mb-2'
						>
							Choose Delivery
						</label>

						<div className='flex items-center justify-between gap-1'>
							<button className='bg-gray-700 w-full py-2 px-3 cursor-pointer rounded-md text-white'>
								Delivery to me
							</button>
							<button className='bg-gray-700 w-full py-2 px-3 cursor-pointer rounded-md text-white'>
								Delivery to assembly parnter
							</button>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Cart;
