```
console.log(wrapper.debug());

```


 "scripts": {
    "test": "jest",
    "babel": "babel src -d lib --ignore \"**/*.test.js\" -s --delete-dir-on-start",
    "babel:module": "yarn babel -d module --modules false",
    "copy:types": "cp src/index.d.ts lib/",
    "prepare": "node scripts/build-index.js && concurrently \"yarn run babel\" \"yarn run babel:module\" && yarn copy:types",
    "commit": "git-cz"
  },
  
	"config": {
		"commitizen": {
			"path": "./node_modules/cz-conventional-changelog"
		}
	},


import PropTypes from 'prop-types';
import { Nav } from './Navigation.style';
import React from 'react';
import Text from '../Text';
import TextLink from '../TextLink';
import TertiaryButton from '../TertiaryButton';
import classnames from 'classnames';

export class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: '',
			subselected: '',
		};
	}

	setNavigationRef = node => {
		this.navigationRef = node;
	};

	closeNav = () => {
		this.setState({ selected: '', subselected: '' });
	};

	//handle click link
	handleLinkOnclick = e => {
		e.preventDefault();
		this.closeNav();
	};

	//handle click on expandable button
	handleOnclick = e => {
		const buttoncClass = e.target.className.includes('mainButton');

		if (buttoncClass) {
			if (e.target.name === this.state.selected) {
				this.closeNav();
			} else {
				this.setState({
					selected: e.target.name,
				});
			}
		} else {
			if (e.target.name === this.state.subselected) {
				this.closeNav();
			} else {
				this.setState({
					subselected: e.target.name,
				});
			}
		}
	};

	//handle click outside nav
	handleClickOutside = e => {
		if (this.navigationRef && !this.navigationRef.contains(e.target)) {
			this.closeNav();
		}
	};

	//handle esc key
	handleEscClick = e => {
		if (e.keyCode === 27) {
			this.closeNav();
		}
	};

	displayEl = (menu, buttonClass) => {
		return menu.subpages.length > 0 ? (
			<TertiaryButton
				className={buttonClass}
				onClick={e => this.handleOnclick(e)}
				name={menu.key}
			>
				{menu.title} >
			</TertiaryButton>
		) : (
			<TextLink href={menu.path} onClick={e => this.handleLinkOnclick(e)}>
				<Text>{menu.title}</Text>
			</TextLink>
		);
	};

	displaySubMenu = (menu, navType) => {
		let buttonClass = 'mainButton',
			listClass = 'navigation__sub',
			select = this.state.selected;

		if (navType !== 'mainNav') {
			buttonClass = 'subButton';
			listClass = 'navigation__sub-sub';
			select = this.state.subselected;
		}

		return menu.map(menu => (
			<li
				key={menu.key}
				className={classnames(
					this.state.selected === menu.key ? 'is-open' : ''
				)}
				aria-expanded={this.state.selected === menu.key}
			>
				{this.displayEl(menu, buttonClass)}
				{select === menu.key && menu.subpages.length > 0 ? (
					<ul className={listClass}>
						{this.displaySubMenu(menu.subpages, 'subNav')}
					</ul>
				) : null}
			</li>
		));
	};

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
		document.addEventListener('keyup', this.handleEscClick);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
		document.removeEventListener('keyup', this.handleEscClick);
	}

	render() {
		const { className, menuconfig, ...restProps } = this.props;

		return (
			<Nav
				ref={this.setNavigationRef}
				aria-label="MLC navigation"
				{...restProps}
			>
				<ul className="navigation">
					{this.displaySubMenu(menuconfig, 'mainNav')}
				</ul>
			</Nav>
		);
	}
}

Navigation.propTypes = {
	/** array of object to render links */
	menuconfig: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string,
			path: PropTypes.string,
			subpages: PropTypes.array,
			title: PropTypes.string,
		})
	),
};

/**
 * @component
 */
export default Navigation;







```jsx noeditor
<ExampleDesc>
	<div>
		<h2>About Navigation</h2>
		<p>
			Navigation is the bottom secondary links that should be used across all pages.
		</p>
	</div>
</ExampleDesc>
```

```jsx noeditor

const mockNavigationTree = {
	menuData: [
		{
			key: "Home",
			path: "/home",
			subpages: [],
			title: "Home",
		},
		{
			key: "Reports",
			path: "/reports",
			title: "Reports",
			subpages: [
				{
					key: "Create report1",
					path: "/reports/create-report",
					subpages: [
						
					],
					title: "Create report1",
				},
				{
					key: "Create report11111",
					path: "/reports/create-report1",
					subpages: [
						
					],
					title: "Create report1",
				},
				{
					key: "Report centre1",
					path: "/reports/report-centre",
					subpages: [],
					title: "Report centre1",
				},
				{
					key: "Statements1",
					path: "/reports/statements",
					subpages: [],
					title: "Statements",
				},
				{
					key: "Transactions1",
					path: "/reports/transactions",
					subpages: [],
					title: "Transactions1",
				},
			],
		},
		{
			key: "Reports11",
			path: "/reports1",
			title: "Reports1",
			subpages: [
				{
					key: "Create report11",
					path: "/reports/create-report11",
					subpages: [
						{
							key: "Create report 111",
							path: "/reports/create-report111",
							subpages: [],
							title: "Create report11",
						},
						{
							key: "Create report 222",
							path: "/reports/create-report222",
							subpages: [],
							title: "Create report222",
						},
					],
					title: "Create report",
				},
				{
					key: "Create report222",
					path: "/reports/create-report112",
					subpages: [
						{
							key: "Create report 1122",
							path: "/reports/create-report11",
							subpages: [],
							title: "Create report11",
						},
						{
							key: "Create report 21222",
							path: "/reports/create-report21",
							subpages: [],
							title: "Create report21",
						},
					],
					title: "Create report",
				},
				{
					key: "Report centre333",
					path: "/reports/report-centre",
					subpages: [],
					title: "Report centre",
				},
				{
					key: "Statements333",
					path: "/reports/statements",
					subpages: [],
					title: "Statements",
				},
				{
					key: "Transactions333",
					path: "/reports/transactions",
					subpages: [],
					title: "Transactions",
				},
			],
		},
		{
			key: "Data export",
			path: "/data-export",
			subpages: [],
			title: "Data export",
		},
		{
			key: "Product information",
			path: "/product-information",
			subpages: [],
			title: "Product information",
		},
	],
	homeLink: "/home",
};

const options = {
	variant: ['socialMedia', 'lastLogin', 'pure'],
	lastLoginDate: ['Last login: 17 Sep 2019 11:07 am'],
};

<Example
	component={Navigation}
	menuconfig={mockNavigationTree.menuData}
	menuhome ={mockNavigationTree.homeLink}
	componentOptions={options}
/>;
```
