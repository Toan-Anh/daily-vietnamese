import React, { Component } from 'react';
import '~/stylesheets/components/Footer.css';
import '~/stylesheets/components/Social Network Icons.css';
import '~/stylesheets/utils/font-awesome-4.7.0/css/font-awesome.min.css';

export default class NavigationBar extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h4>Settings</h4>
						</div>

						<div className="col-md-4">
							<h4>Learn Vietnamese</h4>
							<div className="row">
								<div className="col-md-6">
									<ul>
										<li>
											<a href="#">Vocabulary</a>
										</li>
										<li>
											<a href="#">Grammar</a>
										</li>
										<li>
											<a href="#">Pronunciation</a>
										</li>
										<li>
											<a href="#">Podcasts</a>
										</li>
									</ul>
								</div>

								<div className="col-md-6">
									<ul>
										<li>
											<a href="#">Fun learning</a>
										</li>
										<li>
											<a href="#">Cultures</a>
										</li>
										<li>
											<a href="#">Challenges</a>
										</li>
									</ul>
								</div>
							</div>

							<h4>Resources</h4>
							<ul>
								<li>
									<a href="#">Survival kit</a>
								</li>
							</ul>
						</div>

						<div className="col-md-4">
							<h4>Our Team</h4>
							<ul>
								<li>
									<a href="#">About Us</a>
								</li>
								<li>
									<a href="#">Contact Us</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
							</ul>

							<h4>Connect with us</h4>
							<ul className="social-network social-circle">
								<li>
									<a
										href="https://www.facebook.com/dailyvietnamese"
										className="icoFacebook"
										title="Facebook"
										target="_blank"
									>
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/dailyvietnamese"
										className="icoTwitter"
										title="Twitter"
										target="_blank"
									>
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li>
									<a href="#" className="icoGoogle" title="Google +">
										<i className="fa fa-google-plus" target="_blank" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
