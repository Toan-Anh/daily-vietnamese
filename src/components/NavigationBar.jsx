import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';

import '~/stylesheets/components/NavBar.css';

class NavigationBar extends Component {
	render() {
		return (
			<Navbar className="custom-nav-bar">
				<Navbar.Header>
					<Navbar.Brand className="custom-brand">
						<Link to="/">
							<img
								src={require('../res/logo.svg')}
								className="nav-bar-logo"
								alt="logo"
							/>
						</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight className="custom-nav">
					<NavDropdown eventKey={1} title="Learning" id="basic-nav-dropdown">
						<MenuItem eventKey={1.1}>Courses</MenuItem>
						<MenuItem eventKey={1.2}>Podcasts</MenuItem>
						<MenuItem eventKey={1.3}>Fun Learning</MenuItem>
						<MenuItem eventKey={1.4}>Cultures</MenuItem>
						<MenuItem eventKey={1.5}>Challenges</MenuItem>
					</NavDropdown>

					<NavItem eventKey={2} href="#">
						Blog
					</NavItem>
					<NavItem eventKey={3} href="#">
						Forum
					</NavItem>
					<NavItem eventKey={4} href="#">
						Survival Kit
					</NavItem>
					<NavItem eventKey={5} href="#">
						Contact
					</NavItem>
					<NavItem eventKey={6} href="#">
						About
					</NavItem>

					<NavItem eventKey={7} href="#">
						{this.props.user ? (
							<i className="glyphicon glyphicon-user" />
						) : (
							'Sign In'
						)}
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(NavigationBar);
