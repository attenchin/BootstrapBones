<form method="get" class="navbar-form" id="searchform" action="<?php bloginfo('url'); ?>">
		<div class="input-group add-on">
			<input type="text" name="s" id="search" class="form-control srch" placeholder="Search" value="<?php the_search_query(); ?>" />
			<div class="input-group-btn">	
			<button type="submit" class="btn btn-search"><i class="glyphicon glyphicon-search"></i></button>
			</div>
		</div>
</form>