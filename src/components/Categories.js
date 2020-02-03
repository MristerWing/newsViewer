import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categorie = [
	{
		name: 'all',
		text: '전체보기'
	},
	{
		name: 'business',
		text: '비즈니스'
	},
	{
		name: 'entertainment',
		text: '엔터테이머트'
	},
	{
		name: 'health',
		text: '건강'
	},
	{
		name: 'science',
		text: '과학'
	},
	{
		name: 'sport',
		text: '스포츠'
	},
	{
		name: 'technology',
		text: '기술'
	}
];

const CategoriesBlock = styled.div`
	display: flex;
	padding: 1rem;
	width: 768px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
	}
`;

const Category = styled(NavLink)`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;

	&:hover {
		color: #495097;
	}

	&.active {
		font-weight: 600;
		border-bottom: 2px solid #22b8cf;
		color: #22b8cf;
		&:hover {
			color: #3bc9db;
		}
	}

	& + & {
		margin-left: 1rem;
	}
`;

const Categories = () => {
	return (
		<CategoriesBlock>
			{categorie.map(c => (
				<Category
					key={c.name}
					activeClassName="active"
					/* exact값이 /를 가르키고 있을때는 true로 해주어야 다른 카테고리가 선택되었을 때 전체보기 링크에 active스타일이 적용되는 오류가 발생하지 않는다. */
					exact={c.name === 'all'}
					to={c.name === 'all' ? '/' : `/${c.name}`}
				>
					{c.text}
				</Category>
			))}
		</CategoriesBlock>
	);
};

export default Categories;
