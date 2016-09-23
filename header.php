<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php wp_title(''); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
            <meta name="theme-color" content="#121212">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<link href="http://getbootstrap.com/examples/carousel/carousel.css" rel="stylesheet">

		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>
	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

	<div class="navbar-wrapper">
      <div class="container">
		<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">

        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
             <?php
											wp_nav_menu(
												array(
													'menu'              => 'main-nav',
													'theme_location'    => 'main-nav',
													'depth'          => 3,
													'container'      => false,
													'menu_class'     => 'nav navbar-nav',
													'fallback_cb'    => 'wp_bootstrap_navwalker::fallback',
													'walker'         => new wp_bootstrap_navwalker()
												)
											);
								?>                </li>
								<ul class="nav navbar-nav navbar-right">
							
									<center><?php get_search_form(); ?></li></center>
							</ul>
            
            </div>
          </div>
        </nav>
        <?php /*
			<div class="container navigation">
				 <div class="col-md-1 col-md-offset-0 col-sm-12"><p id="logo" class="h5" itemscope itemtype="http://schema.org/Organization"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p><!---<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand" ><img src="<?php echo get_template_directory_uri(); ?>/images/logo@2x.png"  alt="<?php get_bloginfo('name'); ?>" id="logo" class="img-responsive" /></a>--></div>
				 <div class="col-md-11  col-sm-12">
					 <div id="custom-bootstrap-menu" class="navbar navbar-default" role="navigation">			
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							<?php if(!is_page_template( 'page-landing.php' )){?>
							<div id="navbar" class="navbar-collapse collapse">
								<?php
											wp_nav_menu(
												array(
													'menu'              => 'main-nav',
													'theme_location'    => 'main-nav',
													'depth'          => 3,
													'container'      => false,
													'menu_class'     => 'nav navbar-nav',
													'fallback_cb'    => 'wp_bootstrap_navwalker::fallback',
													'walker'         => new wp_bootstrap_navwalker()
												)
											);
								?>
							<?php //get_search_form(); ?>
							<ul class="nav navbar-nav navbar-right">
							
									<center><?php get_search_form(); ?></li></center>
							</ul>
							</div><!-- / navbar-collapse -->
                            <?php } ?>
					 </div> 
				 </div>
		*/ ?>
        </header> 

      </div>
    </div>
    <?php get_template_part('banners'); ?>




	        	<div id="container">
			</div><!--/container -->