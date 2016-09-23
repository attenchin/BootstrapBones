<?php get_header(); ?>


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container">

      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-md-12 col-md-offset-0">

						

					<main id="main" class="cf" role="main">
						<h1 class="archive-title"><span><?php _e( 'Search Results for:', 'bonestheme' ); ?></span> <?php echo esc_attr(get_search_query()); ?></h1>
						<?php get_search_form(); ?>
						<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?> role="article">
							
								<header class="entry-header article-header">
									
									<h3 class="search-title entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
								</header>

								<section class="entry-content">
										<?php the_excerpt( '<span class="read-more">' . __( 'Read more &raquo;', 'bonestheme' ) . '</span>' ); ?>

								</section>

								<footer class="article-footer">

									<?php if(get_the_category_list(', ') != ''): ?>
                  					<?php printf( __( 'Filed under: %1$s', 'bonestheme' ), get_the_category_list(', ') ); ?>
                  					<?php endif; ?>

                 					<?php the_tags( '<p class="tags"><span class="tags-title">' . __( 'Tags:', 'bonestheme' ) . '</span> ', ', ', '</p>' ); ?>

								</footer> <!-- end article footer -->

							</article>

						<?php endwhile; ?>

								<?php bones_page_navi(); ?>

							<?php else : ?>

									<article id="post-not-found" class="hentry cf">
										<header class="article-header">
											<h2><?php _e( 'Sorry, No Results.', 'bonestheme' ); ?></h2>
										</header>
										<section class="entry-content">
											<p><?php _e( 'Try your search again.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( '', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						</main>
						
                        
               
			</div>

        </div><!-- /.row -->
      </div><!-- /.container -->
  <div class="container">
	        <div class="row">
		         <div class="col-md-12">
			         <p><br></p>
		         </div>   
	        </div> 
  </div>  
 
<?php get_template_part('panel-contact'); ?> 
   
<?php get_footer(); ?>

			</div>
<?php //get_sidebar(); ?>
<?php get_footer(); ?>
