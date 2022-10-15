import React from 'react'
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <>
       
       
       
        <div className="neoh_fn_main" data-footer-sticky="">
	      <Helmet>
		      <title>HomePage</title>
		      <meta name="decription" content="This is from Home Page Description"></meta>
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
                    <h3 className="fn_title"> here comes product's title </h3>
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


          <div className="neoh_fn_hero">
            
          
            <div className="bg_overlay">
              
              
              <div className="bg_color"></div>
              
              
              
              <div className="bg_image" data-bg-img="img/hero/bg.jpg"></div>
            
              
            </div>
            
            
            <div className="hero_content">
              <div className="container">
                <div className="content">
                  <h2 className="fn_title" title="Neoh">Neoh</h2>
                  <p className="fn_desc fn_animated_text">The collection built by and runby ‘frenify’. Together we are strong than ever.</p>
                </div>
              </div>
              <a href="#about" className="neoh_fn_down magic-hover magic-hover__square">
                <span className="text">Scroll Down</span>
                <span className="icon"><img src="svg/right-arr.svg" alt="" className="fn__svg" /></span>
              </a>
            </div>
            
              
            
          </div>
          
          <section id="about">
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
              
              <div className="neoh_fn_about_item reverse">
                <div className="img_item">
                  <img src="img/about/2.jpg" alt="" />
                </div>
                <div className="content_item">
                  
                  <div className="neoh_fn_title" data-align="left">
                    <h3 className="fn_title">High Quality NFT Collection</h3>
                    <div className="line"><span></span></div>
                  </div>
                  
                  <div className="desc">
                    <p>Simply holding a Neoh will give you access to seasonal airdrops, merchandise, physical and digital artworks, collectibles and more.</p>
                    <p>We understand the importance of the cross-over between these worlds and we truly believe to bridge these two together. Our goals will always be for the community - creating, building and innovating together with the commmunity.</p>
                  </div>
                  
                  <div className="buttons">
                    <a href="about.html" className="neoh_fn_button only_text">
                      <span className="text">More About US</span>
                    </a>
                  </div>
                  
                </div>
              </div>
            
              
              
            </div>
          </section>
        
          <section id="services">
            
        
            <img src="svg/divider.svg" alt="" className="fn__svg fn__divider top_divider" />
            <img src="svg/divider.svg" alt="" className="fn__svg fn__divider bottom_divider" />

            
            
            <div className="container">
              
              
              <div className="neoh_fn_title">
                <h3 className="fn_title">Why Choose Us?</h3>
                <div className="line"><span></span></div>
              </div>
              
              <div className="neoh_fn_services">
                <ul>
                  <li>
                    <div className="item">
                      <div className="item_num"><span>01</span></div>
                      <div className="item_content">
                        <h3 className="fn_title">Huge Collection</h3>
                        <p className="fn_desc fn_animated_text">A collection of 5,000 unique NEOHs built to go beyond the digital space that will unlock numerous benefits for our community.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="item_num"><span>02</span></div>
                      <div className="item_content">
                        <h3 className="fn_title">High Quality</h3>
                        <p className="fn_desc fn_animated_text">The NEOH collection includes dozens of rare heads, costumes, and colorways of the artist's palette. They are drawn with great care.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="item_num"><span>03</span></div>
                      <div className="item_content">
                        <h3 className="fn_title">Top Resource</h3>
                        <p className="fn_desc fn_animated_text">Tasty design resources made with care for each pixel. Tokens, NFTs, metaverse and game resources. Access additional drops. </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="item_num"><span>04</span></div>
                      <div className="item_content">
                        <h3 className="fn_title">Big Community</h3>
                        <p className="fn_desc fn_animated_text">Be part of a community of neoh owners and create user generated items. Rent, advertise, lounch stores, create items.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            
              
            </div>
          </section>
          
          
          
        
          <section id="drop">
            <div className="container">
              
              <div className="neoh_fn_title">
                <h3 className="fn_title">Our Latest Drops</h3>
                <div className="line"><span></span></div>
              </div>
            
              <div className="neoh_fn_drops">
                <ul>
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
                  <li>
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
                </ul>
        
                <div className="clearfix"></div>
                
                
                <a href="collection.html" className="neoh_fn_button only_text full">
                  <span className="text">Click here to See all ITEMS</span>
                </a>
                
                
              </div>
              
              <div className="neoh_fn_title">
                <h3 className="fn_title">Neoh’s Roadmap</h3>
                <div className="line"><span></span></div>
              </div>
              
              <div className="neoh_fn_timeline">
                
                
                <div className="timeline_content">
                  <ul className="timeline_list">
                    <li className="timeline_item" data-index="1">
                      <div className="t_item">
                        <div className="t_item_img">
                          <div className="neoh_fn_gallery_1_2">
                            <div className="gallery_in">
                              <div className="item row2">
                                <img src="img/timeline/1/1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/1/2.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/1/3.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="t_item_info">
                          <p className="fn_date"><span>May 05, 2022</span></p>
                          <h3 className="fn_title"><a href="roadmap-single.html">New Character Set #12 is Coming Up</a></h3>
                          <p className="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                          <p className="fn_read">
                            <a href="roadmap-single.html" className="neoh_fn_button only_text">
                              <span className="text">Read More</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline_item" data-index="2">
                      <div className="t_item">
                        <div className="t_item_img">
                          <div className="neoh_fn_gallery_1_2">
                            <div className="gallery_in">
                              <div className="item row2">
                                <img src="img/timeline/2/1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/2/2.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/2/3.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="t_item_info">
                          <p className="fn_date"><span>May 27, 2022</span></p>
                          <h3 className="fn_title"><a href="roadmap-single.html">Female Character Set #20 is Coming Up</a></h3>
                          <p className="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                          <p className="fn_read">
                            <a href="roadmap-single.html" className="neoh_fn_button only_text">
                              <span className="text">Read More</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline_item active" data-index="3">
                      <div className="t_item">
                        <div className="t_item_img">
                          <div className="neoh_fn_gallery_1_2">
                            <div className="gallery_in">
                              <div className="item row2">
                                <img src="img/timeline/3/1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/3/2.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/3/3.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="t_item_info">
                          <p className="fn_date"><span>June 01, 2022</span></p>
                          <h3 className="fn_title"><a href="roadmap-single.html">Mini Game Lounch For Community</a></h3>
                          <p className="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                          <p className="fn_read">
                            <a href="roadmap-single.html" className="neoh_fn_button only_text">
                              <span className="text">Read More</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline_item" data-index="4">
                      <div className="t_item">
                        <div className="t_item_img">
                          <div className="neoh_fn_gallery_1_2">
                            <div className="gallery_in">
                              <div className="item row2">
                                <img src="img/timeline/4/1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/4/2.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/4/3.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="t_item_info">
                          <p className="fn_date"><span>June 07, 2022</span></p>
                          <h3 className="fn_title"><a href="roadmap-single.html">New Character Set #15 is Coming Up</a></h3>
                          <p className="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                          <p className="fn_read">
                            <a href="roadmap-single.html" className="neoh_fn_button only_text">
                              <span className="text">Read More</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline_item" data-index="5">
                      <div className="t_item">
                        <div className="t_item_img">
                          <div className="neoh_fn_gallery_1_2">
                            <div className="gallery_in">
                              <div className="item row2">
                                <img src="img/timeline/5/1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/5/2.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/5/3.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="t_item_info">
                          <p className="fn_date"><span>June 15, 2022</span></p>
                          <h3 className="fn_title"><a href="roadmap-single.html">New Spirit Set #01 is Coming Up</a></h3>
                          <p className="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                          <p className="fn_read">
                            <a href="roadmap-single.html" className="neoh_fn_button only_text">
                              <span className="text">Read More</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline_item" data-index="6">
                      <div className="t_item">
                        <div className="t_item_img">
                          <div className="neoh_fn_gallery_1_2">
                            <div className="gallery_in">
                              <div className="item row2">
                                <img src="img/timeline/6/1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/6/2.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/6/3.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="t_item_info">
                          <p className="fn_date"><span>June 23, 2022</span></p>
                          <h3 className="fn_title"><a href="roadmap-single.html">New Haircut Collection #01 is Coming Up</a></h3>
                          <p className="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                          <p className="fn_read">
                            <a href="roadmap-single.html" className="neoh_fn_button only_text">
                              <span className="text">Read More</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline_item" data-index="7">
                      <div className="t_item">
                        <div className="t_item_img">
                          <div className="neoh_fn_gallery_1_2">
                            <div className="gallery_in">
                              <div className="item row2">
                                <img src="img/timeline/7/1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/7/2.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="img/timeline/7/3.jpg" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="t_item_info">
                          <p className="fn_date"><span>July 01, 2022</span></p>
                          <h3 className="fn_title"><a href="roadmap-single.html">New Haircut Collection #02 is Coming Up</a></h3>
                          <p className="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                          <p className="fn_read">
                            <a href="roadmap-single.html" className="neoh_fn_button only_text">
                              <span className="text">Read More</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
            
                <div className="timeline_progress">
                
              
                  <a href="#" className="nav_prev"><img src="svg/right-arr.svg" alt="" className="fn__svg" /></a>
                  <a href="#" className="nav_next"><img src="svg/right-arr.svg" alt="" className="fn__svg" /></a>
              
                  
                  <div className="progress_line_wrapper">
                    <div className="progress_line">
                      <ul>
                        <li data-index="1">
                          <a href="#">
                            <span className="text">May 05, 2022</span>
                            <span className="circle"></span>
                          </a>
                        </li>
                        <li data-index="2">
                          <a href="#">
                            <span className="text">May 27, 2022</span>
                            <span className="circle"></span>
                          </a>
                        </li>
                        <li className="active" data-index="3">
                          <a href="#">
                            <span className="text">June 01, 2022</span>
                            <span className="circle"></span>
                          </a>
                        </li>
                        <li data-index="4">
                          <a href="#">
                            <span className="text">June 07, 2022</span>
                            <span className="circle"></span>
                          </a>
                        </li>
                        <li data-index="5">
                          <a href="#">
                            <span className="text">June 15, 2022</span>
                            <span className="circle"></span>
                          </a>
                        </li>
                        <li data-index="6">
                          <a href="#">
                            <span className="text">June 23, 2022</span>
                            <span className="circle"></span>
                          </a>
                        </li>
                        <li data-index="7">
                          <a href="#">
                            <span className="text">July 01, 2022</span>
                            <span className="circle"></span>
                          </a>
                        </li>
                      </ul>
                      <span className="active_line"></span>
                    </div>
                  </div>
                </div>
              
                
              </div>
            
              
            </div>
          </section>
        
          <section id="investor">
            
          
            <img src="svg/divider.svg" alt="" className="fn__svg fn__divider top_divider" />
            <img src="svg/divider.svg" alt="" className="fn__svg fn__divider bottom_divider" />
          
          
            <div className="container">
              
              
              <div className="neoh_fn_title">
                <h3 className="fn_title">Neoh’s Investors</h3>
                <div className="line"><span></span></div>
              </div>
              
              <div className="neoh_fn_investor">
                <ul>
                  <li>
                    <div className="item">
                      <img src="img/investors/1.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/2.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/3.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/4.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/5.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/6.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/7.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/8.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/9.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/investors/10.png" alt="" />
                      <a href="#" className="full_link"></a>
                    </div>
                  </li>
                </ul>
              </div>
          
              
            </div>
          </section>
        
          <section id="blog">
            <div className="container">
              
              
              <div className="neoh_fn_title">
                <h3 className="fn_title">Neoh’s News</h3>
                <div className="line"><span></span></div>
              </div>
            
              <div className="neoh_fn_moving_blog">
                <ul>
                  <li>
                    <div className="item">
                      <img src="img/blog/1.jpg" alt="" className="moving_img" />
                      <p className="fn_date">
                        <span>June 01, 2022</span>
                      </p>
                      <h3 className="fn_title">
                        <a href="blog-single.html">Neoh’s NFT Goes Public In Nod To Crypto Adoption</a>
                      </h3>
                      <p className="fn_desc">Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>
                      <p className="fn_read">
                        <a href="blog-single.html" className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/blog/2.jpg" alt="" className="moving_img" />
                      <p className="fn_date">
                        <span>May 25, 2022</span>
                      </p>
                      <h3 className="fn_title">
                        <a href="blog-single.html">Bankman-Fried Would Like to Talk With Musk About Twitter</a>
                      </h3>
                      <p className="fn_desc">Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>
                      <p className="fn_read">
                        <a href="blog-single.html" className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <img src="img/blog/3.jpg" alt="" className="moving_img" />
                      <p className="fn_date">
                        <span>May 13, 2022</span>
                      </p>
                      <h3 className="fn_title">
                        <a href="blog-single.html">Crypto-Focused Silvergate Jumps on Blowout Earnings Report</a>
                      </h3>
                      <p className="fn_desc">Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>
                      <p className="fn_read">
                        <a href="blog-single.html" className="neoh_fn_button only_text">
                          <span className="text">Read More</span>
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              
              
            </div>
          </section>
          
        
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

export default Home;