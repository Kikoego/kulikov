import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
	return (
		<div className='headerContent bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900'>
			<div className="navLinks">
				<Link to="/" className="flex items-center">
					<img src={logo} className="mr-3 h-6 sm:h-9 w-6 sm:w-9" alt="" />
				</Link>
				<Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white">Главная</Link>
				<Link to="/game" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white">Игра</Link>
				{/*Ссылку игру пока оставил для удобства перемещения в будущем (вообще она будет на главной)*/}
			</div>
			<div className="navButtons flex items-center lg:order-2">
			<Link to="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Войти</Link>
				{/*Тута под вопросиком пока*/}
			</div>
		</div>
	);
};

export default Header;