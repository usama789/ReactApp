import React from 'react'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
	
		<div className="neoh_fn_main" data-footer-sticky="">
		<Helmet>
            <title>About Page</title>
            <meta name='description' content='This is About Page'></meta>
        </Helmet>
	
	<div className="neoh_fn_modal product_modal">
		<div className="modal_in">
			<div className="modal_closer">
				<a href="/">
					<img src="svg/cancel.svg" alt="" className="fn__svg" />
				</a>
			</div>
			<div className="modal_content">
				<div className="neoh_fn_product_modal">
					<div className="img_item">
						here comes product's image
					</div>
					<div className="content_item">
						<div className="neoh_fn_title" data-align="left">
							<h3 className="fn_title">here comes product's title</h3>
							<div className="line"><span></span></div>
						</div>
						
						<div className="desc">
							<p>here comes product's description</p>
						</div>
						
						<div className="buttons">
							<a href="https://opensea.io/" target="_blank" className="neoh_fn_button opensea">
								<span className="icon"><img src="svg/opensea.svg" alt="" className="fn__svg" /></span>
								<span className="text">View on OpenSea</span>
							</a>
							<a href="https://discord.com/" target="_blank" className="neoh_fn_button discord">
								<span className="icon"><img src="svg/discord.svg" alt="" className="fn__svg" /></span>
								<span className="text">View on Discord</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="nav_overlay"></div>
	<div className="neoh_fn_nav">
		<div className="trigger is-active">
			<div className="trigger_in">
				<span className="text">Close</span>
				<span className="hamb">
					<span className="hamb_a"></span>
					<span className="hamb_b"></span>
					<span className="hamb_c"></span>
				</span>
			</div>
		</div>
		<div className="nav_content">
			<div className="nav_menu">
				<ul>
					<li className="menu-item menu-item-has-children">
						<a href="/">Home</a>
						<ul className="sub-menu">
							<li><a href="/">Home Static</a></li>
							<li><a href="/kenburns">Full Kenburns</a></li>
							<li><a href="/halfkenburns">Half Kenburns</a></li>
							<li><a href="/halfslider">Half Slider</a></li>
						</ul>
					</li>
					<li className="menu-item"><a href="/about">About</a></li>
					<li className="menu-item"><a href="/collection">Collection</a></li>
					<li className="menu-item"><a href="/blog">Blog</a></li>
					<li className="menu-item"><a href="/contact">Contact</a></li>
				</ul>
			</div>
			<div className="nav_buttons">
				<a href="https://opensea.io/" className="neoh_fn_button" target="_blank">
					<span className="icon"><img src="svg/opensea.svg" alt="" className="fn__svg" /></span>
					<span className="text">OpenSea</span>
				</a>
				<a href="https://discord.com/" className="neoh_fn_button" target="_blank">
					<span className="icon"><img src="svg/discord.svg" alt="" className="fn__svg" /></span>
					<span className="text">Discord</span>
				</a>
			</div>
		</div>
		
		<div className="nav_footer">
			<div className="nf_left">
				<p>Copyright 2022- Designed &amp; Developed by <a href="https://themeforest.net/user/frenify/portfolio" target="_blank">Frenify</a></p>
			</div>
			<div className="nf_right">
				<div className="neoh_fn_social_list">
					<ul>
						<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
						<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
						<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
						<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
						<li><a href="#"><i className="fn-icon-behance"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
		
	</div>

	<header className="neoh_fn_header">
		<div className="container">
			<div className="header_in">
			
				<div className="logo">
					<a href="/"><img src="img/logo.png" alt="" /></a>
				</div>
				
				<div className="trigger">
					<div className="trigger_in">
						<span className="text">Menu</span>
						<span className="hamb">
							<span className="hamb_a"></span>
							<span className="hamb_b"></span>
							<span className="hamb_c"></span>
						</span>
					</div>
				</div>
				
			</div>
		</div>
	</header>

	<div className="neoh_fn_content">
		
		<div className="neoh_fn_pagetitle">
			<div className="bg_overlay">
				<div className="bg_color"></div>
				<div className="bg_image" data-bg-img="img/hero/bg.jpg"></div>
			</div>
			<div className="pt_content">
				<div className="container">
					<h3 className="fn_title fn_animated_text" data-wait="1000" data-speed="8">About</h3>
					<p className="fn_desc">
						<a href="index.html">Home</a>
						<span className="separator">/</span>
						<span className="current">About</span>
					</p>
				</div>	
			</div>
		</div>
		
		<div className="neoh_fn_aboutpage">
			
			
			<section id="information">
				<div className="container">
				
					<div className="neoh_fn_about_item">
						<div className="img_item">
							<img src="img/about/1.jpg" alt="" />
						</div>
						<div className="content_item">

							<div className="neoh_fn_title" data-align="left">
								<h3 className="fn_title">The Rise of Neoh</h3>
								<div className="line"><span></span></div>
							</div>

							<div className="desc">
								<p>As the first hero of the Neoh Universe, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
								<p>The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
							</div>

							<div className="buttons">
								<a href="https://opensea.io/" target="_blank" className="neoh_fn_button">
									<span className="icon"><img src="svg/opensea.svg" alt="" className="fn__svg" /></span>
									<span className="text">OpenSea</span>
								</a>
								<a href="https://discord.com/" target="_blank" className="neoh_fn_button">
									<span className="icon"><img src="svg/discord.svg" alt="" className="fn__svg" /></span>
									<span className="text">Discord</span>
								</a>
							</div>

						</div>
					</div>
					
					<div className="neoh_fn_gualist">
						<ul>
							<li>
								<div className="item">
									<span className="line"></span>
									<img src="svg/search-engine.svg" alt="" className="fn__svg" />
									<h3 className="fn_title">Transparency</h3>
									<p className="fn_desc fn_animated_text">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.</p>
								</div>
							</li>
							<li>
								<div className="item">
									<span className="line"></span>
									<img src="svg/management.svg" alt="" className="fn__svg" />
									<h3 className="fn_title">Experienced Team</h3>
									<p className="fn_desc fn_animated_text">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.</p>
								</div>
							</li>
							<li>
								<div className="item">
									<span className="line"></span>
									<img src="svg/padlock.svg" alt="" className="fn__svg" />
									<h3 className="fn_title">Security Guarantee</h3>
									<p className="fn_desc fn_animated_text">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.</p>
								</div>
							</li>
						</ul>
					</div>
					
					<div className="neoh_fn_about_item reverse">
						<div className="img_item">
							<img src="img/about/2.jpg" alt="" />
						</div>
						<div className="content_item">

							<div className="neoh_fn_title" data-align="left">
								<h3 className="fn_title">Thousands of Users</h3>
								<div className="line"><span></span></div>
							</div>

							<div className="desc">
								<p>Simply holding a Neoh will give you access to seasonal airdrops, merchandise, physical and digital artworks, collectibles and more.</p>
								<p>We understand the importance of the cross-over between these worlds and we truly believe to bridge these two together. Our goals will always be for the community - creating, building and innovating together with the commmunity.</p>
							</div>

							<div className="buttons">
								<a href="#" className="neoh_fn_button only_text">
									<span className="text">Join Community</span>
								</a>
							</div>

						</div>
					</div>
					
					
				</div>
			</section>
			
			<section id="video">
			
				<img src="svg/divider.svg" alt="" className="fn__svg fn__divider top_divider" />
				<img src="svg/divider.svg" alt="" className="fn__svg fn__divider bottom_divider" />
				
				<div className="neoh_fn_video">
					<div className="bg_overlay">
						<div className="bg_image" data-bg-img="img/hero/bg.jpg"></div>
						<div className="bg_color"></div>
					</div>
					<div className="v_content">
						<a className="popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas">
							<img src="svg/play.svg" alt="" className="fn__svg" />
						</a>
					</div>
						
				</div>
				
				
			</section>
			
			
			<section id="team">
				
				<div className="container">
				
					<div className="neoh_fn_title">
						<h3 className="fn_title">Our Team Members</h3>
						<div className="line"><span></span></div>
					</div>

					<div className="mw_650 fn_description">
						<p className="fn_desc fn_animated_text">The idea was born in London and rapidly became a borderless vision - A team of Neoh with a background in computer graphics, crypto, technology, and art.</p>
					</div>

					<div className="neoh_fn_team">
						<ul className="team_list">

							<li className="team_item">
								<div className="t_item">
									<div className="person_info">
										<div className="img_holder">
											<img src="img/author/1.jpg" alt="" />
										</div>
										<div className="title_holder">
											<h3 className="fn_title">Tom Mccarthy</h3>
											<p className="fn_desc">2D Artist</p>
										</div>
									</div>
									<div className="person_social">
										<ul>
											<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
											<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
											<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
											<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
											<li><a href="#"><i className="fn-icon-behance"></i></a></li>
										</ul>
									</div>
								</div>
							</li>
							
							<li className="team_item">
								<div className="t_item">
									<div className="person_info">
										<div className="img_holder">
											<img src="img/author/2.jpg" alt="" />
										</div>
										<div className="title_holder">
											<h3 className="fn_title">Owen Bradley</h3>
											<p className="fn_desc">2D Artist</p>
										</div>
									</div>
									<div className="person_social">
										<ul>
											<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
											<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
											<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
											<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
											<li><a href="#"><i className="fn-icon-behance"></i></a></li>
										</ul>
									</div>
								</div>
							</li>
							
							<li className="team_item">
								<div className="t_item">
									<div className="person_info">
										<div className="img_holder">
											<img src="img/author/3.jpg" alt="" />
										</div>
										<div className="title_holder">
											<h3 className="fn_title">Daniel Bradley</h3>
											<p className="fn_desc">2D Artist</p>
										</div>
									</div>
									<div className="person_social">
										<ul>
											<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
											<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
											<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
											<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
											<li><a href="#"><i className="fn-icon-behance"></i></a></li>
										</ul>
									</div>
								</div>
							</li>
							
							<li className="team_item">
								<div className="t_item">
									<div className="person_info">
										<div className="img_holder">
											<img src="img/author/4.jpg" alt="" />
										</div>
										<div className="title_holder">
											<h3 className="fn_title">Skylar Jarvis</h3>
											<p className="fn_desc">2D Artist</p>
										</div>
									</div>
									<div className="person_social">
										<ul>
											<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
											<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
											<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
											<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
											<li><a href="#"><i className="fn-icon-behance"></i></a></li>
										</ul>
									</div>
								</div>
							</li>
							
							<li className="team_item">
								<div className="t_item">
									<div className="person_info">
										<div className="img_holder">
											<img src="img/author/5.jpg" alt="" />
										</div>
										<div className="title_holder">
											<h3 className="fn_title">Avery Briggs</h3>
											<p className="fn_desc">2D Artist</p>
										</div>
									</div>
									<div className="person_social">
										<ul>
											<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
											<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
											<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
											<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
											<li><a href="#"><i className="fn-icon-behance"></i></a></li>
										</ul>
									</div>
								</div>
							</li>
							
							<li className="team_item">
								<div className="t_item">
									<div className="person_info">
										<div className="img_holder">
											<img src="img/author/6.jpg" alt="" />
										</div>
										<div className="title_holder">
											<h3 className="fn_title">Bernard Green</h3>
											<p className="fn_desc">2D Artist</p>
										</div>
									</div>
									<div className="person_social">
										<ul>
											<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
											<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
											<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
											<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
											<li><a href="#"><i className="fn-icon-behance"></i></a></li>
										</ul>
									</div>
								</div>
							</li>

						</ul>
					</div>
				
				
				</div>
				
			</section>
			
			
		</div>
		
	
	</div>
	
	<footer id="footer">
		<div className="neoh_fn_footer">
		
			<div className="footer_top">
				<div className="container">
					<div className="ft_in">
					
						<div className="desc">
							<div className="img">
								<img src="img/footer-logo.png" alt="" />
							</div>
							<h3 className="fn_title">Join Now For Early Access</h3>
							<p className="fn_desc">Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare</p>
						</div>
						
						<div className="subscribe_form">
							<div className="subscribe_in">
								<input type="text" placeholder="Email..." />
								<a href="#" className="neoh_fn_button only_text">
									<span className="text">Subscribe</span>
								</a>
							</div>
							<div className="returnmessage" data-success="Your message has been received, We will contact you soon." data-message="You have subscribed to our updates. Thank you" data-invalid-email="Please enter valid email!"></div>
							<div className="empty_notice"><span>Please enter your Email</span></div>
						</div>
						
						<div className="neoh_fn_social_list">
							<ul>
								<li><a href="#"><i className="fn-icon-twitter"></i></a></li>
								<li><a href="#"><i className="fn-icon-facebook"></i></a></li>
								<li><a href="#"><i className="fn-icon-instagram"></i></a></li>
								<li><a href="#"><i className="fn-icon-pinterest"></i></a></li>
								<li><a href="#"><i className="fn-icon-behance"></i></a></li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
			
			<div className="footer_bottom">
				<div className="container">
					<div className="fb_in">
						
						<div className="fb_left">
							<p>Copyright 2022- Designed &amp; Developed by <a href="https://themeforest.net/user/frenify/portfolio" target="_blank">Frenify</a></p>
						</div>
						
						<div className="fb_right">
							<ul>
								<li><a href="roadmap.html">RoadMap</a></li>
								<li><a href="#">Cookies</a></li>
								<li><a href="#">Terms &amp; Conditions</a></li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
			
		</div>
	</footer>
	 
	<a href="#" className="neoh_fn_totop">
		<span className="arrow"><img src="svg/right-arr.svg" alt="" className="fn__svg" /></span>
		<span className="circle"><img src="svg/circle.svg" alt="" className="fn__svg" /></span>
	</a>
	
	
</div>
    </>
  )
}

export default About;