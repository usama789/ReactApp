import React from 'react'

const Collection = () => {
  return (
    <div className="neoh_fn_main" data-footer-sticky="">
	

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
							<p> here comes product's description </p>
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
					<h3 className="fn_title fn_animated_text" data-wait="1000" data-speed="8">Collection</h3>
					<p className="fn_desc">
						<a href="/">Home</a>
						<span className="separator">/</span>
						<span className="current">Collection</span>
					</p>
				</div>	
			</div>
		</div>

		<div className="neoh_fn_collectionpage">
			<div className="container wide">
				
				<div className="neoh_fn_collection">
					
					
					<div className="neoh_fn_filters">
							
					
						<div className="filter_item filter__type">
						
						
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Type</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>
							
							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Type" data-id="1">
													<span className="text">Human</span>
													<span className="amount"> - 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Type" data-id="2">
													<span className="text">Spirit</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Type" data-id="3">
													<span className="text">Fire</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Type" data-id="4">
													<span className="text">Sand</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
							
							
						</div>
						
						<div className="filter_item filter__special">
						
							
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Special</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>
							
							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="5">
													<span className="text">Fireflies</span>
													<span className="amount"> - 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="6">
													<span className="text">Butterfly</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="7">
													<span className="text">Fox Fire</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="8">
													<span className="text">Smoke</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="9">
													<span className="text">Sakura</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="10">
													<span className="text">Fire</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="11">
													<span className="text">Earth</span>
													<span className="amount"> - 1534</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Special" data-id="12">
													<span className="text">Water</span>
													<span className="amount"> - 1235</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
					
							
						</div>

						<div className="filter_item filter__clothing closed">
						
							
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Clothing</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>
							
							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="13">
													<span className="text">Light Kimono</span>
													<span className="amount">- 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="14">
													<span className="text">Maroon Yukata</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="15">
													<span className="text">Blue Kimono</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="16">
													<span className="text">Green Yukata</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="17">
													<span className="text">Turquoise Kimono</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="18">
													<span className="text">Black Yukata</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="19">
													<span className="text">Azuki Tech Jacket</span>
													<span className="amount"> - 1534</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Clothing" data-id="20">
													<span className="text">Blue Floral Kimono</span>
													<span className="amount"> - 1235</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
						
							
						</div>
						
						<div className="filter_item filter__hair closed">
						
						
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Hair</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>
						
							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="21">
													<span className="text">Maroon Bun</span>
													<span className="amount"> - 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="22">
													<span className="text">Maroon Ponytail</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="23">
													<span className="text">Brown Spiky</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="24">
													<span className="text">Brown Long</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="25">
													<span className="text">Maroon Disheveled</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="26">
													<span className="text">Maroon Bob</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="27">
													<span className="text">Magenta Long</span>
													<span className="amount"> - 1534</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="28">
													<span className="text">Indigo Long</span>
													<span className="amount"> - 1235</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="29">
													<span className="text">Maroon Short Spiky</span>
													<span className="amount"> - 345</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Hair" data-id="30">
													<span className="text">Blonde Short Spiky</span>
													<span className="amount"> - 600</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
							
							
						</div>
						
						<div className="filter_item filter__face closed">
						
							
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Face</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>
							
							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Face" data-id="31">
													<span className="text">Red Stripes Face Paint</span>
													<span className="amount"> - 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Face" data-id="32">
													<span className="text">Eye Scar</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Face" data-id="33">
													<span className="text">Round Blue Sunglasses</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Face" data-id="34">
													<span className="text">Red Fang Face Paint</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Face" data-id="35">
													<span className="text">Maroon Disheveled</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
						
							
						</div>
			
						<div className="filter_item filter__eyes closed">
						
							
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Eyes</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>
							
							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Eyes" data-id="36">
													<span className="text">Closed</span>
													<span className="amount"> - 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Eyes" data-id="37">
													<span className="text">Determined</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Eyes" data-id="38">
													<span className="text">Striking</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Eyes" data-id="39">
													<span className="text">Chill</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Eyes" data-id="40">
													<span className="text">Daydreaming</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
							
						</div>
						
						<div className="filter_item filter__mouth closed">
						
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Mouth</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>

							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Mouth" data-id="41">
													<span className="text">Relaxed</span>
													<span className="amount"> - 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Mouth" data-id="42">
													<span className="text">Closed</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Mouth" data-id="43">
													<span className="text">Smirk</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Mouth" data-id="44">
													<span className="text">Not Bad</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Mouth" data-id="45">
													<span className="text">Smoking</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Mouth" data-id="46">
													<span className="text">Lipstick</span>
													<span className="amount"> - 490</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
							
							
						</div>
						
						<div className="filter_item filter__neck closed">
						
							
							<div className="filter_item__header">
								<a className="full_link" href="#"></a>
								<span className="text">Neck</span>
								<span className="icon"><img src="svg/down.svg" alt="" className="fn__svg" /></span>
							</div>

							<div className="filter_item__content">
								<div className="ic_in">

									<ul className="items">
										<li>
											<div className="item">
												<label className="checkbox" data-category="Neck" data-id="47">
													<span className="text">Chill Headphones</span>
													<span className="amount"> - 3100</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Neck" data-id="48">
													<span className="text">Koi Tattoo</span>
													<span className="amount"> - 4764</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Neck" data-id="49">
													<span className="text">Towel</span>
													<span className="amount"> - 1280</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
										<li>
											<div className="item">
												<label className="checkbox" data-category="Neck" data-id="50">
													<span className="text">Zen Headphones</span>
													<span className="amount"> - 2716</span>
													<input type="checkbox" />
													<span className="checkmark"><img src="svg/checked.svg" alt="" className="fn__svg" /></span>
												</label>
											</div>
										</li>
									</ul>

								</div>
							</div>
						
							
						</div>
					
							
					</div>
					
					
					<div className="neoh_fn_clist">
						
						
						<div className="neoh_fn_title" data-align="left">
							<h3 className="fn_title">All Items</h3>
							<div className="line"><span></span></div>
						</div>
						
						<div className="neoh_fn_result_box">
							<div className="filter_count">
								Filters <span>0</span>
							</div>
						</div>
						
						<div className="neoh_fn_result_list">
							<div className="neoh_fn_drops">
								<ul className="grid">
									<li className="id1 id5">
										<div className="item" data-modal-image="img/drops/1.jpg" data-modal-title="Neoh #4588" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/1.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4588</a></h3>
											</div>
										</div>
									</li>
									<li className="id1 id2 id3 id5 id6">
										<div className="item" data-modal-image="img/drops/2.jpg" data-modal-title="Neoh #4587" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="" data-modal-discord-url="#">
											<div className="img_holder">
												<img src="img/drops/2.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4587</a></h3>
											</div>
										</div>
									</li>
									<li className="id7 id8 id3">
										<div className="item" data-modal-image="img/drops/3.jpg" data-modal-title="Neoh #4586" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/3.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4586</a></h3>
											</div>
										</div>
									</li>
									<li className="id4 id7 id9">
										<div className="item" data-modal-image="img/drops/4.jpg" data-modal-title="Neoh #4585" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/4.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4585</a></h3>
											</div>
										</div>
									</li>
									<li className="id2 id10">
										<div className="item" data-modal-image="img/drops/5.jpg" data-modal-title="Neoh #4584" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/5.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4584</a></h3>
											</div>
										</div>
									</li>
									<li className="id11 id12">
										<div className="item" data-modal-image="img/drops/6.jpg" data-modal-title="Neoh #4583" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/6.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4583</a></h3>
											</div>
										</div>
									</li>
									<li className="id1 id13 id20">
										<div className="item" data-modal-image="img/drops/7.jpg" data-modal-title="Neoh #4582" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/7.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4582</a></h3>
											</div>
										</div>
									</li>
									<li className="id1 id14">
										<div className="item" data-modal-image="img/drops/8.jpg" data-modal-title="Neoh #4581" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/8.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4581</a></h3>
											</div>
										</div>
									</li>
									<li className="id2 id13">
										<div className="item" data-modal-image="img/drops/9.jpg" data-modal-title="Neoh #4580" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/9.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4580</a></h3>
											</div>
										</div>
									</li>
									<li className="id4 id14">
										<div className="item" data-modal-image="img/drops/10.jpg" data-modal-title="Neoh #4579" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/10.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4579</a></h3>
											</div>
										</div>
									</li>
									<li className="id5 id13">
										<div className="item" data-modal-image="img/drops/11.jpg" data-modal-title="Neoh #4578" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/11.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4578</a></h3>
											</div>
										</div>
									</li>
									<li className="id6 id7 id2">
										<div className="item" data-modal-image="img/drops/12.jpg" data-modal-title="Neoh #4577" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/12.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4577</a></h3>
											</div>
										</div>
									</li>
									<li className="id7 id8 id3">
										<div className="item" data-modal-image="img/drops/13.jpg" data-modal-title="Neoh #5454" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/13.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #5454</a></h3>
											</div>
										</div>
									</li>
									<li className="id4 id7 id9">
										<div className="item" data-modal-image="img/drops/14.jpg" data-modal-title="Neoh #4285" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/14.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4285</a></h3>
											</div>
										</div>
									</li>
									<li className="id2 id10">
										<div className="item" data-modal-image="img/drops/15.jpg" data-modal-title="Neoh #4184" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/15.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #4184</a></h3>
											</div>
										</div>
									</li>
									<li className="id11 id12">
										<div className="item" data-modal-image="img/drops/16.jpg" data-modal-title="Neoh #2583" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/16.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #2583</a></h3>
											</div>
										</div>
									</li>
									<li className="id1 id13 id20">
										<div className="item" data-modal-image="img/drops/17.jpg" data-modal-title="Neoh #1582" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/17.jpg" alt="" />
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #1582</a></h3>
											</div>
										</div>
									</li>
									<li className="id1 id14">
										<div className="item" data-modal-image="img/drops/18.jpg" data-modal-title="Neoh #3562" data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia." data-modal-opensea-url="#" data-modal-discord-url="">
											<div className="img_holder">
												<img src="img/drops/18.jpg" alt="" /> 
												<a href="#" className="full_link"></a>
											</div>
											<div className="title_holder">
												<h3 className="fn_title"><a href="#">Neoh #3562</a></h3>
											</div>
										</div>
									</li>
								</ul>
							</div>
							
						</div>
					
						
					</div>
					
				</div>
				
			</div>			
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
  )
}

export default Collection